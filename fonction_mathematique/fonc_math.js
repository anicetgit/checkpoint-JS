// 1. Calcul de la factorielle d'un nombre
function factorielle(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorielle(n - 1);
}

// 2. Vérifier si un nombre est premier
function estNombrePremier(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// 3. Générer la suite de Fibonacci jusqu'à un nombre donné de termes
function fibonacci(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, n);
}
