
# Projet de Réservation d'Hôtel - Webecom 2025

## Description

Le projet **4 Éléments** est une plateforme de réservation d'hôtels inspirée par les quatre éléments : Feu, Air, Terre et Eau. Ce site vous permet de découvrir des établissements uniques en fonction de ces éléments et de réserver votre séjour facilement.
Il permet aux utilisateurs de réserver une chambre d'hôtel en sélectionnant un type de logement, des options supplémentaires, et en remplissant un formulaire avec leurs informations personnelles et de séjour. L'application calcule ensuite le prix total de la réservation en fonction des choix de l'utilisateur, tout en effectuant des validations pour s'assurer que les informations saisies sont correctes.

Le projet inclut des fonctionnalités telles que la sélection dynamique d'options en fonction du logement choisi, la gestion des repas (petit-déjeuner, dîner) et la possibilité d'afficher un résumé détaillé dans une modal une fois la réservation validée.

## 🚀 **Démo en ligne**
👉 [https://maxcorni.github.io/4-elements/]


## Fonctionnalités


- **Sélection des hôtels** : Explorez des hôtels uniques inspirés des éléments naturels (Feu, Air, Terre, Eau).
- **Page de détails** : Accédez à des informations détaillées pour chaque hôtel avec des images et des descriptions complètes.
- **Réservation en ligne** : Réservez votre chambre directement sur la plateforme.

- **Sélection de logement** : L'utilisateur choisit un type de logement, et les options associées sont affichées dynamiquement. Les prix varient en fonction du type de chambre.
- **Sélection de repas** : L'utilisateur peut choisir de prendre un petit-déjeuner et/ou un dîner. Des options supplémentaires pour des régimes alimentaires spécifiques (végétarien, sans gluten, etc.) sont disponibles.
- **Validation des champs** : Le formulaire vérifie que les informations saisies sont valides, notamment pour les champs obligatoires comme le nom, l'email, le téléphone, les dates de séjour, et le nombre de nuits. Des messages d'erreur sont affichés en cas de saisie incorrecte.
- **Calcul du prix total** : Le prix total de la réservation est calculé en fonction des choix effectués, incluant le nombre de nuits, les options supplémentaires (chauffeur, guide, repas, etc.), et le type de chambre choisi.
- **Résumé de la réservation** : Une fois le formulaire validé, un résumé détaillé des informations de la réservation (type de chambre, repas choisis, prix total) s'affiche dans une modal. L'utilisateur peut fermer la modal une fois qu'il a pris connaissance des informations.
- **Réinitialisation du formulaire** : Un bouton permet de réinitialiser le formulaire, supprimant toutes les erreurs de validation et réinitialisant les champs.
- **Interactivité** : L'interface utilise des animations et des transitions fluides pour améliorer l'expérience utilisateur (par exemple, ouverture/fermeture des sections du formulaire, transition des éléments).

## Technologies utilisées

- **HTML5** pour la structure du contenu
- **CSS3** et **Sass** pour la mise en forme 1.85.0 compilé avec dart2js 3.7.0
- **JavaScript** pour l'interactivité
- **Node.js** pour le serveur de développement version 22.14.0
- **npm** pour la gestion des dépendances version 11.1.0

## Installation

1. Clone le projet depuis GitHub :

    ```bash
    git clone https://github.com/maxcorni/4-elements.git
    ```

2. Installe les dépendances (si tu utilises npm) :

    ```bash
    cd 4-elements
    npm install
    ```

3. Ouvre le fichier `index.html` dans ton navigateur pour voir l'application en action.

## Structure du projet

Voici un aperçu de la structure des dossiers du projet :

```

```
4-ELEMENTS/
│   .gitignore
│   favicon.png
│   index.html
│   package-lock.json
│   package.json
│   README.md
│   robots.txt
│
+---assets
│   |   main.scss
│   |
│   +---abstracts
│   |       _colors.scss
│   |       _index.scss
│   |       _mixins.scss
│   |       _typography.scss
│   |       _variables.scss
│   |
│   +---base
│   |       _global.scss
│   |       _reset-typography.scss
│   |       _reset.scss
│   |
│   +---components
│   |   |   _carousel.scss
│   |   |
│   |   +---buttons
│   |   |       _primary.scss
│   |   |       _secondary.scss
│   |   |
│   |   +---cards
│   |   |       _card.scss
│   |   |
│   |   \---modals
│   |           _modal.scss
│   |
│   +---images
│   |   +---icon
│   |   |
│   |   +---logo
│   |   |
│   |   +---photo
│   |   |   |
│   |   |   +---activity
│   |   |   +---service
│   |   |   +---earth
│   |   |   +---fire
│   |   |   +---air
│   |   |   \---water
│   |   |
│   |   \---video
│   |
│   +---layout
│   |       _footer.scss
│   |       _forms.scss
│   |       _grid.scss
│   |       _header.scss
│   |
│   +---pages
│   |       _fire-hotel.scss
│   |       _home.scss
│   |
│   \---script
│           script-form-home.js
│           script-form-reservation.js
│           script.js
│
+---css
│       styles.css
│       styles.css.map
│
+---fonts
│       Karla-Bold.ttf
│       Karla-Medium.ttf
│       Karla-Regular.ttf
│       PlayfairDisplay-Bold.ttf
│       PlayfairDisplay-Medium.ttf
│       PlayfairDisplay-Regular.ttf
│       styles.css
│
└---pages
        hotel-air.html
        hotel-eau.html
        hotel-feu.html
        hotel-terre.html
        reservation.html
```
```

## Auteurs

- **Maxime Cornillon** - [MaximeCornillon](https://github.com/maxcorni)

## License

Projet réalisé dans le cadre pédagogique de Webecom 2025. Non destiné à un usage commercial.


```
