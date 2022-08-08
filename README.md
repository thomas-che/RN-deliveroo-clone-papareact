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
