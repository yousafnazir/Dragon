import { Component } from '@angular/core';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Data:any=[] 
   constructor(private DataService:GetDataService) {
    DataService.getAllDragon().subscribe((data)=>{ 
      this.Data=data
      console.warn(this.Data)

    }) 
}
}