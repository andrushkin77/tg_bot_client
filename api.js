function sendOrderToBot() {
    let orderData = JSON.parse(sessionStorage.getItem("orderData"));
    if (!orderData) {
        console.error("❌ Ошибка: Данные заказа не найдены!");
        return;
    }
    console.log("📤 Отправка данных в бота:", orderData);
    Telegram.WebApp.sendData(JSON.stringify(orderData));
    Telegram.WebApp.close();
}
