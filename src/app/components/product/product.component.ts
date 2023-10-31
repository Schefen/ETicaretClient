import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product={

  Name: '',
  Price: '',
  Quantity: ''
}
  constructor(private productService:DataService){}
postData(){
  this.productService.postData(this.product).subscribe(
    response =>{
      console.log(response);
    },
    error => {
      console.error(error);
    }
    );
}

}
