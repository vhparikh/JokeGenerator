const button = document.getElementById("button")
button.addEventListener('click', () => getJoke())

async function getJoke() {
    const options = {
        method: 'GET',
        headers: {
            "Accept": "application/json"
        }
    }
    try {
        const response = await fetch('https://icanhazdadjoke.com/', options)
        const responseAsJson = await response.json();
        console.log(responseAsJson);
        document.getElementById("joke").innerHTML = responseAsJson.joke;
    }
    catch (error) {
        console.log(error)
    }
}