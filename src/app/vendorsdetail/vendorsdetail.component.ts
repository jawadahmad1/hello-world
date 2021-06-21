import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalConstants } from '../common/global-constants';

@Component({
  selector: 'app-vendorsdetail',
  templateUrl: './vendorsdetail.component.html',
  styleUrls: ['./vendorsdetail.component.css']
})
export class VendorsdetailComponent implements OnInit {
  vendorid:string;
  categorytypeid:number;
  cityid:number;
  vendorDetail:any[];
  constructor(private http:HttpClient,private route : ActivatedRoute) {
    route.paramMap
    .subscribe(params=>{
      this.vendorid=params.get('vendorid');
    })
    route.paramMap
    .subscribe(paramss=>{
      this.cityid=+paramss.get('cityid');
    })
    route.paramMap
    .subscribe(params=>{
      this.categorytypeid=+params.get('categorytypeid');
    })
    http.get(GlobalConstants.apiURL+'gvdbvendorid?inputvendor='+this.vendorid+"&inputcategorytype="+this.categorytypeid+"&inputcity="+this.cityid)
    .subscribe(Response=> {
      
      this.vendorDetail=JSON.parse(JSON.stringify(Response))      
    })
    //console.log(this.vendorDetail);
    //console.log(this.cityid+" "+this.categorytypeid+" "+this.vendorid );
    //console.log('https://shadihelperwebservice20201024181603.azurewebsites.net/api/gvdbvendorid?inputvendor='+this.vendorid+"&inputcategorytype="+this.categorytypeid+"&inputcity="+this.cityid);
   }

  ngOnInit(): void {
    /*
    this.route.paramMap
    .subscribe(params=>{
      this.vendorid=params.get('vendorid');
    })
    console.log(('https://shadihelperwebservice20201024181603.azurewebsites.net/api/gvdbvendorid?inputvendor'+this.vendorid));
      this.http.get('https://shadihelperwebservice20201024181603.azurewebsites.net/api/gvdbvendorid?inputvendor='+this.vendorid)
      .subscribe(Response=> {
        
        this.vendorDetail=JSON.parse(JSON.stringify(Response))

        
      })
      console.log(this.vendorDetail[1]);
      */
  }

}
