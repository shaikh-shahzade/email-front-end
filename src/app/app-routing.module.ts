import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailSendComponent } from './email-send/email-send.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
  path:"sendmail",
  pathMatch:"full",
  component:EmailSendComponent
  },
  {
    path:"home",
    pathMatch:"full",
    component:HomeComponent
  },
  {
    path:"",
    pathMatch:"full",
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
