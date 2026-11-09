var tabSortes = ["coeur", "carreau", "pique", "trefle"];

//=================================================================
// Fournit un nombre aléatoire entier entre 0 et pMax - 1
function randNumber(pMax)
{
	return (Math.floor(pMax * Math.random()));
}

// Une fonction qui rend toutes les cartes blanches
function retirerLesClasses()
{
	let lesCartes = document.getElementsByTagName("li");

	for(let carte of lesCartes){
		carte.className = "";
	}
}

//=================================================================
function exemple1()
{
	retirerLesClasses();

	let lesCartes = document.getElementsByTagName("li");

	// Modifier le code pour appliquer le changement pour toutes les cartes
	// Il faut utiliser une boucle avec un index 
	for(let i = 0; i < lesCartes.length; i++){
		lesCartes[i].className = "coeur13";
	}
}

//=================================================================
function exemple2()
{
	retirerLesClasses();
	
	let lesCartes = document.getElementsByTagName("li");

	for(let i = 0; i < lesCartes.length; i++){
		lesCartes[i].className = "pique"+[i+1]
	}
}

//=================================================================
function exemple3()
{	
	retirerLesClasses();

	let lesCartes = document.getElementsByTagName("li");
	for (let i =0 ; i < lesCartes.length; i++) {
		
		lesCartes[i].className = "coeur"+[i+8]
		
		
		
	}
}

//=================================================================
function exemple4()
{ 	
	retirerLesClasses();
	let lesCartes = document.getElementsByTagName("li");
	for (let i = 0; i < lesCartes.length; i++) {
		
		lesCartes[i].className = "coeur"+[6-i]
		
	}
}

//=================================================================
function exemple5()
{   
	retirerLesClasses();
	let lesCartes = document.getElementsByTagName("li");
	for (let i = 0; i < lesCartes.length; i++) {
		
		lesCartes[i].className = "trefle"+[2*i+1]
		
	}
}
//=================================================================
function exemple6()
{   
	retirerLesClasses();
	let lesCartes = document.getElementsByTagName("li");
	for (let i = 0; i < lesCartes.length; i++) {
		
		lesCartes[i].className = "carreau"+[i%3+1]
		
	}
}

//=================================================================
function exemple7()
{   
	retirerLesClasses();
	let lesCartes = document.getElementsByTagName("li");
	for (let i = 0; i < lesCartes.length; i++) {
		
		let enseinge = (i%2 ===0) ? "pique": "coeur";
		lesCartes[i].className = enseinge + (i+1)
		
	}
}

//=================================================================
function exemple8()
{   
	retirerLesClasses();
	let lesCartes = document.getElementsByTagName("li");

	for(let i =0; i<lesCartes.length;i++){
		let numeroAleatoire = randNumber(13)+1;
		lesCartes[i].className = "carreau"+ numeroAleatoire;
	}
}

//=================================================================
function exemple9()
{   
	retirerLesClasses();
	let carteDepart = randNumber(8)+1;

	let lesCartes = document.getElementsByTagName("li");
	for(let i=0;i<lesCartes.length;i++){
		lesCartes[i].className = "pique" + (carteDepart +i)
	}
}

//=================================================================
function exemple10()
{   
	retirerLesClasses();

	let lesCartes = document.getElementsByTagName("li");
    for (let i = 0; i < lesCartes.length; i++) {
        let sorteAleatoire = tabSortes[randNumber(4)];
        
        let numeroAleatoire = randNumber(13) + 1;
        
        lesCartes[i].className = sorteAleatoire + numeroAleatoire;
    }
}



//=================================================================
// Gestion des événements des boutons
// On obtient les boutons de la page
let liste = document.getElementsByTagName("button");

for(let button of liste){
	button.onclick = function() {
		// On utilise leur Id comme nom de fonction et on appel cette fonction!!
		// window permet d'appeler une fonction dont le nom est contenu dans une chaîne de caractères. 
		window[button.getAttribute("id")].call();
	};	
}
