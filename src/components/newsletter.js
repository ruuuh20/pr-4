import React from "react"
import img from "../assets/images/newsletter1.jpg"

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="row">
          <div className="col col-1-1">
            <div className="wrapper">
              <div className="outer">
                <div className="col col-4-w">
                  <h2>Looking for a bit of educational inspiration?</h2>
                  <p>
                    Sign up to our all-new newsletter for top-notch advice and
                    stay up-to-date with current news and trends in education.
                  </p>
                  <div className="form">
                    <input type="text" placeholder="Your email address" />
                    <button className="btn-subscribe">
                      <span>Subscribe</span>
                    </button>
                  </div>
                </div>
                <div className="img-wrapper">
                  <img src={img} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
