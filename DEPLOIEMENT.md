# 🚀 Guide de Déploiement - KM CONSTRUCTIONS

## Préparation avant déploiement

### ⚠️ ÉTAPE CRITIQUE - Remplacement des images
**AVANT TOUT DÉPLOIEMENT**, vous devez remplacer les images placeholder:

1. ✅ Lire le fichier `GUIDE_IMAGES.md`
2. ✅ Télécharger des vraies photos professionnelles
3. ✅ Remplacer TOUTES les images dans `/images/`
4. ✅ **SURTOUT** remplacer `logo.png` avec votre vrai logo

**Sans ces étapes, le site aura des placeholders SVG !**

## Option 1: Déploiement sur GitHub Pages (Recommandé)

### Étape 1: Vérifier le repository
```bash
git status
# Vérifier que tous les fichiers sont commités
```

### Étape 2: Activer GitHub Pages
1. Aller sur GitHub.com → votre repository
2. Cliquer sur **Settings** (⚙️ en haut)
3. Scroller jusqu'à **Pages** (menu de gauche)
4. Sous **Source**, sélectionner:
   - Branch: `main` (ou votre branche)
   - Folder: `/ (root)`
5. Cliquer **Save**

### Étape 3: Attendre le déploiement
- GitHub prend 1-3 minutes pour construire le site
- Rafraîchir la page Settings > Pages
- Votre site sera à: `https://[username].github.io/[repo-name]`

### Étape 4: Configuration du domaine personnalisé (Optionnel)
Si vous avez un nom de domaine (ex: kmconstructions.fr):
1. Dans Settings > Pages
2. Sous **Custom domain**, entrer: `www.kmconstructions.fr`
3. Configurer les DNS chez votre registrar:
   ```
   Type: CNAME
   Name: www
   Value: [username].github.io
   ```
4. Activer **Enforce HTTPS** (recommandé)

## Option 2: Déploiement sur Netlify

### Via Interface Web:
1. Aller sur https://netlify.com
2. Se connecter avec GitHub
3. Cliquer **New site from Git**
4. Choisir votre repository
5. Configuration:
   - Build command: (laisser vide)
   - Publish directory: `/`
6. Cliquer **Deploy site**

### Via Drag & Drop:
1. Aller sur https://app.netlify.com/drop
2. Glisser-déposer tout le dossier du projet
3. Le site est déployé instantanément!

**Avantages Netlify:**
- Déploiement instantané
- HTTPS automatique
- Domaine personnalisé gratuit
- Formulaires natifs (alternative à FormSubmit)

## Option 3: Hébergement traditionnel (OVH, O2Switch, etc.)

### Via FTP:
1. Se connecter à votre hébergement FTP (FileZilla, etc.)
2. Uploader tous les fichiers dans `/public_html/` ou `/www/`
3. Structure finale:
   ```
   /public_html/
   ├── index.html
   ├── css/
   ├── js/
   ├── images/
   └── README.md
   ```
4. Accéder via votre domaine

### Via cPanel:
1. Se connecter au cPanel
2. **File Manager** → `public_html`
3. **Upload** → sélectionner tous les fichiers
4. Ou **Extract** un fichier ZIP

## Vérifications Après Déploiement

### ✅ Checklist de base:
- [ ] Le site s'affiche correctement
- [ ] Le logo KM s'affiche (pas un placeholder)
- [ ] Les images de réalisations sont réelles (pas SVG)
- [ ] Le menu de navigation fonctionne
- [ ] Le menu mobile (hamburger) fonctionne
- [ ] Les liens internes (ancres) fonctionnent
- [ ] Le numéro de téléphone est cliquable sur mobile

### ✅ Test du formulaire de contact:
1. Aller sur la section Contact
2. Remplir et soumettre le formulaire
3. **Important:** Vérifier l'email `frejus83var@hotmail.com`
4. **Première fois:** Confirmer l'adresse via le lien FormSubmit
5. Tester à nouveau après confirmation

### ✅ Test responsive:
1. Ouvrir sur mobile (ou DevTools mobile)
2. Tester toutes les sections
3. Vérifier que les images s'adaptent
4. Tester le menu hamburger
5. Vérifier la lisibilité du texte

### ✅ Test performance:
1. Ouvrir: https://pagespeed.web.dev/
2. Entrer l'URL du site
3. Objectifs:
   - Performance: > 80
   - Accessibility: > 90
   - Best Practices: > 90
   - SEO: > 90

## Configuration du Formulaire FormSubmit

### Première soumission:
1. FormSubmit enverra un email de confirmation à `frejus83var@hotmail.com`
2. Ouvrir l'email (vérifier les spams)
3. Cliquer sur le lien de confirmation
4. Après ça, tous les formulaires fonctionneront automatiquement

### Options avancées (optionnel):
Ajouter dans le formulaire HTML:
```html
<!-- Page de redirection après envoi -->
<input type="hidden" name="_next" value="https://votresite.com/merci.html">

<!-- Désactiver le captcha -->
<input type="hidden" name="_captcha" value="false">

<!-- Email de confirmation automatique au visiteur -->
<input type="hidden" name="_autoresponse" value="Merci pour votre message. Nous vous répondrons rapidement.">
```

## Optimisations Post-Déploiement

### 1. Optimisation Images (Si pas fait)
- Compresser avec TinyPNG.com
- Objectif: < 500KB par image
- Convertir en WebP (optionnel)

### 2. SEO
- Soumettre à Google Search Console
- Créer un sitemap.xml
- Soumettre à Bing Webmaster Tools

### 3. Analytics
Ajouter Google Analytics (optionnel):
```html
<!-- Avant </head> -->
<script async src="https://www.googletagmanity.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 4. Sécurité
- Activer HTTPS (automatique sur GitHub Pages/Netlify)
- Configurer les headers de sécurité
- Sauvegarder régulièrement

## Mise à Jour du Site

### Via Git (GitHub Pages):
```bash
# Modifier les fichiers localement
# Puis:
git add .
git commit -m "Description des modifications"
git push

# Le site sera mis à jour automatiquement en 1-3 minutes
```

### Via Netlify:
- Automatique si connecté à Git
- Ou redéployer via drag & drop

### Via FTP:
- Re-uploader les fichiers modifiés

## Dépannage

### Le site ne s'affiche pas:
1. Vérifier que GitHub Pages est bien activé
2. Attendre 5 minutes (temps de propagation)
3. Vider le cache du navigateur (Ctrl+Shift+Del)
4. Vérifier l'URL exacte

### Les images ne s'affichent pas:
1. Vérifier les noms de fichiers (majuscules/minuscules)
2. Vérifier les chemins dans HTML (images/...)
3. Vérifier que les fichiers sont bien uploadés
4. Vérifier dans DevTools (F12) > Network > Images

### Le formulaire ne fonctionne pas:
1. Vérifier la confirmation FormSubmit
2. Vérifier l'email (spams)
3. Tester sur le site en ligne (pas en local)
4. Vérifier l'attribut `action` du formulaire

### Le menu mobile ne s'ouvre pas:
1. Vérifier que le fichier JS est bien chargé
2. Ouvrir la console (F12) pour voir les erreurs
3. Vérifier que les IDs correspondent

## Support

### Resources:
- **Documentation GitHub Pages:** https://docs.github.com/pages
- **Documentation Netlify:** https://docs.netlify.com
- **FormSubmit Docs:** https://formsubmit.co
- **Test performance:** https://pagespeed.web.dev

### Besoin d'aide?
1. Vérifier la console (F12) pour les erreurs
2. Vérifier que tous les fichiers sont présents
3. Tester sur plusieurs navigateurs
4. Vérifier la connexion internet

## 📱 Test Final

### Avant de communiquer le site:
1. ✅ Tester sur Chrome, Firefox, Safari
2. ✅ Tester sur mobile réel (Android/iOS)
3. ✅ Tester le formulaire
4. ✅ Vérifier toutes les images
5. ✅ Vérifier le numéro de téléphone
6. ✅ Vérifier l'email
7. ✅ Tester la carte Google Maps
8. ✅ Vérifier l'orthographe
9. ✅ Tester tous les liens
10. ✅ Vérifier le SIREN dans le footer

## 🎉 C'est Prêt!

Une fois tous les tests passés:
- ✅ Partager le lien sur vos réseaux sociaux
- ✅ Ajouter le lien à votre signature email
- ✅ Référencer sur Google My Business
- ✅ Mettre à jour vos cartes de visite

**Félicitations, votre site KM CONSTRUCTIONS est en ligne! 🚀**
