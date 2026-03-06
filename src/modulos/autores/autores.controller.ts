import { Controller, Get } from '@nestjs/common';
import { AutoresService } from './autores.service';
// Um controller é a porta de entrada de nossa aplicação
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
}
