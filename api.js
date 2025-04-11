function getCharacters(done){

    const results = fetch("");
    results 
        .then(response => response.json())
        .then(data => {
            done(data)
        });
}

getCharacters(data => {
    data.results.forEach(element =>{
    
        const article = document.createRange().createContextualFragment(`
            <article>
            <div class="image-container">
                <img src="${personaje.image}" alt="">
            </div>

            <h2>${personaje.name}</h2>
            <span>${personaje.status}</span>
        </article>
        `);

        const main = document.querySelector("main");

        main.append(article);

});

});