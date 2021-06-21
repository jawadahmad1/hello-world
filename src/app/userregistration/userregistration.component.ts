import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
//import { globalAgent } from 'https';
import {GlobalConstants}from 'src/app/common/global-constants'
@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})

export class UserregistrationComponent implements OnInit {
  currencytypes:any[];
  usertypes:any[];
  authlvl:any[];

  constructor(private HttpClient:HttpClient) {
    HttpClient.get(GlobalConstants.apiURL+'currencytypes')
    .subscribe(Response=> {
      
      this.currencytypes=JSON.parse(JSON.stringify(Response))
      
    })
    HttpClient.get(GlobalConstants.apiURL+'usertypes')
    .subscribe(Responsee=> {
      
      this.usertypes=JSON.parse(JSON.stringify(Responsee))
      
    })
    HttpClient.get(GlobalConstants.apiURL+'authlvls')
    .subscribe(Responsee=> {
      
      this.authlvl=JSON.parse(JSON.stringify(Responsee))
      
    })
   }
   url='https://localhost:44366/api/users';
   //url='https://shadihelperwebservice20201024181603.azurewebsites.net/api/users';
   check={
    loginName: "Jawadahmad@jawaaaadahmad.com",
    password: "uMFu3y7t1xH71hR",
    vendorID: null,
    authLvlID: 2,
    userTypeID: 1,
    currencyTypeID: 1,
    firstName: "jawad",
    lastName: "ahmad",
    gender: true,
    userDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    internalScore: 39,
    suspicious: 1
   }
   //url='https://shadihelperwebservice20201024181603.azurewebsites.net/api/users';
   submit(User){
     //console.log(JSON.stringify(User.value));
     //let LoginName={LoginName: User.value}
     User.value["VendorID"]=null;
     console.log(User.value);
     const header = new HttpHeaders()
     .set('Content-type', 'application/json');
     const body=JSON.stringify(User.value);
    //let headers = new HttpHeaders();
    //headers.append('Content-Type', 'application/json');
     this.HttpClient.post(this.url,body,{ headers: header} ).
     subscribe(result=>{
       console.log(result);
       
     });
     
   }
  ngOnInit(): void {
  }

}
class UserModel{
  loginName:string;
  password: string;
  vendorID?: string;
  authLvlID: number;
  userTypeID: number;
  currencyTypeID: number;
  firstName: string;
  lastName: string;
  gender: boolean;
  userDesc: string;
  internalScore: number;
  suspicious: number
}
