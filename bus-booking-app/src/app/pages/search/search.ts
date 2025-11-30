import { Component, inject, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SearchData} from "../../model/model";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})

export class Search {
  http = inject(HttpClient);
  router = inject(Router);
  locations: any[] = [];
  searchObj: SearchData = new SearchData();

  ngOnInit(){
    this.getLocationsData()
  }

  getLocationsData(){
    this.http.get("https://api.freeprojectapi.com/api/BusBooking/GetBusLocations").subscribe((data:any) =>{
      this.locations = data;
      console.log(this.locations);
    })
  }

  searchBuses(){
    this.router.navigate(["search-result",this.searchObj.fromLocationId,this.searchObj.toLocationId,this.searchObj.date]);
  }

}
