import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    const body = JSON.stringify(data);
    return this.http.post<any>(url,body)
  }

  updateData(id:number, data:any): Observable<any>{
    const url= `${this.apiUrl}/Product/${id}`;
    return this.http.put<any>(url,data)
  }

  deleteData(id:number): Observable<any>{
    const url = `${this.apiUrl}/Product/${id}`;
    return this.http.delete<any>(url)
  }
}
