import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty({
    message: 'El nombre de usuario es obligatorio y no debe estar vacío',
  })
  @IsString({ message: 'El nombre de usuario debe ser una cadena de texto' })
  @MinLength(1, {
    message: 'El nombre de usuario debe tener al menos 1 carácter',
  })
  username: string;

  @IsNotEmpty({
    message: 'El correo electrónico es obligatorio y no debe estar vacío',
  })
  @IsEmail()
  email: string;

  @IsNotEmpty({
    message: 'La contraseña es obligatoria y no debe estar vacía',
  })
  @IsString({ message: 'La contraseña debe ser una cadena de texto' })
  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
  @Transform(({ value }) => value.trim())
  password: string;
}
