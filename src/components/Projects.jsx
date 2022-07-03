import React from "react";
import "./portfolio.css";

import Fade from "react-reveal/Fade";
const Projects = () => {
  return (
    <>
      <div id="project">
        <h1 className="text text-center h1">
          <u>ABOUT PROJECTS</u>
        </h1>
        <div className="container ">
          <div className="row  mx-auto">
            <Fade left>
              <div className=" col-xl-4 col-md-6  my-4  ">
                <div
                  className="card mx-auto"
                  style={{ width: "20rem", height: "28rem" }}
                >
                  <div class="embed-responsive embed-responsive-4by3">
                    <iframe
                      class="embed-responsive-item"
                      src="https://www.youtube.com/embed/Wku2r3VyxS0"
                    ></iframe>
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">Clone of Swiggy Website</h5>
                    <p className="card-text">
                    A collaborative project built by 4 Developers within 7 days.
                    Tech Stack: HTML | CSS JavaScript JSON Server
                    </p>
                    <div className="container d-flex justify-content-between">
                      <button className="btn ">
                        <a href="https://github.com/Sanojkumaryadav/Swiggy-Clone" target="_blank">
                          <span>Click Me!!</span>
                          <span>code</span>
                        </a>
                      </button>
                      <button className="btn ">
                        <a href="https://sanojkumaryadav.github.io/Swiggy-App/" target="_blank">
                          <span>Click Me!!</span>
                          <span>Website</span>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade top>
              <div className="col-xl-4  col-md-6   my-4 ">
                <div
                  className="card mx-auto"
                  style={{ width: "20rem", height: "28rem" }}
                >
                  <div class="embed-responsive embed-responsive-4by3">
                    <iframe
                      class="embed-responsive-item"
                      src="https://www.youtube.com/embed/g10znAnUdbM"
                    ></iframe>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Clone of Zara Website</h5>
                    <p className="card-text">
                    A collaborative project built by 4 Developers within 7 days.
                    Tech Stack: HTML | CSS| JavaScript | Local Storage.
                    </p>
                    <div className="container d-flex justify-content-between">
                      <button className="btn ">
                        <a href="https://github.com/Sanojkumaryadav/Zara-Clone.git" target="_blank">
                          <span>Click Me!!</span>
                          <span>Code</span>
                        </a>
                      </button>
                      <button className="btn ">
                        <a href="https://sanojkumaryadav.github.io/Zara-website" target="_blank">
                          {" "}
                          <span>Click Me!!</span>
                          <span>Website</span>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="col-xl-4 col-md-6 my-4 ">
                <div
                  className="card mx-auto"
                  style={{ width: "20rem", height: "28rem" }}
                >
                  <div class="embed-responsive embed-responsive-4by3">
                    <iframe
                      class="embed-responsive-item"
                      src="https://www.youtube.com/embed/V6eQnBa2fXE"
                    ></iframe>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Grocery Website</h5>
                    <p className="card-text">
                    VegMart Website using HTML , CSS, JavaScript.
                    In frontend part design home page, features page and product page
                

                    </p>
                    <div className="container d-flex justify-content-between">
                      <button className="btn ">
                        <a href="https://github.com/Sanojkumaryadav/VegMartWebsite.git" target="_blank">
                          {" "}
                          <span>Click Me!!</span>
                          <span>Code</span>
                        </a>
                      </button>
                      <button className="btn ">
                        <a href="https://sanojkumaryadav.github.io/VegMartWebsite/" target="_blank">
                          <span>Click Me!!</span>
                          <span>Website</span>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
            
            <Fade bottom>
              <div className="col-xl-4 col-md-6   my-4 ">
                <div
                  className="card mx-auto"
                  style={{ width: "20rem", height: "28rem" }}
                >
                  <div class="embed-responsive embed-responsive-4by3">
                    <iframe
                      class="embed-responsive-item"
                      src="https://www.youtube.com/embed/aw1a9Hqv-oM"
                    ></iframe>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Text-Transform</h5>
                    <p className="card-text">
                   Text transform using React
                  convert the text into uppercase and lowercase,
                  it can count the number of words in your
                    text and number of characters.
                    </p>
                    <div className="container d-flex justify-content-between">
                      <button className="btn ">
                        <a href="https://github.com/Sanojkumaryadav/React-Text-Converter" target="_blank">
                          <span>Click Me!!</span>
                          <span>Code</span>
                        </a>
                      </button>
                      <button className="btn ">
                        <a href="https://sanojreact.netlify.app/" target="_blank">
                          <span>Click Me!!</span>
                          <span>Website</span>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="col-xl-4 col-md-6   my-4">
                <div
                  className="card mx-auto"
                  style={{ width: "20rem", height: "28rem" }}
                >
                  <div class="embed-responsive embed-responsive-4by3">
                  <iframe
                    class="embed-responsive-item"
                    src="https://www.youtube.com/embed/mcQk9iidxsM"
                    
                    ></iframe>
                    </div>
                  <div className="card-body">
                    <h5 className="card-title">E-commerce Website</h5>
                    <p className="card-text">
                    E-commerce web using HTML CSS JavaScript and local storage.
                    In frontend part design mam page, Women page, signup page, categories
                    and login page.
                   </p>
                    <div className="container d-flex justify-content-between">
                      <button className="btn ">
                        <a href="https://github.com/Sanojkumaryadav/E-commerce-Pages" target="_blank">
                          <span>Click Me!!</span>
                          <span>Code</span>
                        </a>
                      </button>
                      <button className="btn ">
                        <a href="https://sanojkumaryadav.github.io/E-commerce-Pages/login.html" target="_blank">
                          {" "}
                          <span>Click Me!!</span>
                          <span>Website</span>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade left>
              <div className="col-xl-4 col-md-6  my-4 ">
                <div
                  className="card mx-auto"
                  style={{ width: "20rem", height: "28rem" }}
                >
                  <div class="embed-responsive embed-responsive-4by3">
                    <iframe
                      class="embed-responsive-item"
                      src="https://www.youtube.com/embed/TACgDsRXAgM"
                    ></iframe>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Calculator</h5>
                    <p className="card-text">
                    Calculator using HTML CSS and JavaScript
                    Calculator with basics operations like multiplication,
                    subtraction, multiplication, division and remainder.
                    </p>
                    <div className="container d-flex justify-content-between">
                      <button className="btn ">
                        <a href="https://github.com/Sanojkumaryadav/Calculator.git" target="_blank">
                          {" "}
                          <span>Click Me!!</span>
                          <span>Code</span>
                        </a>
                      </button>
                      <button className="btn ">
                        <a href="https://sanojkumaryadav.github.io/Calculator/" target="_blank">
                          {" "}
                          <span>Click Me!!</span>
                          <span>Website</span>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
