import { PessoaService } from './../../../core/services/person/person.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from 'src/app/core/model/pessoa';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    private router:Router,
      private as: PessoaService,
      private ar:ActivatedRoute
  ) { }


  formPessoa:FormGroup = new FormGroup({})
      pessoas: Pessoa[] = [];

ngOnInit():void{
  this.findPessoas();
}


findPessoas(){
  this.as.getAllPessoa().subscribe((pessoas) => {
    this.pessoas=pessoas;
  })
}

goDelete(id){
  this.as.deletePessoa(id).subscribe(() => {this.findPessoas()})
}

goToForm(){
  this.router.navigate(['register'],{relativeTo:this.ar})
}

goToHome(){
  this.router.navigate(['']);
}

goEdit(id: number){
  this.router.navigate([id], {
    relativeTo: this.ar
  })
}

}
