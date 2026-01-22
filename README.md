# KM CONSTRUCTIONS - Site Web Officiel

Site web professionnel pour **KM CONSTRUCTIONS**, entreprise de maçonnerie générale et gros œuvre basée à Fréjus (83).

![KM CONSTRUCTIONS](https://img.shields.io/badge/Status-Active-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 📋 À propos

Site vitrine pour KM CONSTRUCTIONS présentant les services de maçonnerie générale, gros œuvre, construction neuve, rénovation et extension.

### Informations de l'entreprise

- **Nom** : KM CONSTRUCTIONS
- **Gérant** : KAMLIOU MOHAMMED
- **SIREN** : 802 785 782
- **Activité** : Travaux de maçonnerie générale et gros œuvre de bâtiment
- **Depuis** : 2018
- **Adresse** : 550 RUE MARCEL PAGNOL, 83600 FRÉJUS
- **Téléphone** : +33 7 58 56 00 05
- **Email** : frejus83var@hotmail.com

## 🚀 Structure du projet

```
KMCONSTRUCTION/
├── index.html              # Page principale
├── css/
│   └── style.css          # Styles CSS
├── js/
│   └── main.js            # JavaScript (interactions, animations)
├── images/
│   ├── logo.png           # Logo KM CONSTRUCTIONS
│   ├── hero.jpg           # Image hero section
│   ├── about.jpg          # Image section À propos
│   ├── project1.jpg       # Image réalisation 1
│   ├── project2.jpg       # Image réalisation 2
│   ├── project3.jpg       # Image réalisation 3
│   ├── project4.jpg       # Image réalisation 4
│   ├── project5.jpg       # Image réalisation 5
│   └── project6.jpg       # Image réalisation 6
└── README.md              # Ce fichier
```

## 🎨 Fonctionnalités

- ✅ Design moderne et professionnel
- ✅ Responsive (mobile, tablette, desktop)
- ✅ Navigation fixe avec menu burger sur mobile
- ✅ Animations au scroll
- ✅ Section hero avec CTA
- ✅ Présentation de l'entreprise
- ✅ 6 services détaillés avec icônes
- ✅ Galerie de réalisations
- ✅ Formulaire de contact
- ✅ Carte Google Maps intégrée
- ✅ Footer complet avec informations légales
- ✅ SEO optimisé
- ✅ Accessibilité (WCAG)

## 📦 Installation et déploiement

### Option 1 : GitHub Pages (Recommandé)

1. **Préparer le repository**
   ```bash
   git clone https://github.com/WADIH-13/KMCONSTRUCTION.git
   cd KMCONSTRUCTION
   ```

2. **Ajouter vos images**
   - Placez le logo (`logo.png`) et les images dans le dossier `/images/`
   - Voir `images/placeholder-info.txt` pour les recommandations

3. **Activer GitHub Pages**
   - Allez sur https://github.com/WADIH-13/KMCONSTRUCTION/settings/pages
   - Dans "Source", sélectionnez la branche `main` ou `master`
   - Sélectionnez le dossier `/ (root)`
   - Cliquez sur "Save"
   - Votre site sera disponible à : `https://wadih-13.github.io/KMCONSTRUCTION/`

### Option 2 : Hébergement local (Test)

```bash
# Avec Python 3
python -m http.server 8000

# Avec Node.js (npx)
npx http-server

# Avec PHP
php -S localhost:8000
```

Puis ouvrez `http://localhost:8000` dans votre navigateur.

### Option 3 : Autres hébergeurs

Le site peut être déployé sur n'importe quel hébergeur web :
- **Netlify** : Glissez-déposez le dossier sur netlify.com/drop
- **Vercel** : Importez depuis GitHub
- **OVH, O2Switch, etc.** : Uploadez les fichiers via FTP

## 🖼️ Ajouter vos images

### Images requises

Téléchargez des images **libres de droits** depuis :
- [Unsplash](https://unsplash.com/) (gratuit, haute qualité)
- [Pexels](https://pexels.com/) (gratuit, haute qualité)

### Mots-clés de recherche

- `construction site` - Pour l'image hero
- `construction team` - Pour la section À propos
- `house construction` - Pour les réalisations
- `masonry work` - Travaux de maçonnerie
- `building renovation` - Rénovation
- `concrete foundation` - Fondations

### Dimensions recommandées

- **Logo** : 200x50px (PNG avec fond transparent)
- **Hero** : 1920x1080px minimum
- **About** : 800x600px
- **Projects** : 800x600px chacune

### Intégration des images

1. Téléchargez les images depuis Unsplash/Pexels
2. Renommez-les selon la structure :
   - `logo.png`
   - `hero.jpg`
   - `about.jpg`
   - `project1.jpg` à `project6.jpg`
3. Placez-les dans le dossier `/images/`

## 🎨 Personnalisation

### Modifier les couleurs

Éditez `/css/style.css` et modifiez les variables CSS :

```css
:root {
    --primary-color: #D35400;      /* Orange principal */
    --primary-dark: #A04000;       /* Orange foncé */
    --secondary-color: #34495E;    /* Gris bleu */
    --accent-color: #E67E22;       /* Orange accent */
}
```

### Modifier les informations

Éditez `/index.html` et modifiez :
- Les textes des sections
- Les coordonnées dans la section Contact
- Les informations du footer

### Modifier les services

Dans `/index.html`, section `#services`, éditez les cartes de service pour :
- Changer les titres
- Modifier les descriptions
- Ajouter/supprimer des services

### Personnaliser la carte Google Maps

Dans `/index.html`, section `#contact`, remplacez l'URL de l'iframe :

1. Allez sur [Google Maps](https://www.google.fr/maps)
2. Recherchez votre adresse
3. Cliquez sur "Partager" > "Intégrer une carte"
4. Copiez le code iframe
5. Remplacez l'iframe existante dans le HTML

## 🔧 Technologies utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Styles modernes, Grid, Flexbox, Animations
- **JavaScript (Vanilla)** : Interactions, animations au scroll
- **Google Maps API** : Intégration de la carte
- **SVG Icons** : Icônes vectorielles

## 📱 Responsive Design

Le site s'adapte automatiquement à tous les écrans :

- 📱 **Mobile** : < 480px
- 📱 **Tablette** : 481px - 768px
- 💻 **Desktop** : > 769px

## ♿ Accessibilité

- Balises sémantiques HTML5
- Attributs `alt` sur toutes les images
- Navigation au clavier
- Contraste de couleurs conforme WCAG
- Labels sur les champs de formulaire

## 🔍 SEO

- Balises meta optimisées
- Structure sémantique
- Sitemap.xml (à générer)
- Robots.txt (à créer si nécessaire)

### Créer un sitemap.xml

Créez un fichier `sitemap.xml` à la racine :

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://wadih-13.github.io/KMCONSTRUCTION/</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

## 📧 Formulaire de contact

Le formulaire utilise un `mailto:` link car il n'y a pas de backend.

### Pour un vrai backend (optionnel)

Vous pouvez intégrer :
- **Formspree** : https://formspree.io/
- **EmailJS** : https://www.emailjs.com/
- **Netlify Forms** : Si hébergé sur Netlify

Exemple avec Formspree :

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <!-- Vos champs de formulaire -->
</form>
```

## 🚀 Optimisation des performances

### Optimiser les images

Avant d'uploader les images :

```bash
# Installer ImageMagick (optionnel)
brew install imagemagick  # macOS
apt-get install imagemagick  # Linux

# Optimiser une image
convert input.jpg -quality 85 -resize 1920x1080 output.jpg
```

Ou utilisez des outils en ligne :
- [TinyPNG](https://tinypng.com/)
- [Squoosh](https://squoosh.app/)

### Minifier CSS et JS

Pour la production, vous pouvez minifier les fichiers :

```bash
# Avec npm (optionnel)
npm install -g clean-css-cli uglify-js

# Minifier CSS
cleancss -o css/style.min.css css/style.css

# Minifier JS
uglifyjs js/main.js -o js/main.min.js
```

Puis modifiez les liens dans `index.html`.

## 📝 Checklist de lancement

- [ ] Ajouter le logo de l'entreprise
- [ ] Ajouter toutes les images (hero, about, projects)
- [ ] Vérifier toutes les informations de contact
- [ ] Personnaliser les textes et descriptions
- [ ] Tester le formulaire de contact
- [ ] Vérifier la carte Google Maps
- [ ] Tester sur mobile/tablette/desktop
- [ ] Optimiser les images
- [ ] Activer GitHub Pages
- [ ] Ajouter Google Analytics (optionnel)
- [ ] Créer un sitemap.xml
- [ ] Tester la vitesse (PageSpeed Insights)

## 🔗 Liens utiles

- [Unsplash - Images gratuites](https://unsplash.com/)
- [Pexels - Photos gratuites](https://pexels.com/)
- [Google Fonts](https://fonts.google.com/)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Can I Use - Compatibilité navigateurs](https://caniuse.com/)

## 📄 Licence

© 2024 KM CONSTRUCTIONS - Tous droits réservés

## 👨‍💻 Support

Pour toute question ou assistance :
- Email : frejus83var@hotmail.com
- Téléphone : +33 7 58 56 00 05

---

**Développé avec ❤️ pour KM CONSTRUCTIONS**
