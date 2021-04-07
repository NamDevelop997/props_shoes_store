import React, { Component } from 'react';
import ProductList from './Props/ProductList';
import dataJson from './Data/data.json';

export default class App extends Component {
  render() {
    return (
      <div className="container">

        <div className="row" style={{ marginTop: '10%' }}>
          <div className="col-3">
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
              <a className="nav-link" id="v-pills-shop-tab" data-toggle="pill" href="#shop" role="tab" aria-controls="v-pills-shop" aria-selected="false">Shop</a>

            </div>
          </div>
          <div className="col-9">
            <div className="tab-content" id="v-pills-tabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                <ProductList arrProduct={dataJson} />
              </div>
              <div className="tab-pane fade" id="shop" role="tabpanel" aria-labelledby="v-pills-shop-tab">shop</div>

            </div>
          </div>
        </div>

      </div>
    )
  }
}
