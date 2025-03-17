// 1. Trouver le maximum
function trouverMax(tableau) {
    return Math.max(...tableau);
}

// 2. Trouver le minimum
function trouverMin(tableau) {
    return Math.min(...tableau);
}

// 3. Calculer la somme du tableau
function sommeTableau(tableau) {
    return tableau.reduce((acc, valeur) => acc + valeur, 0);
}

// 4. Filtrer un tableau selon une condition
function filtrerTableau(tableau, condition) {
    return tableau.filter(condition);
}


