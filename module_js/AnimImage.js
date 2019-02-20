import {
    Util
} from './Util.js'


export class AnimImage {

    /**
     * Classe permettant de créer et d'animer une introduction
     * @param {string} lesImages - contient l'ensemble des mots d'intro
     * @param {DOMElement} elementParent - Conteneur de l'animation
     * @param {function} fonction - l'adresse de la fonction à exécuter après l'animation
         
     }}
     */

    constructor(lesImages, elementParent, fonction) {
        //Récupérer les valeurs passées en paramètre			
        this.lesImages = lesImages
        this.elmParent = elementParent
        this.AnimImage(this.lesImages)
        this.fonction = fonction
    }


    AnimImage(lesImages) {
        /* Création des élément DOM qui seront animés. 
        Les éléments seront intégré dans le conteneur elmParent
        */
            
        for (let i = 0; i< lesImages; i++){
            let elmImage = this.creerElement(this.elmParent, 'div', "", 'uneImage','pannel')
            elmImage.style.animationDelay = (i * 0.5) + "s";
            elmImage.style.backgroundImage = "url(../image/" + i +".jpg)";
        }

        /* On garde une référence sur la fonction terminerIntro */
        let refTerminerIntro = this.terminerIntro.bind(this)
    }

    creerElement(elmParent, balise, contenu, classCSS, classCSS2) {
        console.log(balise)
        let noeud = document.createElement(balise)
        if (contenu != '') {
            noeud.innerHTML = contenu
        }
        noeud.classList.add(classCSS)
        noeud.classList.add(classCSS2)
        elmParent.appendChild(noeud)

        /* SI le nombre de lettres est égal aux nombres d'enfants, on passe à l'animation suivante*/ 
        if(this.lesImages == elmParent.childElementCount){
            noeud.addEventListener('animationend', this.passerVersAnimationSuivante.bind(this))
        }
        return noeud
    }

    terminerIntro(evt) {
        console.log(evt)
        this.elmParent.lastChild.addEventListener('animationend', this.passerVersAnimationSuivante.bind(this))
    }

    passerVersAnimationSuivante(evt) {
        console.log("animation suivante")
        this.fonction()
    }

}