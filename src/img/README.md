# Dossier Images - Les Délices

Ce dossier est destiné à contenir toutes les images de votre site web.

## 📁 Comment utiliser vos propres images

1. **Placez vos images dans ce dossier** `/img/`
   - Par exemple : `/img/hero-restaurant.jpg`
   - Utilisez des noms descriptifs et clairs

2. **Modifiez le fichier de configuration** `/config/images.ts`
   - Remplacez les URLs Unsplash par vos chemins locaux
   - Exemple : 
   ```typescript
   hero: {
     main: '/img/hero-restaurant.jpg',  // au lieu de l'URL Unsplash
   }
   ```

## 🖼️ Types d'images recommandées

### Images nécessaires pour le site :

1. **Hero (Page d'accueil)**
   - 1 grande image de fond (1920x1080px minimum)
   - Format : JPG ou PNG
   - Nom suggéré : `hero-restaurant.jpg`

2. **Section À Propos**
   - 1 image du chef ou de l'équipe (1200x800px)
   - Nom suggéré : `chef.jpg`

3. **Galerie**
   - 6 images minimum (1080x1080px - format carré)
   - Noms suggérés : 
     - `plat-1.jpg`
     - `plat-2.jpg`
     - `ambiance-1.jpg`
     - `ambiance-2.jpg`
     - `chef-cuisine.jpg`
     - `terrasse.jpg`

## 💡 Conseils

- **Format** : JPG pour les photos, PNG pour les logos
- **Taille** : Optimisez vos images (max 500KB par image)
- **Résolution** : HD minimum (1920px de largeur pour les grandes images)
- **Noms** : Utilisez des noms en minuscules, sans espaces (utilisez des tirets)

## 🔄 Images actuelles

Pour l'instant, le site utilise des images Unsplash (gratuites et libres de droit).
Vous pouvez les remplacer par vos propres photos quand vous le souhaitez.
