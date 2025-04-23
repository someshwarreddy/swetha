
let url = 'https://fakestoreapi.com/products'
async function fetchData(query) {
    try {
        let fetchdata = await fetch(url);
        if (!fetchdata.ok) {
            throw new Error('api is failed to fecth response using async function')
        }
        let fectheddata = await fetchdata.json();

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
                childdiv.classList.add('child-div')
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
        // Simulate a network request
        setTimeout(() => {
            displayproducts(fectheddata, query)//all the display function with the fetched data and query')
        }, 1000);

    } catch (error) {

        console.log(error)
    }



}

function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        console.log('debounce function called');
        console.log(args);
        // Clear the previous timeout if it exists

        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

let debouncedFetchData = debounce(fetchData, 1000); 2// Set the delay to 1000 milliseconds (1 second)

let search = document.getElementById('search');
search.addEventListener('input', (e) => {

    debouncedFetchData(e.target.value); // Pass the input value to the debounced function 1

})

// fetchData(''); // Fetch all products on page load

//  throttle
function logScrollPosition() {
    // alert('Scroll event triggered!');
    fetchData(''); // Fetch all products on page load
    console.log('Scroll Y:', window.scrollY);
}

function throttle(func, limit) {
    let lastRun = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastRun >= limit) {
            lastRun = now;
            func.apply(this, args);
        }
    };
}

const throttledScroll = throttle(logScrollPosition, 300);
window.addEventListener('scroll', throttledScroll);