import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AutoresService } from './autores.service';
// Um controller é a porta de entrada de nossa aplicação/API
//api trata os dados e abre como queremos, jogando para o frond-end/client

//Metódos http: get, post,
//GET busca/consulta
//POST posta/envia/upload

//front-end -> controller -> service -> repository -> database
//controller oferece uma url para o front-end acessar

/*import { Controller } from "@nestjs/common";
@Controller("autores")
    export class AutoresController {

        @Get("/listarAutores")
        listarAutores(){
            return "Listagem de autores";
        }
    }*/

/*import { AutoresService } from "./autores.service";
        
        @Controller("autores")
        constructor(private readonly autoresService: AutoresService){}
            @Get
            console.log("listarController");
            return this.autoresServices.listarAutores();*/

@Controller('autores')
export class AutoresController {
  constructor(private readonly autoresService: AutoresService) {}
  @Get('/listar-autores')
  listarAutores() {
    //console.log("listarController");
    return this.autoresService.listarAutores();
  }
  @Get('/listar-autor/:id')
  listarAutor(@Param('id', ParseIntPipe) id: number) {
    return this.autoresService.listarAutor(id);
  }
}
