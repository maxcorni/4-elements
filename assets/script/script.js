// Objectif : Je veux créer un carrousel d'images où, lorsqu'une image est cliquée, elle se déplace pour afficher la suivante. 
// Si on atteint la dernière image, le carrousel revient au début. L'animation de défilement doit être fluide et 
// dépendre de la largeur de l'écran (avec un comportement différent sur mobile).

// Gérer le défilement des images lorsque l'on clique dessus, en prenant en compte la direction du défilement et la largeur de l'écran.
// Réinitialiser l'animation lorsqu'on atteint la dernière image pour recommencer depuis la première image.
// Adapter la largeur de défilement en fonction de la taille de l'écran pour une meilleure expérience utilisateur.
// S'assurer que le carrousel se remet correctement en place lors du redimensionnement de la fenêtre


document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".image-container").forEach(container => {
        const images = container.querySelectorAll("img");
        const totalImages = images.length;
        let index = 0;
        let isTransitioning = false;

        function getSlideWidth() {
            return window.innerWidth < 900 ? 30.9 : 50.3;
        }

        function nextSlide() {
            if (isTransitioning) return;
            isTransitioning = true;

            index++;
            container.style.transition = "transform 0.5s ease-in-out";
            let slideWidth = getSlideWidth();

            if (container.parentElement.classList.contains("fire-anim") || container.parentElement.classList.contains("earth-anim")) {
                container.style.transform = `translateX(-${index * slideWidth}rem)`;
            } else if (container.parentElement.classList.contains("water-anim") || container.parentElement.classList.contains("air-anim")) {
                container.style.transform = `translateX(${index * slideWidth}rem)`;
            } else {
                container.style.transform = `translateX(-${index * slideWidth}rem)`;
            }

            if (index === totalImages - 1) {
                setTimeout(() => {
                    container.style.transition = "none";
                    container.style.transform = "translateX(0)";
                    index = 0;
                    isTransitioning = false;
                }, 500);
            } else {
                setTimeout(() => {
                    isTransitioning = false;
                }, 500);
            }
        }

        images.forEach(image => {
            image.addEventListener("click", () => {
                nextSlide(); 
            });
        });

        window.addEventListener("resize", () => {
            index = 0;
            container.style.transition = "none";
            container.style.transform = "translateX(0)";
        });
    });
});


//Objectif : Je veux créer un menu burger qui s'ouvre lorsque l'utilisateur clique sur un bouton (menuBurger) 
//et se ferme soit en cliquant sur un bouton de fermeture (closeMenuBurgerBtn), soit en cliquant en dehors du menu (en cliquant sur l'overlay). 
//Le menu s'affiche en ajoutant une classe "active" et se cache en la supprimant.

// Ajouter un gestionnaire d'événements pour ouvrir le menu lorsque le bouton de menu burger est cliqué.
// Ajouter un gestionnaire d'événements pour fermer le menu lorsque le bouton de fermeture est cliqué.
// Fermer le menu si l'utilisateur clique en dehors du menu burger (sur l'overlay).

// Attendre que le DOM soit entièrement chargé avant d'exécuter le code
document.addEventListener("DOMContentLoaded", () => {
    // Sélectionner les éléments nécessaires : l'overlay du menu burger, le bouton pour ouvrir et le bouton pour fermer
    const menuBurger = document.querySelector(".menu-burger-overlay");
    const openMenuBurgerBtn = document.getElementById("menuBurger");
    const closeMenuBurgerBtn = document.querySelector(".close-menu-burger");

    // Ajouter un gestionnaire d'événements au bouton pour ouvrir le menu burger
    openMenuBurgerBtn.addEventListener("click", () => {
        // Ajouter la classe "active" à l'overlay pour afficher le menu burger
        menuBurger.classList.add("active");
    });

    // Ajouter un gestionnaire d'événements au bouton pour fermer le menu burger
    closeMenuBurgerBtn.addEventListener("click", () => {
        // Supprimer la classe "active" pour masquer le menu burger
        menuBurger.classList.remove("active");
    });

    // Ajouter un gestionnaire d'événements à l'overlay du menu pour le fermer lorsqu'on clique en dehors du menu
    menuBurger.addEventListener("click", (e) => {
        // Si l'élément cliqué est l'overlay (et non pas un autre élément du menu), fermer le menu
        if (e.target === menuBurger) {
            menuBurger.classList.remove("active");
        }
    });
});
