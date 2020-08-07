import React from "react"
import Background from "../assets/images/featured.jpg"

const Featured = () => {
  return (
    <section className="featured-section">
      <div className="outer-wrapper">
        <div className="bg" style={{ backgroundImage: `url(${Background})` }}>
          <div className="container">
            <div className="row">
              <div className="content-box col-1-2">
                <h2>
                  In the Same Towns, Private Schools Are Reopening While Public
                  Schools Are Not
                </h2>
                <p>
                  Private schools have always had more flexibility, and usually
                  more money, but never has that disparity made a bigger
                  difference than now.
                </p>
                <p style={{ fontSize: "12px" }}>By CLAIRE CAIN MILLER</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Featured
