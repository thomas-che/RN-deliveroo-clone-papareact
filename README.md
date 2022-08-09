<h1 align="center">Clone de l'appli Deliveroo avec React Native</h1>

<p align="center">
    <a target="_blank"><img src="./assets/deliveroo-logo.jpg" width="200"></a>
    <a target="_blank"><img src="./assets/react-icon.svg.png" width="200"></a>
</p>

Suivi de la [vidéo YouTube](https://youtu.be/taPz40VmyzQ).


Table des matières.
> * [Utilisation](#Utilisation)
> * [Initialisation](#Initialisation)
> * [Développement](#Développement)


&nbsp;
## Utilisation
---

Pour lancer l'Appli on install les package, apres on lance notre émulateur et enfin on lance expo.  
```bash
npm install
expo start
```

> Ne pas oublier de crée un fichier `.env` et d'ajouter la clef de l'API.  


&nbsp;
## Initialisation
---

Cree l'App.    
```bash
npx create-expo-app deliveroo-clone
```


&nbsp;
## Développement
---

Installation de [tailwindcss](https://tailwindcss.com/docs/installation/framework-guides)
```bash
npm i tailwindcss-react-native
npm i --save-dev tailwindcss
npx tailwindcss init -p
```
Puis on suit le  [tuto de config pour babel](https://tailwindcss-react-native.vercel.app/compilation/babel).  

Installation de [React Navigation](https://reactnavigation.org/docs/getting-started/)
```bash
npm install @react-navigation/native
expo install react-native-screens react-native-safe-area-context
```
Puis on importe le react-navigation/stack
```bash
npm install @react-navigation/stack
expo install react-native-gesture-handler
```

Install de [react-native-heroicons](https://www.npmjs.com/package/react-native-heroicons)
```bash
npm i react-native-heroicons react-native-svg
```

Install de [Sanity](https://www.sanity.io/) avec un code de réduction de Sonny
```bash
npm install -g @sanity/cli
sanity init --coupon sonny2022 # Yes ; sanity ; Blog (schema)
```

Configuration de la basse :
```bash
sanity start
```
On change les schemas de la bdd dans `./sanity/schemas/`. Puis on complet la bdd depuis la page web.  

Install de sanity client et imgUrl
```bash
npm i @sanity/client @sanity/image-url
```

Puis on ajoute un cors origin.  
```bash
cd sanity/
sanity cors add http://localhost:3000 # Yes
sanity cors add http://localhost:19006 # Yes
```

Et apres on deploy la bdd
```bash
sanity deploy # deliveroo-clone-tche
```

On crée un fichier `./sanity.js` et on écrit nos fonctions de connexions a la bdd Sanity.io et une fonction pour récupérer l'url des images.  

Si erreur 'Duplicated files or mocks. Please check the console for more info' alors on change le nom du `./sanity/package.json` en `./sanity/package_1.json`. Le problème c'est quand l'on a plusieurs package.json.  

Installation de [react-currency-formatter](https://www.npmjs.com/package/react-currency-formatter)
```bash
npm install react-currency-formatter --save --force
``` 

Install de [redux](https://redux-toolkit.js.org/tutorials/quick-start)
```bash
npm install @reduxjs/toolkit react-redux --save --force
```

Puis on crée un fichier `./store.js` et un fichier `./features/basketSlice.js` qui contiendra nos méthodes de redux.  
