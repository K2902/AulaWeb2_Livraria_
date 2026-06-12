import { Body, Controller, Get, Post, Param, ParseIntPipe, Delete, Put } from '@nestjs/common';
import { LivrosService } from './livros.service';
import { AtualizarLivroDto, CriarLivroDto } from './livros.dto';

@Controller('livros')
export class LivrosController {
  constructor(private readonly livrosService: LivrosService) {}

  @Get('listar-livros')
  async listarLivros() {
    return await this.livrosService.listarLivros();
  }

  @Get ('listar-livro/:id')
  async listarLivro(@Param('id', ParseIntPipe)id:number){
    return await this.livrosService.listarLivro(id);
  }

  @Get('listar-livros-com-autor')
  async listarLivrosComAutor() {
    return await this.livrosService.listarLivrosComAutor();
  }
  @Get('listar-livro-com-autor/:id')
  async listarLivroComAutor(@Param('id', ParseIntPipe)id:number){
    return await this.livrosService.listarLivroComAutor(id);
  }

  @Post('criar-livro')
  async criarLivro(@Body() bodyRequest: CriarLivroDto) {
    return await this.livrosService.criarLivro(bodyRequest);
  }

  @Put('atualizar-livro/:id')
  async atualizarLivro(@Param('id', ParseIntPipe)id:number, @Body() bodyRequest: AtualizarLivroDto){
    return await this.livrosService.atualizarLivro(id, bodyRequest);
  }

  @Delete('deletar-livro/:id')
  async deletarLivro(@Param('id', ParseIntPipe)id:number){
    return await this.livrosService.deletarLivro(id);
  }
  
}
