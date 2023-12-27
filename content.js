// Liste des noms à surligner
var nomsASurligner = ["Gérard Depardieu", "Gerard Depardieu", "Benoît Poelvoorde", "Nathalie Baye", "Carole Bouquet", "Jacques Dutronc", "Charlotte Rampling", "Nadine Trintignant", "Yvan Attal", "Jacques Weber", "Bertrand Blier", "Emmanuelle Seigner", "Roberto Alagna", "Michel Fau", "Victoria Abril", "Dominique Besnehard", "Carla Bruni", "Pierre Richard", "Clémentine Célarié", "Gérard Darmon", "Rudy Ricciotti", "Christophe Barratier", "Arielle Dombasle", "Francis Veber", "Patrice Leconte", "Brigitte Fossey", "Boualem Sansal", "Charles Berling", "Yannis Ezziadi", "Philippe Caubère", "Vincent Perez", "Myriam Boyer", "Antoine Duléry", "Afida Turner", "Paulo Branco", "Jean-Marie Rouart", "Josée Dayan", "Joël Séria", "Bernard Murat", "Serge Toubiana", "Catherine Millet", "Jacques Henric", "Stéphanie Murat", "Marie-France Brière", "Daniel Humair", "Judith Magre", "David Belugou", "Marie Beltrami", "Tanya Lopert", "Jean-Claude Dreyfus", "Chiara Muti", "Jean-Marie Besset", "Stéphan Druet", "Christine Boisson", "Karine Silla-Perez", "Myriam Boisaubert", "Lilian Euzéby", "Marion Lahmer", "Yann Moix"];

// Fonction pour surligner les noms sur la page
function surlignerNoms() {
    var elements = document.querySelectorAll('h1, h2, h3, h4, h5, p, a, span');

    elements.forEach(function (element) {
        for (var j = 0; j < nomsASurligner.length; j++) {
            var nom = nomsASurligner[j];
            var regExp = new RegExp('\\b' + nom + '\\b', 'ig');

            element.innerHTML = element.innerHTML.replace(regExp, function (match) {
                return '<span style="background-color: red; color: white;">' + match + '</span>';
            });
        }
    });
}

// Surligner les noms lors du chargement initial de la page
surlignerNoms();

// Surligner les noms lorsqu'une nouvelle page est chargée (navigation)
document.addEventListener('DOMContentLoaded', surlignerNoms);


