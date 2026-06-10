import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { LivrosRepository } from './livros.repository';
import { CriarLivroDto } from './livros.dto';
import { AutoresService } from '../autores/autores.service';

@Injectable()
export class LivrosService {
  constructor(
    private readonly livrosRepository: LivrosRepository,
    private readonly AutoresService: AutoresService,
  ) {}

  async listarLivros() {
    return await this.livrosRepository.listarLivros();
  }

  async criarLivro(bodyRequest: CriarLivroDto) {
    await this.AutoresService.listarAutor(bodyRequest.id_autor);
    return await this.livrosRepository.criarLivro(bodyRequest);
  }

  async listarLivro(id: number) {
    const livroEncontrado = await this.livrosRepository.listarLivro(id);
    //if (!livroEncontrado) <-- desta forma ele mostra um array vazio
    if (!livroEncontrado) {
      throw new NotFoundException(`Livro com id ${id} não encontrado.`);
    }
    return livroEncontrado;
  }
  
  async listarLivrosComAutor() {
    return await this.livrosRepository.listarLivrosComAutor();
  }

  // async atualizarLivro(idLivro: number, bodyRequest: AtualizarLivroDto) {
  //   await this.listarLivro(idLivro);

  //   return this.livrosRepository.atualizarLivro(idLivro, bodyRequest);
  // }

  async deletarLivro(idLivro: number) {
    await this.listarLivro(idLivro);
    return this.livrosRepository.deletarLivro(idLivro);
  }
}
