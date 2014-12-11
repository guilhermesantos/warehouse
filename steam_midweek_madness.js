/*
 Name: Steam midweek madness
 Description: Busca e envia quais as promoções estão na midweek madness da steam
 Tags: ['price', 'games', 'Steam']
 */
function crawl(html, engine) {
   var email = '';
   html.select('.home_area_spotlight').each(function(el) {
      var link = el.select('.spotlight_img a').attr('href');
      var img = el.select('.spotlight_img a img').attr('src');
      var preco = el.select('.discount_final_price').text();
      email += '<p><a href="' + link + '"><img src="' + img + '"></img></a>' + preco + '</p>';
   });
   engine.sendEmail('Steam midweek madness', email);
}