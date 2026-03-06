import { Injectable } from '@nestjs/common';
import { identity } from 'rxjs';

let autores = [
  {
    id: 1,
    nome: 'João Maria',
    email: 'joaomaria@gmail.com',
  },
  {
    id: 2,
    nome: 'Juliana Silva',
    email: 'julianasilva@gmail.com',
  },
  {
    id: 3,
    nome: 'David Silva',
    email: 'davidsilva@gmail.com',
  },
];
@Injectable()
export class AutoresService {
  listarAutores() {
    //console.log("listarService");
    return autores;
    //API sempre retorna json
  }
}
/*import { Injectable } from "@nestjs/common";

@Injectable()
export class AutoresService {
    listarAutores() {
        return "Listagem de autores";
    }
}*/
