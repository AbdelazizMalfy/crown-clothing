import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

function StripeButton({ price }) {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_ndFXcl4wJO8Hl4lJZi9At5tL00gk4zAyek'

    const onToken = token =>{
        console.log(token);
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Crown Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your Total is $${price}`}        
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeButton;