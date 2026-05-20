import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { DRIZZLE } from 'src/db/database/database.constants';
import { livrosTabela } from 'src/db/schemas';
import type { DrizzleDB } from 'src/db/types/drizzleDB';
import { AtualizarAutorDto, CriarAutorDto } from '../autores/autores.dto';
import { AtualizarLivroDto, CriarLivroDto } from './livros.dto';

@Injectable()
export class LivrosRepository {
  constructor(@Inject(DRIZZLE) private readonly db: DrizzleDB) {}

  async listarLivros() {
    try {
      const livros = await this.db.select().from(livrosTabela);
      return livros;
    } catch (error) {
      throw new InternalServerErrorException('Erro ao listar livros.');
    }
  }

  async listarLivro(id: number) {
    try {
      const livroEncontrado = await this.db
        .select()
        .from(livrosTabela)
        .where(eq(livrosTabela.id, id));
      return livroEncontrado[0];
    } catch (error) {
      throw new InternalServerErrorException('Erro ao listar um livro');
    }
  }

  async criarLivro(bodyRequest: CriarLivroDto) {
    try {
      await this.db.insert(livrosTabela).values({
        idAutor: bodyRequest.id_autor,
        titulo: bodyRequest.titulo,
        descricao: bodyRequest.descricao,
      });

      return `Livro ${bodyRequest.titulo} criado com sucesso`;

      // const livroCriado = await this.db.select().from(livrosTabela);
      // return livroCriado;
    } catch (error) {
      throw new InternalServerErrorException('Erro ao criar livro.');
    }
  }

  //   async atualizarLivro(id: number, bodyRequest: AtualizarAutorDto) {
  //     try {
  //       const livroAtualizado = await this.db
  //         .update(livrosTabela)
  //         .set(bodyRequest)
  //         .where(eq(livrosTabela.id, id));
  //       return `Autor atualizado com sucesso: ${livroAtualizado}`;
  //     } catch (error) {
  //       throw new InternalServerErrorException('Erro ao atualizar livro.');
  //     }
  //   }

  async deletarAutor(id: number) {
    try {
      await this.db.delete(livrosTabela).where(eq(livrosTabela.id, id));
      return `Livro deletado com sucesso: ${id}`;
    } catch (error) {
      throw new InternalServerErrorException('Erro ao deletar livro.');
    }
  }
}
