import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicMessagesComponent } from './pages/basic-messages/basic-messages.component';

const routes: Routes = [{ path: 'communication/basic-messages', component: BasicMessagesComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CommunicationRoutingModule {}
