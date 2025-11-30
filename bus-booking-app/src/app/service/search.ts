import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(public http: HttpClient){

  }

  searchBuses(fromLocationId:string,toLocationId:string,date:string){
    return this.http.get("https://api.freeprojectapi.com/api/BusBooking/searchBus2?fromLocation="+fromLocationId+"&toLocation="+toLocationId+"&travelDate="+date+"")
  }
}
