module.exports = require('../../public/lib/prixing');






var prixing = require('prixing-client');

// Create a Client
var apikey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx' // Put your own apikey
var client = prixing.createClient(apikey);

// Get a product using its EAN (bar code)
var ean = '3017624044003' //NUTELLA stuff
client.getProduct(ean,function(err,data){
   if(err){
      console.log('ERROR: ' + err);
   }else{
      console.log('INFOS: ' + JSON.stringify(data));
   }
});


export default Codebarre;