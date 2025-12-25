import { IsString } from 'class-validator';

export class CreateSerieDto {
  @IsString({ message: 'El título debe ser una cadena de texto' })
  titulo: string;

  @IsString({ message: 'El genero debe ser una cadena de texto' })
  genero: string;

  @IsString({
    message: 'La sinopsis debe ser una cadena de texto',
  })
  sinopsis: string;

  @IsString({
    message: 'La url de la portada debe ser una cadena de texto de un enlace',
  })
  urlPortada: string;
}
