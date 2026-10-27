import { Body, Controller, Get, Post } from '@nestjs/common';
import { TransacoesService } from './transacoes.service';
import { Transacao } from './transacoes.schema';

@Controller('transacoes')
export class TransacoesController {
  constructor(private readonly transacoesService: TransacoesService) {}

  @Post()
  create(@Body() data: Partial<Transacao>) {
    return this.transacoesService.create(data);
  }

  @Get()
  findAll() {
    return this.transacoesService.findAll();
  }
}
