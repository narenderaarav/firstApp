import React, {Component} from "react";
var shoppingCart = [
    { name: 'phone', qty: 1, price: 500 },
    { name: 'Screen Protector', qty: 1, price: 500 },
    { name: 'Memory Card', qty: 2, price: 500 },
    { name: 'Charger', qty: 4, price: 400 }
]

var orderList = shoppingCart.reduce(function(order, item){
        item.total = item.qty * item.price;
        order.priceSum += item.total;
        order.itemListing.push(item)
        return order;

},{itemListing:[], priceSum:0});
console.log(orderList);

  
    const itemShow = () =>{
        return (
            <div className="container">
                 <div className="heading4">List Item</div>
                 <div className="itemListOne">
                   {orderList.itemListing.map(data =>{
                       return(
                        <div><div className="column">{data.name}</div>
                            <div className="column">{data.qty}</div>
                            <div className="column">{data.price}</div>
                            <div className="column">{data.totalAmt}</div>
                            </div>
                    )
                })}
        </div>
        </div>
        )
    } ;   
    
    export default itemShow;



