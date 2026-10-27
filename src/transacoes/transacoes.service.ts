import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transacao } from './transacoes.schema';

@Injectable()
export class TransacoesService {
  constructor(
    @InjectModel(Transacao.name)
    private transacaoModel: Model<Transacao>,
  ) {}

  async create(data: Partial<Transacao>) {
    return this.transacaoModel.create(data);
  }

  async findAll() {
    const transacoes = await this.transacaoModel.find();
    const totalDespesas = transacoes
      .filter((transacao) => transacao.tipo === 'despesa')
      .reduce((total, transacao) => total + transacao.valor, 0);
    const totalReceitas = transacoes
      .filter((transacao) => transacao.tipo === 'receita')
      .reduce((total, transacao) => total + transacao.valor, 0);

    const saldoTotal = totalReceitas - totalDespesas;

    const totalGastoImpulso = transacoes
      .filter(
        (transacao) =>
          transacao.tipo === 'despesa' && transacao.consumoConsciente === false,
      )
      .reduce((total, transacao) => total + transacao.valor, 0);

    return {
      historico: transacoes,
      metricas: {
        saldoTotal,
        totalDespesas,
        totalGastoImpulso,
      },
    };
  }
}
