/*
 Name: Notícias da uol
 Description: Busca notícias que tiverem as palavras chaves no primeiro parâmetro, as palavras devem estar separadas por ,
 Tags: ['uol', 'news']
 Parameters: ['String']
*/
function crawl(html, engine, palavrasChaveLista) {
    var palavras = palavrasChaveLista.split(',');
    var email = '';
    html.select('.modulo').each(function(el) {
       var titulo = el.select('.chamada').text();
       for (var i = 0; i < palavras.length; i++) {
           if (titulo.toLowerCase().indexOf(palavras[i].trim().toLowerCase()) != -1) {
               var link = el.select('a').attr('href');
               email += '<p><a href="' + link + '">' + titulo + '</a></p>';
           }
       }
    });
    if (email) {
       engine.sendEmail('Noticias do uol', email);
    }
}