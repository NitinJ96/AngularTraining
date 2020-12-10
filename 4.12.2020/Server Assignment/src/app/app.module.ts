import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateServerComponent } from './create-server/create-server.component';
import { ServerDataService } from 'src/services/server-data.service';
import { FormsModule } from '@angular/forms';
import { ServerDisplayComponent } from './server-display/server-display.component';
import { HomeComponent } from './home/home.component';
import { EditServerDataComponent } from './edit-server-data/edit-server-data.component';
import { CreateServertypeComponent } from './create-servertype/create-servertype.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateServerComponent,
    ServerDisplayComponent,
    HomeComponent,
    EditServerDataComponent,
    CreateServertypeComponent,
    PathNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServerDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
