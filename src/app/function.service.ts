import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionService {

  constructor() { }

  handleChange(event:any){
    return console.log("dalga");
  }
}
