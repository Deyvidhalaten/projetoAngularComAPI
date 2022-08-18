import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pessoa } from '../../model/pessoa';

@Injectable({
  providedIn: 'root',
})
export class PessoaService {
  constructor(private http: HttpClient) {}

  getAllPessoa() {
    return this.http.get<Pessoa[]>(
      'https://go-dev-frontend.herokuapp.com/api/people'
    );
  }
  upsertPessoa(pessoa: Pessoa) {
    if(pessoa.id){
      return this.http.put(
        `https://go-dev-frontend.herokuapp.com/api/people/${pessoa.id}`, pessoa);
    }else{
      return this.http.post(
        'https://go-dev-frontend.herokuapp.com/api/people/', pessoa);
    }

  }
  deletePessoa(id) {
    return this.http.delete(
      `https://go-dev-frontend.herokuapp.com/api/people/${id}`
    );
  }

  getPersonById(id: number) {
    return this.http.get<Pessoa>(
      `https://go-dev-frontend.herokuapp.com/api/people/${id}`
    );
  }
}
