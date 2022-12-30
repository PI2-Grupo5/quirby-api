# quirby-api

Para rodar a aplicação basta ter na sua máquina Docker na versão 20.10.22

e docker-compose na versão 2.14.2 .

depois de baixar o repositório basta entrar na pasta da aplicação e executar o comando: 

``` 
$ docker-compose up quirby-api
```

A aplicação deve estar rodando no http://localhost:3000

para testar se tudo está funcionando devidamente execute esse comando no terminal:

```
$ curl -w "\n" \
       -X PUT \
       -d "firstName=Bobbie&lastName=Draper" \
       localhost:3000/persons
```

Ele ira salvar uma pessoa no database da aplicação.

Para verificar se essa pessoa existe você pode acessar esse endereço http://localhost:3000/persons/all

ou esse comando no terminal:

``` 
$ curl -w "\n" localhost:3000/persons/all
```

Para rodar os testes das aplicação basta entrar dentro do container com o seguinte comando: 

```
$ docker exec -it quirby /bin/sh 
```

e executar com teste com o comando abaixo:

```
$ npm run test
```