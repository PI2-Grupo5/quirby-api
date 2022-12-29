# quirby-api

```$ docker run -it -e "POSTGRES_HOST_AUTH_METHOD=trust" -p 5432:5432 postgres```

Para criação das tabelas basta rodar o comando abaixo.

```$ npm run migrate```

Para rodar a aplicação basta rodar o comando abaixo.

```$ npm run pm2```

A aplicação deve estar rodando no http://localhost:3000/persons/all

Para rodar os testes das aplicação basta rodar o comando abaixo.

```$ npm run test```