import { NgModule } from '@angular/core';
import { SharedModule } from '../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';
// import { FuseAngularMaterialModule } from '../components/angular-material/angular-material.module';

const routes = [
    {
        path        : 'packingCenter',
        loadChildren: './packingCenter/packingCenter.module#PackingCenterModule'
    },
    {
      path        : 'producers',
      loadChildren: './producers/producers.module#ProducersModule'
  }
];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes),
        // FuseAngularMaterialModule
    ],
    declarations: []
})
export class FuseAppsModule
{
}
