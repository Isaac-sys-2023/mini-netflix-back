import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({
    message: 'El nombre de usuario es obligatorio y no debe estar vacío',
  })
  @IsString({ message: 'El nombre de usuario debe ser una cadena de texto' })
  username: string;

  @IsNotEmpty({
    message: 'El correo electrónico es obligatorio y no debe estar vacío',
  })
  @IsString({ message: 'El correo electrónico debe ser una cadena de texto' })
  email: string;

  @IsNotEmpty({
    message: 'La contraseña es obligatoria y no debe estar vacía',
  })
  @IsString({ message: 'La contraseña debe ser una cadena de texto' })
  password: string;
}
