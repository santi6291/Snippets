# Solve git conflic
Purpose: will remove conflic comments and leave whatever is in HEAD

```
var fs = require('fs');
var fileName = '/Users/santiago/Sites/xaxis/Xaxis-2.0/assets/scss/_style.scss';
fs.readFile(fileName, 'utf-8', function(err, data){
	var cleanData = data.replace( /(<<<<<<< HEAD)|(\=======[\w\W]*?\>>>>>>>.*)/g, '' );

	fs.writeFile(fileName, cleanData, 'utf8', function (err) {
		if (err) {
			return console.log(err);
		} else {
			return console.log('Done. No Errors')
		}
	});
});
```
