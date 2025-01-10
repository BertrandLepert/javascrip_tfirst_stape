//mon premier programme

//Variable en let

let monAge = 36

// Variable en const

const monPrenom = "Bertrand"

console.log(monAge)

// entrées

const entreesSemaine1 = 1000
const entreesSemaine2 = 2000
const totalEntrees = entreesSemaine1 + entreesSemaine2

console.log(totalEntrees)

//places vendues

let palcesDejaVendues = 100
palcesDejaVendues += 10

//concaténation de chaîne de caractères

let punchline = "Mon nom est Bond"
punchline += ", James Bond."
// punchline vaut “Mon nom est Bond, James Bond.”

//transformation de type de variables

let palcesDejaVenduesBis = Number("150")
palcesDejaVenduesBis += Number("10")

console.log(palcesDejaVenduesBis)

//bibliothèque

let TotalLivres = 500
const phrase = "notre bibliothèque possède:"

TotalLivres -= 10
TotalLivres += 5

console.log(phrase + TotalLivres + " livres")

// création d'objet

let monPersonnage = {
    nom: "Wayne",
    prenom: "Bruce",
    age: 35,
    couleurPreferee: "noir",
    hobbies: "sortir la nuit"
    }

// auquel on ajoute une propriété

monPersonnage.vehiculePrefere = "batmobile"

// on stocke les propriétés dans des variables

const NomDeMonPersonnage = monPersonnage.nom

//vérification

console.log(NomDeMonPersonnage)
console.log(monPersonnage.nom)

//exercice distributeur de place de cinema

let ticket = {
    NomFilm: "batman",
    prix: 1000,
    numeroSalle: 2

    }

const guichetier = "tranbert"

let NomDuFilm = ticket.NomFilm
let NumeroDeSalle = ticket.numeroSalle

let disptext = `Bonjour ${guichetier}, votre film ${NomDuFilm} est en salle ${NumeroDeSalle}`

console.log(disptext)

//les tableaux

//1er tableau

const maCollectionDeFilm = ["Titanic", 'star wars', 'le seigneur des anneaux']

// ou via des variables

const monFilmPrefere = "l'empire contre attaque"
const FilmNaz = "la menace fantome"

const maCollectionDeFilmBis =[monFilmPrefere,FilmNaz]

// on accède au premier élément du tableau

PremierFilmContenu = maCollectionDeFilm[0]

const nombreDefilms = maCollectionDeFilm.length

console.log(nombreDefilms)

//ajout via la méthode push

maCollectionDeFilm.push('retour vers le futur')

console.log(maCollectionDeFilm)

//supression par pop

maCollectionDeFilm.pop()

//exercice organisateur de soirées

const PlayList = ["Warriors of the wolrd", "Die with honnor", "Kings of metal"]

totalMorceau = PlayList.length

PlayList.push("baby")
PlayList.push("cross volé")

PlayList.pop()

console.log(PlayList)