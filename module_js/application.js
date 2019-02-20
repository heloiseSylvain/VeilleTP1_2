
import {contenuIntro} from './contenuIntro.js' // le contenu de l'intoduction */
import {Introduction} from './Introduction.js' // 
import {AnimLettre} from './AnimLettre.js' //
import {AnimImage} from './AnimImage.js' //


/* l'élement de la page qui contiendra les éléments créés dynamiquement */
let p1 = document.getElementById('1')

// debutQuestionnaire()

    /* Une fois que l'animation des mots est terminé la fonction animLettre s'exécutera */ 
	console.log('debut animation lettre')
	const lesLettres = 'GAlleRie'
	let  monAnimLettre = new AnimLettre(lesLettres, p1, animationLettre)	

function animationLettre()
{
    /* Une fois que l'animation des mots est terminé la fonction animLettre s'exécutera */ 
	console.log('debut animation lettre 2')
	let p2 = document.getElementById('2')
	const lesLettres2 = 'cHAleuReuse'
	let  monAnimLettre = new AnimLettre(lesLettres2, p2, animationImage)	
}

function animationImage()
{
    /* Une fois que l'animation des mots est terminé la fonction animLettre s'exécutera */ 
	console.log('debut animation image')
	let wrapper = document.querySelector('.wrapper')
	const lesImages = 15;
	let  monAnimImage = new AnimImage(lesImages, wrapper, finAnim)	
}


function finAnim()
{
	console.log('animation terminée')
}










	



