let tg = window.Telegram.WebApp;
tg.expand();

function saveOrderData() {
    let orderData = {
        deliveryType: document.getElementById("deliveryType").value,
        deliveryTime: document.getElementById("deliveryTime").value,
        comment: document.getElementById("comment").value,
    };
    sessionStorage.setItem("orderData", JSON.stringify(orderData));
}

document.getElementById("deliveryType").addEventListener("change", saveOrderData);
document.getElementById("deliveryTime").addEventListener("change", saveOrderData);
document.getElementById("comment").addEventListener("input", saveOrderData);
