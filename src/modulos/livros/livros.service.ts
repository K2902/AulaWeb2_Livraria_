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

  // async listarLivro(id: number) {
  //   const autorEncontrado = await this.autoresRepository.listarLivro(id);
  //   //if (!autorEncontrado) <-- desta forma ele mostra um array vazio
  //   if (!autorEncontrado) {
  //     throw new NotFoundException(`Autor com id ${id} não encontrado.`);
  //   }
  //   return autorEncontrado;
  // }
  // criarAutor(bodyRequest: CriarAutorDto) {
  //   return this.autoresRepository.criarAutor(bodyRequest);
  // }

  // async atualizarAutor(idAutor: number, bodyRequest: AtualizarAutorDto) {
  //   await this.listarAutor(idAutor);

  //   return this.autoresRepository.atualizarAutor(idAutor, bodyRequest);
  // }

  // async deletarAutor(idAutor: number) {
  //   await this.listarAutor(idAutor);
  //   return this.autoresRepository.deletarAutor(idAutor);
  // }
}
