# Nginx com Node.js

## Desafio

<em>Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.</em>

O retorno da aplicação node.js para o nginx deverá ser:

```
<h1>Full Cycle Rocks!</h1>
- Lista de nomes cadastrada no banco de dados.
```

<em>Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

Suba tudo em um repositório e faça a entrega.

- A linguagem de programação para este desafio é `Node/JavaScript`.</em>

## Solução

Para subir os container execute:

```
docker-compose up -d --build
```

Passos para criar acesso a persistência de dados:

1 - Acesse o container da base de dados, para criar nosso database e tabela:

```
docker exec -it db bash
```

2 - Acesse o Mysql:

```
mysql -uroot -p
show databases;
use nodedb;
```

3 - Criar a tabela people:

```
create table people(id int not null auto_increment, name varchar(255), primary key(id));
```

Após realizar os passos acima, acesse a rota: `http://localhost:8080/`

![localhost:8080](/img/localhost.png)
