import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CommunicationModule } from './modules/communication/communication.module';
import { HomeModule } from './modules/home/home.module';
import { MiscComponentsModule } from './modules/misc-components/misc-components.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CommunicationModule, HomeModule, MiscComponentsModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
