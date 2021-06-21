import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CourseComponent } from './course/course.component';
import { CommonModule } from '@angular/common';
import { VendorsdetailComponent } from './vendorsdetail/vendorsdetail.component';
import { InvalidurlComponent } from './invalidurl/invalidurl.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    VendorsdetailComponent,
    InvalidurlComponent,
    UserregistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
    { path: '', component: CourseComponent },
    { path: 'vendorsdetail/:vendorid/:categorytypeid/:cityid', component: VendorsdetailComponent },
    { path: 'userregistration', component: UserregistrationComponent },
    { path: '**', component: InvalidurlComponent }
], { relativeLinkResolution: 'legacy' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
