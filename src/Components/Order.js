import React, { Component } from 'react'

export default class Order extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            crust: '',
            sliced: '',
            ingredients: [],
            address: '',
            quickShipping: '',
            status: 'Pending'
        }
        this.addIngredient = this.addIngredient.bind(this);
        this.addOrder = this.addOrder.bind(this);
    }

    addIngredient = ingredient => {
        let ingredients = this.state.ingredients;
        let newIngredients = [];
        if (ingredients.includes(ingredient)) {
            for (let i=0; i<ingredients.length; i++) {
                if (ingredients[i] !== ingredient) newIngredients.push(ingredients[i]);
            }
        } else {
            newIngredients = [ ...ingredients, ingredient ];
        }

        this.setState({
            ingredients: newIngredients
        })
    }

    addOrder = e => {
        if (this.state.crust && this.state.sliced && this.state.address && this.state.quickShipping) {
            this.props.addOrder({ ...this.state })
            this.setState({
                id: this.state.id + 1,
            })
            return 1;
        } else {
            alert('Missing Required Options!')
            return 0;
        }
    }

    render() {
        return (
            <div>
                <h2 className='section-title'>Order</h2>
                <div id='order'>
                    <div id='left'>
                        <div>
                            <label className='text main-label'>Crust: </label> <br />
                            <input onClick={() => this.setState({crust: 'skinny'})} name='crust' type='radio'></input> <label>Skinny</label>
                            <input onClick={() => this.setState({crust: 'regular'})} name='crust' type='radio'></input> <label>Regular</label>
                            <input onClick={() => this.setState({crust: 'thick'})} name='crust' type='radio'></input> <label>Thick</label> <br />
                        </div>
                        <div>
                            <label className='text main-label'>Sliced: </label> <br />
                            <input onClick={() => this.setState({sliced: 'yes'})} name='sliced' type='radio'></input> <label>Yes</label>
                            <input onClick={() => this.setState({sliced: 'no'})} name='sliced' type='radio'></input> <label>No</label> <br />
                        </div>
                        <div>
                            <label className='text main-label'>Ingredients: </label> <br />
                            <div id='ingredients'>
                                <div><input onClick={() => this.addIngredient('pepperoni')} type='checkbox'></input> <label>Pepperoni</label></div>
                                <div><input onClick={() => this.addIngredient('mushrooms')} type='checkbox'></input> <label>Mushrooms</label></div>
                                <div><input onClick={() => this.addIngredient('sausage')} type='checkbox'></input> <label>Sausage</label></div>
                                <div><input onClick={() => this.addIngredient('onions')} type='checkbox'></input> <label>Onions</label></div>
                                <div><input onClick={() => this.addIngredient('bacon')} type='checkbox'></input> <label>Bacon</label></div>
                                <div><input onClick={() => this.addIngredient('extra cheese')} type='checkbox'></input> <label>Extra Cheese</label></div>
                                <div><input onClick={() => this.addIngredient('peppers')} type='checkbox'></input> <label>Peppers</label></div>
                                <div><input onClick={() => this.addIngredient('olives')} type='checkbox'></input> <label>Olives</label></div>
                            </div>
                        </div>
                    </div>

                    <div id='right'>
                        <div>
                            <label className='text main-label'>Address: </label> <br />
                            <input onChange={e => this.setState({address: e.target.value})} placeholder='Enter Address'></input> <br />
                        </div>
                        <div>
                            <label className='text main-label'>Quick Shipping: </label> <br />
                            <input onClick={() => this.setState({quickShipping: 'yes'})} name='quickShipping' type='radio'></input> <label>Yes</label>
                            <input onClick={() => this.setState({quickShipping: 'no'})} name='quickShipping' type='radio'></input> <label>No</label> <br />
                        </div>
                        <div>
                            <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.vvsupremo.com%2Fwp-content%2Fuploads%2F2018%2F05%2FPepperoni-Pizza-1.jpg&f=1&nofb=1' alt='pizza' />
                            <button onClick={this.addOrder}>Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
