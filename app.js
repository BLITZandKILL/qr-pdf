var qr = require("qr-image");
var fs = require("fs");

function.generateQRCode(message) {
	var code = qr.image(message, { type: 'pdf', size: 1 });  
	var output = fs.createWriteStream(message+'.pdf');
	code.pipe(output);
};