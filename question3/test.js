const rp = require('request-promise');
const url = 'https://codequiz.azurewebsites.net/';
const $ = require('cheerio');

const options = {
    uri: url,
    headers: {
        Cookie: "hasCookie=true"
    }
};

rp(options)
    .then(function (html) {
        var args = process.argv.slice(2);
        var dict = {};
        $("table > tbody > tr" , html).each((index,element ) => {
            if(index != 0){
                var tempName = "";
                $("td" , element).each((index_td, element_td) => {

                    if(index_td == 0){
                        tempName = $(element_td).text().trim();
                    }
                    if(index_td == 1){
                        dict[tempName] = $(element_td).text();
                    }
                   
                  });
            }

          });
          console.log(dict[args]);
    })

    .catch(function (err) {
        //handle error
    });

