import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateServerComponent } from './create-server/create-server.component';
import { CreateServertypeComponent } from './create-servertype/create-servertype.component';
import { HomeComponent } from './home/home.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { ServerDisplayComponent } from './server-display/server-display.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'server', component: ServerDisplayComponent},
  { path: 'createNew', component: CreateServerComponent },
  { path: 'newServerType', component: CreateServertypeComponent },
  { path: '**', component: PathNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
