# JobTrack

Sistema web para facilitar o processo de candidatura a vagas de emprego, conectando candidatos e empresas em uma única plataforma.

⚠️ Status: Desenvolvimento em andamento (início em 19/06 e prazo estipulado para 10/07, totalizando 21 dias)

## Sobre o projeto

O JobTrack foi criado com o objetivo de simplificar o gerenciamento de vagas e candidaturas. Para o projeto, consideramos utilizar conceitos de MVC, CRUD, APIs. A finalidade do projeto é para fins de aprendizado prático sobre tecnologias mais demandadas no mercado de desenvolvimento atual.

## Tecnologias utilizadas

### Front-end

* React
* Tailwind CSS

### Back-end

* C#
* ASP.NET
* JWT (Autenticação)
* PostgreSQL

## Funcionalidades

### Usuário

* [ ] Cadastro e login
* [ ] Autenticação com JWT
* [ ] Pesquisa de vagas
* [ ] Visualização de detalhes da vaga
* [ ] Candidatura em vagas

### Empresa

* [ ] Cadastro e login
* [ ] Criação de vagas
* [ ] Edição de vagas
* [ ] Exclusão de vagas
* [ ] Gerenciamento de candidaturas

## Arquitetura e responsabilidades

### Back-end - Victor Hugo

* Desenvolvimento da API em ASP.NET
* Implementação da autenticação com JWT
* Integração com PostgreSQL
* Regras de negócio e gerenciamento de vagas

### Front-end - João Aquino

* Desenvolvimento da interface com React
* Integração com a API
* Experiência do usuário e responsividade

## Como executar o projeto

### Front-end

```bash
npm install
npm run dev
```

### Back-end

```bash
dotnet restore
dotnet run
```

## Objetivo

Desenvolver uma plataforma simples e organizada para aproximar empresas e candidatos durante o processo de recrutamento.

## Próximas implementações

* [ ] Filtro avançado de vagas
* [ ] Perfil do candidato
* [ ] Upload de currículo
* [ ] Dashboard para empresas
* [ ] Melhorias de segurança e desempenho
