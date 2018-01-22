import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class FarmerService implements Resolve<any>
{
  routeParams: any;
  farmer: any;
  onFarmerChanged: BehaviorSubject<any> = new BehaviorSubject({});

  constructor(
    private http: HttpClient
  ) {
  }

  /**
   * Resolve
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    this.routeParams = route.params;

    return new Promise((resolve, reject) => {

      Promise.all([
        this.getFarmer()
      ]).then(
        () => {
          resolve();
        },
        reject
        );
    });
  }

  getFarmer(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.routeParams.id === 'new') {
        this.onFarmerChanged.next(false);
        resolve(false);
      }
      else {
        this.http.get('api/producers-farmers/' + this.routeParams.id)
          .subscribe((response: any) => {
            this.farmer = response;
            this.onFarmerChanged.next(this.farmer);
            resolve(response);
          }, reject);
      }
    });
  }

  saveFarmer(farmer) {
    return new Promise((resolve, reject) => {
      this.http.post('api/producers-farmers/' + farmer.id, farmer)
        .subscribe((response: any) => {
          resolve(response);
        }, reject);
    });
  }

  addFarmer(farmer) {
    return new Promise((resolve, reject) => {
      this.http.post('api/producers-farmers/', farmer)
        .subscribe((response: any) => {
          resolve(response);
        }, reject);
    });
  }
}
