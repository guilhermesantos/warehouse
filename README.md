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
