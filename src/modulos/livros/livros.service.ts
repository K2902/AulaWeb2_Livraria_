import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { LivrosRepository } from './livros.repository';

@Injectable()
export class LivrosService {
  constructor(private readonly livrosRepository: LivrosRepository) {}

  async listarLivros() {
    return await this.livrosRepository.listarLivros();
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
