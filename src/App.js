import './App.css';
import Modes from './Components/Modes';
import Info from './Components/Info';
import Break from './Components/Break';
import Locations from './Components/Locations';
import Order from './Components/Order';
import MyOrders from './Components/MyOrders';
import Footer from './Components/Footer';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [

      ]
    }
    this.addOrder = this.addOrder.bind(this);
    this.acceptOrder = this.acceptOrder.bind(this);
    this.orderDelivered = this.orderDelivered.bind(this);
    this.rejectOrder = this.rejectOrder.bind(this);
  }

  addOrder = order => {
    let newState = this.state.orders;
    newState.push(order);
    this.setState({
      orders : newState
    });
  }
  acceptOrder = id => {
    console.log('accept');
    let newState = this.state.orders;
    newState[id-1].status = 'Accepted';
    this.setState({
      orders : newState
    });
  }
  orderDelivered = id => {
    console.log('deliviered');
    let newState = this.state.orders;
    newState[id-1].status = 'Deliviered';
    this.setState({
      orders : newState
    });
  }
  rejectOrder = id => {
    console.log('reject');
    let newState = this.state.orders;
    newState[id-1].status = 'Rejected';
    this.setState({
      orders : newState
    });
  }
  deleteOrder = e => {
    e.target.parentNode.parentNode.style.display = 'none';
  }

  render() {
    return (
      <div>
        <Modes />
        <h1 id='title'>Luka's Pizzeria</h1>
        <Info />
        <Break />
        <Locations />
        <Break />
        <Order addOrder={this.addOrder} />
        { this.state.orders.length > 0 ? (
          <>
            <Break />
            <MyOrders orders={this.state.orders} acceptOrder={this.acceptOrder} orderDelivered={this.orderDelivered} rejectOrder={this.rejectOrder} deleteOrder={this.deleteOrder} />
          </>
        ) : <></>}
        <Footer />
      </div>
    );
  }
}

export default App;
