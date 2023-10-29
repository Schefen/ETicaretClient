import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  data:any;
  
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

}
