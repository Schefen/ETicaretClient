import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mdlProduct } from '../components/home/home.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'https://localhost:7070/api';
  constructor(private http:HttpClient) { }

  getData(): Observable<any> {
    const url = `${this.apiUrl}/Product`;
    return this.http.get<any>(url)
  }

  postData(data:any): Observable<any>{
    const url = `${this.apiUrl}/Product`;
    return this.http.post<any>(url,data)
  }

  updateData(data:mdlProduct): Observable<any>{
    const url= `${this.apiUrl}/Product/${data.id}`;
    return this.http.put<any>(url,data)
  }

  deleteData(id:number): Observable<any>{
    const url = `${this.apiUrl}/Product/${id}`;
    return this.http.delete<any>(url)
  }
}
