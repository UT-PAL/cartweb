
let tbody = document.querySelector("#product_list");
let output = document.querySelector('#output');
let addtocart = document.querySelector("#add");
let showcart = document.querySelector("#showcart");
let clear = document.querySelector("#clear");
let alert = document.querySelector("#alert");
let total = document.querySelector("#total");

let arr=[];
let ar=[];

fetch('js/data.json')
.then(data => data.json())
.then(data=>{
    for(x of data){
       
        tbody.innerHTML +=`
        <tr>
                <td> <img src="${x.image}" style="height:100px" ></td>
                <td>${x.name}</td>
                <td>${x.price}$ </td>
                <td><button id="add" onclick="addoncart('${x.name}',${x.price})">Add to cart </button></td>
    
            </tr>
        `;
    }

});


function addoncart(name,price){

    this.name=name;
    this.price=price;
     arr.push(name);
   ar.push(price);
   
       alert.innerHTML=`${arr} Added to the cart`;
       showcart.innerHTML =`Show cart`;
    }

   
    
   
function show(){
    let total_price =0;
    if(arr == ''){
        showcart.innerHTML=`No products are currently on the cart .`;
        
    }
    else{
        showcart.innerHTML =`Show cart`;
        output.innerHTML='';
        for(y =0;y<arr.length;y++){
        total_price+=ar[y];
    output.innerHTML +=`
    <tr>
    <td>${arr[y]} :${ar[y]}</td><br>
    
    </tr>
    <br>
    `;}
    total.innerHTML=` Total price :${total_price}`;
}

}
clear.addEventListener('click', e=>{
    output.innerHTML='';
    showcart.innerHTML =`Show cart`;
    arr=[];
    ar=[];
});


