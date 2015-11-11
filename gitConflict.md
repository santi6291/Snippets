# Solve git conflic
Purpose: will remove conflic comments and leave whatever is in HEAD

use: 'node gitConflict.js ~path/to/file'

```
var fs = require('fs');
var filePath = process.argv[2];
fs.readFile(filePath, 'utf-8', function(err, data){
	var cleanData = data.replace( /(<<<<<<< HEAD)|(\=======[\w\W]*?\>>>>>>>.*)/g, '' );

	fs.writeFile(filePath, cleanData, 'utf8', function (err) {
		if (err) {
			return console.log(err);
		} else {
			return console.log('Done. No Errors')
		}
	});
});
```
