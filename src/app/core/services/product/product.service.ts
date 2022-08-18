import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http:HttpClient) { }

  getAllProduct(){
    return this.http.get<Product[]>("https://go-dev-frontend.herokuapp.com/api/products")
  }

  upsertProduct(product:Product) {
    if(product.id){
      console.log("Caiu no Put");
      return this.http.put(
        `https://go-dev-frontend.herokuapp.com/api/products/${product.id}`, product);
    }else{
      console.log("Caiu no Post");
      alert("Opção Inativa no momento");
      return this.http.post(
        'https://go-dev-frontend.herokuapp.com/api/products/', product);
    }
  }

  deleteProduct(id){
    return this.http.delete(`https://go-dev-frontend.herokuapp.com/api/products/${id}`)
  }

  editProduct(product){
    return this.http.put("https://go-dev-frontend.herokuapp.com/api/products/", product)
  }

  getProductById(id: number){
    return this.http.get<Product>(
      `https://go-dev-frontend.herokuapp.com/api/products/${id}`
    );
  }
}
