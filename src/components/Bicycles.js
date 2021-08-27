import React, { Component } from 'react';
class Bicycles extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <main className="main">
  <nav aria-label="breadcrumb" className="breadcrumb-nav">
    <div className="container">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
        <li className="breadcrumb-item active" aria-current="page">Bikes</li>
      </ol>
    </div>
  </nav>
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="boxed-slider owl-carousel owl-carousel-lazy owl-theme owl-theme-light">
          <div className="category-slide">
            <div className="slide-bg owl-lazy" data-src="assets/images/abouelgoukh/background.jpg"  style={{backgroundPosition:"0% 70%"}}/>{/* End .slide-bg */}
            <div className="banner boxed-slide-content offset-1">
              <h2 className="banner-subtitle" style={{color:'white'}}>check out over <span>200+</span></h2>
              <h1 className="banner-title" style={{color:'white'}}>
                INCREDIBLE deals
              </h1>
              <a href="#" className="btn btn-primary">Shop Now</a>
            </div>{/* End .home-slide-content */}
          </div>{/* End .home-slide */}
          <div className="category-slide">
            <div className="slide-bg owl-lazy" data-src="assets/images/abouelgoukh/abogoukh.jpg" style={{backgroundPosition:"0% 70%"}}/>{/* End .slide-bg */}
            <div className="banner boxed-slide-content offset-1">
              <h2 className="banner-subtitle" style={{color:'white'}}>check out over <span>200+</span></h2>
              <h1 className="banner-title" style={{color:'white'}}>
                INCREDIBLE deals
              </h1>
              <a href="#" className="btn btn-primary">Shop Now</a>
            </div>{/* End .home-slide-content */}
          </div>{/* End .home-slide */}
        </div>{/* End .home-slider */}
        <div className="row row-sm">
        {this.props.bicycles.map((bicycle)=>
          <div className="col-6 col-md-4 col-xl-3">
            <div className="product-default inner-quickview inner-icon">
              <figure className="product_fixed_width">
                <a href="product.html">
                  <img src={bicycle.image} />
                </a>
                <div className="btn-icon-group">
                  <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-bag" /></button>
                </div>
                <a href="ajax/product-quick-view.html" className="btn-quickview quickview_margin" title="Quick View">Quick View</a> 
              </figure>
              <div className="product-details product_title_margin">
                <div className="category-wrap">
                  <div className="category-list">
                    <a href="category.html" className="product-category">{bicycle.sub_category}</a>
                  </div>
                </div>
                <h2 className="product-title product_title_margin">
                  <a href="product.html">{bicycle.name}</a>
                </h2>
              </div>{/* End .product-details */}
            </div>
          </div>
)}

        </div>{/* End .row */}

      </div>{/* End .col-lg-9 */}

    </div>{/* End .row */}
  </div>{/* End .container */}
  <div className="mb-5" />{/* margin */}
</main>
);
    }
}
 
export default Bicycles;