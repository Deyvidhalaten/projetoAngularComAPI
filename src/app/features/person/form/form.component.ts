import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from 'src/app/core/model/pessoa';
import { PessoaService } from 'src/app/core/services/person/person.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(
    private as: PessoaService,
    private router:Router,
    private fb: FormBuilder,
    private ar:ActivatedRoute
  ) {
    this.formForm = this.fb.group({
      id:'',
      name: [{value: '',disabled: false}, [Validators.required]],
      age: [{value: '',disabled: false}, [Validators.required,Validators.min(18),Validators.max(80)]],
      email: [{value: '',disabled: false}, [Validators.required,Validators.email]],
      phone: [{value: '',disabled: false}, [Validators.required,Validators.minLength(4)]]
    })

    this.ar.data.subscribe((person) => {
      if(person.pessoa){
        this.formForm.patchValue(person.pessoa)
      }
    })
  }

  formForm:FormGroup = new FormGroup({})
  pessoa: Pessoa[] = [];

  ngOnInit(): void {
  }

  goToList(){
    this.router.navigate(['..'],{relativeTo:this.ar});
  }

  inSubmit(){
    if(this.formForm.valid){
      this.as.upsertPessoa(this.formForm.value).subscribe(() => {this.goToList()})
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
