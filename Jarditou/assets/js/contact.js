/* On attribue aux variables la valeur des champs du formulaire */

var bouton = document.getElementById('bouton');
var nom = document.getElementById('nom');
var prenom = document.getElementById('prenom');
var email = document.getElementById('email');
var demande = document.getElementById('demande');
var mas = document.getElementById('mas');
var fem = document.getElementById('fem');

/* Les regex afin de veiller au bon remplissage du formulaire */
var regexNom = /^[a-zA-Z]+$/;
var regexPrenom =  /^[a-zA-Z]+$/;
var regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
var regexCp = /[0-9]{5}|^$/;

/* le bouton déclenche la fonction au clic */

bouton.addEventListener('click', verification);

/* La fonction qui vérifie tout le formulaire */
function verification(event)
{ /* On teste la valeur de la variable par rapport à la Regex, cela se déclenche si la fonction trouve une erreur*/
    if(!regexNom.test(nom.value))
    {   
/* SI le champ est vide */
        if(nom.validity.valueMissing)
        { 
/* l'event.preventDefault empêche l'envoi du formulaire en cas d'erreur */ 
        event.preventDefault();
/* je déclare la variable paraErreurNom qui vaux le span missNom dans l'HTML qui jusqu'alors était vide.
Je lui donne un texte à l'intérieur, une couleur et la taille de la font */
        let paraErreurNom = document.getElementById('missNom');
        paraErreurNom.textContent = "Tu dois entrer un nom";
        paraErreurNom.style.color = "#fba";  
        paraErreurNom.style.fontSize = "20px";    
        }
        else
        	/* SINON, la Regex n'est pas respectée*/
        {
        
            event.preventDefault();
            let paraErreurNom = document.getElementById('missNom');
            paraErreurNom.textContent = "Caractère alphabétique uniquement.";
            paraErreurNom.style.color = "#fba";
            paraErreurNom.style.fontSize = "20px";
        
        }
    }

    /* Même chose avec le prénom */
    if(!regexPrenom.test(prenom.value))
    {
        if(prenom.validity.valueMissing)
        {
            event.preventDefault();
            let paraErreurPrenom = document.getElementById('missPrenom');
            paraErreurPrenom.textContent="Tu dois entrer un prénom";
            paraErreurPrenom.style.color = "#fba";
            paraErreurPrenom.style.fontSize = "20px";
        }
        else
        {
            event.preventDefault();
            let paraErreurPrenom = document.getElementById('missPrenom');
            paraErreurPrenom.textContent="Caractère alphabétique uniquement.";
            paraErreurPrenom.style.color = "#fba";
            paraErreurPrenom.style.fontSize = "20px";
        }
    }
    /* La regex pour le mail n'est pas la même que les prénoms : on lui demande de vérifier la présence d'une arobase, et de caractères qui la suivent. */
    if(!regexEmail.test(email.value))
    {
        if(email.validity.valueMissing)
        {
            event.preventDefault();
            let paraErreurEmail = document.getElementById('missEmail');
            paraErreurEmail.textContent = "Tu dois entrer un e-mail.";
            paraErreurEmail.style.color = "#fba";
            paraErreurEmail.style.fontSize = "20px";
        }
        else
        {
            event.preventDefault();
            let paraErreurEmail = document.getElementById('missEmail');
            paraErreurEmail.textContent = "email invalide, format : jean0@dupont.fr";
            paraErreurEmail.style.color = "#fba";
            paraErreurEmail.style.fontSize = "20px";
        }
    }

    if(demande.validity.valueMissing)
    {
        event.preventDefault();
        let paraErreurDemande = document.getElementById('missDemande');
        paraErreurDemande.textContent = "Tu dois indiquer ta demande.";
        paraErreurDemande.style.color = "#fba";
        paraErreurDemande.style.fontSize = "20px";
    }
/* Si aucun choix n'a été fait au bouton radio, renvoie une erreur */
    if(mas.validity.valueMissing && fem.validity.valueMissing && other.validity.valueMissing)
    {
        event.preventDefault();
        let paraMissSexe = document.getElementById('sexe');
        paraMissSexe.textContent = "Merci de renseigner cette information.";
		paraMissSexe.style.color = "#fba";
        paraMissSexe.style.fontSize = "20px"; 
    }
/* Même chose avec la date */
    if(birth.validity.valueMissing)
    {
    	event.preventDefault();
    	let paraMissBirth = document.getElementById('missBirth');
    	paraMissBirth.textContent= "Date de naissance requise.";
 		paraMissBirth.style.color = "#fba";
        paraMissBirth.style.fontSize = "20px"; 
    }

    if(!regexCp.test(postal.value))
    	/* Le regex du code postal lui demande de soit contenir 5 chiffres, soit d'être vide. Autrement c'est une erreur */
    {

    	    event.preventDefault();
            let paraErreurCp = document.getElementById('missCp');
            paraErreurCp.textContent = "Code Postal invalide.";
            paraErreurCp.style.color = "#fba";
            paraErreurCp.style.fontSize = "20px"; 
        
    }
}