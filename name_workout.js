var names = ["Abdullah","Abrianna","Abrielle","Adelaide","Adreanna","Adrianna","Adrianne","Adrienne","Alastair","Alistair","Aloysius","Alphonso","Amandine","Amethyst","Anabelle","Anamaria","Anderson","Angelica","Angelina","Angeline","Annabeth","Annalisa","Annalise","Annmarie","Arabella","Arabelle","Ashleigh","Aubriana","Audriana","Augustus","Avriella","Beatrice","Benedict","Benjamin","Berenice","Bernardo","Bethanie","Blessing","Bradford","Brantley","Brentley","Brighton","Brigitte","Brittany","Brittney","Brooklyn","Brooklyn","Bryleigh","Calliope","Callista","Campbell","Campbell","Carlisle","Carlotta","Carolina","Caroline","Catalina","Catarina","Caterina","Cathleen","Catriona","Cayleigh","Celestia","Chandler","Chanelle","Channing","Charissa","Charlene","Charlize","Charlton","Chastity","Chauncey","Chenille","Cheyanne","Cheyenne","Christal","Christen","Christie","Chrystal","Clarence","Clarissa","Clarisse","Claudine","Clemence","Clifford","Clotilde","Coraline","Cordelia","Cornelia","Courtney","Cressida","Cristian","Cristina","Cuthbert","Daniella","Danielle","Delphine","Demetria","Destinee","Diarmuid","Dominick","Eleonora","Emanuela","Emiliano","Emmaline","Emmanuel","Emmeline","Emmerson","Estrella","Fabienne","Fabrizia","Felicity","Fernanda","Fernando","Finnigan","Fletcher","Florence","Francine","Franklin","Franklyn","Fredrick","Gabriela","Garrison","Geoffrey","Georgina","Germaine","Gertrude","Gilberto","Giovanna","Giovanni","Gisselle","Gracelyn","Gretchen","Griselda","Hamilton","Harrison","Hazeline","Hermione","Hezekiah","Hortense","Humberto","Humphrey","Hyacinth","Isabella","Isabelle","Izabella","Jeanette","Jeannine","Jebediah","Jedediah","Jedidiah","Jennette","Jennifer","Jeremiah","Jermaine","Jonathan","Jonathon","Joseline","Julianna","Julianne","Julienne","Juliette","Kaidence","Kaitlynn","Karolina","Katarina","Katelynn","Katerina","Kathleen","Kaydence","Kayleigh","Kendrick","Kiersten","Kimberly","Kingsley","Kingston","Kourtney","Kristian","Kristina","Kristine","Kristoff","Lancelot","Langston","Laurence","Lauretta","Lavender","Lawrence","Leighton","Leonardo","Lisandro","Llewelyn","Lorraine","Lucretia","Lynnette","Lysander","Maddison","Madeline","Makenzie","Marcella","Marcelle","Margaret","Marianna","Marianne","Mariella","Marjorie","Marshall","Marybeth","Maryjane","Mathilda","Mathilde","Matthias","Mauricio","Maverick","Mckenzie","Mercedes","Meredith","Michaela","Michelle","Mikhaela","Mirielle","Mitchell","Mohammad","Mohammed","Mordecai","Muhammad","Nehemiah","Nicholas","Nickolas","Patience","Patricia","Paulette","Penelope","Philippa","Philippe","Phillipa","Precious","Primrose","Princess","Prudence","Rachelle","Rafferty","Randolph","Reginald","Renesmee","Reynaldo","Rhiannon","Richelle","Rochelle","Roderick","Rosalina","Rosalind","Rosalynn","Rosamund","Roseanne","Rosemary","Salvador","Samantha","Santiago","Sapphire","Savannah","Scarlett","Serenity","Shadrach","Sheridan","Sherlock","Stefanie","Sterling","Sullivan","Susannah","Tallulah","Terrance","Terrence","Thaddeus","Theodora","Theodore","Tiberius","Tremaine","Valentin","Veronica","Victoria","Violetta","Virginia","Virginie","Vivienne","Vladimir","Waverley","Winifred","Wolfgang"];
// names
var letters = {
	a: '25 Toes touches',
	b: '20 crunches',
	c: '30 squats',
	d: '15 push ups',
	e: '1mins squat jump',		
	f: '20 pushups',
	g: '2mins plank',
	h: '20 squats',
	i: '25 v-crunches',
	j: '15 crunches',
	k: '10 push ups',
	l: '2mins squat jump',
	m: '20 burpess',
	n: '20 pushup arm up',
	o: '50 situps',
	p: '1mins plank',
	q: '30 crunches',
	r: '15 pushups',
	s: '50 bicycle',
	t: '15 squats',
	u: '3mins plank',
	v: '3mins squat jump',
	w: '20 side crunches',
	x: '50 crunches',
	y: '10 crunches',
	z: '20 push ups'
};
//letters
var rounds = Number(process.argv[process.argv.length-1]);

function workoutName () {
	outputString = '';
	for (var i = 1; i <= rounds; i++) {
		outputString += renderName();
	}
	console.log(outputString);
}

function getName() {
	var min = 0;
	var max = names.length-1;
	var index = Math.random() * (max - min) + min;
	index = index.toFixed(0);
	return names[index];
}

function renderName() {
	var name = getName();
	var nameString = '';

	name = name.toLowerCase();
	lettersArr = name.split('');
	lettersArr.map(function(letterVal, letterIndex){
		letterVal = lettersArr[letterIndex];
		nameString += `${letterVal}: ${letters[letterVal]} \n`;
	});

	return nameString += '\n'
}

(workoutName)()
