/* Je déclare les variables, N pour le nombre demandé, i qui sera incrémenté et somme qui sera affiché dans la console à chaque tour */


var N = 0;
var i = 0;
var somme = 0;


var N = parseInt(prompt('Entrez un nombre'))
/* Pour i inférieur à N, i s'incrèmente */
for (var i = 0; i < N; i++)
{
 somme = somme + i;
 console.log(somme);
}
