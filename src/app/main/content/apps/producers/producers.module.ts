import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SharedModule } from '../../../../core/modules/shared.module';
import { FuseWidgetModule } from '../../../../core/components/widget/widget.module';
import { FarmersComponent } from './farmers/farmers.component';
import { FarmersService } from './farmers/farmers.service';
import { FarmerComponent } from './farmer/farmer.component';
import { FarmerService } from './farmer/farmer.service';
import { AgmCoreModule } from '@agm/core';

const routes: Routes = [
  {
    path: 'farmers',
    component: FarmersComponent,
    resolve: {
      data: FarmersService
    }
  },
  {
    path: 'farmers/:id',
    component: FarmerComponent,
    resolve: {
      data: FarmerService
    }
  },
  {
    path: 'farmers/:id/:handle',
    component: FarmerComponent,
    resolve: {
      data: FarmerService
    }
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    FuseWidgetModule,
    NgxChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD81ecsCj4yYpcXSLFcYU97PvRsE_X8Bx8'
    })
  ],
  declarations: [
    FarmersComponent,
    FarmerComponent,
  ],
  providers: [
    FarmersService,
    FarmerService,
  ]
})
export class ProducersModule {
}
