// 1. Inverser une chaîne
function inverserChaine(chaine) {
    return chaine.split("").reverse().join("");
}

// 2. Compter le nombre de caractères
function compterCaracteres(chaine) {
    return chaine.length;
}

// 3. Mettre en majuscule la première lettre de chaque mot
function mettreEnMajuscule(phrase) {
    return phrase.split(" ").map(mot => mot.charAt(0).toUpperCase() + mot.slice(1)).join(" ");
}


