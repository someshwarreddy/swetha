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
        divs.style.display = 'flex'
        divs.style.flexWrap= 'wrap'
        // for (const element of fectheddata) {
        //     let newdiv = document.createElement('div');
        //     // console.log(value[0]);
        //     newdiv.innerHTML = element?.id
        //     divs.appendChild(newdiv)
    
        // }

        fectheddata.forEach((value, index)=> {
            let id = document.createElement('div');
            let title = document.createElement('div');

            id.innerHTML = `userid : ${fectheddata[index].id}`;
            title.innerHTML = `title: ${value['title']}`;
            divs.appendChild(id);
            divs.appendChild(title);
        });
        
    } catch (error) {
        console.log(error)
    }
}

fetchdata();

{
    index: 'value'
}

