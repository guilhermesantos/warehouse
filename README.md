Info Hunter
=========

## O que é o Info Hunter

Info Hunter é uma ferramenta concebida com o intuito de automatizar a busca de informações na Internet. A ideia você crie a forma de buscar a informação em um determinado site e o Info Hunter irá periodicamente executar esta busca para você.

## Como funciona?

O seu funcionamento é muito simples, qualquer pessoa com o mínimo de conhecimento em desenvolvimento HTML+Javascript consegue criar o seu HunterScript. Um HunterScript é uma entidade responsável por realizar a sua busca e ela consiste, entre outras coisas, basicamente em uma url e um Script.

A url é exatamente o endereço do site onde você deseja buscar a informação e o script é a lógica com a qual você irá "garimpar" o site através dos dados. Um exemplo bem simples, vamos imaginar o website hipotético de notícias que tem a seguinte estrutura html:

```html
<html>
   <body>
      <div class="noticia">
         <h2 class="titulo">Novo avião é lançado pela Embraer nesta segunda</h2>
         <p class="informacoes">...</p>
      </div>
      <div class="noticia">
         <h2 class="titulo">Famosa produtora de games realiza novo lançamento</h2>
         <p class="informacoes">...</p>
      </div>
   </body>
</html>
```

Agora imagine que você é um aficionado por aviação e deseja ser avisado quando houver alguma notícia sobre este assunto no site, para isso precisamos escrever um script para executar esta ação, veja abaixo o exemplo:

```javascript
function crawl(html, engine) {
 var palavrasChave = ['avião', 'aviação', 'aeronave'];
 html.select('.noticia .titulo').each(function(element) {
  var text = element.text();
  for (var i = 0; i < palavrasChave.length; i++) {
     if (text.indexOf(palavrasChave[i]) != -1) {
        engine.sendEmail('Notícia sobre aviação no site X!', text);
     }
  }
 });
}
```

Pronto com essa função você receberá um e-mail com o título da notícia! Este é apenas um exemplo básico, é possível realizar diversos tipos buscas, como por exemplo ser avisado quando um determinado produto de alguma loja esteja com o valor abaixo do desejado.

*Caso você não tenha nenhum conhecimento em desenvolvimento nós recomendamos este [curso online](http://www.codecademy.com/) grátis*


## Estrutura do script

O script a ser criado deve obedecer uma estrutura básica: Deve se chamar crawl e seus dois primeiros parâmetros são os objetos html e engine, como mostrado abaixo:

```javascript
function crawl(html, engine) {
    // Do stuff
}
```
## Objeto html

Html é o primeiro parâmetro da função crawl, ele é responsável pela navegação e informações da página e consiste nas seguintes funções e atributos

* url: Atributo com o endereço da página cadastrada no HunterScript
* select: função que realiza uma busca de Css selector na página e retorna um objeto do tipo nodes

## Objeto nodes

Nodes é o objeto retornado pela função select do objeto html e é utilizado para continuar com navegação dentro da árvore de componentes da página e possui as seguintes funções

* select: função que realiza uma busca de Css selector dentro dos componentes deste node
* text: função que retorna o texto deste node
* val: função que retorna o value deste node, no caso de campos de texto e afins
* attr: função que retorna o valor de algum atributo deste node, ela deve receber como parâmetro em sua chamada o nome do atributo desejado
* each: função que itera sobre todos os elementos deste node, ela recebe como parâmetro uma função de callback, esta função de callback por sua vez recebe como parâmetro o elemento atual da iteração, veja um exemplo abaixo

## Objeto engine

Engine é o segundo parâmetro da função crawl e possui as seguintes funções utilitárias

* sendEmail: Função responsável por realizar o envio de algum e-mail para o usuário, recebe dois parâmetros, o primeiro é o assunto e o segundo o corpo do email, o corpo pode ser escrito como html para melhor visualização do email
* logMessage: Função responsável por imprimir alguma mensagem, recebe um parâmetro apenas que consisti na mensagem a ser impressa no log. *Esta função por enquanto exibe log apenas no modo de teste da tela de edição de script*

```javascript
function crawl(html, engine) {
    var elements = html.select('p'); // Busca todas os parágrafos da página
    elements.each(function(element) {
         var text = element.text();
         // Faz alguma coisa com o valor recuperado
    });
}
```


```javascript
/*
 Name: Dummy Script
 Description: This script do nothing, it's just used to show how to create a template script
 Tags: ['price', 'siteX']
 Parameters: ['Number', 'Boolean', 'String']
*/
function crawl(html, engine, someNumber, someBoolean, someString) {
    // Do stuff
}
```
