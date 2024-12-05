# Documentação Detalhada do Projeto de Aplicação Web de Conversa com GPT-4

## Introdução

Este projeto é uma aplicação web de conversa que utiliza a API GPT-4 para gerar respostas inteligentes e contextuais. O backend é desenvolvido em NodeJS e Express, seguindo uma organização modularizada dentro da pasta `src`. A estrutura inclui os seguintes diretórios:

- `controllers`: Gerencia a lógica de interação com a API GPT-4.
- `routes`: Define as rotas da aplicação para manipular as requisições do cliente.
- `openai.js`: Contém a classe de configuração da API OpenAI e métodos para interagir com a API.
- `inputPrompt.js`: Classe para encapsular a entrada do usuário.
- `server.js`: Arquivo principal que inicializa o servidor Express.
- `app.js`: Configuração principal da aplicação.

## Configuração do Ambiente

### Requisitos do Sistema

- Node.js (versão 14.x ou superior)
- npm (Node Package Manager)

### Instalação de Dependências

Certifique-se de ter o Node.js e o npm instalados em seu sistema. Você pode baixar e instalar o Node.js a partir do [site oficial](https://nodejs.org/).

Após instalar o Node.js, execute o seguinte comando na raiz do projeto para instalar as dependências:

```bash
npm install express eslint openai
```

## Configuração da API OpenAI

1. Crie uma conta na [OpenAI](https://beta.openai.com/signup/) e obtenha suas credenciais de API.

2. No arquivo `openai.js`, substitua as variáveis de ambiente `process.env.OPENAI_API_KEY` pela sua chave de API.

```javascript
const openAIConfiguration = require('./openai');

const openaiAPI = openAIConfiguration.configuration();
```

## Executando a Aplicação

Após configurar o ambiente e a API OpenAI, inicie a aplicação com o seguinte comando:

```bash
npm start
```

O servidor estará disponível em `http://localhost:3000` por padrão.

## Rotas da Aplicação

A aplicação possui as seguintes rotas:

- `GET /`: Página inicial da aplicação.
- `POST /api/chat`: Rota para enviar mensagens e receber respostas do GPT-4.

## Exemplo de Uso

Para interagir com a aplicação, utilize uma ferramenta como o [Postman](https://www.postman.com/) ou faça requisições diretamente por meio de scripts em sua aplicação front-end.

### Exemplo de Requisição POST usando cURL:

```bash
curl -X POST \
  http://localhost:3000/api/chat \
  -H 'Content-Type: application/json' \
  -d '{"message": "Olá, GPT-4!"}'
```

### Exemplo de Resposta:

```json
{
  "success": true,
  "data": "Olá! Como posso ajudar você hoje?"
}
```

Este projeto serve como uma base para desenvolver uma aplicação de conversa com GPT-4, com lógica centralizada no arquivo `prompt-controller.js`. Consulte a documentação da [OpenAI](https://beta.openai.com/docs/) para mais detalhes sobre a integração com a API GPT-4.