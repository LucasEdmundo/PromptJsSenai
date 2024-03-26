/*let productValue = Number(prompt("Enter the product price: "));
if(productValue >= 20){

    document.getElementById('result').innerHTML = "Approved";
    result.style.color = "green";
}else{
    document.getElementById('result').innerHTML = "Denied";
    result.style.color = "red";
}
*/

function calculateDiscount() {
let productValue = Number(prompt("Enter the product price: "));
let productDiscount= Number(prompt("Enter the product discount: "));

let finalPrice = productValue - (productValue * productDiscount / 100); 

document.getElementById('result').innerHTML = "The final price is: " + finalPrice;
result.style.color = "green";   
}

calculateDiscount()
