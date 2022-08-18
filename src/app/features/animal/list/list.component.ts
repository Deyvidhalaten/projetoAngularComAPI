import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from 'src/app/core/model/animal';
import { AnimalService } from 'src/app/core/services/animal/animal.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    constructor(
      private router:Router,
      private as: AnimalService,
      private ar:ActivatedRoute
    ) {}

    formAnimal:FormGroup = new FormGroup({})
      animals: Animal[] = [];

    ngOnInit():void{
      this.findAnimals();
    }

    findAnimals(){
      this.as.getAllAnimal().subscribe((animais) => {
        this.animals=animais;
      })
    }

    goToForm(){
      this.router.navigate(['register'],{relativeTo:this.ar})
    }

    goToHome(){
      this.router.navigate(['']);
    }

    goDelete(id){
      this.as.deleteAnimal(id).subscribe(() => {this.findAnimals()})
    }

    editAnimal(id: number){
      this.router.navigate([id],{
        relativeTo: this.ar
      })
    }
  }

