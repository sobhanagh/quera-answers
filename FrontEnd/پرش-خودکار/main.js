const inputs = document.querySelectorAll("input");

function findInput(orderData) {
    for (let i = 0; i < 4; i++) {
        if (inputs[i].getAttribute("data-order") == orderData) {
            return inputs[i];
        }
    }
}

inputs.forEach((input) => {
    input.addEventListener("keyup", (e) => {
        if (e.target.value.length == 4) {
            let dataOrder = e.target.getAttribute("data-order")
            const element = findInput(parseInt(dataOrder) + 1);
            element != undefined ? element.focus() : ''
        }
        if (e.target.value.length == 0) {
            let dataOrder = e.target.getAttribute("data-order")
            const element = findInput(parseInt(dataOrder) - 1);
            element != undefined ? element.focus() : ''
        }
    })
})