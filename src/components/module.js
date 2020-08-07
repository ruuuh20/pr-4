import React from "react"

const Module = () => {
  return (
    <section className="module">
      <div className="container">
        <div className="row">
          <div className="articles-wrapper">
            <div className="sticky article col-6-w">
              <div className="article-item">
                <img
                  src="https://static01.nyt.com/images/2020/08/02/magazine/02mag-studies-1/02mag-studies-1-superJumbo.jpg?quality=90&auto=webp"
                  alt=""
                />
                <div className="title">
                  <h2>Why Is There No Consensus About Reopening Schools?</h2>
                </div>
                <div className="date">
                  <span>July 29, 2020</span>
                </div>
                <div className="tags">
                  <ul className="tag-list">
                    <li>
                      <a href="#">featured</a>
                    </li>
                    <li>
                      <a href="#">news</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="article col col-4-w">
              <div className="articles-wrapper">
                <div className="col-1-2 article">
                  <div className="article-item">
                    <img
                      src="https://static01.nyt.com/images/2020/04/24/multimedia/24sp-learning-online-cover-image/24sp-learning-online-cover-image-videoLarge.jpg"
                      alt=""
                    />
                    <div className="title">
                      <h3>
                        Will the Coronavirus Forever Alter the College
                        Experience?
                      </h3>
                    </div>
                    <div className="date">
                      <span>12 hours ago</span>
                    </div>
                    <div className="tags">
                      <ul className="tag-list">
                        <li>
                          <a href="#">studies show</a>
                        </li>
                        <li>
                          <a href="#">news</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-1-2 article">
                  <div className="article-item">
                    <img
                      className="h-1"
                      src="https://static01.nyt.com/images/2020/07/28/travel/28college/merlin_175044948_c9c97e00-b9bd-4332-8ad5-f1d0520b78ab-superJumbo.jpg?quality=90&auto=webp"
                      alt=""
                    />
                    <div className="title">
                      <h3>The New College Drop-Off</h3>
                    </div>
                    <div className="date">
                      <span>July 31, 2020</span>
                    </div>
                    <div className="tags">
                      <ul className="tag-list">
                        <li>
                          <a href="#">studies show</a>
                        </li>
                        <li>
                          <a href="#">news</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-1-1 article">
                  <div className="article-item">
                    <img
                      src="https://static01.nyt.com/images/2020/07/29/us/schools-reopening-coronavirus-image/schools-reopening-coronavirus-image-threeByTwoMediumAt2X-v2.png"
                      alt=""
                    />
                    <div className="title">
                      <h2>
                        What Back to School Might Look Like in the Age of
                        Covid-19
                      </h2>
                    </div>
                    <div className="date">
                      <span>9 hours ago</span>
                    </div>
                    <div className="tags">
                      <ul className="tag-list">
                        <li>
                          <a href="#">studies show</a>
                        </li>
                        <li>
                          <a href="#">news</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 2nd row */}
                <div className="col-1-2 article">
                  <div className="article-item">
                    <img
                      className="h-1"
                      src="https://static01.nyt.com/images/2020/04/24/education/24sp-K-123/merlin_171690897_9fdc0e41-fed7-456a-aa9e-4dd0923920e9-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
                      alt=""
                    />
                    <div className="title">
                      <h3>How School Districts Are Outsmarting a Microbe</h3>
                    </div>
                    <div className="date">
                      <span>12 hours ago</span>
                    </div>
                    <div className="tags">
                      <ul className="tag-list">
                        <li>
                          <a href="#">studies show</a>
                        </li>
                        <li>
                          <a href="#">news</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-1-2 article">
                  <div className="article-item">
                    <img
                      src="https://static01.nyt.com/images/2020/08/02/fashion/02HAMPTONS-SCHOOL1/02HAMPTONS-SCHOOL1-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
                      alt=""
                    />
                    <div className="title">
                      <h3>
                        Rich City Tykes Swell Schools in Hamptons and Hudson
                        Valley
                      </h3>
                    </div>
                    <div className="date">
                      <span>Aug 1, 2020</span>
                    </div>
                    <div className="tags">
                      <ul className="tag-list">
                        <li>
                          <a href="#">studies show</a>
                        </li>
                        <li>
                          <a href="#">news</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Module
