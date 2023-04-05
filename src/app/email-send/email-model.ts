
export class Email {
    to:string;
    cc:string;
    subject:string;
    message:string;

    constructor(to: string , cc: string , subject: string , message: string)
    {
        this.to=to;
        this.cc=cc;
        this.subject=subject;
        this.message=message;
    }
   
    

}