import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DangerComponent } from './danger/danger.component';
import { InfoComponent } from './info/info.component';
import { SuccessComponent } from './success/success.component';
import { WarningComponent } from './warning/warning.component';

@NgModule({
  declarations: [
    AppComponent,
    DangerComponent,
    InfoComponent,
    SuccessComponent,
    WarningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
