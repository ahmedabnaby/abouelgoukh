function Navbar()
{
    return(
        <header className="header">
        <div className="header-middle sticky-header">
          <div className="container">
            <div className="header-left">
              <button className="mobile-menu-toggler" type="button">
                <i className="icon-menu" />
              </button>
              <a href="/" className="logo">
                <img src="assets/images/abouelgoukh/Black-on-White-EngVer2.png" alt="AbouelGoukh Logo" />
              </a>
              <nav className="main-nav">
                <ul className="menu">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/bicycles">Bicycles</a>
                    <div className="megamenu">
                      <div className="row row-sm">
                        <div className="col-md-4">
                          <a className="nolink">Categories</a>
                          <ul className="submenu">
                            <li><a href="/bicycles">Road</a></li>
                            <li><a href="/bicycles">Mountain</a></li>
                            <li><a href="/bicycles">Hybird</a></li>
                          </ul>
                        </div>
                        <div className="col-md-8 image-container">
                          <img src="assets/images/abouelgoukh/bicycles/30-600x400.jpg" align="Menu banner" />
                        </div>
                      </div>
                    </div>{/* End .megamenu */}
                  </li>
                  <li>
                    <a href="/bikes">Bikes</a>
                    <div className="megamenu">
                      <div className="row row-sm">
                        <div className="col-md-4">
                          <a href="#" className="nolink">Categories</a>
                          <ul className="submenu">
                            <li><a href="/bikes">Spinning Bikes</a></li>
                            <li><a href="/bikes">Magnetic Bikes</a></li>
                            <li><a href="/bikes">Belt Bikes</a></li>
                            <li><a href="/bikes">Commerical Bikes</a></li>
                          </ul>
                        </div>
                        <div className="col-md-8 image-container">
                          <img src="assets/images/abouelgoukh/bikes/cr800.jpg" align="Menu banner" />
                        </div>
                      </div>
                    </div>{/* End .megamenu */}
                  </li>
                  <li>
                    <a href="/treadmills">Treadmills</a>
                    <div className="megamenu">
                      <div className="row row-sm">
                        <div className="col-md-4">
                          <a href="/treadmills" className="nolink">Categories</a>
                          <ul className="submenu">
                            <li><a href="/treadmills">Home Use</a></li>
                            <li><a href="/treadmills">Commerical</a></li>
                          </ul>
                        </div>
                        <div className="col-md-8 image-container">
                          <img src="assets/images/abouelgoukh/treadmills/ct800.png" align="Menu banner" />
                        </div>
                      </div>
                    </div>{/* End .megamenu */}
                  </li>
                  <li>
                    <a href="/ellipticals">Ellipticals</a>
                    <div className="megamenu">
                      <div className="row row-sm">
                        <div className="col-md-4">
                          <a href="#" className="nolink">Categories</a>
                          <ul className="submenu">
                            <li><a href="/ellipticals">Home Use</a></li>
                            <li><a href="/ellipticals">Commerical</a></li>
                          </ul>
                        </div>
                        <div className="col-md-8 image-container">
                          <img src="assets/images/abouelgoukh/ellipticals/3-e1520509232170-600x540.jpg" align="Menu banner" />
                        </div>
                      </div>
                    </div>{/* End .megamenu */}
                  </li>
                  <li>
                        <a href="#">Gym Equipment</a>
                        <ul>
                            <li>
                                <a href="/sanfei-fitness">Sanfei Fitness</a>
                                <ul>
                                    <li><a href="/sanfei-fitness">NH Selectorized</a></li>
                                    <li><a href="/sanfei-fitness">NC Selectorized</a></li>
                                    <li><a href="/sanfei-fitness">TH Selectorized</a></li>
                                    <li><a href="/sanfei-fitness">TH/PT Plate Loaded</a></li>
                                    <li><a href="/sanfei-fitness">TH/PT Free Weight</a></li>
                                    <li><a href="/sanfei-fitness">SM/CT  Plate Loaded</a></li>
                                    <li><a href="/sanfei-fitness">SM/CT  Free Weight</a></li>
                                    <li><a href="/sanfei-fitness">Group Fitness</a></li>
                                    <li><a href="/sanfei-fitness">CT Selectorized</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Spirit Fitness</a></li>
                            <li>
                                <a href="#">Zun Fitness</a>
                                <ul>
                                    <li><a href="#">Fagus</a></li>
                                    <li><a href="#">Lot</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="#" target="_blank">About Us</a></li>
                    <li><a href="#" target="_blank">Contact Us</a></li>
                </ul>
              </nav>
            </div>
            <div className="header-right">
              <div className="dropdown cart-dropdown">
                <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                  <i className="minicart-icon" />
                  <span className="cart-count">2</span>
                </a>
                <div className="dropdown-menu">
                  <div className="dropdownmenu-wrapper">
                    <div className="dropdown-cart-header">
                      <span>2 Items</span>
                      <a href="cart.html">View Cart</a>
                    </div>{/* End .dropdown-cart-header */}
                    <div className="dropdown-cart-products">
                      <div className="product">
                        <div className="product-details">
                          <h4 className="product-title">
                            <a href="product.html">Woman Ring</a>
                          </h4>
                          <span className="cart-product-info">
                            <span className="cart-product-qty">1</span>
                            x $99.00
                          </span>
                        </div>{/* End .product-details */}
                        <figure className="product-image-container">
                          <a href="product.html" className="product-image">
                            <img src="assets/images/products/cart/product-1.jpg" alt="product" />
                          </a>
                          <a href="#" className="btn-remove" title="Remove Product"><i className="icon-retweet" /></a>
                        </figure>
                      </div>{/* End .product */}
                      <div className="product">
                        <div className="product-details">
                          <h4 className="product-title">
                            <a href="product.html">Woman Necklace</a>
                          </h4>
                          <span className="cart-product-info">
                            <span className="cart-product-qty">1</span>
                            x $35.00
                          </span>
                        </div>{/* End .product-details */}
                        <figure className="product-image-container">
                          <a href="product.html" className="product-image">
                            <img src="assets/images/products/cart/product-2.jpg" alt="product" />
                          </a>
                          <a href="#" className="btn-remove" title="Remove Product"><i className="icon-retweet" /></a>
                        </figure>
                      </div>{/* End .product */}
                    </div>{/* End .cart-product */}
                    <div className="dropdown-cart-total">
                      <span>Total</span>
                      <span className="cart-total-price">$134.00</span>
                    </div>{/* End .dropdown-cart-total */}
                    <div className="dropdown-cart-action">
                      <a href="checkout-shipping.html" className="btn btn-block">Checkout</a>
                    </div>{/* End .dropdown-cart-total */}
                  </div>{/* End .dropdownmenu-wrapper */}
                </div>{/* End .dropdown-menu */}
              </div>{/* End .dropdown */}
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="col-lg-4">
            <div className="service-widget">
              <i className="service-icon icon-shipping" />
              <div className="service-content">
                <h3 className="service-title">free shipping &amp; return</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="service-widget">
              <i className="service-icon icon-money" />
              <div className="service-content">
                <h3 className="service-title">money back guarantee</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="service-widget">
              <i className="service-icon icon-support" />
              <div className="service-content">
                <h3 className="service-title">online support 24/7</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-menu-overlay" />{/* End .mobil-menu-overlay */}
  <div className="mobile-menu-container">
    <div className="mobile-menu-wrapper">
      <span className="mobile-menu-close"><i className="icon-retweet" /></span>
      <nav className="mobile-nav">
      <ul className="mobile-menu">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/bicycles">Bicycles</a>
                    <div className="megamenu">
                      <div className="row row-sm">
                        <div className="col-md-4">
                          <ul className="submenu">
                            <li><a href="/bicycles">Road</a></li>
                            <li><a href="/bicycles">Mountain</a></li>
                            <li><a href="/bicycles">Hybird</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>{/* End .megamenu */}
                  </li>
                  <li>
                    <a href="/bikes">Bikes</a>
                    <div className="megamenu">
                      <div className="row row-sm">
                        <div className="col-md-4">
                          <ul className="submenu">
                            <li><a href="/bikes">Spinning Bikes</a></li>
                            <li><a href="/bikes">Magnetic Bikes</a></li>
                            <li><a href="/bikes">Belt Bikes</a></li>
                            <li><a href="/bikes">Commerical Bikes</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>{/* End .megamenu */}
                  </li>
                  <li>
                    <a href="/treadmills">Treadmills</a>
                    <div className="megamenu">
                      <div className="row row-sm">
                        <div className="col-md-4">
                          <ul className="submenu">
                            <li><a href="/treadmills">Home Use</a></li>
                            <li><a href="/treadmills">Commerical</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>{/* End .megamenu */}
                  </li>
                  <li>
                    <a href="/ellipticals">Ellipticals</a>
                    <div className="megamenu">
                      <div className="row row-sm">
                        <div className="col-md-4">
                          <ul className="submenu">
                            <li><a href="/ellipticals">Home Use</a></li>
                            <li><a href="/ellipticals">Commerical</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>{/* End .megamenu */}
                  </li>
                  <li>
                        <a href="#">Gym Equipment</a>
                        <ul>
                            <li>
                                <a href="/sanfei-fitness">Sanfei Fitness</a>
                                <ul>
                                    <li><a href="/sanfei-fitness">NH Selectorized</a></li>
                                    <li><a href="/sanfei-fitness">NC Selectorized</a></li>
                                    <li><a href="/sanfei-fitness">TH Selectorized</a></li>
                                    <li><a href="/sanfei-fitness">TH/PT Plate Loaded</a></li>
                                    <li><a href="/sanfei-fitness">TH/PT Free Weight</a></li>
                                    <li><a href="/sanfei-fitness">SM/CT  Plate Loaded</a></li>
                                    <li><a href="/sanfei-fitness">SM/CT  Free Weight</a></li>
                                    <li><a href="/sanfei-fitness">Group Fitness</a></li>
                                    <li><a href="/sanfei-fitness">CT Selectorized</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Spirit Fitness</a></li>
                            <li>
                                <a href="#">Zun Fitness</a>
                                <ul>
                                    <li><a href="#">Fagus</a></li>
                                    <li><a href="#">Lot</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="#" target="_blank">About Us</a></li>
                    <li><a href="#" target="_blank">Contact Us</a></li>
                </ul>
      </nav>{/* End .mobile-nav */}
      <div className="social-icons">
        <a href="#" className="social-icon" target="_blank"><i className="icon-facebook" /></a>
        <a href="#" className="social-icon" target="_blank"><i className="icon-twitter" /></a>
        <a href="#" className="social-icon" target="_blank"><i className="icon-instagram" /></a>
      </div>{/* End .social-icons */}
    </div>{/* End .mobile-menu-wrapper */}
  </div>{/* End .mobile-menu-container */}

  {/* Add Cart Modal */}
  <div className="modal fade" id="addCartModal" tabIndex={-1} role="dialog" aria-labelledby="addCartModal" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-body add-cart-box text-center">
          <p>You've just added this product to the<br />cart:</p>
          <h4 id="productTitle" />
          <img id="productImage" width={100} height={100} alt="adding cart image" />
          <div className="btn-actions">
            <a href="cart.html"><button className="btn-primary">Go to cart page</button></a>
            <a href="#"><button className="btn-primary" data-dismiss="modal">Continue</button></a>
          </div>
        </div>
      </div>
    </div>
  </div>
      </header>
    );
}
export default Navbar;