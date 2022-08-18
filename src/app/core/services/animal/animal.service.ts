
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal } from '../../model/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http:HttpClient) { }

  getAllAnimal(){
    return this.http.get<Animal[]>("https://go-dev-frontend.herokuapp.com/api/animals")
  }

  upsertAnimal(animal:Animal) {
    if(animal.id){
      return this.http.put(
        `https://go-dev-frontend.herokuapp.com/api/animals/${animal.id}`, animal);
    }else{
      return this.http.post(
        'https://go-dev-frontend.herokuapp.com/api/animals/', animal);
    }

  }

  deleteAnimal(id){
    return this.http.delete(`https://go-dev-frontend.herokuapp.com/api/animals/${id}`)
  }

  editAnimal(animal){
    return this.http.put("https://go-dev-frontend.herokuapp.com/api/animals/", animal)
  }

  getAnimalById(id: number){
    return this.http.get<Animal>(
      `https://go-dev-frontend.herokuapp.com/api/animals/${id}`
    );
  }


}
