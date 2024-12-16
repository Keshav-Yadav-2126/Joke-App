async function jokeAPI() {
    const url = 'https://official-joke-api.appspot.com/random_joke'
    const response = await fetch(url);
    const data = await response.json();
    console.log("data is",data)
    return data
}

export default jokeAPI;