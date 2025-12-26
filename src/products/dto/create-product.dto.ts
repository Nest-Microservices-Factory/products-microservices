import { Type } from 'class-transformer';
import { IsNumber, IsString, Min } from 'class-validator';

export class CreateProductDto {
  @IsString({ message: 'El nombre es obligatorio' })
  public name: string;

  @IsNumber(
    {
      maxDecimalPlaces: 4,
    },
    {
      message: 'Formato de precio incorrecto',
    },
  )
  @Min(0, { message: 'El precio debe ser mayor o igual a 0' })
  @Type(() => Number)
  public price: number;
}
