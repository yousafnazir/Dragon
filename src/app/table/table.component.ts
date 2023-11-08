import { Component } from '@angular/core';
import { GetDataService } from '../services/get-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  Data:any 
  id:any
   constructor(private DataService:GetDataService, private route:ActivatedRoute) {
    this.id=this.route.snapshot.paramMap.get('id');
    DataService.getOneDragon(this.id).subscribe((data)=>{ 
      this.Data=data
      console.warn(this.Data)
    }) 
}




}