import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../Ui/Button/Button';
import classes from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
    return (
        <div>
            <div className={classes.CheckoutSummary}>
                <h1>We hope it tastest well!</h1>
                <div style={{width: '100%', height: '300px', margin: 'auto'}}>
                    <Burger ingredients={props.ingredients} />
                </div>
                
            </div>
            <div className={classes.Button}>
                    <Button 
                        btnType="Danger"
                        clicked={props.checkoutCancelled}>CANCEL</Button>
                    <Button
                        btnType="Success"
                        clicked={props.checkoutContinued}>CONTINUE</Button>
                </div>
        </div>
    )
}

export default checkoutSummary;