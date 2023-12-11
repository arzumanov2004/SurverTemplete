const div = document.getElementById('myDiv')
const btn = document.getElementById('btn')

let page = 1
let limit = 6
let db = []

async function getPost() {
    let skip = (page - 1) * limit
    try{
        const response = await axios.get(`https://655c81de25b76d9884fd6913.mockapi.io/products?page=${page}&limit=${limit}&skip=${skip}`);
        data = response.data;
        db = data;
        data.forEach(item => {
            const box = document.createElement('div')
            box.className = 'myBox col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12'
            box.innerHTML = `<div class="md">
                <div class="img">
                    <img src="${item.image}" alt="">
                    <h3>${item.title}</h3>
                </div>
                    <p>${item.description}</p>
                    <button onclick="adToCart(${item.id})">Ad To Basket</button> 
            </div>   
            `;
            div.appendChild(box);
            
        });
            page++;
        
    }catch (error) {
        console.error('Error fetching products:', error);
    }
}
btn.addEventListener('click',getPost)

function adToCart(id) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(db.find(item => item.id == id))
    localStorage.setItem('cart', JSON.stringify(cart))   
}
window.onload = () =>{
    getPost()
}