var cartProducts = JSON.parse(localStorage.getItem("cart")) || [];
var total = cartProducts.reduce(function(sum,elem){
    return sum + Number(elem.price);
}, 0);

document.querySelector(".counter").innerText = `(${cartProducts.length})`;
document.getElementById("total").innerText = `$${total}`;
document.getElementById("finalTotal").innerText = `₹${total}`;


document.querySelector("form").addEventListener("submit", getDetails);

var pay_ship_details = JSON.parse(localStorage.getItem("paymentDetails")) || [];

function getDetails() {
    event.preventDefault();

    var addDetails = {
        firstName: document.querySelector("#firstName").value,
        lastName: document.querySelector("#lastName").value,
        address1: document.querySelector("#address1").value,
        address2: document.querySelector("#address2").value,
        apartment: document.querySelector("#addressType").value,
        city: document.querySelector("#city").value,
        state: document.querySelector("#state").value,
        pin: document.querySelector("#zip").value,
        mobile: document.querySelector("#mobile").value,
        cardNumber: document.querySelector("#cardNumber").value,
        expiryMonth: document.querySelector("#month").value,
        expiryYear: document.querySelector("#year").value,
        cvv: document.querySelector("#cvv").value,

    };

    pay_ship_details.push(addDetails);

    localStorage.setItem("paymentDetails",JSON.stringify(pay_ship_details));

    // window.location.href = "orderComplete.html";
}

function gotoLast() {
    window.location.href = "last.html";
}
document.querySelector("#logoImage").addEventListener("click",connect)
    function connect(){
        window.location.href="index.html"
    }