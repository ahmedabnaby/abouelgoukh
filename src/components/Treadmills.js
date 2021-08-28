import React, { Component } from 'react';
class Treadmills extends Component {
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
        <li className="breadcrumb-item active" aria-current="page">Treadmills</li>
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
        <h1 className="mt-5 text-center">Featured Treadmills</h1>
        <div className="mt-5 row row-sm">
        {this.props.treadmills.map((treadmill)=>
          <div className="col-6 col-md-4 col-xl-3" key={treadmill.id}>
            <div className="product-default inner-quickview inner-icon">
              <figure>
                <a href="product.html">
                  <img src={treadmill.image} />
                </a>
                <div className="btn-icon-group">
                  <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-bag" /></button>
                </div>
                <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a> 
              </figure>
              <div className="product-details ">
                <div className="category-wrap">
                  <div className="category-list">
                    <a href="category.html" className="product-category">{treadmill.sub_category}</a>
                  </div>
                </div>
                <h2 className="product-title">
                  <a href="product.html">{treadmill.name}</a>
                </h2>
              </div>{/* End .product-details */}
            </div>
          </div>
)}

        </div>{/* End .row */}
      </div>{/* End .col-lg-9 */}
            <div className="container d-flex justify-content-center">
              <div className="row row-sm mt-5 mb-5">
                <div className="col">
                  <a href="#"><img src="assets/images/abouelgoukh/VIVALOGO.jpg" role="..." /></a>
                </div>
                <div className="col">
                  <a href="#"><img src="assets/images/abouelgoukh/Orbea-370x123-1.png" role="..." /></a>
                </div>
                <div className="col">
                  <a href="#"><img src="assets/images/abouelgoukh/BOTICHIA-370x123-1.png" role="..." /></a>
                </div>
              </div>
              </div>
      <div className="sidebar-overlay" />
      <div className="sidebar-toggle"><i className="icon-right-open" /></div>
      <div className="sidebar-product col-lg-3 col-xl-12 padding-left-lg mobile-sidebar">
        <h1 className="mt-5 text-center">QUICK F.A.Q. GUIDE</h1>
      <div className="mt-5 widget">
            <h3 className="widget-title">
              <a data-toggle="collapse" href="#widget-body-1" role="button" aria-expanded="true" aria-controls="widget-body-1">Q: Can I use one style of bike for different activities or terrains?</a>
            </h3>
            <div className="collapse show" id="widget-body-1">
              <div className="widget-body">
                <p>A. Yes, some types of bikes offer this versatility. The biggest factor is the tires. The smooth, thin tires found on many road bikes won't last long off of the pavement. However, many comfort/hybrid and mountain bikes have tires that can handle both paved and unpaved surfaces. It's also possible to switch out knobby tires for smooth ones on many of these bikes.</p>
              </div>{/* End .widget-body */}
            </div>{/* End .collapse */}
          </div>{/* End .widget */}
          <div className="widget">
            <h3 className="widget-title">
              <a data-toggle="collapse" href="#widget-body-2" className="collapsed" role="button" aria-expanded="false" aria-controls="widget-body-2">Q: Can I replace my bike seat with a more comfortable one?</a>
            </h3>
            <div className="collapse" id="widget-body-2">
              <div className="widget-body">
                <p>A. Yes, there are many different kinds of bicycle seats (known as saddles). Some are wider and shorter and specifically designed for women. Generally, men's seats are thinner and longer. Some have slits in the middle to relieve pressure points. Occasional riders often prefer saddles with generous amounts of gel padding to reduce riding soreness. Still not comfortable? Keep in mind that the angle of a seat can be adjusted, too. Generally, a flat seat or a very slight forward tilt is best.</p>
              </div>{/* End .widget-body */}
            </div>{/* End .collapse */}
          </div>{/* End .widget */}
          <div className="widget">
            <h3 className="widget-title">
              <a data-toggle="collapse" href="#widget-body-3" className="collapsed" role="button" aria-expanded="false" aria-controls="widget-body-3">Q: Does it matter what kind of handlebars I get?</a>
            </h3>
            <div className="collapse" id="widget-body-3">
              <div className="widget-body">
                <p>A: Yes. When looking at a bike, compare the level of the seat and the handlebars. Generally speaking, the farther the seat is below the handlebars, the more comfortable the ride. Most comfort and hybrid bikes are set up this way. Seats that are higher than the handlebars, on the other hand, will allow you to ride in a more aerodynamic position and apply more power to the pedals. This lets you go faster, but it may not be as comfortable.

There are 2 basic handlebar styles. Drop-bar handlebars are lightweight, aerodynamic and sport a classic look. They are a better choice if you want to go fast. They also allow several riding and hand positions. Their downside is that they put you in lower, more hunched over position that may put more strain on your back. Flat-bar handlebars, though heavier than drop-bars, let you to sit up in a more relaxed position so you can better see the road and potential hazards. This upright position reduces strain on your hands, wrists and shoulders.</p>
              </div>{/* End .widget-body */}
            </div>{/* End .collapse */}
          </div>{/* End .widget */}
          <div className="widget">
            <h3 className="widget-title">
              <a data-toggle="collapse" className="collapsed" href="#widget-body-4" role="button" aria-expanded="false" aria-controls="widget-body-4">Q: How many gears do I need?</a>
            </h3>
            <div className="collapse" id="widget-body-4">
              <div className="widget-body">
                <p>A: If your last bike was a 10-speed, then you may be surprised to learn that today's bikes commonly come with 18, 21, 24 or even 27 gears. You'll definitely want a bike with multiple gear options if you plan to ride any hills. However, the number of gears is not as important as how low the gearing goes. Gearing is achieved by having front chainrings and rear cogs with varying numbers of teeth, a discussion of which quickly gets beyond the scope of this introductory article. Unless you're tackling big inclines, this is not a major concern.</p>
              </div>{/* End .widget-body */}
            </div>{/* End .collapse */}
          </div>{/* End .widget */}
            </div>
    </div>{/* End .row */}
  </div>{/* End .container */}
  <div className="mb-5" />{/* margin */}
</main>
);
    }
}
 
export default Treadmills;