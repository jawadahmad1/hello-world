import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

//import { globalAgent } from 'http';
import{GlobalConstants} from 'src/app/common/global-constants'


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  Cities:any[];
  CategoryTypes:any[];
  Cityselected:number=1;
  CategoryTypeselected:number=1;
  
  
  gvbcity:any[];
  show=false;
  coount=0;
  constructor(private HttpClient:HttpClient) {
    HttpClient.get(GlobalConstants.apiURL+'cities')
    .subscribe(Response=> {
      
      this.Cities=JSON.parse(JSON.stringify(Response))
      
    })
    HttpClient.get((GlobalConstants.apiURL)+'categorytypes')
    .subscribe(Responsee=> {
      
      this.CategoryTypes=JSON.parse(JSON.stringify(Responsee))
      
    })
   }

  ngOnInit(): void {

  }
  selectOptionCategorySelected(CategoryTypeselected:number) {

    //getted from event
    this.CategoryTypeselected=CategoryTypeselected;
    //console.log(cityID);
    //getted from binding
  }
  selectOption(cityID: number) {

    //getted from event
    this.Cityselected=cityID;
    //console.log(cityID);
    //getted from binding
  }
  selectOptioncall(cityID:number,CategoryTypeselected:number) {
    //console.log("button is clicked");
    //getted from event
    //(method) Observable<Object>.subscribe(next: null, error: (error: any) => void, complete?: () => void): Subscription (+4 overloads)
    //gvbcityandcategorytypes?inputcity=1&inputcategorytype=1
    this.HttpClient.get(GlobalConstants.apiURL+'gvbcityandcategorytypes?inputcity='+cityID+'&inputcategorytype='+CategoryTypeselected).subscribe
    ( Response=> {this.gvbcity=JSON.parse(JSON.stringify(Response))

    })
    this.show=true;
    this.coount=(this.gvbcity.length);
    //console.log("City ID is : "+cityID+" ,CategoryTypeID is : "+CategoryTypeselected);

    //getted from binding
  }
}


  
  




