import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CardIcon from '../cartIcon/CartIcon.component';
import CartDropdown from '../CartDropdown/CartDropdown.component';
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './Header.styles.scss';

function Header({currentUser, hidden}) {
    return (
        <div className='header'>
            <Link className='logo-container' to="/">
                <Logo className='logo' />    
            </Link>
            <div className='options'>
                <Link className='option' to="/shop" >
                    SHOP
                </Link>
                <Link className='option' to="/contact" >
                    CONTACT
                </Link>
                {
                    currentUser ? 
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className="option" to="/signin">SIGN IN</Link>
                }
                <CardIcon />
                <div className='option'>
                    {
                        hidden ? null : <CartDropdown />
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => createStructuredSelector ({
    currentUser: selectCurrentUser ,
    hidden: selectCartHidden
    
})

export default connect(mapStateToProps)(Header);