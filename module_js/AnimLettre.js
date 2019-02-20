import {
    Util
} from './Util.js'


export class AnimLettre {

    /**
     * Classe permettant de créer et d'animer une introduction
     * @param {string} lesLettres - contient l'ensemble des mots d'intro
     * @param {DOMElement} elementParent - Conteneur de l'animation
     * @param {function} fonction - l'adresse de la fonction à exécuter après l'animation
         
     }}
     */

    constructor(lesLettres, elementParent, fonction) {
        //Récupérer les valeurs passées en paramètre			
        this.lesLettres = lesLettres
        this.elmParent = elementParent
        this.AnimLettre(this.lesLettres)
        this.fonction = fonction
    }


    AnimLettre(lesLettres) {
        /* Création des élément DOM qui seront animés. 
        Les éléments seront intégré dans le conteneur elmParent
        */
       let i = 0;
       let nbLettres = lesLettres.length;
        let elmConteneur = this.creerElement(this.elmParent,
            'p',
            '',
            'mot')
            
        for (let uneLettre of lesLettres){
            let elmLettre = this.creerElement(elmConteneur, 'div', uneLettre, 'mot')
            elmLettre.style.animationDelay = (i * 0.5) + "s";
            i++    
        }

        /* On garde une référence sur la fonction terminerIntro */
        let refTerminerIntro = this.terminerIntro.bind(this)
    }

    creerElement(elmParent, balise, contenu, classCSS) {
        console.log(balise)
        let noeud = document.createElement(balise)
        if (contenu != '') {
            noeud.innerHTML = contenu
        }
        noeud.classList.add(classCSS)
        elmParent.appendChild(noeud)

        /* SI le nombre de lettres est égal aux nombres d'enfants, on passe à l'animation suivante*/ 
        if(this.lesLettres.length == elmParent.childElementCount){
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