import React, { Component } from 'react';
class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <div className="page-wrapper">
          <main className="home main">
            <div className="top-slider owl-carousel owl-theme" data-toggle="owl" data-owl-options="{
                  'items' : 1,
                  'margin' : 0,
                  'nav': true,
                  'dots': false,
                  'autoplay': true
              }">
              <div className="home-slide">
                <div className="slide-content flex-column flex-lg-row">
                  <div className="content-left mx-auto mr-lg-0 py-5">
                    <h2>New Arrivals</h2>
                    <h4 className="cross-txt">Bicycles</h4>
                    <h3 className="mb-2 mb-lg-8">Summer Collection</h3>
                    <button className="btn">Shop All Sale</button>
                  </div>
                  <div className="image-container mx-auto py-5">
                    <img src="assets/images/abouelgoukh/bicycles/50A_UNICA_CLARIS_RED_2015-976x536-600x330.png" className="slide-img1" alt="slide image" />
                    <div className="image-info mt-2 mt-lg-6 flex-column flex-sm-row">
                      <div className="info-left">
                        <h4><span>Unica</span></h4>
                      </div>
                      <div className="info-right">
                        <h4>Start Shopping Right Now</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-slide">
                <div className="slide-content flex-column flex-lg-row">
                  <img src="assets/images/abouelgoukh/bikes/M053.png" className="mx-auto mr-lg-0 py-5" alt="slide image" />
                  <div className="content-right order-first order-lg-1 mx-auto py-5">
                    <h2>Featured</h2>
                    <h4 className="cross-txt">BIKES</h4>
                    <h3 className="mb-2 mb-lg-8">Summer Sale</h3>
                    <button className="btn">Shop All Sale</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <section className="product-panel">
                <div className="section-title">
                  <h2>Most Popular Bicycles</h2>
                </div>
                <div className="owl-carousel owl-theme" data-toggle="owl" data-owl-options="{
                          'margin': 4,
                          'items': 2,
                          'autoplayTimeout': 5000,
                          'dots': false,
                          'nav' : true,
                          'responsive': {
                              '768': {
                                  'items': 3
                              },
                              '992' : {
                                  'items' : 4
                              },
                              '1200': {
                                  'items': 5
                              }
                          }
                      }">
                        {this.props.bicycles.map((bicycle)=>
                  <div className="product-default inner-quickview inner-icon center-details" key={bicycle.id}>
                    <figure className="product_fixed_width">
                      <a href="product.html">
                        <img src={bicycle.image}/>
                      </a>
                      <div className="btn-icon-group">
                        <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-bag" /></button>
                      </div>
                      <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a> 
                    </figure>
                    <div className="product-details product_title_margin">
                      <div className="category-wrap">
                        <div className="category-list">
                          <a href="category.html" className="product-category">{bicycle.sub_category}</a>
                        </div>
                      </div>
                      <h2 className="product-title">
                        <a href="product.html">{bicycle.name}</a>
                      </h2>
                    </div>{/* End .product-details */}
                  </div>
                  )}
                  </div>
              </section>
              <div className="product-cat-box owl-carousel owl-theme" data-toggle="owl" data-owl-options="{
                      'margin': 0,
                      'items': 2,
                      'loop' : false,
                      'autoplay' : false,
                      'dots': false,
                      'nav' : true,
                      'responsive': {
                          '0' : {
                              'items' : 2
                          },
                          '768': {
                              'items': 3
                          },
                          '992' : {
                              'items' : 4
                          },
                          '1200': {
                              'items': 5
                          }
                      }
                  }">
                <div className="product-cat">
                  <i className="icon-category-saddle" />
                  <span>Bike Saddles</span>
                </div>
                <div className="product-cat">
                  <i className="icon-category-pedals font-lg" />
                  <span>Bike Pedals</span>
                </div>
                <div className="product-cat">
                  <i className="icon-category-frames font-lg" />
                  <span>Bike Frames</span>
                </div>
                <div className="product-cat">
                  <i className="icon-category-chains" />
                  <span>Bike Chains</span>
                </div>
                <div className="product-cat">
                  <i className="icon-category-tools" />
                  <span>Bike Tools</span>
                </div>
              </div>
            </div>
            <div className="home-banner mb-3 flex-wrap flex-md-nowrap">
              <div className="banner-left mb-1 mb-md-0 mx-auto ml-md-0 mr-md-3">
                <img src="assets/images/banners/banner1.jpg" alt="banner" />
              </div>
              <div className="banner-right">
                <img src="assets/images/banners/banner2.jpg" alt="banner" />
                <div className="banner-content">
                  <h2>get ready</h2>
                  <div className="mb-1">
                    <h3 className="align-middle d-inline">20% Off</h3>
                    <a href="#" className="btn">Shop All Sale</a>
                  </div>
                  <h4 className="cross-txt">bikes</h4>
                </div>
              </div>
            </div>
            <div className="container">
              <section className="product-panel">
                <div className="section-title">
                  <h2>Trending Accessories</h2>
                </div>
                <div className="owl-carousel owl-theme" data-toggle="owl" data-owl-options="{
                          'margin': 4,
                          'items': 2,
                          'autoplayTimeout': 5000,
                          'dots': false,
                          'nav' : true,
                          'responsive': {
                              '768': {
                                  'items': 3
                              },
                              '992' : {
                                  'items' : 4
                              },
                              '1200': {
                                  'items': 5
                              }
                          }
                      }">
                        {this.props.bikes.map((bike)=>
                   <div className="product-default inner-quickview inner-icon center-details" key={bike.id}>
                   <figure>
                     <a href="product.html">
                       <img src={bike.image}/>
                     </a>
                     <div className="btn-icon-group">
                       <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-bag" /></button>
                     </div>
                     <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a> 
                   </figure>
                   <div className="product-details">
                     <div className="category-wrap">
                       <div className="category-list">
                         <a href="category.html" className="product-category">{bike.sub_category}</a>
                       </div>
                     </div>
                     <h2 className="product-title">
                       <a href="product.html">{bike.name}</a>
                     </h2>
                   </div>{/* End .product-details */}
                 </div>
                        )}
                </div>
              </section>
              <div className="row row-sm mb-5 home-banner4 text-center">
                <div className="col-sm-6">
                  <div className="row row-sm home-banner4-white">
                    <div className="col-md-4">
                      <span>Summer Sale</span>
                      <h3>20% OFF</h3>
                    </div>
                    <div className="col-md-4 d-flex align-items-center">
                      <img className="banner-image" src="assets/images/banners/banner4.jpg" alt="banner" />
                    </div>
                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                      <button className="btn">shop all sale</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="row row-sm home-banner4-primary">
                    <div className="col-md-4">
                      <span>Flash Sale</span>
                      <h3>30% OFF</h3>
                    </div>
                    <div className="col-md-4 d-flex align-items-center">
                      <img className="banner-image" src="assets/images/banners/banner5.jpg" alt="banner" />
                    </div>
                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                      <button className="btn">shop all sale</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>{/* End .main */}
         
        </div>{/* End .page-wrapper */}
          <a id="scroll-top" href="#top" title="Top" role="button"><i className="icon-angle-up" /></a>
        
            </div>
          );
    }
}
 
export default Homepage;
