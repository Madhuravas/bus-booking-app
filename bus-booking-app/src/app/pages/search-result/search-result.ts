import { Component, inject, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SearchData, IBusSchedule} from "../../model/model";
import {SearchService} from "../../service/search"

@Component({
  selector: 'app-search-result',
  imports: [],
  templateUrl: './search-result.html',
  styleUrl: './search-result.css',
})
export class SearchResult {
  activatedRoute = inject(ActivatedRoute);
  searchObj: SearchData = new SearchData();
  searchService = inject(SearchService);
  busSchedules: IBusSchedule[] = [];

  constructor(){
    this.activatedRoute.params.subscribe((res:any) =>{
      this.searchObj.fromLocationId = res.fromId;
      this.searchObj.toLocationId = res.toId;
      this.searchObj.date = res.date
    })
  }

  ngOnInit(){
    this.getSearchBuses();
  }

  getSearchBuses(){
    this.searchService.searchBuses(this.searchObj.fromLocationId, this.searchObj.toLocationId, this.searchObj.date).subscribe((data:any) =>{
      this.busSchedules = data;
    })
  }
}
