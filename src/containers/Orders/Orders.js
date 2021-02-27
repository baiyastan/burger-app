import React, {Component} from 'react';
import { connect } from 'react-redux';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/Ui/Spinner/Spinner';


class Oredrs extends Component {

    componentDidMount () {
        this.props.onFetchOrders(this.props.token, this.props.userId);
    }

    render () {
        let spinner = <Spinner />;
        if ( !this.props.loading ) {
            spinner = this.props.orders.map( order => (
                    <Order 
                        key={order.id}
                        ingredients={order.ingredients} 
                        price={order.price}/>
                ) )
        };
        return (
            <div>
                {spinner}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Oredrs, axios));