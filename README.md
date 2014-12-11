Info Hunter
=========

## O que é o Info Hunter

Info Hunter é uma ferramenta concebida com o intuito de automatizar a busca de informações na Internet. A ideia é permitir que você crie a forma de buscar a informação em um determinado site e o Info Hunter irá periodicamente executar esta busca para você.

## Como funciona?

O seu funcionamento é muito simples, pois qualquer pessoa com o mínimo de conhecimento em desenvolvimento HTML+Javascript consegue criar o seu HunterScript. Um HunterScript é uma entidade formada, entre outras coisas, por uma url e um script, sendo responsável por armazenar sua busca personalizada e executá-la periodicamente.

A url é exatamente o endereço do site onde você deseja buscar a informação e o script é a lógica com a qual você irá "garimpar" o site através dos dados. Vamos imaginar um exemplo bem simples em um website hipotético de notícias que tem a seguinte estrutura html:

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

Agora imagine que você é um aficionado por aviação e deseja ser avisado quando houver alguma notícia sobre este assunto no site. Para isso precisamos escrever um script para executar esta ação:

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

Pronto. Com essa função você receberá um e-mail com o título da notícia! Este é apenas um exemplo básico, uma vez que podemos realizar diversos tipos buscas, como ser avisado quando um determinado produto de alguma loja esteja com o valor abaixo do desejado.

*Caso você não tenha nenhum conhecimento em desenvolvimento nós recomendamos este [curso online](http://www.codecademy.com/) grátis*


## Estrutura do script

Todo script criado deve obedecer à seguinte estrutura básica: deve-se chamar crawl e seus dois primeiros parâmetros são os objetos html e engine, como mostrado abaixo:

```javascript
function crawl(html, engine) {
    // Do stuff
}
```
## Objeto html

Html é o primeiro parâmetro da função crawl, sendo responsável por permitir a navegação nos elementos da página e também o armazenamento de algumas informações. Suas funções e atributos são:

* url: atributo com o endereço da página cadastrada no HunterScript
* select: função que realiza uma busca de CSS selector na página e retorna um objeto do tipo nodes

## Objeto nodes

Nodes é o objeto retornado pela função select do objeto html e é utilizado para continuar com navegação dentro da árvore de componentes da página. Ele possui as seguintes funções:

* select: função que realiza uma busca de CSS selector dentro dos componentes deste node
* text: função que retorna o texto deste node
* val: função que retorna o valor deste node, no caso de campos de texto e afins
* attr: função que retorna o valor de algum atributo deste node, cujo nome é passado como parâmetro em sua chamada
* each: função que itera sobre todos os elementos deste node, recebendo como parâmetro uma função de callback que por sua vez recebe como parâmetro o elemento atual da iteração (veja um exemplo mais abaixo)

## Objeto engine

Engine é o segundo parâmetro da função crawl e possui as seguintes funções utilitárias:

* sendEmail: Função responsável por realizar o envio de algum e-mail para o usuário recebendo como parâmetros o assunto e o corpo do email, este último podendo ser escrito como html para melhor visualização do email
* logMessage: Função responsável por imprimir uma mensagem recebida como parâmetro no log. *Esta função por enquanto exibe log apenas no modo de teste da tela de edição de script*

```javascript
function crawl(html, engine) {
    var elements = html.select('p'); // Busca todas os parágrafos da página
    elements.each(function(element) {
         var text = element.text();
         // Faz alguma coisa com o valor recuperado
    });
}
```

## Parâmetros

Ao cadastrar um HunterScript é possível adicionar parâmetros, cada qual formado por um valor e um tipo, tendo como principal objetivo organizar e simplificar um script. Por exemplo, imagine que você queira fazer um script para ser avisado quando o preco de um certo produto for menor que R$ 100,00. Ao invés de você colocar este valor "hard-coded" dentro do script, existe a possibilidade de criar um novo parâmetro do tipo Number com o valor 100, que poderá ser acessado na lista de parâmetros da função crawl logo após o objeto engine, na ordem que forem inseridos.

```javascript
function crawl(html, engine, precoMaximo) {
    // Do stuff
}
```

## Armazém

Este repositório que você está acessando contém o Armazém, que consiste em uma base de scripts feitos por outros usuários e compartilhados para que fossem reutilizados.

Fique à vontade para utilizá-los e também para contribuir com novos scripts que você fizer utilizando pull requests. A única restrição é que o script submetido obedeça o seguinte padrão:

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

Apenas atenção para o atributo Tags, pois ele deve conter tags com os assuntos relacionados à funcionalidade do script e, por convenção, devem estar em inglês uma vez que no futuro serão utilizadas para criar índices de busca.


Happy Hunting!
