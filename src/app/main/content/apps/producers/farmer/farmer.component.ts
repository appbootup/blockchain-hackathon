import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FarmerService } from './farmer.service';
import { fuseAnimations } from '../../../../../core/animations';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';
import { Subscription } from 'rxjs/Subscription';
import { Farmer } from './farmer.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FuseUtils } from '../../../../../core/fuseUtils';
import { MatSnackBar } from '@angular/material';
import { Location } from '@angular/common';

@Component({
  selector: 'fuse-e-commerce-product',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class FarmerComponent implements OnInit, OnDestroy {
  farmer = new Farmer();
  onFarmerChanged: Subscription;
  pageType: string;
  farmerForm: FormGroup;

  constructor(
    private farmerService: FarmerService,
    private formBuilder: FormBuilder,
    public snackBar: MatSnackBar,
    private location: Location
  ) {

  }

  ngOnInit() {
    // Subscribe to update product on changes
    this.onFarmerChanged =
      this.farmerService.onFarmerChanged
        .subscribe(farmer => {

          if (farmer) {
            this.farmer = new Farmer(farmer);
            this.pageType = 'edit';
          }
          else {
            this.pageType = 'new';
            this.farmer = new Farmer();
          }

          this.farmerForm = this.createFarmerForm();
        });

  }

  createFarmerForm() {
    return this.formBuilder.group({
      id: [this.farmer.id],
      firstName: [this.farmer.firstName],
      lastName: [this.farmer.lastName],
      address: [this.farmer.address],
      idProof: [this.farmer.idProof],
      idNumber: [this.farmer.idNumber],
      timestamp: [this.farmer.timestamp],
      images: [this.farmer.images]
    });
  }

  saveFarmer() {
    const data = this.farmerForm.getRawValue();
    // data.handle = FuseUtils.handleize(data.name);
    this.farmerService.saveFarmer(data)
      .then(() => {

        // Trigger the subscription with new data
        this.farmerService.onFarmerChanged.next(data);

        // Show the success message
        this.snackBar.open('Farmer details saved', 'OK', {
          verticalPosition: 'top',
          duration: 2000
        });
      });
  }

  addFarmer() {
    const data = this.farmerForm.getRawValue();
    // data.handle = FuseUtils.handleize(data.name);
    data.images = [];
    this.farmerService.addFarmer(data)
      .then(() => {

        // Trigger the subscription with new data
        this.farmerService.onFarmerChanged.next(data);

        // Show the success message
        this.snackBar.open('Farmer details added', 'OK', {
          verticalPosition: 'top',
          duration: 2000
        });

        // Change the location with new one
        this.location.go('apps/producers/farmers/' + this.farmer.id);
      });
  }

  ngOnDestroy() {
    this.onFarmerChanged.unsubscribe();
  }
}
