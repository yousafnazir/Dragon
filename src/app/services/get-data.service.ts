import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  url='https://api.spacexdata.com/v3/dragons';
  constructor(private http:HttpClient) {}
  getOneDragon(id:any) {
   return this.http.get(this.url+'/'+ id)
  }
  getAllDragon() {
  return this.http.get<any[]>(this.url)
  }
}
