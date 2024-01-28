import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor() { }
  submitData(data: any){
    console.log(data);
  }
}
