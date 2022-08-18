
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/model/product';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    private router:Router,
    private as: ProductService,
    private ar:ActivatedRoute
  ) {}

  formProduct:FormGroup = new FormGroup({})
    product: Product[] = [];

  ngOnInit():void{
    this.findProduct();
  }

  findProduct(){
    this.as.getAllProduct().subscribe((product) => {
      this.product=product;
    })
  }

  goToForm(){
    this.router.navigate(['register'],{relativeTo:this.ar})
  }

  goToHome(){
    this.router.navigate(['']);
  }

  goDelete(id){
    this.as.deleteProduct(id).subscribe(() => {this.findProduct()})
  }

  editProduct(id: number){
    this.router.navigate([id],{
      relativeTo: this.ar
    })
  }
}
