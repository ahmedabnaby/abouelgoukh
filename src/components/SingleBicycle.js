import React, { Component } from 'react';
class SingleBicycles extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="page-wrapper">
      <main className="main">
  <nav aria-label="breadcrumb" className="breadcrumb-nav">
    <div className="container">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
        <li className="breadcrumb-item active" aria-current="page">Product</li>
      </ol>
    </div>
  </nav>
  <div className="container">
    <div className="row row-sm">
      <div className="col-lg-9 col-xl-10">
        <div className="product-single-container product-single-default">
          <div className="row">
            <div className="col-lg-4 col-md-6 product-single-gallery">
              <div className="product-slider-container product-item">
                <div className="product-single-carousel owl-carousel owl-theme">
                  <div className="product-item">
                    <img className="product-single-image" src="assets/images/products/grey/product-8.jpg" data-zoom-image="assets/images/products/grey/product-8.jpg" />
                  </div>
                  <div className="product-item">
                    <img className="product-single-image" src="assets/images/products/grey/product-9.jpg" data-zoom-image="assets/images/products/grey/product-9.jpg" />
                  </div>
                </div>
                {/* End .product-single-carousel */}
                <span className="prod-full-screen">
                  <i className="icon-plus" />
                </span>
              </div>
              <div className="prod-thumbnail row owl-dots" id="carousel-custom-dots">
                <div className="col-3 owl-dot">
                  <img src="assets/images/products/grey/product-8.jpg" />
                </div>
                <div className="col-3 owl-dot">
                  <img src="assets/images/products/grey/product-9.jpg" />
                </div>
              </div>
            </div>{/* End .col-lg-5 */}
            <div className="col-lg-8 col-md-6">
              <div className="product-single-details">
                <h1 className="product-title">Product Long Name</h1>
                <div className="ratings-container">
                  <div className="product-ratings">
                    <span className="ratings" style={{width: '100%'}} />{/* End .ratings */}
                  </div>{/* End .product-ratings */}
                  <a href="#" className="rating-link">( 6 Reviews )</a>
                </div>{/* End .product-container */}
                <div className="price-box">
                  <span className="product-price">$49</span>
                </div>{/* End .price-box */}
                <div className="product-desc">
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolre eu fugiat nulla pariatur excepteur sint occaecat cupidatat non. Duis aute irure dolor in reprehenderit in voluptate velit esse. <a href="#">(read more)</a></p>
                </div>{/* End .product-desc */}
                <div className="product-filters-container">
                  <div className="product-single-filter">
                    <label>Size:</label>
                    <ul className="config-size-list">
                      <li className="active"><a href="#">S</a></li>
                      <li><a href="#">M</a></li>
                      <li><a href="#">L</a></li>
                      <li><a href="#">X</a></li>
                    </ul>
                  </div>
                </div>{/* End .product-filters-container */}
                <div className="product-action product-all-icons">
                  <a href="cart.html" className="paction add-cart" title="Add to Cart">
                    Add to Bag
                  </a>
                </div>{/* End .product-action */}
                <div className="product-single-share">
                  <label>Share:</label>
                  {/* www.addthis.com share plugin*/}
                  <div className="addthis_inline_share_toolbox" />
                </div>{/* End .product single-share */}
              </div>{/* End .product-single-details */}
            </div>{/* End .col-lg-7 */}
          </div>{/* End .row */}
        </div>{/* End .product-single-container */}
        <div className="product-single-tabs">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="product-tab-desc" data-toggle="tab" href="#product-desc-content" role="tab" aria-controls="product-desc-content" aria-selected="true">Description</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="product-tab-tags" data-toggle="tab" href="#product-tags-content" role="tab" aria-controls="product-tags-content" aria-selected="false">Tags</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="product-tab-reviews" data-toggle="tab" href="#product-reviews-content" role="tab" aria-controls="product-reviews-content" aria-selected="false">Reviews</a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane fade show active" id="product-desc-content" role="tabpanel" aria-labelledby="product-tab-desc">
              <div className="product-desc-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                <ul>
                  <li><i className="icon-ok" />Any Product types that You want - Simple, Configurable</li>
                  <li><i className="icon-ok" />Downloadable/Digital Products, Virtual Products</li>
                  <li><i className="icon-ok" />Inventory Management with Backordered items</li>
                </ul>
                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br />quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              </div>{/* End .product-desc-content */}
            </div>{/* End .tab-pane */}
            <div className="tab-pane fade" id="product-tags-content" role="tabpanel" aria-labelledby="product-tab-tags">
              <div className="product-tags-content">
                <form action="#">
                  <h4>Add Your Tags:</h4>
                  <div className="form-group">
                    <input type="text" className="form-control form-control-sm" required />
                    <input type="submit" className="btn btn-primary" defaultValue="Add Tags" />
                  </div>{/* End .form-group */}
                </form>
                <p className="note">Use spaces to separate tags. Use single quotes (') for phrases.</p>
              </div>{/* End .product-tags-content */}
            </div>{/* End .tab-pane */}
            <div className="tab-pane fade" id="product-reviews-content" role="tabpanel" aria-labelledby="product-tab-reviews">
              <div className="product-reviews-content">
                <div className="collateral-box">
                  <ul>
                    <li>Be the first to review this product</li>
                  </ul>
                </div>{/* End .collateral-box */}
                <div className="add-product-review">
                  <h3 className="text-uppercase heading-text-color font-weight-semibold">WRITE YOUR OWN REVIEW</h3>
                  <p>How do you rate this product? *</p>
                  <form action="#">
                    <table className="ratings-table">
                      <thead>
                        <tr>
                          <th>&nbsp;</th>
                          <th>1 star</th>
                          <th>2 stars</th>
                          <th>3 stars</th>
                          <th>4 stars</th>
                          <th>5 stars</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Quality</td>
                          <td>
                            <input type="radio" name="ratings[1]" id="Quality_1" defaultValue={1} className="radio" />
                          </td>
                          <td>
                            <input type="radio" name="ratings[1]" id="Quality_2" defaultValue={2} className="radio" />
                          </td>
                          <td>
                            <input type="radio" name="ratings[1]" id="Quality_3" defaultValue={3} className="radio" />
                          </td>
                          <td>
                            <input type="radio" name="ratings[1]" id="Quality_4" defaultValue={4} className="radio" />
                          </td>
                          <td>
                            <input type="radio" name="ratings[1]" id="Quality_5" defaultValue={5} className="radio" />
                          </td>
                        </tr>
                        <tr>
                          <td>Value</td>
                          <td>
                            <input type="radio" name="value[1]" id="Value_1" defaultValue={1} className="radio" />
                          </td>
                          <td>
                            <input type="radio" name="value[1]" id="Value_2" defaultValue={2} className="radio" />
                          </td>
                          <td>
                            <input type="radio" name="value[1]" id="Value_3" defaultValue={3} className="radio" />
                          </td>
                          <td>
                            <input type="radio" name="value[1]" id="Value_4" defaultValue={4} className="radio" />
                          </td>
                          <td>
                            <input type="radio" name="value[1]" id="Value_5" defaultValue={5} className="radio" />
                          </td>
                        </tr>
                        <tr>
                          <td>Price</td>
                          <td>
                            <input type="radio" name="price[1]" id="Price_1" defaultValue={1} className="radio" />
                          </td>
                          <td>
                            <input type="radio" name="price[1]" id="Price_2" defaultValue={2} className="radio" />
                          </td>
                          <td>
                            <input type="radio" name="price[1]" id="Price_3" defaultValue={3} className="radio" />
                          </td>
                          <td>
                            <input type="radio" name="price[1]" id="Price_4" defaultValue={4} className="radio" />
                          </td>
                          <td>
                            <input type="radio" name="price[1]" id="Price_5" defaultValue={5} className="radio" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="form-group">
                      <label>Nickname <span className="required">*</span></label>
                      <input type="text" className="form-control form-control-sm" required />
                    </div>{/* End .form-group */}
                    <div className="form-group">
                      <label>Summary of Your Review <span className="required">*</span></label>
                      <input type="text" className="form-control form-control-sm" required />
                    </div>{/* End .form-group */}
                    <div className="form-group mb-2">
                      <label>Review <span className="required">*</span></label>
                      <textarea cols={5} rows={6} className="form-control form-control-sm" defaultValue={""} />
                    </div>{/* End .form-group */}
                    <input type="submit" className="btn btn-primary" defaultValue="Submit Review" />
                  </form>
                </div>{/* End .add-product-review */}
              </div>{/* End .product-reviews-content */}
            </div>{/* End .tab-pane */}
          </div>{/* End .tab-content */}
        </div>{/* End .product-single-tabs */}
      </div>{/* End .col-lg-9 */}
      <div className="sidebar-overlay" />
      <div className="sidebar-toggle"><i className="icon-right-open" /></div>
      <aside className="sidebar-product col-lg-3 col-xl-2 padding-left-lg mobile-sidebar">
        <div className="sidebar-wrapper">
          <div className="widget">
            <h3 className="widget-title">
              <a data-toggle="collapse" href="#widget-body-2" role="button" aria-expanded="true" aria-controls="widget-body-2">Featured Products</a>
            </h3>
            <div className="collapse show" id="widget-body-2">
              <div className="widget-body">
                <div className="product-intro">
                  <div className="product-default left-details product-widget">
                    <figure>
                      <a href="product.html">
                        <img src="assets/images/products/grey/product-4.jpg" />
                      </a>
                    </figure>
                    <div className="product-details">
                      <h2 className="product-title">
                        <a href="product.html">Product Short Name</a>
                      </h2>
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span className="ratings" style={{width: '100%'}} />{/* End .ratings */}
                          <span className="tooltiptext tooltip-top" />
                        </div>{/* End .product-ratings */}
                      </div>{/* End .product-container */}
                      <div className="price-box">
                        <span className="product-price">$49.00</span>
                      </div>{/* End .price-box */}
                    </div>{/* End .product-details */}
                  </div>
                  <div className="product-default left-details product-widget">
                    <figure>
                      <a href="product.html">
                        <img src="assets/images/products/grey/product-1.jpg" />
                      </a>
                    </figure>
                    <div className="product-details">
                      <h2 className="product-title">
                        <a href="product.html">Product Short Name</a>
                      </h2>
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span className="ratings" style={{width: '100%'}} />{/* End .ratings */}
                          <span className="tooltiptext tooltip-top" />
                        </div>{/* End .product-ratings */}
                      </div>{/* End .product-container */}
                      <div className="price-box">
                        <span className="product-price">$49.00</span>
                      </div>{/* End .price-box */}
                    </div>{/* End .product-details */}
                  </div>
                  <div className="product-default left-details product-widget">
                    <figure>
                      <a href="product.html">
                        <img src="assets/images/products/grey/product-2.jpg" />
                      </a>
                    </figure>
                    <div className="product-details">
                      <h2 className="product-title">
                        <a href="product.html">Product Short Name</a>
                      </h2>
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span className="ratings" style={{width: '100%'}} />{/* End .ratings */}
                          <span className="tooltiptext tooltip-top" />
                        </div>{/* End .product-ratings */}
                      </div>{/* End .product-container */}
                      <div className="price-box">
                        <span className="product-price">$49.00</span>
                      </div>{/* End .price-box */}
                    </div>{/* End .product-details */}
                  </div>
                </div>
              </div>{/* End .widget-body */}
            </div>{/* End .collapse */}
          </div>{/* End .widget */}
          <div className="widget">
            <h3 className="widget-title">
              <a data-toggle="collapse" href="#widget-body-2" role="button" aria-expanded="true" aria-controls="widget-body-2">Custom HTML Block</a>
            </h3>
            <div className="collapse show" id="widget-body-2">
              <div className="widget-body">
                <h4 className="widget-subtitle">This is a custom sub-title.</h4>
                <p>Lorem ipsum dolor ist amet, consec tetur elitad adipiscing Cras non placerat mi.</p>
              </div>{/* End .widget-body */}
            </div>{/* End .collapse */}
          </div>{/* End .widget */}
          <div className="widget widget-banner">
            <div className="banner banner-image">
              <a href="#">
                <img src="assets/images/banners/banner-sidebar.jpg" alt="Banner Desc" />
              </a>
            </div>{/* End .banner */}
          </div>{/* End .widget */}
        </div>
      </aside>{/* End .col-md-3 */}
    </div>{/* End .row */}
  </div>{/* End .container */}
  <div className="with-border-top">
    <section className="container product-panel">
      <div className="section-title">
        <h2>Related Products</h2>
      </div>
      <div className="owl-carousel owl-theme" data-toggle="owl" data-owl-options="{
                  'margin': 4,
                  'items': 2,
                  'autoplayTimeout': 5000,
                  'dots': false,
                  'nav' : false,
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
        <div className="product-default inner-quickview inner-icon center-details">
          <figure>
            <a href="product.html">
              <img src="assets/images/products/grey/product-1.jpg" />
            </a>
            <div className="btn-icon-group">
              <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-bag" /></button>
            </div>
            <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a> 
          </figure>
          <div className="product-details">
            <div className="category-wrap">
              <div className="category-list">
                <a href="category.html" className="product-category">category</a>
              </div>
            </div>
            <h2 className="product-title">
              <a href="product.html">Product Short Name</a>
            </h2>
            <div className="ratings-container">
              <div className="product-ratings">
                <span className="ratings" style={{width: '100%'}} />{/* End .ratings */}
                <span className="tooltiptext tooltip-top" />
              </div>{/* End .product-ratings */}
            </div>{/* End .product-container */}
            <div className="price-box">
              <span className="old-price">$59.00</span>
              <span className="product-price">$49.00</span>
            </div>{/* End .price-box */}
          </div>{/* End .product-details */}
        </div>
        <div className="product-default inner-quickview inner-icon center-details">
          <figure>
            <a href="product.html">
              <img src="assets/images/products/grey/product-2.jpg" />
            </a>
            <div className="btn-icon-group">
              <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-bag" /></button>
            </div>
            <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a> 
          </figure>
          <div className="product-details">
            <div className="category-wrap">
              <div className="category-list">
                <a href="category.html" className="product-category">category</a>
              </div>
            </div>
            <h2 className="product-title">
              <a href="product.html">Product Short Name</a>
            </h2>
            <div className="ratings-container">
              <div className="product-ratings">
                <span className="ratings" style={{width: '100%'}} />{/* End .ratings */}
                <span className="tooltiptext tooltip-top" />
              </div>{/* End .product-ratings */}
            </div>{/* End .product-container */}
            <div className="price-box">
              <span className="old-price">$59.00</span>
              <span className="product-price">$49.00</span>
            </div>{/* End .price-box */}
          </div>{/* End .product-details */}
        </div>
        <div className="product-default inner-quickview inner-icon center-details">
          <figure>
            <a href="product.html">
              <img src="assets/images/products/grey/product-3.jpg" />
            </a>
            <div className="btn-icon-group">
              <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-bag" /></button>
            </div>
            <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a> 
          </figure>
          <div className="product-details">
            <div className="category-wrap">
              <div className="category-list">
                <a href="category.html" className="product-category">category</a>
              </div>
            </div>
            <h2 className="product-title">
              <a href="product.html">Product Short Name</a>
            </h2>
            <div className="ratings-container">
              <div className="product-ratings">
                <span className="ratings" style={{width: '100%'}} />{/* End .ratings */}
                <span className="tooltiptext tooltip-top" />
              </div>{/* End .product-ratings */}
            </div>{/* End .product-container */}
            <div className="price-box">
              <span className="old-price">$59.00</span>
              <span className="product-price">$49.00</span>
            </div>{/* End .price-box */}
          </div>{/* End .product-details */}
        </div>
        <div className="product-default inner-quickview inner-icon center-details">
          <figure>
            <a href="product.html">
              <img src="assets/images/products/grey/product-4.jpg" />
            </a>
            <div className="btn-icon-group">
              <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-bag" /></button>
            </div>
            <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a> 
          </figure>
          <div className="product-details">
            <div className="category-wrap">
              <div className="category-list">
                <a href="category.html" className="product-category">category</a>
              </div>
            </div>
            <h2 className="product-title">
              <a href="product.html">Product Short Name</a>
            </h2>
            <div className="ratings-container">
              <div className="product-ratings">
                <span className="ratings" style={{width: '100%'}} />{/* End .ratings */}
                <span className="tooltiptext tooltip-top" />
              </div>{/* End .product-ratings */}
            </div>{/* End .product-container */}
            <div className="price-box">
              <span className="old-price">$59.00</span>
              <span className="product-price">$49.00</span>
            </div>{/* End .price-box */}
          </div>{/* End .product-details */}
        </div>
        <div className="product-default inner-quickview inner-icon center-details">
          <figure>
            <a href="product.html">
              <img src="assets/images/products/grey/product-5.jpg" />
            </a>
            <div className="btn-icon-group">
              <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-bag" /></button>
            </div>
            <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a> 
          </figure>
          <div className="product-details">
            <div className="category-wrap">
              <div className="category-list">
                <a href="category.html" className="product-category">category</a>
              </div>
            </div>
            <h2 className="product-title">
              <a href="product.html">Product Short Name</a>
            </h2>
            <div className="ratings-container">
              <div className="product-ratings">
                <span className="ratings" style={{width: '100%'}} />{/* End .ratings */}
                <span className="tooltiptext tooltip-top" />
              </div>{/* End .product-ratings */}
            </div>{/* End .product-container */}
            <div className="price-box">
              <span className="old-price">$59.00</span>
              <span className="product-price">$49.00</span>
            </div>{/* End .price-box */}
          </div>{/* End .product-details */}
        </div>
      </div>
    </section>
  </div>
</main>
</div>

     );
  }
}
 
export default SingleBicycles;