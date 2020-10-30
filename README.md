# NTNUreads - IT2810 Prosjekt 3

## Introduksjon
NTNUreads er en nettside der du kan søke og finne din favorittbok. Brukeren har muligheten til å se vurderinger gjort av andre i tillegg til å legge til vurderinger selv. Videre så kan brukeren markere en bok som favoritt og se en oversikt over alle favorittbøkene på profilsiden. Brukeren kan også filtrere og sortere søkeresultat og få en detaljert visning av boka. Databasen inneholder over 10000 bøker som er hentet fra Goodreads.

![](https://i.imgur.com/YVLiLw2.jpg)
![](https://i.imgur.com/MzXG4cF.png)


## Installasjon av prosjekt
1. Klon prosjektet fra GitLab:
`https://gitlab.stud.idi.ntnu.no/it2810-h20/team-13/it2810-prosjekt-3.git`
2. Kjør `npm install` og deretter `npm start`
3. Aktiver databasen ved å åpne et nytt kommandovindu og gå inn i backend mappen:
`cd backend`
4. Kjør `nodemon server.js`. Husk å være koblet til NTNU-nettet.

Nettsiden er tilgjengelig på http://localhost:3000/

## Teknologier
Vi har valgt å bruke MERN-stack for å lage applikasjonen. MERN-stack består av MongoDB, ExpressJS, React og NodeJS. I tillegg har vi brukt Redux for global state-håndtering.

#### MongoDB
MongoDB er et dokumentorientert databaseprogram som vi har brukt for å strukturere dataen. MongoDB er NoSQL noe som gjør det lett å håndtere databasen uten kompleks forståelse av SQL språket.

#### ExpressJS
ExpressJS er et rammeverk for Node.js, og har blitt brukt for å lage API-et til prosjektet.

#### React
Prosjektet er basert på React med TypeScript. Vi har brukt `create-react-app` med flagget `--template typescript` for initialisering av prosjektet.

#### Node.js
Node.js er et open source server environment som kjører JavaScript på serveren. 


#### Redux
Ved å bruke Redux kan man lagre state globalt i applikasjonen, slik at den er tilgjengelig fra alle komponenter uten å sende state som props. Dette er veldig nyttig for states som skal aksesseres fra mange ulike komponenter på forskjellige steder i komponenthierarkiet. Vi har valgt å bruke Redux til å lagre en state "theme" som bestemmer om applikasjonen skal ha mørkt eller lyst tema. Redux er implementert fra grunnen av med TypeScript, der [denne tutorialen](https://www.youtube.com/watch?v=8DH7Ekp2PWI&t=2939s) har blitt brukt som grunnlag for å lage store. For å aksessere og endre state lagret i store brukes to hooks: `useSelector()` og `useDispatch()`, fra `react-redux`. Theme endrer state mellom "light" og "dark" ved trykk på en toggle-knapp definert i `ThemeSwitch.tsx`. Vi valgte å bruke Redux framfor MobX ettersom Redux er populært og har en et stort samfunn der det er lett å finne tutorials og svar på eventuelle spørsmål. Det krever litt arbeid å sette opp, som er en nyttig erfaring. I tillegg er det lettere å debugge ettersom vi har en store som "single source of truth". MobX bruker flere stores og det er lett å skrive over states, noe som kan føre til problemer under feilsøking.

## Backend implementasjon
Datasettet vi har brukt i prosjektet er hentet fra Kaggle. Kaggle er et sted der man finner datasett som har blitt laget av andre eller ved hjelp av webscraping. Vi installerte først MongoDB på en virtuell maskin som ligger på NTNU-serveren. Vi måtte konvertere datasettet fra formatet CSV til JSON før det kunne brukes. Ved hjelp av ExpressJS og REST API har vi laget en POST route for å kunne eksportere det store datasettet til databasen.

Slik ser datasettet ut for en bok:
```json=
{
        "users": [
            "5f805e795a99021530ec16ab"
        ],
        "_id": "5f805fdf55a95a83a001a5b4",
        "bookID": 1,
        "title": "Harry Potter and the Half-Blood Prince (Harry Potter  #6)",
        "authors": "J.K. Rowling/Mary GrandPré",
        "average_rating": 4.57,
        "isbn": "0439785960",
        "isbn13": 9780439785969,
        "language_code": "eng",
        "num_pages": 652,
        "ratings_count": 2095690,
        "text_reviews_count": 27591,
        "publication_date": "2006-09-15T22:00:00.000Z",
        "publisher": "Scholastic Inc.",
        "__v": 0
    }
```

### Søk
Vi har lagd en rekke route og models for innlogging og søk, men diskuterer her bare søkefunksjonaliteten.

Hente bøker basert på søkeordet:
```
http://localhost:4000/books/search/:search/:skip/:sort/:rating
```
Med denne routen kan vi sortere og filtrere søket ved å kun spesifisere parametere i url-en. Vi har også valgt å bruke route paramenteren til å holde styr på blaing av sider.

Videre har vi brukt MongoDB sin text index funksjonalitet for å kunne søke etter flere felter i databasen. Dette gjør det mulig å bruke et søkefelt for å finne bøker basert på tittel, forfatter og ISBN.

### Filtrering, sortering og pagination
Det har blitt brukt MongoDB cursor methods for å spesifisere hva slags resultatsett vi ønsker å få. De viktigste cursor methods som blir brukt er `.count()`, `.skip()`,`.limit()` for blaing av sider og `.sort()` for sortering.

### Lagring av brukergenerert data
Brukeren har mulighet til å legge til en vurdering for en bok. Denne vurderingen blir lagret i databasen og kan vises for andre brukere som ser på boka. For å koble bruker mot vurdering så har vi implementert en mange-til-mange relasjon.

Den samme implementasjonen har vi gjort for at en bruker skal kunne sette en bok som favoritt.



## Frontend implementasjon
Prosjekter bruker React for frontenden. React er et JavaScript bibilotek laget for å enkelt bygge grensesnitt. React ble laget av en utvikler i Facebook, og det vedlikeholdes av Facebook og en gruppe andre utviklere.

For state-håndtering brukes både Redux og React Hooks. fetch() brukes for å koble applikasjonene til API-et slik at det kan hente eller sende informasjon til databasen.
Vi har valgt å bruke React Bootstrap for styling av prosjektet. 

Bootstrap er et poplært CSS-rammeverk som skal gjøre det lettere å lage responsive sider med mobile-first approach. React Bootstrap er en versjon av Bootstrap som har blitt gjenoppbygd spesifikt for React. Istedenfor å bruke klasser for å velge forskjellige komponenter og stiler, brukes React-komponenter som inneholder de forskjellige stilene. 

Forskjell mellom Bootstrap og React Bootstrap:
```htmlembedded=
/*Vanlig bootstrap*/
<div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>
/*React Bootstrap*/
<Alert variant='primary'>
  A simple primary alert—check it out!
</Alert>
```
React Bootstrap var spesielt nyttig for design av skjemaer og tabeller.

## Testing

### Enhetstesting
Vi har brukt Jest og Enzyme til systematisk enhetstesting. Enhetstesting har blir brukt til å teste om komponentene oppfører seg som forventet. Vi har testet viktige komponenter og utelatt komponenter med lite logikk og kode.

Det blir utført tester av flere aspekter av komponentene. Vi har testet om komponentene kan ta inn props på riktig måte, API-kall til databasen, routing og klikk av knapper.

For å kjøre testene:
1. Kjør `npm test`
2. Velg `a` for å kjøre alle testene

Enhetstestene ligger under `_tests_` mappen og i filen App.test.tsx.

### End-to-end testing
End-to-end testing har blitt implementert ved bruk av Cypress. Cypress er et rammeverk i JavaScript for testing av frontend i webapplikasjoner. Cypress ble valgt ovenfor andre rammeverk, som puppeter, fordi testene var relativt lette å skrive, og visualiseringen i real-time gjorde det enkelt å finne ut hvor det var feil. 

For å kjøre testene:
1. Kjør `cypress open`
2. Velg en av test filene

Testene er splittet opp i 3 test-filer:
#### favorite.spec.tsx
Denne tester funksjonene for å lagre bok som favoritt og lage anmeldelser på den detaljerte siden for boken.

#### login.spec.tsx
Tester om innloggingsskjemaet fungerer, samt om en innlogget bruker kan gå til profilsiden.

#### search.spec.tsx
Tester flere aspekter ved søke-funksjonene, som om det er mulig å søke etter noe, filtrering og sorteringene.

## Kodestruktur
    
    backend
    ├── database
    ├── models
    ├── routes
    cypress
    ├── integration
    src
    ├── components
    ├─────── filter
    ├─────── review
    ├─────── search
    ├─────── theme
    ├─────── user
    ├── images
    ├── pages
    ├── store
    ├─────── models
    ├─────── theme
    ├─────────── models
    
## Kilder
[Redux vs MobX](https://blog.codota.com/redux-vs-mobx/)
[Redux tutorial](https://www.youtube.com/watch?v=8DH7Ekp2PWI&t=2939s)
[Datasettet](https://www.kaggle.com/jealousleopard/goodreadsbooks)

### Inspirasjon
[Goodreads](https://www.goodreads.com/)