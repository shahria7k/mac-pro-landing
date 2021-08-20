const basePrice = document.getElementById("base-price");
const memoryPrice = document.getElementById("memory-price");
const storagePrice = document.getElementById("storage-price");
const deliveryCharge = document.getElementById("delivery-charge");
const totalPrice = document.getElementById("total-price");
const coupon = document.getElementById("coupon");
const grandTotal = document.getElementById("grand-total");
const buttons = document.querySelectorAll('button');
// instantiated to keep track of data
const iMacOptions = {
    base: 1299,
    memory: 0,
    storage: 0,
    delivery: 0,
    total: 1299,
};
// to creato visual changes so that selected options are visable
function selectAndToggle(targetClass, targetElement) {
    const elements = document.getElementsByClassName(targetClass);
    for (const element of elements) {
        element.classList.remove("active");
    }
    targetElement.classList.add('active');
}
// all calculations are handled with this function
// @param source gets the data name  and @param value gets data vale from each buttons data attribute
function updateAll(source, value) {
    // condition to check if its is the apply coupon button or not
    if (source == "coupon") {
        const couponValue = coupon.value.toLowerCase();
        coupon.value = "";
        if (couponValue == 'stevekaku') {
            iMacOptions.grandTotal = iMacOptions.total * .8;
            grandTotal.innerText = iMacOptions.grandTotal;
        }
        // all buttons except apply coupon button works from here
    } else {
        iMacOptions[source] = parseInt(value);
        iMacOptions.total = iMacOptions.base + iMacOptions.memory + iMacOptions.storage + iMacOptions.delivery;
        basePrice.innerText = iMacOptions.base;
        memoryPrice.innerText = iMacOptions.memory;
        storagePrice.innerText = iMacOptions.storage;
        deliveryCharge.innerText = iMacOptions.delivery;
        totalPrice.innerText = iMacOptions.total;
        grandTotal.innerText = iMacOptions.total;
    }

};
// looping through all the button to addEvent listenre
for (let button of buttons) {
    button.addEventListener('click', e => {
        updateAll(e.target.dataset.name, e.target.dataset.value);
        selectAndToggle(e.target.dataset.name, e.target);
    });
}