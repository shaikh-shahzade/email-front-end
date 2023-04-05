import { Injectable } from '@angular/core';
import { Email } from './email-send/email-model';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  baseUrl="http://localhost:8080"
  mailURI=this.baseUrl+"/sendmail"
  httpHeaders:HttpHeaders = new HttpHeaders({"Authentication":"####"});
  
  sendMail(emailData:Email)
  {
      return this.httpClient
        .post(
          this.mailURI,
          emailData , 
          {
            headers:this.httpHeaders,
            observe:'response',
            responseType:'json'
          }
          
          )
        
  }
  constructor(private httpClient:HttpClient) { }
}
