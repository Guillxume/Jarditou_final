/* Fonction qui affiche la table du nombre qu'on lui rentre */

function table_multiplication(nombre)
{

var i;
for (i=0; i<=10; i++) {

resultat=nombre*i;

console.log(nombre+" x "+i+"="+nombre*i);

}
}

table_multiplication(5);