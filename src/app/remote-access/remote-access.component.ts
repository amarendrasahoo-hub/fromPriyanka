import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RemoteaccessService } from '../services/remoteaccess.service';
import { PostResponse } from '../model/post-response';

interface Application{
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-remote-access',
  templateUrl: './remote-access.component.html',
  styleUrls: ['./remote-access.component.css']
})
export class RemoteAccessComponent implements OnInit {
  deployApps: Application[] = [
    {value: 1, viewValue: 'SAP'},
    {value: 2, viewValue: 'Danaos'},
    {value: 3, viewValue: 'Afsys'}

  ];
  ddlstatus = true;
  remoteAccessForm = new FormGroup({
    accesstype: new FormControl('', Validators.required),
    citrixapps: new FormControl(''),
    ip: new FormControl('')
  });
  model = '';
  respMessage = '';
  
  constructor(private remoteaccessserviceobj : RemoteaccessService) { }

  ngOnInit() {
  }
  
  get f(){
    return this.remoteAccessForm.controls;
  }
   
  submit(){


    console.log(this.remoteAccessForm.value);
   
      var date = new Date();
     
      const remoteAccessReq = {
         reqNo: '',
         reqSrNo: 0,
         processId: 'RA',
         reqBy: 'SS004700',
         accessType: 'Citrix',
         citrixApps : "SAP AFSYS",
         vpnIp: '10.20.11.95',
         reqDate : date,
         reqTime: date.toLocaleTimeString(),
         workflowId: '',
         department : 'B&T' 
       };

       console.log(remoteAccessReq);
     
       this.remoteaccessserviceobj.postRemoteAccessReq(remoteAccessReq).
       subscribe((data: PostResponse) => { 
         const resData = data;
         console.log("success:", resData);
         this.respMessage = "Request submiited Successfully. Your request Id : " + resData.reqNo + " & Workflow Id : " + resData.workflowId;
       },
       (error: any) => {
         console.log('on error : ', error)
         this.respMessage = "Error: " + error.statusText + error.message;
        });
      }
  
  
 
  changeAccessType(e) {
    console.log(e.target.value);
    
  }

  
}