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
    if (!autores) {
      return 'Não há autores cadastrados';
    }
    //console.log("listarService");
    //API sempre retorna json
  }
  listarAutor(id: number) {
    const autorEncontrado = autores.find((autor) => autor.id === id);

    if (!autorEncontrado) {
      return 'Autor não encontrado.';
    }

    return autorEncontrado;
  }
}
/*import { Injectable } from "@nestjs/common";

@Injectable()
export class AutoresService {
    listarAutores() {
        return "Listagem de autores";
    }
}*/
