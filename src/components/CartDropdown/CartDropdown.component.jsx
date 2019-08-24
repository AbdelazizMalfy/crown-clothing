import React from 'react';
import { connect } from 'react-redux'; 
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';


import CustomButton from '../CustomButton/CustomButton.component';
import CartItem from '../CartItem/CartItem.component';
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions';


import './CartDropdown.styles.scss'

function CartDropDown(props) {
    return (
        <div className='cart-dropdown' >
            <div className='cart-items'>
                {   
                    props.cartItems.length ?
                    props.cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} /> )
                    : 
                    <span className='empty-message'>Your cart is emtpy</span>
                }
            </div>
            <CustomButton onClick={ ()=>{
                props.history.push('/checkout')
                props.dispatch(toggleCartHidden())
            } } >GO TO CHECKOUT</CustomButton> 
        </div>
    )
}

const mapStateToProps = state => createStructuredSelector ({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropDown));