
function loadEvent() {

    let rootElement = document.getElementById("root");

    let card = function (title, year, rate){
        return `
        <div class="card">
            <h2>${title}</h2>
            <div class="time">${year}</div>
            <div class="rate">${rate}</div>
        </div>
        `;
    };

    let renderAllCardElements = function(incomingMoviesArray) {
        let renderedCardList = `<div class="cards">`;
        
        // for ciklus, ami végigmegy a cardsArray-en
        for (const incomingMovie of incomingMoviesArray) {

            renderedCardList += card(incomingMovie.title, incomingMovie.year, incomingMovie.rate);

            // for ciklus minden lépcsőjénél hozzáadja a renderedCardList-hez az adott elemet a megfelelő div card-ban
            // renderedCardList += `
            // <div class="card">
            //     <h2>${incomingMovie.title}</h2>
            //     <div class="time">${incomingMovie.year}</div>
            //     <div class="rate">${incomingMovie.rate}</div>
            //     </div>
            //     `;
        }
        renderedCardList += `</div>`
        console.log(renderedCardList)

        // return-li az elkészült elemekkel feltöltött cardList-et
        return renderedCardList;
    }

    let newGoodMovies = [];

    for (const movieSend of movies) {

        if (movieSend.year > 2000 && movieSend.rate >= 8) {
            newGoodMovies.push(movieSend);
        };
    };
    newGoodMovies.sort(function(a, b) {return a.year - b.year});

    rootElement.insertAdjacentHTML("beforeend", renderAllCardElements(newGoodMovies));
};
window.addEventListener("load", loadEvent);


