import { NgModule } from '@angular/core';

import { SessionManagerService } from './session-manager/session-manager.service';
import { NetworkLayerService } from './network/network-layer.service';

@NgModule({
  imports: [
  ],
  declarations: [],
  providers: [
    SessionManagerService,
    NetworkLayerService
  ]
})
export class ServicesModule { }
