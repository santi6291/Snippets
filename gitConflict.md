# git Scripts

## Aliases

```
alias new='git checkout -b'
alias checkout='git checkout'
alias push='git push origin'
alias pull='git pull origin'
alias merge='git merge'
alias solveConflict="git add -A && git commit;"
alias commitAll="git commit -am"
alias ammend="git commit --ammend -m"

updateBranch() {
    pull $(git name-rev --name-only HEAD)
}
```

## Solve git conflict (Node js)
Purpose: will remove conflict comments and leave whatever is in HEAD

use: `node gitConflict.js ~/path/to/file`

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
