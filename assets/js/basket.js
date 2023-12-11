const div = document.getElementById('myDiv')

function postBasket() {
    div.innerHTML = ''
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    console.log(cart);
    cart.map((item,index)=> {
        const box = document.createElement('div')
            box.className = 'myBox col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12'
            box.innerHTML = `<div class="md">
                <div class="img">
                    <img src="${item.image}" alt="">
                    <h3>${item.title}</h3>
                </div>
                    <p>${item.description}</p>
                    <button onclick="Remove(${index})">Remove</button> 
                    
            </div>   
            `;
            div.appendChild(box);
    });
};
function Remove(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index,1)
    localStorage.setItem('cart', JSON.stringify(cart))
    postBasket()
};
window.onload = () => {
    postBasket()

};

