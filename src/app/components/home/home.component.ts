import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

export class mdlProduct{
  id?:number;
  name? :string;
  price? :number;
  quantity? :number;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  data:any;
  product:mdlProduct = {
    name: "",
    price: 0,
    quantity: 0
  };
  constructor(private dataService:DataService){}

  ngOnInit() {
    this.getDataFromApi();
  }
  getDataFromApi(){
    this.dataService.getData().subscribe(
      (response) =>{
        this.data = response;
      },
      (error) => {
        console.error('Bir hata oluştu: ',error);
      }
    );
  }
  handleChange(event:any){
    if(event.target.name === "Name")  
    {
      this.product.name = event.target.value;
    }
    else if (event.target.name === "Quantity"){
      this.product.quantity = Number(event.target.value);
    }
    else if (event.target.name === "Price"){
      this.product.price = Number(event.target.value);
    }
  }
  updateData(){
    this.dataService.updateData(this.product).subscribe(
      response =>{
        console.log(response);
      },
      error => {
        console.error(error);
      }
      );
  }
  handleShowModal(productX:mdlProduct){
    this.product=productX;
  }

}
