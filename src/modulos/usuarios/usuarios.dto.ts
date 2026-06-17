import { Transform } from 'class-transformer';
import { IsBoolean, IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class CriarUsuarioDto {
  @IsString({ message: 'O nome deve ser uma string' })
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  @MinLength(3, { message: 'O nome deve ter pelo menos 3 caracteres' })
  @MaxLength(100, { message: 'O nome deve ter no máximo 100 caracteres' })
  @Transform(({ value }) => {
    const valor = typeof value;
    if (valor === 'string') {
      return value.trim();
    }
  })
  @Matches(/^[a-zA-Z\s]+$/, {
    message: 'O nome deve conter apenas letras e espaços',
  })
  nome: string;



  @IsEmail({}, { message: 'O email deve ser um email válido' })
  @IsNotEmpty({ message: 'O email é obrigatório' })
  @MaxLength(255, { message: 'O email deve ter no máximo 255 caracteres' })
  email: string;



  @IsString({ message: 'A senha deve ser uma string' })
  @IsNotEmpty({ message: 'A senha é obrigatória' })
  @MinLength(8, { message: 'A senha deve ter pelo menos 8 caracteres' })
  @MaxLength(255, { message: 'A senha deve ter no máximo 255 caracteres' })
  @Transform(({ value }) => {
    const valor = typeof value;
    if (valor === 'string') {
      return value.trim();
    }
  })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
    message: 'A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial',
  })
  senha: string;


  
  @IsBoolean({ message: 'O ativo deve ser um booleano' })
  @IsNotEmpty({ message: 'O ativo é obrigatório' })
  ativo: boolean;
}   