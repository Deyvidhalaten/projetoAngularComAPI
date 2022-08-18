
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from 'src/app/core/model/animal';
import { AnimalService } from 'src/app/core/services/animal/animal.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(
    private as: AnimalService,
    private router:Router,
    private fb: FormBuilder,
    private ar:ActivatedRoute
  ) {
    this.formForm = this.fb.group({
      id: '',
      identification: [{value: '',disabled: false}, [Validators.required]],
      specie:[{value: '',disabled:false}, [Validators.required]]
    })
    this.ar.data.subscribe((animal) => {
      if(animal.animal){
        this.formForm.patchValue(animal.animal)
      }
    })
  }

  formForm:FormGroup = new FormGroup({})
  animals: Animal[] = [];

  ngOnInit(): void {
  }

  goToList(){
    this.router.navigate(['..'],{relativeTo:this.ar});
  }

  inSubmit(){
    if(this.formForm.valid){
      this.as.upsertAnimal(this.formForm.value).subscribe(() => {this.goToList()})
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
