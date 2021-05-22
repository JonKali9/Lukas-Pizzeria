import React, { Component } from 'react'

export default class Locations extends Component {
    render() {
        return (
            <div>
                <h2 className='section-title'>Our Locations</h2>
                <div id='locations'>
                    <div className='location'>
                        <h3 className='text'>Trieste2Go</h3>
                        <p className='text'>Country: Italy</p>
                        <p className='text'>City: Trieste</p>
                        <p className='text'>Street: Via Marten</p>
                        <p className='text'>House Number: 26</p>
                    </div>
                    <div className='location'>
                        <h3 className='text'>Roman Style</h3>
                        <p className='text'>Country: Italy</p>
                        <p className='text'>City: Rome</p>
                        <p className='text'>Street: Via Haffa</p>
                        <p className='text'>House Number: 12</p>
                    </div>
                    <div className='location'>
                        <h3 className='text'>Pizzzzzza</h3>
                        <p className='text'>Country: Italy</p>
                        <p className='text'>City: Naples</p>
                        <p className='text'>Street: Via Internato</p>
                        <p className='text'>House Number: 46</p>
                    </div>
                    <div className='location'>
                        <h3 className='text'>K2 Pizza</h3>
                        <p className='text'>Country: Italy</p>
                        <p className='text'>City: Udine</p>
                        <p className='text'>Street: Via Katto</p>
                        <p className='text'>House Number: 8</p>
                    </div>
                    <div className='location'>
                        <h3 className='text'>Pizzeria420</h3>
                        <p className='text'>Country: Italy</p>
                        <p className='text'>City: Trieste</p>
                        <p className='text'>Street: Via Motana</p>
                        <p className='text'>House Number: 2</p>
                    </div>
                    <div className='location'>
                        <h3 className='text'>Roberto</h3>
                        <p className='text'>Country: Siciliy</p>
                        <p className='text'>City: Udine</p>
                        <p className='text'>Street: Via Cordegnone</p>
                        <p className='text'>House Number: 11</p>
                    </div>
                </div>
            </div>
        )
    }
}
