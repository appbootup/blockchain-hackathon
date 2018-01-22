import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SharedModule } from '../../../../core/modules/shared.module';
import { FuseWidgetModule } from '../../../../core/components/widget/widget.module';
import { TrackerComponent } from './track/tracker.component';
import { TrackerService } from './track/tracker.service';
import { AgmCoreModule } from '@agm/core';

const routes: Routes = [
  {
    path: 'track',
    component: TrackerComponent,
    resolve: {
      data: TrackerService
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
    TrackerComponent,
  ],
  providers: [
    TrackerService,
  ]
})
export class TrackerModule {
}
