# QuestionAnsweringSystem

## Sistema de perguntas e respostas

### Sobre

Esse sistema trata de um sistema de perguntas e resposta onde faz-se a pergunta, e para se responder a uma pergunta abre-se a pergunta e terá um formulário logo abaixo da pergunta para se responder, abaixo do formulário também há uma listagem de todas as respostas daquela pergunta.

Não é possível fazer *exclusão* ou *edição* das perguntas e nem das respostas.

A **paginação** foi feita totalmente em sequelize.

No sistema não foi implementado *validação* ou *tratamento* dos formulários.

### Features

- [x] Cadastro de perguntas
- [ ] Edição de perguntas
- [ ] Atualização de perguntas
- [ ] Exclusão de perguntas
- [x] Cadastro de respostas
- [ ] Edição de respostas
- [ ] Atualização de respostas
- [ ] Exclusão de respostas


### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://nodejs.org/en/), também será necessário o SGBD [MySQL](https://www.mysql.com/).

### Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [node.js](https://nodejs.org/en/)
- [express](http://expressjs.com/)
- [nodemon](https://nodemon.io/)
- [sequelize](https://sequelize.org/)
- [ejs](https://ejs.co/)
- [mysql2](https://www.npmjs.com/package/mysql2)
- [body-parser](https://www.npmjs.com/package/body-parser)

### Demonstração do projeto

Página inicial listando as perguntas onde cada uma tem um botão que direciona para ela.

![Página home](/assets/home.png)

Formulário para se fazer uma pergunta.

![Home page](/assets/question.png)

Formulário de resposta para uma pergunta.

![Formulário de pergunta](/assets/answering.png)

Paginação feito para listar as perguntas e respostas.

![Home page](/assets/pagination.png)

### Preparativos

Na sessão abaixo estão os comandos necessários para rodar o projetos em sua máquina.
Após clonar o projeto e instalar as dependências, antes de rodar o servidor, crie um banco de dados mysql com o nome de **toask**, ou acesse o diretório /database/ e o arquivo database.js e altere o nome do banco de acordo com o que você criou.
Após isso você pode rodar o servidor.

### Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/wandersonnew/-QuestionAnsweringSystem.git>

# Instale as dependências
$ npm install

# Execute a aplicação
$ nodemon index.js

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```

### Autor
---

<img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/40368246?s=400&u=a7402c2d5af1e41852d39eaf80cb2154223f80db&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Wanderson Duarte Alves</b></sub>

Graduando em Ciências da Computação, programador e fascinado por Linux.

Contato!

[![Gmail Badge](https://img.shields.io/badge/-wandersondrtlvs.new@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:wandersondrtlvs.new@gmail.com)](mailto:wandersondrtlvs.new@gmail.com)
