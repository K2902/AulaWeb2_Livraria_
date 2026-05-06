import { Expose, Transform } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { autoresTabela } from 'src/db/schemas/autores';

export class CriarAutorDto {
  @IsString({ message: 'O nome deve ser uma string' })
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  @MinLength(3, { message: 'O nome deve ter pelo menos 3 caracteres' })
  @MaxLength(100, { message: 'O nome deve ter no máximo 100 caracteres' })
  @Transform(({ value }) => value.trim()) //remove espaços em branco do nome
  @Expose({ name: 'nome_autor' }) //expoe o nome para o front-end com o nome nome_autor
  @Matches(/^[a-zA-Z\s]+$/, {
    message: 'O nome deve conter apenas letras e espaços',
  }) //expressão regular para validar o nome
  nome: string;

  @IsEmail({}, { message: 'O email deve ser um email válido' })
  @IsNotEmpty({ message: 'O email é obrigatório' })
  @Transform(({ value }) => value.trim().toLowerCase()) //remove espaços em branco e converte para minúsculas
  @Expose({ name: 'email_autor' }) //expoe o email para o front-end com o nome email_autor
  @Matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
    message: 'O email deve ser um email válido',
  }) //expressão regular para validar o email
  email: string;
}

export class AtualizarAutorDto {
  nome?: string;
  email?: string;
  ativo?: boolean;
}
