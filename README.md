# Aplicação Web de Conversa com GPT-4 

OBS: A configuração do backend está feita, o front ainda está em desenvolvimento, por isso só é possível testar no terminal e console.

Esta aplicação web utiliza a API GPT-4 para criar uma experiência de conversa inteligente e contextual. O backend é desenvolvido em NodeJS e Express, e a estrutura do projeto segue uma organização modularizada dentro da pasta `src`. A aplicação inclui os seguintes diretórios:

- `controllers`: Gerencia a lógica de interação com a API GPT-4.
- `routes`: Define as rotas da aplicação para manipular as requisições do cliente.
- `openai.js`: Contém a classe de configuração da API OpenAI e métodos para interagir com a API.
- `inputPrompt.js`: Classe para encapsular a entrada do usuário.
- `server.js`: Arquivo principal que inicializa o servidor Express.
- `app.js`: Configuração do express para rodar o cors, routes e o dotenv da aplicação.

## Configuração do Ambiente

### Requisitos do Sistema

- Node.js (versão 14.x ou superior)
- npm (Node Package Manager)

### Instalação de Dependências

Certifique-se de ter o Node.js e o npm instalados em seu sistema. Você pode baixar e instalar o Node.js a partir do [site oficial](https://nodejs.org/).

Após instalar o Node.js, execute o seguinte comando na raiz do projeto para instalar as dependências:

```bash
npm install express eslint openai cors
```

## Configuração da API OpenAI

1. Crie uma conta na [OpenAI](https://beta.openai.com/signup/) e obtenha suas credenciais de API.

2. Substitua as variáveis de ambiente `process.env.OPENAI_API_KEY` pela sua chave de API.

 O código que recebe está no arquivo openai.js:

```javascript
static configuration() { 
    const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
    })
    return new OpenAIApi(configuration);
  }
```

## Executando a Aplicação

Após configurar o ambiente e a chave da sua OpenAI, inicie a aplicação com o seguinte comando dentro da pasta src:

```bash
node server
```

Aparecerá a mensagem no terminal como "servidor na porta: 5555".


