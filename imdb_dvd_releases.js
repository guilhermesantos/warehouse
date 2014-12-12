/*
 Name: DVD Releases
 Description: Search dvd releases with the specified minimum score 
 Tags: ['dvd', 'release', 'IMDB']
 Parameters: ['minimumScore']
*/
function crawl(html, engine, minimumScore) {
    var email = '';
    
    var dvdReleases = html.select('.list_item');
    dvdReleases.each(function(dvdRelease) {
        var scoreText = dvdRelease.select('.rating-rating .value').text();
        var score = new Number(scoreText);
        if (score >= minimumScore) {
            var dvdInfo = dvdRelease.select('.info b a');
            var dvdName = dvdInfo.text();
            var dvdDetails = dvdInfo.attr('href');
            var dvdUrl = "http://www.imdb.com" + dvdDetails;
            
            email += '<p>The DVD <a href="' + dvdUrl + '">' + dvdName + '</a> is available with score ' + scoreText + '</p>';
        }
    });
    
    if (email != '') {
        engine.sendEmail('DVD Release', email);
    } else {
        engine.logMessage('No DVD found with minimum score ' + minimumScore);
    }
}
