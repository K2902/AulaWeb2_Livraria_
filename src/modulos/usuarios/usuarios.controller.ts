import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CriarUsuarioDto } from './usuarios.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}
  
  @Post('criar-usuario')
  async criarUsuario(@Body() bodyRequest: CriarUsuarioDto){
    return await this.usuariosService.criarUsuario(bodyRequest)
  }

}  