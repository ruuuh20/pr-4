import { Link } from "gatsby"

import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="container">
      <div className="row">
        <div className="logo">
          <Link to="/">The NYTimes</Link>
        </div>
        <div className="sub-text">
          <Link to="/">
            Championing creativty <br />
            since 2007
          </Link>
        </div>
        <div className="search-wrapper center-absolute">
          <form className="form" action="#">
            <div className="border">
              <input type="text" placeholder="Search for something" />
              {/* <label htmlFor="">Search for something</label> */}
            </div>
          </form>
        </div>
        <div className="categories-menu">Categories</div>
        <div className="hamburger-menu">menu</div>
      </div>
    </div>
  </header>
)

export default Header
