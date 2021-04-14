const fs = require('fs')
var crypto = require('crypto');

fs.readdir(__dirname, (err, files) => 
{
	files.forEach(file => 
	{
		fs.readFile(file, 'utf-8', (err, data) =>
		{
			var sha256 = crypto.createHash('SHA3-256').update(data).digest('hex');
			
			console.log(file + " " + sha256);
		})
	})
	
})


/*fs.readdir(__dirname, (err, files) =>
{
	if (err)
		console.log(err);
	else {
	
	}
})
*/

