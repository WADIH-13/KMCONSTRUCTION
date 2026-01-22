# Guide de Remplacement des Images - KM CONSTRUCTIONS

## ⚠️ IMPORTANT - Images à remplacer

Les images actuelles sont des **placeholders SVG temporaires**. Elles doivent être remplacées par de vraies photos professionnelles avant la mise en production.

## 📸 Liste des images à remplacer

### 1. Logo (PRIORITÉ ABSOLUE)
- **Fichier:** `images/logo.png`
- **Description:** Logo officiel KM CONSTRUCTIONS
- **Format:** PNG avec fond transparent
- **Dimensions recommandées:** 200px de largeur max, hauteur proportionnelle
- **Source:** Logo fourni par l'entreprise
- **Note:** Si le logo fourni a un fond blanc, c'est acceptable

### 2. Image Hero (arrière-plan)
- **Fichier:** `images/hero-bg.jpg`
- **Description:** Grande photo de chantier de construction professionnelle
- **Format:** JPG
- **Dimensions:** 1920x1080px minimum (Full HD)
- **Poids cible:** < 800KB (après compression)
- **Suggestions:**
  - Photo de chantier en action
  - Équipement de construction visible
  - Bonne luminosité
  - Pas trop de détails pour que le texte reste lisible

**Sources recommandées:**
```
https://unsplash.com/s/photos/construction-site
https://unsplash.com/s/photos/building-construction
https://www.pexels.com/search/construction%20site/
```

**Mots-clés de recherche:**
- "construction site"
- "building construction"
- "construction work"
- "masonry"

### 3. Image À propos
- **Fichier:** `images/about.jpg`
- **Description:** Photo de l'équipe ou chantier professionnel
- **Format:** JPG
- **Dimensions:** 800x600px
- **Poids cible:** < 400KB
- **Suggestions:**
  - Photo de l'équipe KM CONSTRUCTIONS (idéal)
  - Ou photo de chantier avec ouvriers
  - Bonne qualité professionnelle

### 4-9. Images Réalisations (Galerie)
Photos de projets réalisés ou de chantiers similaires.

#### Réalisation 1: Maçonnerie
- **Fichier:** `images/realisation-1.jpg`
- **Description:** Travaux de maçonnerie (murs, murets)
- **Mots-clés:** "masonry work", "brick laying", "mason at work"

#### Réalisation 2: Gros œuvre
- **Fichier:** `images/realisation-2.jpg`
- **Description:** Travaux de gros œuvre (fondations, structure)
- **Mots-clés:** "building foundation", "concrete work", "construction structure"

#### Réalisation 3: Mur en briques
- **Fichier:** `images/realisation-3.jpg`
- **Description:** Mur en briques ou parpaings
- **Mots-clés:** "brick wall", "concrete block wall", "masonry wall"

#### Réalisation 4: Construction neuve
- **Fichier:** `images/realisation-4.jpg`
- **Description:** Projet de construction neuve en cours
- **Mots-clés:** "new construction", "house building", "residential construction"

#### Réalisation 5: Rénovation
- **Fichier:** `images/realisation-5.jpg`
- **Description:** Projet de rénovation
- **Mots-clés:** "building renovation", "construction renovation", "house restoration"

#### Réalisation 6: Extension
- **Fichier:** `images/realisation-6.jpg`
- **Description:** Extension de maison
- **Mots-clés:** "house extension", "home addition", "building extension"

**Dimensions pour toutes les réalisations:** 800x600px
**Poids cible:** < 300KB chacune

## 📥 Procédure de téléchargement (Unsplash)

### Étape 1: Recherche
1. Aller sur https://unsplash.com
2. Rechercher avec les mots-clés en anglais
3. Filtrer par orientation: "Landscape" (paysage)

### Étape 2: Téléchargement
1. Cliquer sur la photo choisie
2. Cliquer sur le bouton "Download" (pas "Download free")
3. Choisir la taille:
   - **Hero:** Large (1920px+)
   - **About & Réalisations:** Medium (1024px ou Original si < 2MB)

### Étape 3: Licence
- Les photos Unsplash sont gratuites pour usage commercial
- Pas d'attribution requise (mais appréciée)
- Vérifier quand même la licence de chaque photo

## 🛠️ Optimisation des images

### Outils en ligne gratuits:

#### 1. TinyPNG (Recommandé)
- URL: https://tinypng.com
- Compresse JPG et PNG sans perte visible de qualité
- Limite: 5MB par fichier, 20 fichiers à la fois
- **Utilisation:**
  1. Uploader l'image
  2. Attendre la compression
  3. Télécharger l'image compressée

#### 2. ImageOptim (Mac)
- Application gratuite pour Mac
- Compression automatique optimale
- Drag & drop

#### 3. Squoosh (Google)
- URL: https://squoosh.app
- Permet de comparer avant/après
- Réglages avancés

### Objectifs de compression:
- **Hero:** < 800KB (idéal: 500KB)
- **About:** < 400KB (idéal: 250KB)
- **Réalisations:** < 300KB chacune (idéal: 200KB)
- **Logo:** < 100KB

### Formats recommandés:
- **Photos:** JPG avec qualité 80-85%
- **Logo:** PNG si transparent, sinon JPG
- **Optionnel:** WebP pour meilleure compression (avec fallback JPG)

## 🔄 Remplacement des fichiers

### Méthode simple:
1. Télécharger et optimiser vos nouvelles images
2. Renommer vos fichiers selon les noms exacts ci-dessus
3. Remplacer les fichiers dans le dossier `/images`
4. Rafraîchir votre navigateur (Ctrl+F5 ou Cmd+Shift+R)

### Important:
- ⚠️ **Respecter exactement les noms de fichiers**
- ⚠️ **Respecter les extensions (.jpg ou .png)**
- ⚠️ Logo doit rester `logo.png` même si c'est un JPG (ou renommer en .png)

## ✅ Vérifications après remplacement

### Checklist:
- [ ] Toutes les images sont remplacées (pas de placeholders SVG)
- [ ] Les images se chargent correctement
- [ ] Les dimensions sont appropriées (pas pixelisées)
- [ ] Le poids total des images est raisonnable (< 5MB au total)
- [ ] Le logo s'affiche clairement dans le header
- [ ] L'image hero ne ralentit pas le chargement
- [ ] Les images de réalisations ont un bon ratio (pas déformées)
- [ ] Le site fonctionne sur mobile (images adaptatives)

### Test de performance:
1. Ouvrir le site dans le navigateur
2. Ouvrir les outils développeur (F12)
3. Onglet "Network"
4. Rafraîchir la page
5. Vérifier le temps de chargement total (< 3 secondes idéal)

## 🎨 Conseils pour choisir les images

### Pour le hero (arrière-plan):
- ✅ Luminosité moyenne (ni trop clair, ni trop sombre)
- ✅ Espace libre pour le texte au centre
- ✅ Pas de visages en gros plan
- ✅ Dynamique mais pas trop chargé
- ❌ Éviter les images trop complexes
- ❌ Éviter les textes dans l'image

### Pour about:
- ✅ Professionnelle et rassurante
- ✅ Montre le travail de qualité
- ✅ Si équipe: sourires naturels
- ❌ Éviter les photos de stock trop génériques

### Pour les réalisations:
- ✅ Variété de projets
- ✅ Différentes étapes (fondations, structure, finition)
- ✅ Bonne qualité de construction visible
- ✅ Photos avant/après sont un plus
- ❌ Éviter les photos floues
- ❌ Éviter les photos trop similaires

## 📱 Responsive et aspect ratios

Les images sont automatiquement adaptatives, mais respecter ces ratios:
- **Hero:** 16:9 (paysage)
- **About:** 4:3 (paysage)
- **Réalisations:** 4:3 (paysage)

## 🆘 Besoin d'aide?

Si vous avez des difficultés:
1. Vérifier que les noms de fichiers sont corrects
2. Vérifier que les fichiers sont bien dans `/images/`
3. Vider le cache du navigateur (Ctrl+Shift+Del)
4. Vérifier la console développeur (F12) pour les erreurs

## 📊 Exemples de bonnes photos Unsplash

### Construction/Chantier:
```
https://unsplash.com/@scottblake (Scott Blake - Construction)
https://unsplash.com/@theblowup (The Blowup - Architecture)
https://unsplash.com/@jonathanborba (Jonathan Borba - Construction)
```

### Recherches efficaces:
- "construction site aerial"
- "building construction progress"
- "masonry brick work"
- "concrete foundation work"
- "construction worker helmet"
- "renovation construction"

## 💾 Sauvegarde

Avant de remplacer les placeholders:
1. Faire une copie du dossier `/images/` (backup)
2. Garder les noms des fichiers originaux
3. Si un problème: restaurer les placeholders temporairement

---

**Note finale:** Une fois les vraies images en place, le site sera prêt pour la production. Les placeholders actuels permettent de voir la mise en page, mais les vraies photos professionnelles feront toute la différence ! 🚀
