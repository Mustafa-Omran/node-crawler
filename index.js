var Crawler = require("crawler");

var c = new Crawler({
    maxConnections: 10,
    callback: function (error, res, done) {
        if (error) {
            console.log(error);
        } else {
            var $ = res.$;
            console.log($("title").text());
        }
        done();
    }
});


c.queue([{
    uri: 'https://www.google.com.eg/',
    jQuery: true,
    callback: function (error, res, done) {
        if (error) {
            console.log(error);
        } else {
            var $ = res.$;
            console.log($('title').text());
        }
        done();
    }
}]);

