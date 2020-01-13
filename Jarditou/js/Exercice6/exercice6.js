/* déclaration de la fonction */

function enlevelenom ()  {
	/*Déclaration du tableau */
	var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

	var name = prompt("Entrez le prénom que vous voulez supprimer")
/* Condition si le nom rentré est dans le tableau, 
la valeur du nom est supprimée et remplacée par un espace */
	if(tab.includes(name)){
		tab.splice(tab.indexOf(name),1);
		tab[tab.length - 1] = " ";
	}
	alert(tab);
	return(tab);
};
/* On affiche le résultat de la fonciton */
enlevelenom();


