function crawl(html, engine, maximumPrice) {
    var email = '';
    html.select('.wishlistRow').each(function(el) {
        var name = el.select('h4').text();
        var price = el.select('.gameListPriceData .price').text();
        price = price.replace('$','');
        
        var link = el.select('.storepage_btn_ctn a').attr('href');
        if(price < maximumPrice) {
            email += '<p>'+name+'</p>';
            email += '<p>'+price+'</p>';
            email += '<p><a href="'+link+'"></a>';
        }
    });
    
    engine.sendEmail('Steam wishlist game sales', email);
}
