import { Inject, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { DRIZZLE } from 'src/db/database/database.constants';
import type { DrizzleDB } from 'src/db/types/drizzleDB';
import { usuariosTabela } from 'src/db/schemas';
import { CriarUsuarioDto } from './usuarios.dto';
import { eq } from 'drizzle-orm';

@Injectable()
export class UsuariosRepository {
  constructor(@Inject(DRIZZLE) private readonly db: DrizzleDB) {}

  async criarUsuario(usuario: CriarUsuarioDto) {
    try {
      await this.db.insert(usuariosTabela).values({
        nome: usuario.nome,
        email: usuario.email,
        senhaHashed: usuario.senha,
        ativo: usuario.ativo,
      });
      return `Usuario ${usuario.nome} criado com sucesso`;
    } catch (error) {
      throw new InternalServerErrorException('Erro ao criar usuário.');
    }
  }
  async buscarUsuarioPorEmail(email: string) {
    try {
      const usuarioEncontrado = await this.db
      .select()
      .from(usuariosTabela)
      .where(eq(usuariosTabela.email, email));
      if (!usuarioEncontrado) {
        throw new NotFoundException('Usuário não encontrado.');

      }
      return usuarioEncontrado [0] ?? null;
    } catch (error) {
      throw new NotFoundException('Usuário não encontrado.');
    }
  }
  // async buscarUsuarioPorId(id: number) {
  //   try {
  //     const usuarioEncontrado = await this.db
  //     .select()
  //     .from(usuariosTabela)
  //     .where(eq(usuariosTabela.id, id));
  //     if (!usuarioEncontrado) {
  //       throw new NotFoundException('Usuário não encontrado.');
  //     }
  //     return usuarioEncontrado;
  //   } catch (error) {
  //     throw new NotFoundException('Usuário não encontrado.');
  //   }
  
}