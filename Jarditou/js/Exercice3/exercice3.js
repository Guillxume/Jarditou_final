/* Je déclare les valeurs somme, i, et le tableau tab */
var somme = 0;
var i = 0;
var tab = Array();
/* Tant que la note rentrée n'est pas 0, l'utilisateur rentre ses notes */
tab[i]= -1;
while(tab[i-1] != 0)

{

	tab[i]= parseInt(prompt("Entrez la note"));
	somme =somme + tab[i];
	i++;

}
// supprimer la derniere case d'un tableau (ici le 0)
tab.splice((tab.length-1) , 1);

/* calcule la note maximale et minimale, les "..." servent à déconstruire le tableau */ 
var max = Math.max(...tab);
var min = Math.min(...tab);

moyenne = somme/tab.length;

console.log("Moyenne: " +moyenne);
console.log ("Plus haute note: " +max);
console.log("Plus basse note: " +min);