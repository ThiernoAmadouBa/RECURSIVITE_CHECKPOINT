// Leap Year Checker

function yearChecker(number) {


    if (annee % 4 === 0) {
        alert("l'année de " + annee + " est une année bissextile");

    }
    else if (annee % 400 === 0) {
        alert("l'année de " + annee + " est une année bissextile");

    }
    else {

        alert("l'année  " + annee + " n'est pas bissextile");

    }




    return annee;

}
let annee = prompt('veuillez saisir une année ')
console.log(yearChecker(annee));

// Ticket Pricing 

function prixBillet(age) {

    if (age <= 12) {
        alert("le prix d'un billet est 10$");
    }

    else if (age >= 12 && age <= 17) {
        alert("le prix d'un billet est 15$");
    }
    else {
        alert("le prix d'un billet est 20$");
    }


    return age;
}

let age = prompt("veuillez saisir un age ")
console.log(prixBillet(age));


//  Séquence de Fibonacci

   function fibonacci(n) {
       if (n <= 1) { // Cas de base
           return n;
       } else {
           return fibonacci(n - 1) + fibonacci(n - 2); // Appel récursif
       }
   }
   console.log(fibonacci(7)); 


