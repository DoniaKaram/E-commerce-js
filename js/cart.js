let userInfo=document.querySelector('#user-info');
let userD =document.querySelector('#user');
let links=document.querySelector('#links');
let allProducts=document.querySelector(".products");
let logout=document.querySelector("#logout");
if(localStorage.getItem('username')){
    links.remove();
    userD.innerHTML=localStorage.getItem('username');
}

function  drawItemsUI(allProductsInCart=[]){
    let products=JSON.parse(localStorage.getItem('productsInCart'))||allProductsInCart;
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
            <button onClick=removeFromCart(${product.id})>Remove from cart</button>
            
        </div>
    </div>`
    })
    allProducts.innerHTML=y;
}
drawItemsUI();

function  removeFromCart(id){
    let productsInCart=localStorage.getItem('productsInCart');
    if(productsInCart){
        let items=JSON.parse(productsInCart);
        let filterItems=items.filter((item=>item.id!==id));
        localStorage.setItem('productsInCart',JSON.stringify(filterItems));
        drawItemsUI(filterItems);
    }
    
}
logout.addEventListener("click",function(){
    localStorage.clear();
    setTimeout(function(){
        window.location="login.html"

    },1500)
});