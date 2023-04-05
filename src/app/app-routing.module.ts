import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailSendComponent } from './email-send/email-send.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
  path:"sendemail",
  pathMatch:"full",
  component:EmailSendComponent
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
