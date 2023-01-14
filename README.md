# twitter-clone-webapp

Twitter clone web app, final project for QStation course/bootcamp.

My idea is to create a simpler version of Twitter, ie. a Twitter clone, called Kriker (so you can send a "Krik", like you can send a Tweet). Krik = "shriek" in my language, so the web app is a bit humorous - you shriek into the abyss.

At the time of writing this, I created some basic frontend. The next step is to create the backend (my own API) and connect it to the frontend, using Node, Express and MongoDB. The biggest challenge will be working with databases, as I currently have very little experience with them. I have some basic knowledge in these areas though, and our tutor showed us some quick basics as well (so I have some files from the bootcamp), but I'll use the mighty Internet as my universal helper.

## How to run

1. Download the whole project as zip
2. Unzip the folder
3. Open folder in VSCode
4. Open terminal, cd to server folder
5. Type npm run start dev or nodemon server.js
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

U vrijeme pisanja ovog teksta, napravio sam osnovni frontend. Sljedeći korak je da napravim backend (sopstveni API) i povežem ga sa frontendom, koristeći Node, Express i MongoDB. Najveći izazov će biti rad sa bazom podataka, jer tu imam najmanje iskustva. Imam osnovna znanja sa ovim tehnologijama, a predavač nam je na kursu takođe pokazao neke osnove, tako da ću se osloniti na fajlove sa kursa i Internet da mi pomognu u ostvarenju ovih ciljeva.

## Pokretanje

1. Download cijeli projekat kao zip fajl
2. Unzipovati folder
3. Otvoriti ga u VSCode
4. Otvoriti terminal, cd u folder server
5. Ukucati npm run start dev ili nodemon server.js
6. Otvoriti index.html, koji se nalazi u folderu client/view

Demo link, koji pokazuje:
1. Da postoji samo jedan korisnik "Marko"
2. Dodavanje novog "krika" od strane korisnika pod imenom "Marko"
3. Klik na ime korisnika u objavljenim krikovima filtrira krikove postavljene od strane tog korisnika
4. Nakon filterovanja, pojavljuje se dugme "Prikaži sve"
5. Klik na to dugme ponovo prikazuje listu svih krikova
6. Dodatni demo filterovanja korisnika pod imenom "TestName"

...se nalazi na sljedećem linku: https://webmshare.com/Een6R
