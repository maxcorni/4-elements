// Objectif : L'objectif est de gérer l'affichage et la sélection d'options en fonction du choix d'un logement. 
// Lorsque l'utilisateur sélectionne un type de logement, les options correspondantes (Fire, Air, Earth, Water) 
// s'affichent et la première option est automatiquement sélectionnée. Les autres options sont masquées.

// La fonction 'toggleOptions' gère l'affichage des options en fonction du logement sélectionné.
function toggleOptions() {
    const logement = document.getElementById("logement").value;  // Récupère le type de logement sélectionné
    const options = ["fire", "air", "earth", "water"]; // Les options possibles

    // Parcourt chaque option et affiche les éléments correspondants
    options.forEach(option => {
        const fieldset = document.getElementById(`options-${option}`); // Récupère la section des options
        const radios = fieldset.querySelectorAll("input[type='radio']"); // Récupère les radios dans cette section

        // Si l'option correspond au logement sélectionné, on l'affiche et coche la première option
        if (logement === option) {
            fieldset.style.display = "block";  // Affiche la section des options
            if (radios.length > 0) {
                radios[0].checked = true; // Coche la première option si disponible
            }
        } else {
            fieldset.style.display = "none";  // Masque la section des options
            radios.forEach(radio => radio.checked = false); // Décoche toutes les radios
        }
    });
}

// Objectif : Je veux créer une fonction qui récupère les paramètres 'hotel' et 'option' dans l'URL 
// et les utilise pour pré-sélectionner un logement et une option dans le formulaire. 
// Ainsi, lorsque l'utilisateur arrive sur la page avec ces paramètres, le logement correspondant est 
// déjà sélectionné dans le menu déroulant, et l'option correspondante est automatiquement cochée. 
// Cela permettra à l'utilisateur de voir ses choix déjà faits sans avoir à refaire la sélection.

function preSelectHotelAndOption() {
    let params = new URLSearchParams(window.location.search);  // Récupère les paramètres de l'URL
    let hotel = params.get("hotel");  // Récupère le paramètre 'hotel' de l'URL
    let option = params.get("option");  // Récupère le paramètre 'option' de l'URL

    // Si un hôtel est sélectionné dans l'URL, on met à jour le select et on affiche les options correspondantes
    if (hotel) {
        let hotelSelect = document.getElementById("logement");  // Récupère l'élément select pour le logement

        if (hotelSelect) {
            hotelSelect.value = hotel;  // Sélectionne l'hôtel dans le select
            toggleOptions();  // Affiche les options correspondantes
            // Si une option est aussi définie, on la coche
            if (option) {
                let radio = document.getElementById(option);  // Récupère le bouton radio correspondant à l'option
                if (radio) {
                    radio.checked = true;  // Coche l'option
                }
            }
        }
    }
}

// Objectif : Je veux créer une fonction qui gère l'affichage de la section diététique en fonction des choix de repas. 
// Si l'utilisateur sélectionne le petit-déjeuner ou le dîner, la section correspondante doit s'afficher.
// Si aucun des deux n'est sélectionné, la section doit rester cachée. 
// En plus, je vais ajouter des écouteurs d'événements sur les cases à cocher (petit-déjeuner et dîner) pour que, dès que l'utilisateur change son choix, 
// la section diététique s'affiche ou se cache dynamiquement.

// La fonction 'toggleDiet' gère l'affichage de la section diététique en fonction des choix de repas (petit-déjeuner ou dîner).
function toggleDiet() {
    const dietSection = document.getElementById("dietSection");  // Récupère la section diététique
    const breakfast = document.getElementById("breakfast").checked;  // Vérifie si le petit-déjeuner est sélectionné
    const dinner = document.getElementById("dinner").checked;  // Vérifie si le dîner est sélectionné

    // Affiche la section diététique si un repas est sélectionné, sinon la masque
    dietSection.style.display = (breakfast || dinner) ? "block" : "none";
};

// Ajoute des écouteurs d'événements pour changer l'affichage de la section diététique lorsque les choix de repas sont modifiés
document.getElementById("breakfast").addEventListener("change", toggleDiet);
document.getElementById("dinner").addEventListener("change", toggleDiet);


// Objectif : Je veux créer une fonction qui efface tous les messages d'erreur affichés dans le formulaire. 
// Cette fonction va chercher tous les éléments ayant la classe "error-message" et vider leur texte. 
// De plus, elle va réinitialiser un compteur d'erreurs (window.errorCount) à 0, 
// ce qui permettra de garder une trace du nombre d'erreurs lorsqu'on les réinitialise.

function clearErrors() {
    const errorMessages = document.querySelectorAll(".error-message");  // Récupère tous les messages d'erreur
    errorMessages.forEach(error => error.innerText = "");  // Vide le texte de chaque message d'erreur
    window.errorCount = 0;  // Réinitialise le compteur d'erreurs à 0
}

// Objectif : Je veux créer une fonction qui valide un champ de formulaire en fonction d'une condition spécifique. 
// La fonction prend en paramètre la valeur du champ, une condition de validation, un élément d'erreur et un message d'erreur. 
// Si la condition est remplie (c'est-à-dire si la valeur du champ ne correspond pas à la condition), 
// elle affiche le message d'erreur dans l'élément spécifié et incrémente un compteur d'erreurs. 
// Si la condition n'est pas remplie (la validation est réussie), elle efface le message d'erreur.

function validateField(value, condition, errorElement, errorMessage) {
    if (condition(value)) {  // Si la condition de validation échoue
        errorElement.innerText = errorMessage;  // Affiche le message d'erreur
        window.errorCount++;  // Incrémente le compteur d'erreurs
    } else {
        errorElement.innerText = "";  // Efface le message d'erreur si la condition est respectée
    }
}


// Objectif : Je veux créer une fonction qui calcule le prix total d'un séjour en fonction des choix de l'utilisateur. 
// La fonction prend en paramètre une chambre sélectionnée et utilise les informations de dates (arrivée et départ), 
// ainsi que les options choisies (chauffeur, guide, petit-déjeuner, dîner) pour calculer le montant total du séjour. 
// Le calcul est basé sur le nombre de nuits entre la date d'arrivée et de départ, ainsi que sur les tarifs des différentes options. 
// Les tarifs des chambres sont ajustés en fonction de la chambre choisie et les frais supplémentaires (chauffeur, guide, repas) sont ajoutés au total. 
// Si les dates sont invalides, la fonction retourne 0 comme prix total.

function prixTotal(selectedRoom) {
    const oneDay = 24 * 60 * 60 * 1000;  // Nombre de millisecondes dans une journée
    const arrivee = new Date(document.getElementById("arrivee").value);  // Date d'arrivée
    const depart = new Date(document.getElementById("depart").value);  // Date de départ
    
    // Vérifier si les dates sont valides
    if (isNaN(arrivee.getTime()) || isNaN(depart.getTime())) {
        console.error("Les dates sont invalides");
        return 0;  // Retourner 0 si les dates ne sont pas valides
    }

    const nights = Math.round((depart - arrivee) / oneDay);  // Calcul du nombre de nuits

    option1 = ["igloos", "pool", "underground"];  // Options pour la catégorie de chambre la moins chère
    option2 = ["laponieSuite", "noPool", "seaView"];  // Options pour la catégorie de chambre la plus chère

    // Tarifs des options supplémentaires
    const tarifs = {
        chauffeur: 11,
        guide: 20,
        breakfast: 15,
        dinner: 15
    };

    let total = 0;  // Initialisation du total
    const chauffeur = document.getElementById("chauffeur").checked;  // Vérifie si l'option chauffeur est sélectionnée
    const guide = document.getElementById("guide").checked;  // Vérifie si l'option guide est sélectionnée
    const breakfast = document.getElementById("breakfast").checked;  // Vérifie si l'option petit-déjeuner est sélectionnée
    const dinner = document.getElementById("dinner").checked;  // Vérifie si l'option dîner est sélectionnée
    const personnes = parseInt(document.getElementById("personnes").value.trim(), 10);  // Nombre de personnes

    // Comparaison avec les options de chambre
    if (option1.includes(selectedRoom)) {
        total += 500 * nights;  // Tarif pour une chambre de la première catégorie
    } else if (option2.includes(selectedRoom)) {
        total += 850 * nights;  // Tarif pour une chambre de la deuxième catégorie
    }

    // Ajout des options supplémentaires au total
    total += chauffeur ? tarifs.chauffeur * nights : 0;
    total += guide ? tarifs.guide * nights : 0;
    total += breakfast ? tarifs.breakfast * nights * personnes : 0;
    total += dinner ? tarifs.dinner * nights * personnes : 0;

    return { total, nights };  // Retourne le prix total et le nombre de nuits
}


// Objectif : Je veux valider un formulaire de réservation en vérifiant les champs fournis par l'utilisateur. 
// Lorsqu'un utilisateur soumet le formulaire, l'événement 'submit' est intercepté, ce qui empêche le comportement par défaut du formulaire (soumission). 
// Ensuite, toutes les erreurs précédentes sont effacées avec la fonction 'clearErrors'. 
// Les valeurs des champs sont récupérées et validées une par une à l'aide de la fonction 'validateField'.
// Si des erreurs sont détectées (par exemple, un nom trop court, un email invalide, etc.), des messages d'erreur sont affichés.
// Le nombre total d'erreurs est comptabilisé et si une erreur est présente, un message indiquant qu'il y a des erreurs est affiché.
// Si toutes les validations sont réussies, un récapitulatif de la réservation est affiché avec les informations fournies, telles que le nom, l'adresse, les dates, les repas choisis, et le total calculé. 
// En fonction de l'hôtel et de la chambre sélectionnée, le prix est ajusté et les options supplémentaires (comme les repas et les services) sont prises en compte dans le calcul final.

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();  // Empêche l'envoi par défaut du formulaire
    clearErrors();  // Efface les erreurs précédentes

    const lastName = document.getElementById("lastname").value.trim();
    let lastNameError = document.getElementById("error-lastname");
    const firstName = document.getElementById("firstname").value.trim();
    let firstNameError = document.getElementById("error-firstname");

    const number = document.getElementById("address-number").value.trim();
    const address = document.getElementById("address").value.trim();
    const postalCode = document.getElementById("postal-code").value.trim();
    const city = document.getElementById("city").value.trim();

    let numberError = document.getElementById("error-number");
    let addressError = document.getElementById("error-address");
    let postalError = document.getElementById("error-postal");
    let cityError = document.getElementById("error-city");

    const email = document.getElementById("email").value.trim();
    let emailError = document.getElementById("error-email");
    const phone = document.getElementById("phone").value.replace(/\s+/g, '').trim();
    let phoneError = document.getElementById("error-phone");

    const personnes = parseInt(document.getElementById("personnes").value.trim(), 10);
    let personnesError = document.getElementById("error-personnes");

    const arrivee = new Date(document.getElementById("arrivee").value);
    const depart = new Date(document.getElementById("depart").value);
    let datesError = document.getElementById("error-dates");

    const petitDejeuner = document.getElementById("breakfast").checked;
    const dinner = document.getElementById("dinner").checked;

    const guide =  document.getElementById("guide").checked;
    const chauffeur =  document.getElementById("chauffeur").checked;
    const regime = document.getElementById("regime").value;
    let regimeError = document.getElementById("error-regime");
    const restriction = document.getElementById("restriction").value;
    let restrictionError = document.getElementById("error-restriction");

    const logement = document.getElementById("logement").value;
    const errorLogement = document.getElementById("error-logement");

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(\+\d{1,3}[-.\s]?)?\d{10,14}$/;

    // Validation des champs individuels
    validateField(lastname, val => val.length < 2 || val.length > 50, lastNameError, "Nom invalide (2-50 caractères)");
    validateField(firstName, val => val.length < 2 || val.length > 50, firstNameError, "Prénom invalide (2-50 caractères)");

    validateField(number, val => isNaN(val) || val === "", numberError, "Numéro de rue invalide");
    validateField(address, val => val.length < 5 || val.length > 150, addressError, "Adresse invalide (5-150 caractères)");
    validateField(postalCode, val => !/^\d{5}$/.test(val), postalError, "Code postal invalide (5 chiffres)");
    validateField(city, val => val.length === 0 || val.length > 100, cityError, "Ville invalide (1-100 caractères)");

    validateField(email, val => val.length > 100 || !emailRegex.test(val), emailError, "Email invalide");
    validateField(phone, val => !phoneRegex.test(val), phoneError, "Téléphone invalide (10-14 caractères)");

    validateField(personnes, val => isNaN(val) || val < 1 || val > 2, personnesError, "Nombre de personnes invalide (1-2)");

    // Validation des repas et des restrictions alimentaires
    validateField([petitDejeuner, dinner], ([breakfast, dinner]) => {
        return (breakfast || dinner) && regime === "";
    }, regimeError, "Veuillez spécifier un régime si vous prenez le petit-déjeuner ou le dîner");

    validateField([petitDejeuner, dinner], ([breakfast, dinner]) => {
        return (breakfast || dinner) && restriction === "";
    }, restrictionError, "Veuillez spécifier des restrictions si vous prenez le petit-déjeuner ou le dîner");

    // Validation des dates
    validateField([arrivee, depart], ([arrivee, depart]) => {
        return isNaN(arrivee.getTime()) || isNaN(depart.getTime()) || arrivee < today || depart <= arrivee;
    }, datesError, "Dates invalides (arrivée doit être aujourd’hui ou plus tard, départ après arrivée)");

    // Validation de la sélection de l'hôtel
    validateField(logement, val => !val, errorLogement, "Veuillez sélectionner un hôtel.");

    let selectedRoom = "";
    // Vérifie qu'une chambre est sélectionnée pour Fire, Air, et Earth (sauf Water)
    if (logement !== "water") {
        selectedRoom = document.querySelector(`#options-${logement} input[type="radio"]:checked`);
        validateField(selectedRoom, val => !val, errorLogement, "Veuillez sélectionner une chambre.");
        selectedRoom = selectedRoom ? selectedRoom.id : ""; 
    } else {
        selectedRoom = "Caisson immergé";
    }

    console.log(selectedRoom);

    const result = document.getElementById("result");

    // Si des erreurs sont présentes, affiche un message d'erreur
    if (window.errorCount > 0) {
        result.innerHTML = `<p>Il reste des erreurs</p>`;
        return; 
    } else {
        // Si tout est validé, calcul du prix total et affichage du récapitulatif
        let { total, nights } = prixTotal(selectedRoom);

        result.innerHTML = `
            <p><span>Bonjour :</span> ${firstName} ${lastName}</p>
            <p><span>Adresse :</span> ${number} ${address} ${postalCode} ${city}</p>
            <p><span>Adresse Email :</span> ${email}</p>
            <p><span>Numéro de téléphone :</span> ${phone}</p>
            <p><span>Type d'Hotel :</span> ${logement}</p>
            <p><span>Chambre choisie :</span> ${selectedRoom}</p>
            <p><span>Nombre de personnes :</span> ${personnes}</p>
            <p><span>Dates de séjour :</span> ${arrivee.toLocaleDateString()} - ${depart.toLocaleDateString()}</p>
            <p><span>Nombre de nuits :</span> ${nights}</p>
            
            ${petitDejeuner || dinner ? 
                `<p><span>Repas inclus :</span> ${petitDejeuner ? "Petit-déjeuner" : ""}${petitDejeuner && dinner ? " et " : ""}${dinner ? "Dîner" : ""}</p>` +
                (regime ? `<p><span>Régime :</span> ${regime}</p>` : "") +
                (restriction ? `<p><span>Restriction alimentaire :</span> ${restriction}</p>` : "") : ""}

            ${guide ? `<p><span>Visite guidée :</span> Oui</p>` : ""}
            ${chauffeur ? `<p><span>Chauffeur :</span> Oui</p>` : ""}
            
            <p><span>Total :</span> ${total}€</p>
        `;

        // Affiche le modal de confirmation
        showModal()
    }
});


// Lorsqu'un utilisateur clique sur le bouton de réinitialisation (resetBtn), le formulaire est remis à zéro, 
// toutes les erreurs sont effacées et dietSection est cachée.
document.getElementById("resetBtn").addEventListener("click", function() {
    document.getElementById("form").reset();
    clearErrors();
    document.getElementById("dietSection").style.display = "none";
});

const modal = document.getElementById("formResult");
const closeBtn = document.getElementById("close");

// Pour afficher la modal
function showModal() {
    modal.style.display = "flex";
}

// Pour fermer la modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});
