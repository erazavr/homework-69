import React, {Component} from 'react';
import {creatOrder} from "../../store/actions/orderAction";
import {connect} from "react-redux";
import Spinner from "../UI/Spinner/Spinner";

class PersonInfo extends Component {
    state = {
        name: '',
        email: '',
        number: '',
    };
    valueChanged = event => this.setState({[event.target.name]: event.target.value});
    orderHandler = async (e) => {
        e.preventDefault();
      const order = {
          dishes: this.props.dishes,
          customer: {
              name: this.state.name,
              email: this.state.email,
              number: this.state.number
          }
      };
      await this.props.creatOrder(order);
    };
    render() {
        let form = (
            <form action="" onSubmit={this.orderHandler}>
                <div>
                    <input
                        type="text"
                        placeholder='Введите ваше имя'
                        name='name'
                        onChange={this.valueChanged}
                    />
                </div>
                <div>
                    <input
                        type="number"
                        placeholder='Введите ваш телефон'
                        name='number'
                        onChange={this.valueChanged}
                    />
                </div>
                <div>
                    <input
                        type="email"
                        placeholder='Введите email'
                        name='email'
                        onChange={this.valueChanged}
                    />
                </div>
                <button type='submit'>Creat order</button>
            </form>
        );
        if (this.props.loading) {
            form=<Spinner/>
        }
        return (
            <div>
                {form}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    loading: state.order.loading,
    error: state.order.error
});
const mapDispatchToProps = dispatch => ({
    creatOrder: order => dispatch(creatOrder(order))
});
export default connect(mapStateToProps, mapDispatchToProps)(PersonInfo);