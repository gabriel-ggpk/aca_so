
# Aca.so

Aplicação front-end com sistema de login e cadastro, alem de uma home. A ideia da aplicação é se espelhar na plataforma da empresa Aca.so.
A API consumida pela aplicação foi cedida pela empresa.


## Funcionalidades

- Verificação e tratamento de erro de inputs no front-end
- sistema de confirmação de e-mail
- gerenciamento de credenciais e informações com localStorage (planejamentos para usar sessionStorage)
- interceptor de requests para adição automatica de tokens


## Tecnologias Utilizadas

- React
- TypeScript
- Joi
- StyledComponents
- Axios
- dayJs
- craco
## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/gabriel-ggpk/aca_so
```

Entre no diretório do projeto

```bash
  cd aca_so
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm start
```


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`BASE_URL`: `URL_DA_API`


## Arquitetura
  ### src
  A Arquitetura se baseia em uma pasta source, com arquivos globais de configuração e estilo, e dentro dela temos 4 sub-pastas

  ![Alt text](/src/assets/readme/src.png)
  ### Assets
  - pasta responsavel por nossos arquivos como imagens e vetores

  ![Alt text](/src/assets/readme/assets.png "Optional Title")

  ### Components
  - nossos componentes reutilizaveis como botões, inputs, etc.
  
  ![Alt text](/src/assets/readme/components.png "Optional Title")

  ### Core
  - toda a lógica do projeto, tirando a logica interna dos componentes React. Nessa pasta temos a logica de services, rotas e customHooks

  ![Alt text](/src/assets/readme/core.png "Optional Title")

  ### Pages
  - é aqui que iremos montar nossas paginas, importando os componentes necessarios, e os juntando com a logica de funcionamento da página.

  ![Alt text](/src/assets/readme/pages.png "Optional Title")


