import React, {Component, Fragment} from 'react';
import Dish from "../components/Dish/Dish";
import {connect} from "react-redux";
import {getDishes} from "../store/actions/dishesActions";
import {addDish, purchaseHandler, purchasingCancel, removeDish} from "../store/actions/cartActions";
import Modal from "../components/UI/Modal/Modal";
import PersonInfo from "../components/PersonInfo/PersonInfo";
class DishesList extends Component {
    componentDidMount() {
        this.props.getDishes()
    }
    render() {
        return (
            <Fragment>
                <div>
                    {this.props.dishes &&
                        Object.keys(this.props.dishes).map(dish => (
                            <Dish
                                key={dish}
                                dish={this.props.dishes[dish].dishName}
                                cost={this.props.dishes[dish].cost}
                                img={this.props.dishes[dish].img}
                                onClick={() => this.props.addDish(this.props.dishes[dish], dish)}
                            />
                        ))
                    }
                </div>
                {this.props.switch &&
                    <div className='cart'>
                        <h3>Cart</h3>
                        {Object.keys(this.props.cart).map(dish => (
                                this.props.cart[dish].count > 0? <div key={dish}>
                                    <p style={{cursor: 'pointer'}} onClick={() => this.props.removeDish(this.props.cart[dish], dish)}>{this.props.cart[dish].dishName} x {this.props.cart[dish].count} <span><b>{this.props.cart[dish].cost}</b></span></p>
                                </div>: null
                        ))}
                        <div className='cart-info'>
                            <p>Доставка <span><b>150</b></span></p>
                            <p>Итого: <span><b>{this.props.price}</b></span></p>
                        </div>
                        <div className='cart-btn'>
                            <button onClick={this.props.purchaseHandler}>Place order</button>
                        </div>
                    </div>
                }
                <Modal
                    show={this.props.purchasing}
                    close={this.props.purchasingCancel}
                >
                    <PersonInfo
                        dishes={this.props.cart}
                    />
                </Modal>
            </Fragment>
        );
    }
}
const mapStateToProps = state => ({
    dishes: state.dishes.dishes,
    cart: state.cart.cart,
    switch: state.cart.switch,
    price: state.cart.price,
    purchasing: state.cart.purchasing
});
const mapDispatchToProps = dispatch => ({
    getDishes: () => dispatch(getDishes()),
    addDish: (dish, name) => dispatch(addDish(dish, name)),
    removeDish: (dish, name) => dispatch(removeDish(dish,name)),
    purchaseHandler: () => dispatch(purchaseHandler()),
    purchasingCancel: () => dispatch(purchasingCancel())
});
export default connect(mapStateToProps, mapDispatchToProps)(DishesList);