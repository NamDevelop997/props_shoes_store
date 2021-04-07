import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        return (
            <div className="card text-white bg-primary mb-3 " >
                <img className="card-img-top ml-5" style={{ width: '150px', height: '150px' }} src={this.props.dataProductItem.image} alt={this.props.dataProductItem.image} />
                <div className="card-body">
                    <h5 className="card-title " style={{ fontSize: '15px' }}> {this.props.dataProductItem.name}</h5>

                    <p className="">Price: {this.props.dataProductItem.price}$</p>
                    <button className="btn btn-warning">
                        Add to card <i class="fa fa-cart-plus ml-1"></i>
                    </button>
                </div>
            </div>

        )
    }
}
