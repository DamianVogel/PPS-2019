export const FIREBASE_CONFIG = {
    apiKey: "AIzaSyAf9tgrB7UiDo2IuK6S8Ln84-vTiRGNYQw",
    authDomain: "kidtab-1a8ec.firebaseapp.com",
    databaseURL: "https://kidtab-1a8ec.firebaseio.com",
    projectId: "kidtab-1a8ec",
    storageBucket: "kidtab-1a8ec.appspot.com",
    messagingSenderId: "1053219827491"
  };

export const ListaUsuarios = snapshot => {
    let ArrayUsuarios = [];

    snapshot.forEach(element => {
        console.log(element.val());
        let item = element.val();
        item.key = element.key;
        ArrayUsuarios.push(item);
    });

    return ArrayUsuarios;
}