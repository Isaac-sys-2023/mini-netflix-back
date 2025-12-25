import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSerieDto {
  @IsString({ message: 'El título debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'El título es obligatorio y no debe estar vacío' })
  titulo: string;

  @IsString({ message: 'El genero debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'El género es obligatorio y no debe estar vacío' })
  genero: string;

  @IsString({
    message: 'La sinopsis debe ser una cadena de texto',
  })
  @IsNotEmpty({ message: 'La sinopsis es obligatoria y no debe estar vacía' })
  sinopsis: string;

  @IsString({
    message: 'La url de la portada debe ser una cadena de texto de un enlace',
  })
  @IsNotEmpty({
    message: 'La URL de la portada es obligatoria y no debe estar vacía',
  })
  urlPortada: string;
}
