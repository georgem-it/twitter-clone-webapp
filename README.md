# twitter-clone-webapp

Twitter clone web app, final project for QStation course/bootcamp.

My idea is to create a simpler version of Twitter, ie. a Twitter clone, called Kriker (so you can send a "Krik", like you can send a Tweet). Krik = "shriek" in my language, so the web app is a bit humorous - you shriek into the abyss.

The web app consists of the backend and the frontend.

The frontend was made with "vanilla" JS. 

The backend was made with:
- Node.js
- Express
- MongoDB/mongoose

## How to run

1. Download the whole project as zip
2. Unzip the folder
3. Open folder in VSCode
4. Open terminal, cd to server folder with ``` cd server ```
5. Type ``` npm run start dev ``` or ``` nodemon server.js ```
6. Open index.html, located in client/view folder, in your browser of choice

Demo link, showing:
1. There's only one user named "Marko"
2. Adding another "krik" by user "Marko"
3. Clicking username filters kriks by that user
4. After filtering, a "Show All" (Prikaži sve) button appears
5. Clicking that button shows all kriks again
6. Another case of filtering by the user "TestName"

...can be found at this link: https://webmshare.com/Een6R

---

Tviter klon web aplikacija, završni projekat za QStation kurs programiranja (Napredni Javascript, uz osnove Node i React).

Moja ideja je da napravim nešto jednostavniju verziju Tvitera, tj. Tviter klon, koji se zove Kriker (tako da se može slati "Krik", kao što se šalje Tvit). Ovim sam unio malo humora u svoju web app, tako da se ona koristi da "kričiš".

Ova web aplikacija se sastoji od backenda i frontenda.

Frontend je napravljen sa "vanilla" JS.

Backend je napravljen uz pomoć:
- Node
- Express
- MongoDB/mongoose

## Pokretanje

1. Download cijeli projekat kao zip fajl
2. Unzipovati folder
3. Otvoriti ga u VSCode
4. Otvoriti terminal, cd u folder server sa ``` cd server ```
5. Ukucati ``` npm run start dev ``` ili ``` nodemon server.js ```
6. Otvoriti index.html, koji se nalazi u folderu client/view

Demo link, koji pokazuje:
1. Da postoji samo jedan korisnik "Marko"
2. Dodavanje novog "krika" od strane korisnika pod imenom "Marko"
3. Klik na ime korisnika u objavljenim krikovima filtrira krikove postavljene od strane tog korisnika
4. Nakon filterovanja, pojavljuje se dugme "Prikaži sve"
5. Klik na to dugme ponovo prikazuje listu svih krikova
6. Dodatni demo filterovanja korisnika pod imenom "TestName"

...se nalazi na sljedećem linku: https://webmshare.com/Een6R
