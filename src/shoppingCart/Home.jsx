import React, { Component } from "react";
import { connect } from "react-redux";
import Cart from "./Cart";
import Detail from "./Detail";
import ProductList from "./ProductList";

class Home extends Component {
  render() {
    let total = this.props.cartProduct.reduce((a, b) => {
      return (a += b.quantity);
    }, 0);
    return (
      <div>
        <h1 className="text-center">BÀI TẬP GIỎ HÀNG </h1>
        <h4
          className="d-flex justify-content-center"
          data-toggle="modal"
          data-target="#modelId"
        >
          <button className="btn btn-danger">
            Giỏ hàng (<span className="text-light">{total}</span>)
          </button>
        </h4>
        <ProductList />
        {this.props.showDetail && <Detail />}

        <Cart />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showDetail: state.shoppingCart.showDetail,
    cartProduct: state.shoppingCart.cartProduct,
  };
};

export default connect(mapStateToProps)(Home);
