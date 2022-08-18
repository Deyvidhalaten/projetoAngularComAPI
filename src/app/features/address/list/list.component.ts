import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from 'src/app/core/services/address/address.service';
import { FormGroup } from '@angular/forms';
import { Address } from 'src/app/core/model/address';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(

    private router:Router,
    private as: AddressService,
    private ar:ActivatedRoute

  ) { }

  formAnimal:FormGroup = new FormGroup({})
  addresses: Address[] = [];

  ngOnInit():void{
    this.findAddress();
  }

  findAddress(){
    this.as.getAllAddress().subscribe((address) => {
      this.addresses=address;
    })
  }

  goToForm(){
    this.router.navigate(['register'],{relativeTo:this.ar})
  }
  goToHome(){
    this.router.navigate(['']);
  }

  goDelete(id){
    this.as.deleteAdress(id).subscribe(() => {this.findAddress()})
  }

  editAddress(id: number){
    this.router.navigate([id],{
      relativeTo: this.ar
    })
  }

}
