var j = require("jimp");
j.read("g.png", function(err,lenna){
	console.log("executing");
	if(err) throw err;
	lenna.resize(260,260)
		.write("g.png");
		console.log("done");
});