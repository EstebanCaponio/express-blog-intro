const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.send('Server del mio blog');
})

app.listen(port, ()=>{
    console.log('messaggio in terminale vs code');
})

app.get('/bacheca', (req, res)=>{
    
    const recipes = [
        {
            titolo: "dolceUno",
            contenuto: "ciambellone",
            immagine: "images/ciambellone.jpeg",
            tags: ["crema","pistacchio","cioccolato"],
        }, {
            titolo: "spuntino",
            contenuto: "crackersDolci",
            immagine: "images/cracker_barbabietola.jpeg",
            tags: ["crackers","barbabietola"],
        }, {
            titolo: "carboidrati",
            contenuto: "paneFritto",
            immagine: "images/pane_fritto_dolce.jpeg",
            tags: ["pane","olio","frittura"],
        }, {
            titolo: "dolceDue",
            contenuto: "pastaBarbabietola",
            immagine: "images/pasta_barbabietola.jpeg",
            tags: ["pasta","barbabietola"],
        }, {
            titolo: "dolceTre",
            contenuto: "tortaPaesena",
            immagine: "images/torta_paesana.jpeg",
            tags: ["torta","zucchero","uova"],
        },
    ];

    res.json(recipes);
})