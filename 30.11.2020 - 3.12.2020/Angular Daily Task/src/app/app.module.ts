import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DangerComponent } from './danger/danger.component';
import { InfoComponent } from './info/info.component';
import { SuccessComponent } from './success/success.component';
import { WarningComponent } from './warning/warning.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogDisplayComponent } from './blog-display/blog-display.component';
import { BlogComponent } from './blog/blog.component';
import { ServerCreateComponent } from './server-create/server-create.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { ServerComponent } from './server/server.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    DangerComponent,
    InfoComponent,
    SuccessComponent,
    WarningComponent,
    DatabindingComponent,
    BlogCreateComponent,
    BlogDisplayComponent,
    BlogComponent,
    ServerCreateComponent,
    ServerElementComponent,
    ServerComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
