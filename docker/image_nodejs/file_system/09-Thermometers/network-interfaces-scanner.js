var os = require("os");

networkInterfaces = os.networkInterfaces();

var i=0;
for (var itf in networkInterfaces) {
	i++;
	console.log("Network Interface: " + itf + ", " + networkInterfaces[itf]);

	for (var addressIndex in networkInterfaces[itf]) {
		var address = networkInterfaces[itf][addressIndex];
		console.log(" address: " + address.family + " -> " + address.address + ", internal:" + address.internal);
	}
	
}
