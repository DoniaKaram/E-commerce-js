let userInfo=document.querySelector('#user-info');
let userD =document.querySelector('#user');
let links=document.querySelector('#links');
let logout=document.querySelector("#logout");
if(localStorage.getItem('username')){
    links.remove();
    userD.innerHTML=localStorage.getItem('username');
}
let allProducts=document.querySelector(".products");
let products=[
    {
        id:1,
        imgUrl:'../images/51eg55uWmdL._AC_UX679_.jpg',
        title:'Mens Cotton Jacket-1',
        price:55.99,
        qty:0

    },
    {
        id:2,
        imgUrl:'../images/71YXzeOuslL._AC_UY879_.jpg',
        title:'Mens Cotton Jacket-2',
        price:55.99,
        qty:0


    },
    {
        id:3,
        imgUrl:'../images/51Y5NI-I5jL._AC_UX679_.jpg',
        title:'Mens Cotton Jacket-3',
        price:55.99,
        qty:0

    },
    {
        id:4,
        imgUrl:'../images/61IBBVJvSDL._AC_SY879_.jpg',
        title:'Mens Cotton Jacket-4',
        price:55.99,
        qty:0

    },
    {
        id:5,
        imgUrl:'../images/61mtL65D4cL._AC_SX679_.jpg',
        title:'Mens Cotton Jacket-5',
        price:55.99,
        qty:0

    },
    {
        id:6,
        imgUrl:'../images/61pHAEJ4NML._AC_UX679_.jpg',
        title:'Mens Cotton Jacket-6',
        price:55.99,
        qty:0
    }
];
function  drawItems(){
    y=products.map((product)=>{
        return `<div class="products-card">
        <div class="img">
            <img src="${product.imgUrl}" alt="" >
        </div>
        <div class="product-desc">
            <h3>${product.title}</h3>
            <span>${product.price}</span>
        </div>
        <div class="product-btn">
            <button onClick=addToCart(${product.id})>add to cart</button>
            
        </div>
    </div>`
    })
    allProducts.innerHTML=y;
}
drawItems();
let CartProuductDiv=document.querySelector(".cartProducts div");
let CartProducts=document.querySelector(".cartProducts");
let shoppingCart=document.querySelector(".shopping-cart");
let badge=document.querySelector(".badge");
let addItem=localStorage.getItem('productsInCart')?JSON.parse(localStorage.getItem('productsInCart')):[];
if(addItem){
addItem.map((item)=>{
    CartProuductDiv.innerHTML+=`<p>${item.title}</p>`;
})
badge.style.display="block";
    badge.innerHTML=addItem.length;
}
/**function addToCart(id){
    
        let choosenProduct=products.find((product)=>product.id===id);
        console.log(choosenProduct);
        let cartProduct=addItem.find((item)=>item.id===id);
        if(cartProduct){
            choosenProduct.qty+=1;
        }
        else{
            choosenProduct.qty=1;
            addItem=[...addItem,choosenProduct];
        }
       
CartProuductDiv.innerHTML+=`<p>${choosenProduct.title} ${choosenProduct.qty}</p>`;
                let CartProductLength=document.querySelectorAll(".cartProducts div p");
                badge.style.display="block";
                badge.innerHTML=CartProductLength.length;
                addItem=[...addItem,choosenProduct];
                localStorage.setItem("productsInCart",JSON.stringify(addItem));
    
       
    
    
    

     

}

function getTotal() {
return addItem.reduce((total,item)=>total+item.qty,0)
}**/
// Initialize cart products from local storage

function addToCart(id) {
    // Find the chosen product from the products list
    let chosenProduct = products.find((product) => product.id === id);
    console.log(chosenProduct);

    let cartProduct = addItem.find((item) => item.id === id);
    
    if (cartProduct) {
        // If the product is already in the cart, increase its quantity
        cartProduct.qty += 1;
    } else {
        // If the product is not in the cart, add it with a quantity of 1
        chosenProduct.qty = 1;
        addItem = [...addItem, chosenProduct];
    }

    // Update the cart display
    updateCartDisplay();
    
    // Store the updated cart in local storage
    localStorage.setItem("productsInCart", JSON.stringify(addItem));
}
function updateCartDisplay() {
    let CartProductDiv = document.querySelector(".cartProducts div");
    CartProductDiv.innerHTML = '';
    
    addItem.forEach(product => {
        CartProductDiv.innerHTML += `<p>${product.title} ${product.qty}</p>`;
    });

    let CartProductLength = document.querySelectorAll(".cartProducts p");
    let badge = document.querySelector(".badge");
    
    if (CartProductLength.length > 0) {
        badge.style.display = "block";
        badge.innerHTML = CartProductLength.length;
    } else {
        badge.style.display = "none";
    }
}

// Call updateCartDisplay when the page loads to show the cart items if any
updateCartDisplay();
function check() {
    if(localStorage.getItem("username"))
        {
            window.location="cartpage.html";
        }
        else{
            window.location="login.html";
        }
}
shoppingCart.addEventListener("click",openCart);
function openCart(){
if(CartProuductDiv.innerHTML!=="")
    {
        if(CartProducts.style.display=="block"){
            CartProducts.style.display="none";
        }
        else{
            CartProducts.style.display="block"
        }
    }
    
}
logout.addEventListener("click",function(){
    localStorage.clear();
    setTimeout(function(){
        window.location="login.html"

    },1500)
})