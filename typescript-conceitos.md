# Subindo um servidor Node.js com typescript

## Typescript
* Linguagem Open Source da Microsoft
* Superset do Javascript - funcionalidades extras
* Tipagem estática - Não permite alterar tipo da variável depois de declarada

## Porque usar Typescript?
Maior controle do que passa como parâmetro e do que recebe.

No javascript:

```js
const user = { 
    name: "Donatello", 
    username: "donatello.dog",
    document: "333333333"
}
user.document = 2121212
```
No typescript o tipo da váriável precisa ser declarada e não permite modificação de tipo depois de ela ter sido declarada.

Mesmo código no Typescript:

```ts
class User {
    name: string;
    username: string;
    document: string;
}

const user: User = {
    name: "Donatello", 
    username: "donatello.dog",
    document: "333333333"  //tipo não compatível com o esperado
}
```
Javascript:
```js
function soma(num1, sum2) {
    return num1 + num2;
}

console.log(soma(1,2)) //3
console.log(soma("1","2")) //12
console.log(()) //undefined
```

Typescript:
```ts
function soma (num1:number, num2:number){
    return num1 + num2;
}

console.log(soma(1,2)) //3
console.log(soma("1","2")) //erro
console.log(soma(1)) //erro

```
---

## Mitos e Verdades Typescript

* Typescript veio para substituir o Javascript = `MITO`;
  Ele só complementa algumas funcionalidades 

* Posso usar o typescript com o javascript no mesmo projeto = `VERDADE`; Da pra usar sem problemas typescript em algumas classe e javascript em outras

* Preciso tipar todas as variáveis = `MITO`; Não necessáriamente, mas é imporante pelo controle maior que isso proporciona no código

* Typescript veio para trasnformar Js em C# ou Java = `MITO`

* Typescript auxiia no desenvolvimento = `VERDADE`; Já consegue ver no momento do desenvolvimento se o parâmetro que estamos passando e recebendo está correto.

## Criação Typescript

```properties console

mkdir typescript_trilha-ignite_rockeatseat
```
Dentro do novo diretório criado, seguir com esses seguintes comandos :

```properties console

yarn init -y

yarn add express 

```

Fazer a criação da pasta src e criar o arquivo `*server.ts*`

## Importando no Typescript

Sempre que precisar instalar os tipos de uma biblioteca, nesse caso do express usar o comando *`@types/nomeDaBiblioteca:`*

```properties console

yarn add @types/express -D

```
<b>Aqui instalado com o <b>`-D`</b> pois só utilizaremos o Typescript em ambiente de desenvolvimento!!!</b>
<br><br>

 >> - Observação importante!
 
Em algumas versões do *Node.js* por padrão ele `não consegue reconhecer import e export`. 
 
É necessário converter o arquivo para uma forma que Node.js compreenda tudo que está sendo declarado ali dentro pra ele poder executar nosso arquivo.

Para fazer isso :

Primeiro instalamos a dependência do *typescript* :

```properties console

yarn add typescript -D 

```
Depois Inicializamos o typescript

```properties console
 
 yarn tsc --init 

```
Esse comando cria o *`tsconfig.json`* onde vamos colocar algumas informações e configurações pra gente utiliar dentro do nosso projeto typescript.

No decorrer desse e de outros projetos várias coisas serão alteradas nesse arquivo de configuração mas por enquanto será alterado o 
*`"outDir": "./"`* > Define que pasta será direcionado a criação do arquivo '*.js' criado no comando <b>`yarn tsc`</b>

<br>

---

Em seguida convertemos o código de Typescript para Javascript, já direcionando todo o conteúdo pra pasta que ficou definida dentro do *`tsconfig.json`* em *`"outDir": "./dist"`*.  >

```properties console

yarn tsc

```

Agora ao executar 
```properties console

node dist/server.js

```
Devemos conseguir a vizualização do conteúdo no arquivo no *http://localhost:3333/*

<br>
---

Nesse exemplo em cada alteração de código eu tenho que novamente utilizar o *`yarn tsc`* e *`node dist/server.js`* o que pode tornar o desenvolvimento maçante. A seguir será mostrado alguma otimização nesse aspecto.

---

Podemos ter várias formas de importar os tipos para os parâmetros das rotas, através da criação de interface, `vide exemplos nos arquivos desse estudo` : 

```ts

interface  Course {
    name: string;
    duration: number;
    educator: string
}

class CreateCourseService {
    //outra forma
    //execute(data: Course) {
        //console.log(data.name, data.duration, data.educator);

    execute({duration, educator, name}: Course) {
        console.log(name, duration, educator);
    }
}

```

No typescript podemos garantir também que nossos atributos sejam obrigatórios ou opcionais.
Ex:
``` ts
interface  Course {
    name: string;
    duration?: number; //'?:' Isso define um atributo como opcional dentro da interface
    educator: string
}

```
Podemos também definir um valor default:

```ts

class CreateCourseService {
   //Nesse caso 'duration = 8' será o valor default
    execute({duration = 8, educator, name}: Course) {
        console.log(name, duration, educator);
    }
}

```

>> Lembrete nesse exemplo para cada alteração no código é necessário usar $ *` yarn tsc`* seguido do $ *` node dist/server.js`*




