import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Address } from '../../model/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  constructor(private http:HttpClient) { }

  getAllAddress(){
    return this.http.get<Address[]>("https://go-dev-frontend.herokuapp.com/api/addresses")
  }
  upsertAddress(address:Address) {
    console.log(address.id+" é um começo")
    if(address.id){
      return console.log(" caiu no put"), this.http.put(
        `https://go-dev-frontend.herokuapp.com/api/addresses/${address.id}`, address);
    }else{
      return console.log(" caiu no post"), this.http.post(
        'https://go-dev-frontend.herokuapp.com/api/addresses/', address);
    }
  }

  deleteAdress(id){
    return this.http.delete(`https://go-dev-frontend.herokuapp.com/api/addresses/${id}`)
  }

  editAdress(address){
    return this.http.put("https://go-dev-frontend.herokuapp.com/api/addresses/", address)
  }

  getAddressById(id: number){
    return this.http.get<Address>(
      `https://go-dev-frontend.herokuapp.com/api/addresses/${id}`
    );
  }
}
