// Carga la BD con los datos cuando no existen
if(Groups.find().count() === 0){
	Groups.insert({
		letter : 'A',
		name : 'Grupo A'
	});
	Groups.insert({
		letter : 'B',
		name : 'Grupo B'
	});
	Groups.insert({
		letter : 'C',
		name : 'Grupo C'
	});
	Groups.insert({
		letter : 'D',
		name : 'Grupo D'
	});
	Groups.insert({
		letter : 'E',
		name : 'Grupo E'
	});
	Groups.insert({
		letter : 'F',
		name : 'Grupo F'
	});
	Groups.insert({
		letter : 'G',
		name : 'Grupo G'
	});
	Groups.insert({
		letter : 'H',
		name : 'Grupo H'
	});
}

if(Teams.find().count() === 0){
	// GRUPO A
	Teams.insert({
		name : 'BRASIL',
		games : 0,
		wins : 0,
		draws : 0,
		lose : 0,
		goals : 0,
		goalsAgainst: 0,
		points : 0,
		belong : 'A',
		ordinal: 0
	});
	Teams.insert({
		name : 'CROACIA',
		games : 0,
		wins : 0,
		draws : 0,
		lose : 0,
		goals : 0,
		goalsAgainst: 0,
		points : 0,
		belong : 'A',
		ordinal: 1
	});
	Teams.insert({
		name : 'MEXICO',
		games : 0,
		wins : 0,
		draws : 0,
		lose : 0,
		goals : 0,
		goalsAgainst: 0,
		points : 0,
		belong : 'A',
		ordinal: 2
	});
	Teams.insert({
		name : 'CAMERUN',
		games : 0,
		wins : 0,
		draws : 0,
		lose : 0,
		goals : 0,
		goalsAgainst: 0,
		points : 0,
		belong : 'A',
		ordinal: 3
	});
	// FIN GRUPO A
	// GRUPO B
	Teams.insert({
		name : 'ESPAÑA',
		games : 0,
		wins : 0,
		draws : 0,
		lose : 0,
		goals : 0,
		goalsAgainst: 0,
		points : 0,
		belong : 'B',
		ordinal: 0
	});
	Teams.insert({
		name : 'HOLANDA',
		games : 0,
		wins : 0,
		draws : 0,
		lose : 0,
		goals : 0,
		goalsAgainst: 0,
		points : 0,
		belong : 'B',
		ordinal: 1
	});
	Teams.insert({
		name : 'CHILE',
		games : 0,
		wins : 0,
		draws : 0,
		lose : 0,
		goals : 0,
		goalsAgainst: 0,
		points : 0,
		belong : 'B',
		ordinal: 2
	});
	Teams.insert({
		name : 'AUSTRALIA',
		games : 0,
		wins : 0,
		draws : 0,
		lose : 0,
		goals : 0,
		goalsAgainst: 0,
		points : 0,
		belong : 'B',
		ordinal: 3
	});
	// FIN GRUPO B
	// GRUPO C
	Teams.insert({
		name : 'COLOMBIA',
		games : 0,
		wins : 0,
		draws : 0,
		lose : 0,
		goals : 0,
		goalsAgainst: 0,
		points : 0,
		belong : 'C',
		ordinal: 0
	});
	Teams.insert({
		name : 'GRECIA',
		games : 0,
		wins : 0,
		draws : 0,
		lose : 0,
		goals : 0,
		goalsAgainst: 0,
		points : 0,
		belong : 'C',
		ordinal: 1
	});
	Teams.insert({
		name : 'COSTA DE MARFIL',
		games : 0,
		wins : 0,
		draws : 0,
		lose : 0,
		goals : 0,
		goalsAgainst: 0,
		points : 0,
		belong : 'C',
		ordinal: 2
	});
	Teams.insert({
		name : 'JAPON',
		games : 0,
		wins : 0,
		draws : 0,
		lose : 0,
		goals : 0,
		goalsAgainst: 0,
		points : 0,
		belong : 'C',
		ordinal: 3
	});
	// FIN GRUPO C
	// GRUPO D
	Teams.insert({
		name : 'URUGUAY',
		games : 0,
		wins : 0,
		draws : 0,
		lose : 0,
		goals : 0,
		goalsAgainst: 0,
		points : 0,
		belong : 'D',
		ordinal: 0
	});
	Teams.insert({
		name : 'COSTA RICA',
		games : 0,
		wins : 0,
		draws : 0,
		lose : 0,
		goals : 0,
		goalsAgainst: 0,
		points : 0,
		belong : 'D',
		ordinal: 1
	});
	Teams.insert({
		name : 'INGLATERRA',
		games : 0,
		wins : 0,
		draws : 0,
		lose : 0,
		goals : 0,
		goalsAgainst: 0,
		points : 0,
		belong : 'D',
		ordinal: 2
	});
	Teams.insert({
		name : 'ITALIA',
		games : 0,
		wins : 0,
		draws : 0,
		lose : 0,
		goals : 0,
		goalsAgainst: 0,
		points : 0,
		belong : 'D',
		ordinal: 3
	});
	// FIN GRUPO D
	// GRUPO E
	Teams.insert({
		name : 'SUIZA',
		games : 0,
		wins : 0,
		draws : 0,
		lose : 0,
		goals : 0,
		goalsAgainst: 0,
		points : 0,
		belong : 'E',
		ordinal: 0
	});
	Teams.insert({
		name : 'ECUADOR',
		games : 0,
		wins : 0,
		draws : 0,
		lose : 0,
		goals : 0,
		goalsAgainst: 0,
		points : 0,
		belong : 'E',
		ordinal: 1
	});
	Teams.insert({
		name : 'FRANCIA',
		games : 0,
		wins : 0,
		draws : 0,
		lose : 0,
		goals : 0,
		goalsAgainst: 0,
		points : 0,
		belong : 'E',
		ordinal: 2
	});
	Teams.insert({
		name : 'HONDURAS',
		games : 0,
		wins : 0,
		draws : 0,
		lose : 0,
		goals : 0,
		goalsAgainst: 0,
		points : 0,
		belong : 'E',
		ordinal: 3
	});
	// FIN GRUPO E
	// GRUPO F
	Teams.insert({
		name : 'ARGENTINA',
		games : 0,
		wins : 0,
		draws : 0,
		lose : 0,
		goals : 0,
		goalsAgainst: 0,
		points : 0,
		belong : 'F',
		ordinal: 0
	});
	Teams.insert({
		name : 'BOSNIA HERZGOVINA',
		games : 0,
		wins : 0,
		draws : 0,
		lose : 0,
		goals : 0,
		goalsAgainst: 0,
		points : 0,
		belong : 'F',
		ordinal: 1
	});
	Teams.insert({
		name : 'IRAN',
		games : 0,
		wins : 0,
		draws : 0,
		lose : 0,
		goals : 0,
		goalsAgainst: 0,
		points : 0,
		belong : 'F',
		ordinal: 2
	});
	Teams.insert({
		name : 'NIGERIA',
		games : 0,
		wins : 0,
		draws : 0,
		lose : 0,
		goals : 0,
		goalsAgainst: 0,
		points : 0,
		belong : 'F',
		ordinal: 3
	});
	// FIN GRUPO F
	// GRUPO G
	Teams.insert({
		name : 'ALEMANIA',
		games : 0,
		wins : 0,
		draws : 0,
		lose : 0,
		goals : 0,
		goalsAgainst: 0,
		points : 0,
		belong : 'G',
		ordinal: 0
	});
	Teams.insert({
		name : 'PORTUGAL',
		games : 0,
		wins : 0,
		draws : 0,
		lose : 0,
		goals : 0,
		goalsAgainst: 0,
		points : 0,
		belong : 'G',
		ordinal: 1
	});
	Teams.insert({
		name : 'GHANA',
		games : 0,
		wins : 0,
		draws : 0,
		lose : 0,
		goals : 0,
		goalsAgainst: 0,
		points : 0,
		belong : 'G',
		ordinal: 2
	});
	Teams.insert({
		name : 'EEUU',
		games : 0,
		wins : 0,
		draws : 0,
		lose : 0,
		goals : 0,
		goalsAgainst: 0,
		points : 0,
		belong : 'G',
		ordinal: 3
	});
	// FIN GRUPO G
	// GRUPO H
	Teams.insert({
		name : 'BELGICA',
		games : 0,
		wins : 0,
		draws : 0,
		lose : 0,
		goals : 0,
		goalsAgainst: 0,
		points : 0,
		belong : 'H',
		ordinal: 0
	});
	Teams.insert({
		name : 'ARGELIA',
		games : 0,
		wins : 0,
		draws : 0,
		lose : 0,
		goals : 0,
		goalsAgainst: 0,
		points : 0,
		belong : 'H',
		ordinal: 1
	});
	Teams.insert({
		name : 'RUSIA',
		games : 0,
		wins : 0,
		draws : 0,
		lose : 0,
		goals : 0,
		goalsAgainst: 0,
		points : 0,
		belong : 'H',
		ordinal: 2
	});
	Teams.insert({
		name : 'REPUBLICA DE COREA',
		games : 0,
		wins : 0,
		draws : 0,
		lose : 0,
		goals : 0,
		goalsAgainst: 0,
		points : 0,
		belong : 'H',
		ordinal: 3
	});
	// FIN GRUPO H
} 