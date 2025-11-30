export class SearchData{
    fromLocationId: string;
    toLocationId: string;
    date: string;

    constructor() {
        this.fromLocationId = "";
        this.toLocationId = "";
        this.date = "";
    }
}

export interface IBusSchedule {
  availableSeats: number;
  totalSeats: number;
  price: number;
  arrivalTime: string;
  scheduleId: number;
  departureTime: string;
  busName: string;
  busVehicleNo: string;
  fromLocationName: string;
  toLocationName: string;
  vendorName: string;
  scheduleDate: string;
  vendorId: number;
}