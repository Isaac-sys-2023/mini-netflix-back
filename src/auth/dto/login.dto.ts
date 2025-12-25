import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsNotEmpty({
    message: 'El correo electrónico es obligatorio y no debe estar vacío',
  })
  @IsEmail({}, { message: 'El correo electrónico debe ser válido' })
  email: string;

  @IsString()
  @IsNotEmpty({
    message: 'La contraseña es obligatoria y no debe estar vacía',
  })
  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
  @Transform(({ value }) => value.trim())
  password: string;
}
