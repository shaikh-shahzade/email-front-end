import { Component, OnInit } from '@angular/core';
import { Email } from './email-model';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-email-send',
  templateUrl: './email-send.component.html',
  styleUrls: ['./email-send.component.css']
})
export class EmailSendComponent implements OnInit {

  emailData: Email;
  constructor() {
    this.emailData = new Email("","","","");
   }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm)
  {
    this.emailData=form.value;
  }

  resetForm(form:NgForm)
  {
    form.resetForm();
    this.emailData=form.value;
    
  }
}
