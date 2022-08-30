/**
 * Jeu du nombre mystère
 * @author  Nika Stanic
 * @version 0.1
 * @since   2022-08-30
 */

// Main IIFE (Immediately-Invoked Function Expression, se prononce "iffy")
(function main() {
    "use strict";
    let reponse;
    let nbEssais = 0;

    /**
     * Retourne un nombre entier aléatoire compris entre min et max
     * @param min
     * @param max
     * @returns {number}
     */
    function tireNombre(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    do {
        let nbMystere = tireNombre(1, 100);
        reponse = Number(prompt('Le nombre a deviner est compris entre 1 et 100'));
        nbEssais++;

        if (reponse === nbMystere) {
            alert(`Vous avez trouver apres ${nbEssais} essai`);
        } if (reponse > nbMystere) {
            alert(`C'est moins !`);
        } else {
            alert(`C'est plus !`);
        }

    } while (reponse >= 1 || reponse <= 100);

}()); // main IIFE
