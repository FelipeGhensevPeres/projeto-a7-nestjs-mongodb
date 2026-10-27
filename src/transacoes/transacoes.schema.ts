import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Transacao {
  @Prop()
  descricao: string;

  @Prop()
  valor: number;

  @Prop()
  tipo: string;

  @Prop()
  categoria: string;

  @Prop()
  consumoConsciente: boolean;
}

export const TransacaoSchema = SchemaFactory.createForClass(Transacao);
