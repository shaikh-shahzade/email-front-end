import { Component, OnDestroy, OnInit } from '@angular/core';
import { Email } from './email-model';
import {NgForm} from '@angular/forms'
import { EmailServiceService } from '../email-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-email-send',
  templateUrl: './email-send.component.html',
  styleUrls: ['./email-send.component.css']
})
export class EmailSendComponent implements OnInit , OnDestroy {

  emailData: Email;
  mailSub:Subscription|undefined;
  constructor( private emailService:EmailServiceService , private snackBar: MatSnackBar) {
    this.emailData = new Email("","","","");
   }
  ngOnDestroy(): void {
    
    this.mailSub?.unsubscribe();
  }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm)
  {
     this.emailData=form.value;

     this.mailSub = this.emailService.sendMail(this.emailData).subscribe(
       (response) => {
         this.snackBar.open('Mail sent', 'close');
       },
       (error) => {
         console.log(error);
         this.snackBar.open('Error in sending mail', 'close');
       }
     );
  }

  resetForm(form:NgForm)
  {
    form.resetForm();
    this.mailSub?.unsubscribe();
    this.emailData=form.value;
  }

}
