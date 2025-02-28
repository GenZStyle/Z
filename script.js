// عرض المنتجات المضافة في سلة المشتريات
let cartItems = [];

// عند النقر على زر "إضافة إلى السلة"
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        const product = this.getAttribute('data-product');
        cartItems.push(product);
        updateCart();
    });
});

// تحديث عرض سلة المشتريات
function updateCart() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = ''; // مسح القائمة القديمة

    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        cartList.appendChild(li);
    });
}

// إرسال الطلب عبر البريد الإلكتروني
function sendOrder() {
    if (cartItems.length === 0) {
        alert('سلة المشتريات فارغة!');
        return;
    }

    const orderDetails = cartItems.join(', ');
    const mailtoLink = `mailto:your-email@gmail.com?subject=طلب شراء&body=أريد شراء:${orderDetails}`;
    window.location.href = mailtoLink;
}