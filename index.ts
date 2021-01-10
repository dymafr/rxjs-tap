screenLog.init(); // affiche le log de la console
// Cliquez sur la flèche de rafraichissement dans la fenêtre de droite, juste à gauche de l'url pour relancer.

import { of, interval } from 'rxjs';
import { tap } from 'rxjs/operators';


const source = of('A', 'B', 'C');
const exemple = source
  .pipe(tap(val => console.log(val)));
const subscribe = exemple.subscribe();

setTimeout(() => subscribe.unsubscribe(), 8000);