import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateEpisodioDto {
  @IsString({ message: 'El título debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'El titulo es obligatorio y no debe estar vacío' })
  titulo: string;

  @Type(() => Number)
  //Esto porque la duracion en minutos no siempre es un entero exacto puede ser 45.5 minutos por ejemplo
  @IsNumber({}, { message: 'La duración debe ser un número en minutos' })
  @IsPositive({ message: 'La duración debe ser un número positivo' })
  @IsNotEmpty({ message: 'La duración es obligatoria y no debe estar vacía' })
  duracion: number;

  @Type(() => Number)
  //Esto porque pueden existir episodios intermedios que no tengan un numero entero como tal digamos unn episodio 8.5 que es un especial que va entre el 8 y el 9
  @IsNumber({}, { message: 'El número de capítulo debe ser un número' })
  @IsPositive({ message: 'El número de capítulo debe ser un número positivo' })
  @IsNotEmpty({
    message: 'El número de capítulo es obligatorio y no debe estar vacío',
  })
  numeroCapitulo: number;

  @IsString({
    message:
      'El titulo de la serie a la que pertenece el episodio debe ser una cadena de texto',
  })
  @IsNotEmpty({
    message: 'El título de la serie es obligatorio y no debe estar vacío',
  })
  serieTitulo: string;
}
