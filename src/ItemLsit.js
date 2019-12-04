import React from "react";
var shoppingCart = [
    { name: 'phone', qty: 1, price: 500 },
    { name: 'Screen Protector', qty: 1, price: 500 },
    { name: 'Memory Card', qty: 2, price: 500 },
    { name: 'Laptop', qty: 3, price: 400 }
]

var totalAmount = 0;
var discount = 0;
var saveAmount = 0;
var totalItem = shoppingCart.reduce(function (pre, curr) {
    curr.totalAmt = curr.qty * curr.price;
    totalAmount += curr.totalAmt;
    pre.push(curr)
    return pre;
}, []);


var updatedOrderList = shoppingCart.reduce(function (orderList, item) {
    item.totalAmt = item.qty * item.price;
    orderList.totalAmount += item.totalAmt;
    orderList.itemList.push(item)
    return orderList;
}, {itemList:[], totalAmount:0});

console.log(updatedOrderList)


if (totalAmount >= 1000) {
    discount = totalAmount - (totalAmount * 10 / 100);
    saveAmount = totalAmount - discount;
}

const itemRender = () => {
    return (
        <div className="container">
            <div className="heading4">Item List</div>
            <div className="itemList">
                {totalItem.map(data => {
                    return (
                        <div className="row1">
                            <div className="column">{data.name}</div>
                            <div className="column">{data.qty}</div>
                            <div className="column">{data.price}</div>
                            <div className="column">{data.totalAmt}</div>
                        </div>
                    )

                })}

                <div className="totalSum">
                    <span className="toamt">Total Amount</span>{totalAmount}
                </div>
                <div className="totalSum">
                    <span className="toamt">Discount Amount</span>{discount}
                </div>
                <div className="totalSum">
                    <span className="toamt">Save Amount</span>{saveAmount}
                </div>
            </div>
        </div>
    )
};
export default itemRender;