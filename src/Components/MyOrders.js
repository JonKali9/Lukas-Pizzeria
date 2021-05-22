import React, { Component } from 'react'

export default class MyOrders extends Component {
    render() {
        const orders = this.props.orders.map(order => {
            let buttons;
            if (order.status === 'Pending') {
                 buttons = (
                    <>
                        <button onClick={() => this.props.acceptOrder(order.id)} id='delivered-btn'>Accept Order</button> <br />
                        <button onClick={() => this.props.rejectOrder(order.id)} id='reject-btn'>Reject Order</button>
                    </>
                )
            } else if (order.status === 'Accepted') {
                buttons = (
                   <>
                       <button onClick={() => this.props.orderDelivered(order.id)} id='delivered-btn'>Order Deliviered</button> <br />
                       <button onClick={() => this.props.rejectOrder(order.id)} id='reject-btn'>Reject Order</button>
                   </>
               )
            } else if (order.status === 'Deliviered') {
                buttons = (
                   <>
                        <button onClick={() => this.props.deleteOrder(order.id)} id='reject-btn'>Delete Order</button> <br />
                   </>
               )
            } else if (order.status === 'Rejected') {
                buttons = (
                   <>
                        <button onClick={this.props.deleteOrder} id='reject-btn'>Delete Order</button> <br />
                   </>
               )
            }
            return (
                <div className='order' key={order.id}>
                    <h3>Order #{order.id}</h3>
                    <p>Crust: {order.crust}</p>
                    <p>Sliced: {order.sliced}</p>
                    <p>Ingredients:</p>
                    <ul>
                        {order.ingredients.length ? order.ingredients.map(ingredient => <li>{ingredient}</li>) : <li>None</li>}
                    </ul>
                    <p>Address: {order.address}</p>
                    <p>Quick Shipping: {order.quickShipping}</p>
                    <p>Status: {order.status}</p>
                    <div id='buttons'>
                        {buttons}   
                    </div>
                </div>
            )
        })
        return (
            <div>
            <h2 className='section-title'>Your Orders</h2>
                {orders}
            </div>
        )
    }
}
