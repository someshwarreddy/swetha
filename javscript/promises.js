let mypromise = new Promise((resolve, reject) => {
    let data = false;
    if (!data) {
        // throw new Error('falied to fetch data');
        reject('data not found') // falied one to throw to the catch function
    }
    else return resolve('data got') // success one throe to the then function
})

mypromise.then((data) => {
    console.log('then' + data);
})
    .catch((err) => {
        console.log('catch' + err);
    })
url = 'https://jsonplaceholder.typicode.com/todos/'

fetch(url).then((response) => {
    console.log(response)
    if (!response.ok) {
        throw new Error('api is failed to fecth response')
    }
    else return response.json();

})
    .then(data => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })


async function fetchdata() {
    try {
        let fetchdata = await fetch(url);
        if (!fetchdata.ok) {
            throw new Error('api is failed to fecth response using async function')
        }
        let fectheddata = await fetchdata.json();
        let divs = document.getElementById('data') ;

        for (const element of fectheddata) {
            divs.innerHTML = element.title;
    
        }
        console.log(typeof(fectheddata));
    } catch (error) {
        console.log(error)
    }
}

fetchdata();