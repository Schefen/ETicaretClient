import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  name:string = '';
  price:string = '';
  quantity:string = '';
  response: any;

  constructor(private http:HttpClient){}

  postData(){
    const url='https://localhost:7070/api/Product';
    const body= JSON.stringify({
      name: this.name,
      price: this.price,
      quantity: this.quantity
    });
    const headers= new HttpHeaders({'Content-Type':'application/json'});

    this.http.post(url,body,{headers: headers}).subscribe((res)=>{
      this.response = res;
    })
  }
}
