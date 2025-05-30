// let mypromise = new Promise((resolve, reject) => {
//     let data = false;
//     if (!data) {
//         // throw new Error('falied to fetch data');
//         reject('data not found') // falied one to throw to the catch function
//     }
//     else return resolve('data got') // success one throe to the then function
// })

// mypromise.then((data) => {
//     console.log('then' + data);
// })
//     .catch((err) => {
//         console.log('catch' + err);
//     })
// url = 'https://jsonplaceholder.typicode.com/todos/'
url = 'https://fakestoreapi.com/products'

// fetch(url).then((response) => {
//     // console.log(response)
//     if (!response.ok) {
//         throw new Error('api is failed to fecth response')
//     }
//     else return response.json();

// })
//     .then(data => {
//         console.log(data)
//     })
//     .catch((error) => {
//         console.log(error)
//     })


async function fetchdata() {
    try {
        let fetchdata = await fetch(url);
        if (!fetchdata.ok) {
            throw new Error('api is failed to fecth response using async function')
        }
        let fectheddata = await fetchdata.json();

        // divs.style.display = 'flex'
        // divs.style.flexWrap= 'wrap'
        // for (const element of fectheddata) {
        //     let newdiv = document.createElement('div');
        //     // console.log(value[0]);
        //     newdiv.innerHTML = element?.id
        //     divs.appendChild(newdiv)

        // }

        let search = document.getElementById('search');
        search.addEventListener('input', () => {
            let searchvalue = search.value.toLowerCase();
            console.log(searchvalue)
            displayproducts(fectheddata, searchvalue)

        })

        displayproducts(fectheddata, ''); // display products by default

        function displayproducts(products, query) {
            let pdiv = document.getElementById('user-info');
            pdiv.innerHTML = ''; // clear previous results

            let filteredProducts = products.filter((product) => {
                return product.title.toLowerCase().includes(query);
            });

            filteredProducts.length === 0 ? searchfail() : pdiv.innerHTML = '';
            // https://cdn-icons-png.flaticon.com/512/190/190406.png
            function searchfail() {
                pdiv.innerHTML = `
                <div class="search-fail">
                <img src="sfail.png" alt="search fail" class="search-fail-image">
                <h1>Product not found</h1>
                <p>Try searching for something else</p>
                <p>or</p>   
                <p>Check your spelling</p>
                
                </div>`
            }

            filteredProducts.forEach((value) => {

                let childdiv = document.createElement('div');
                // let id = document.createElement('div');
                // let title = document.createElement('div');
                // let iscompleted = document.createElement('div')

                // id.innerHTML = `userid : ${fectheddata[index].id}`;
                // title.innerHTML = `title: ${value['title']}`;
                // iscompleted.innerHTML = `iscomplted: ${value['completed']}`;

                // childdiv.style.flex = `1 1 25%`;
                // childdiv.style.height = '250px';
                // childdiv.style.border = ` 1px solid red`;
                childdiv.classList.add('child-div')

                // childdiv.addEventListener('click', getdescription);

                // pdiv.append(childdiv);
                // childdiv.appendChild(title);
                // childdiv.appendChild(id);
                // childdiv.appendChild(iscompleted);
                // let body = document.getElementById('body')

                childdiv.innerHTML = `
            
                <div class= "title">
                ${value['title']}
                </div>    
                <div class ='id'>
                ${value['id']}
                </div>
                <div class='completed'> 
                ${value['price']}
                </div>
                <div class='category'>
                ${value['category']}    
                </div>
                <div class='description'>
                ${value['description']}
                </div>
                <div class='product-image'>
                <img src= ${value['image']} class="image-responsive">
                </div>
             
             `
                pdiv.appendChild(childdiv);



            });

        }

    } catch (error) {

        console.log(error)
    }

}

fetchdata();

// function getdescription() {
//    window.open('https://fakestoreapi.com/products')
// }






