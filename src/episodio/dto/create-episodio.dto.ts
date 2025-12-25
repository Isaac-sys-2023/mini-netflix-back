import { Type } from 'class-transformer';
import { IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateEpisodioDto {
  @IsString({ message: 'El título debe ser una cadena de texto' })
  titulo: string;

  @Type(() => Number)
  //Esto porque la duracion en minutos no siempre es un entero exacto puede ser 45.5 minutos por ejemplo
  @IsNumber({}, { message: 'La duración debe ser un número en minutos' })
  @IsPositive({ message: 'La duración debe ser un número positivo' })
  duracion: number;

  @Type(() => Number)
  //Esto porque pueden existir episodios intermedios que no tengan un numero entero como tal digamos unn episodio 8.5 que es un especial que va entre el 8 y el 9
  @IsNumber({}, { message: 'El número de capítulo debe ser un número' })
  @IsPositive({ message: 'El número de capítulo debe ser un número positivo' })
  numeroCapitulo: number;

  @IsString({
    message:
      'El nombre de la serie a la que pertenece el episodio debe ser una cadena de texto',
  })
  serie: string;
}
