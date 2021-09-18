const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


// Fonction qui instance une date pour cibler chaque seconde et la convertir en degré qui fait avancer l'aiguille

function setDate() {

    const now = new Date();  // Instanciation d'une date

    const seconds = now.getSeconds(); // On passe le paramètre pour passer l'argument en seconde
    const secondsDegrees = ((seconds / 60) * 360) +90; // Calcul pour permettre une rotation fluide d'axe en axe
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`; // On viens convertir la valeur degrès en un count de la variable secondsDegrees

    const minutes = now.getMinutes(); // Même chose ici pour les minutes
    const minuteDegrees = ((minutes / 60) * 360) +90; 
    minsHand.style.transform = `rotate(${minuteDegrees}deg)`; 

    const hours = now.getHours(); // Même chose ici pour les heures
    const hoursDegrees = ((hours / 12) * 360) +90; 
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`; 
}

 setInterval(setDate, 1000);