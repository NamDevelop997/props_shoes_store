import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
    renderProductItem = () => {
        return (
            this.props.arrProduct.map((item, index) => {
                return (
                    <div className="col-4  w3-animate-zoom" key={index} >
                        <ProductItem dataProductItem={item} />
                    </div >

                )
            })
        )
    }
    render() {
        return (
            123
            <div className="row">
                {this.renderProductItem()}
            </div>

        )
    }
}
