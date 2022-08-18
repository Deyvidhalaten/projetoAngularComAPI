import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/core/model/address';
import { AddressService } from 'src/app/core/services/address/address.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(
    private as: AddressService,
    private router:Router,
    private fb: FormBuilder,
    private ar:ActivatedRoute
  ) {
    this.formForm = this.fb.group({
      id:'',
      city: [{value: '',disabled: false}, [Validators.required]],
      county: [{value: '',disabled: false}, [Validators.required]],
      state: [{value: '',disabled: false}, [Validators.required]],
      zipCode: [{value: '',disabled: false}, [Validators.required]]
    })


    this.ar.data.subscribe((address) => {
      if(address.address){
        this.formForm.patchValue(address.address)
      }
    })
  }

  formForm:FormGroup = new FormGroup({})
  addresses: Address[] = [];

  ngOnInit(): void {
  }

  goToList(){
    this.router.navigate(['..'],{relativeTo:this.ar});
  }

  inSubmit(){
    if(this.formForm.valid){
      this.as.upsertAddress(this.formForm.value).subscribe(() => {this.goToList()})
      console.log()
    }else{
      Swal.fire({
        title: "Dados Incompletos",
        text:"Verifique os dados informados",
        icon:"error",
        timer:5000
      })
    }
  }



  goToHome(){
    this.router.navigate([''])
  }

}

