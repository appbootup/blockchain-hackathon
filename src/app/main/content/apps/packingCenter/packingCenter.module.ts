import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SharedModule } from '../../../../core/modules/shared.module';
import { FuseWidgetModule } from '../../../../core/components/widget/widget.module';
import { IncomingComponent } from './incoming/incoming.component';
import { IncomingService } from './incoming/incoming.service';
import { IncomingItemComponent } from './incomingItem/incomingItem.component';
import { IncomingItemService } from './incomingItem/incomingItem.service';
import { OutgoingComponent } from './outgoing/outgoing.component';
import { OutgoingService } from './outgoing/outgoing.service';
import { OutgoingItemComponent } from './outgoingItem/outgoingItem.component';
import { OutgoingItemService } from './outgoingItem/outgoingItem.service';
import { AgmCoreModule } from '@agm/core';

const routes: Routes = [
  {
    path: 'incoming',
    component: IncomingComponent,
    resolve: {
      data: IncomingService
    }
  },
  {
    path: 'incomingItem/:id',
    component: IncomingItemComponent,
    resolve: {
      data: IncomingItemService
    }
  },
  {
    path: 'outgoing',
    component: OutgoingComponent,
    resolve: {
      data: OutgoingService
    }
  },
  {
    path: 'outgoingItem/:id',
    component: OutgoingItemComponent,
    resolve: {
      data: OutgoingItemService
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
    IncomingComponent,
    IncomingItemComponent,
    OutgoingComponent,
    OutgoingItemComponent
  ],
  providers: [
    IncomingService,
    IncomingItemService,
    OutgoingService,
    OutgoingItemService
  ]
})
export class PackingCenterModule {
}
