import { Product } from 'src/app/core/model/product';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/core/services/product/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(
    private as: ProductService,
    private router:Router,
    private fb: FormBuilder,
    private ar:ActivatedRoute
  ) {

    this.formForm = this.fb.group({
      id: '',
      name: [{value: '',disabled: false}, [Validators.required]],
      imageUrl:[{value: '',disabled:false}, [Validators.required]],
      department:[{value: '',disabled:false}, [Validators.required]],
      price:[{value: '',disabled:false}, [Validators.required]],
      comment:[{value: '',disabled:false}, [Validators.required]]
    })
    this.ar.data.subscribe((product) => {
      if(product.product){
        this.formForm.patchValue(product.product)
      }
    })
  }

  formForm:FormGroup = new FormGroup({})
  product: Product[] = [];

  ngOnInit(): void {
  }

  goToList(){
    this.router.navigate(['..'],{relativeTo:this.ar});
  }

  inSubmit(){
    if(this.formForm.valid){
      this.as.upsertProduct(this.formForm.value).subscribe(() => {this.goToList()})
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

