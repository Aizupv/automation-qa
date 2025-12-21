

function checkOrder(available, ordered) {
    const noGoodsMessage = 'Your order is too large, we don’t have enough goods.';
    const orderEmptyMessage = 'Your order is empty';
    const acceptedOrderMessage = 'Your order is accepted';
    if (available < ordered) {
        return noGoodsMessage
    }
    else if (ordered === 0) {
        return orderEmptyMessage
    }
    else return acceptedOrderMessage

}
console.log(checkOrder(40, 5))