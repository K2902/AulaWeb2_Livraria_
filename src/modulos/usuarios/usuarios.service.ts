import { ConflictException, Injectable } from '@nestjs/common';
import { UsuariosRepository } from './usuarios.repository';
import * as bcrypt from 'bcrypt';
import { CriarUsuarioDto } from './usuarios.dto';

@Injectable()
export class UsuariosService {
  constructor(private readonly usuariosRepository: UsuariosRepository) {}
async buscarUsuarioPorEmail(email:string){
  return await this.usuariosRepository.buscarUsuarioPorEmail(email);
}

async criarUsuario(usuario: CriarUsuarioDto){
  // const {email, nome, senha, ativo} = usuario //desestruturação, não precisando mais passar o parâmetro
  const usuarioEncontrado = await this.buscarUsuarioPorEmail(usuario.email);
  if (usuarioEncontrado){
    throw new ConflictException('Usuário já cadastrado com este e-mail.')
  }

  const senhaHashed = await bcrypt.hash(usuario.senha, 10);
  return await this.usuariosRepository.criarUsuario({
    nome:usuario.nome
    , email:usuario.email
    , senha: senhaHashed
    , ativo: true})
  // return await this.usuariosRepository.criarUsuario({...usuario, senha: senhaHashed})
}

}