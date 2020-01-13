/* Je déclare les variables PU pour le prix, QTECOM pour la quantité, PAP pour le prix Hors frais de port et remise, PORT pour les frais de port
REM pour la remise et TOT pour le total final */


var PU = 0
var QTECOM = 0
var PAP = 0
var PORT = 0
var REM = 0
var TOT = 0

/* Je demande à l'utilisateur le prix et la quantité */

PU = parseInt(prompt('Donnez le prix'))
QTECOM = parseInt(prompt('Donnez la quantité'))

/* J'effectue le calcul qui me donne la valeur de PAP */

PAP = PU * QTECOM;

/* Premiere condition si PAP est superieur a 500 les frais de ports sont offerts, sinon ils représentent 2% du prix et au minimum 6€ */

if (PAP>500) {
	PORT = 0;

}
else{
	PORT = PAP/100*2;
}
if (PORT<6) {
PORT = 6 ;
}

/* Condition de la remise : Entre 100 et 200 5%, Au delà 10% et en dessous pas de remises */		

if (200>PAP>100)
	{
		REM = PAP/100*5;
	}
else if (PAP>200)
	{
		REM = PAP/10;
	}
else{
		REM = 0;
	}

TOT = PAP - REM + PORT ;

console.log(TOT);