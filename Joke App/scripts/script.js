import jokeAPI from "./Joke-api.js";

window.addEventListener("load",events)

function events(){
    getJoke()
    document.querySelector(".root button").addEventListener("click",getJoke);
}

async function getJoke() {
    const loader = document.querySelector(".root");

    loader.classList.add("loading"); // start loading

    const joke = await jokeAPI();

    loader.classList.remove("loading"); // stop loading

    document.querySelector(".root h1").innerText = joke.setup;
    document.querySelector(".root p").innerText = joke.punchline;
}

