# Projeto Aula 7 — API de Transações Financeiras

Projeto feito para a disciplina de **Web/Mobile**

É uma API REST desenvolvida com **NestJS**, usando **MongoDB** para armazenamento das transações financeiras. É possível -- 

- Cadastrar transações financeiras
- Consultar o histórico de transações
- Identificar receitas e despesas
- Calcular o saldo total
- Calcular o total de despesas
- Calcular o total de gastos considerados impulsivos

## Estrutura principal

```text
src/
├── transacoes/
│   ├── transacoes.controller.ts
│   ├── transacoes.service.ts
│   ├── transacoes.schema.ts
│   └── transacoes.module.ts
├── app.controller.ts
├── app.module.ts
└── main.ts
```

## Endpoints

### Criar uma transação

```http
POST /transacoes
```

Exemplo de corpo da requisição:

```json
{
  "descricao": "Conta de Luz",
  "valor": 150,
  "tipo": "despesa",
  "categoria": "Moradia",
  "consumoConsciente": true
}
```

### Consultar transações

```http
GET /transacoes
```

A resposta mostra o histórico das transações e as métricas financeiras calculadas.

## Como executar o projeto

### 1. Instalar as dependências

```bash
npm install
```

### 2. Configurar o MongoDB

Configure a conexão com o MongoDB por meio das variáveis de ambiente usadas pelo projeto.

> O arquivo `.env` não tá no repositório por ter informações de conexão.

### 3. Executar a aplicação

```bash
npm run start:dev
```

A API estará disponível em:

```text
http://localhost:3000
```

Código-fonte disponível no GitHub:

https://github.com/FelipeGhensevPeres/pro
