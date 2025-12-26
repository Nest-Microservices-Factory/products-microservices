import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsPositive } from 'class-validator';

export class PaginationDto {
  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  @IsOptional()
  page: number = 1;

  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  @IsOptional()
  limit: number = 10;
}
