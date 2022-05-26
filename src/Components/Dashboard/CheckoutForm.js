import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ sentBill }) => {
    const elements = useElements();
    const stripe = useStripe();
    const [cardError, setCardError] = useState('')

    const { cost } = sentBill;

    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {

        fetch('https://polar-spire-39773.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${localStorage.getItem('accessToken')}`


            },
            body: JSON.stringify({ cost })
        })
            .then(res => res.json())
            .then(data => {

                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });


    }, [cost])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {

            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });


        setCardError(error?.message || '');






    }
    return (
        <>

            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-sx mt-5' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>

            {
                cardError && <p className='text-red-600'>{cardError}</p>
            }

        </>
    );
};

export default CheckoutForm;