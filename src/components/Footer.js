function Footer()
{
    return(
        <footer className="footer">
        <div className="instagram-box">
          <div className="instagram-follow">
            <div className="container">
              <i className="fab fa-instagram" />
              <div className="brand">
                <h3>Follow Us on Instagram</h3>
                <p>@portoecommerce</p>
              </div>
            </div>
          </div>
          <div className="instagram-carousel owl-carousel owl-theme text-center" data-toggle="owl" data-owl-options="{
                  'loop' : true,
                  'nav': false,
                  'dots': false,
                  'margin' : 0,
                  'autoHeight': true,
                  'autoplay': true,
                  'autoplayTimeout': 5000,
                  'responsive': {
                    '0': {
                      'items': 2
                    },
                    '480': {
                      'items': 3
                    },
                    '950': {
                      'items': 4
                    },
                    '1200': {
                      'items' : 5
                    },
                    '1500': {
                      'items': 6
                    }
                  }
              }">
            <img src="assets/images/instagram/instagram1.jpg" alt="instagram image" />
            <img src="assets/images/instagram/instagram2.jpg" alt="instagram image" />
            <img src="assets/images/instagram/instagram3.jpg" alt="instagram image" />
            <img src="assets/images/instagram/instagram4.jpg" alt="instagram image" />
            <img src="assets/images/instagram/instagram5.jpg" alt="instagram image" />
            <img src="assets/images/instagram/instagram6.jpg" alt="instagram image" />
          </div>
        </div>
        <div className="footer-top">
          <div className="container">
            <div className="newsletter-widget">
              <i className="icon-envolope" />
              <div className="newsletter-info">
                <h3>Get Special Offers and Savings</h3>
                <p>Get all the latest information on Events, Sales and Offers.</p>
              </div>
              <form action="#" method="get">
                <div className="submit-wrapper">
                  <input type="search" className="form-control" name="q" id="q" placeholder="Enter Your E-mail Address..." required />
                  <button className="btn" type="submit">Sign Up</button>
                </div>{/* End .header-search-wrapper */}
              </form>
            </div>
            <div className="social-icons">
              <a href="#" target="_blank" className="social-icon"><i className="fab fa-facebook-f" /></a>
              <a href="#" target="_blank" className="social-icon"><i className="fab fa-twitter" /></a>
              <a href="#" target="_blank" className="social-icon"><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
        </div>
        <div className="footer-middle">
          <div className="container">
            <div className="row row-sm">
              <div className="col-md-6 col-lg-3">
                <img src="assets/images/abouelgoukh/Black-on-White-EngVer2.png" />
                <p>Lorem ipsum dolor sit amet, consectetur adipis.</p>
                <div className="social-link">
                  <h3 className="link-title">QUESTIONS?</h3>
                  <a href="#">1-888-123-456</a>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="widget">
                  <h3 className="widget-title">Account</h3>
                  <div className="widget-content row row-sm">
                    <ul className="col-xl-6">
                      <li><a href="my-account.html">My Account</a></li>
                      <li><a href="#">Track Your Order</a></li>
                      <li><a href="#">Payment Methods</a></li>
                      <li><a href="#">Shipping Guide</a></li>
                    </ul>
                    <ul className="col-xl-6">
                      <li><a href="#">FAQs</a></li>
                      <li><a href="#">Product Support</a></li>
                      <li><a href="#">Privacy</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="widget">
                  <h3 className="widget-title">About</h3>
                  <div className="widget-content row row-sm">
                    <ul className="col-xl-6">
                      <li><a href="about.html">About Porto</a></li>
                      <li><a href="#">Our Guarantees</a></li>
                      <li><a href="#">Terms And Conditions</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                    </ul>
                    <ul className="col-xl-6">
                      <li><a href="#">Return Policy</a></li>
                      <li><a href="#">Intellectual Property Claims</a></li>
                      <li><a href="#">Site Map</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="widget">
                  <h3 className="widget-title">Features</h3>
                  <div className="widget-content">
                    <ul>
                      <li><a href="#">Powerful Admin Panel</a></li>
                      <li><a href="#">Mobile &amp; Retina Optimized</a></li>
                      <li><a href="#">Super Fast Magento Theme</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom container">
          <p>Abou El-Goukh United. © 2021. All Rights Reserved</p>
        </div>
      </footer>
    );
}
export default Footer;