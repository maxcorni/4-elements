//je veux intercepter la valeur du choix hotel afin de rediriger l'utilisateur vers la page du site correspondante. 
//par exemple si l'utilisateur a choisit hotel feu dans choisir un hotel alors on le redirige vers la page hotel-feu.html

// Ajoute un écouteur d'événements sur le formulaire avec la classe "home-form" pour intercepter son envoi
document.querySelector(".home-form").addEventListener("submit", function (event) {
    // Empêche le comportement par défaut de l'événement (soumission classique du formulaire)
    event.preventDefault(); 

    // Récupère la valeur sélectionnée dans l'élément ayant l'ID "element" (choix de l'hôtel)
    let hotelChoice = document.getElementById("element").value;
    
    // Crée un objet qui associe chaque choix à une page spécifique
    let pages = {
        "feu": "pages/hotel-feu.html",
        "air": "pages/hotel-air.html",
        "terre": "pages/hotel-terre.html",
        "eau": "pages/hotel-eau.html"
    };

    // Vérifie si le choix de l'utilisateur est présent dans l'objet 'pages'
    if (pages[hotelChoice]) {
        // Si le choix est valide, redirige l'utilisateur vers la page correspondante
        window.location.href = pages[hotelChoice];
    }
});
