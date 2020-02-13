/* Je déclare mes variables */

var nbjeune = 0;
var nbmoyen = 0;
var nbvieux = 0;
var age= 0;
/* La boucle tourne jusqu'au centenaire */
while(age < 100){

	age = parseInt(prompt("Donnez l'age"));
/* répartition jeune moyen vieux avec des conditions */
	if(age<20){
		var nbjeune = nbjeune + 1;
	}

	else if(age>=20 && age<=40){
		var nbmoyen = nbmoyen + 1;
	}
	else{
		var nbvieux = nbvieux + 1;
	}

}
/* affichage*/
alert("Il y a " + nbjeune + "jeunes \n " + "Il y a " + nbmoyen + "moyens \n " + "Il y a " + nbvieux + "vieux");
