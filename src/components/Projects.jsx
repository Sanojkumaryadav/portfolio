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
                  style={{ width: "21rem", height: "36rem" }}
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
                    Restaurent, Login, Signup and Restaurent details page, Add to Cart, Payment Section.
                    A collaborative project built by 4 Developers within 7 days.
                    Area of Responsibility : Develop multiple filter options and search, offers and help page.
                    <br/>
                    <br/>
                    Tech Stack: HTML | CSS | JavaScript | JSON Server.
                    </p>
                    <div className="container d-flex justify-content-between">
                      <button className="btn ">
                        <a href="https://github.com/Sanojkumaryadav/Swiggy-Clone" target="_blank">
                          <span>Click Me!!</span>
                          <span>code</span>
                        </a>
                      </button>
                      <button className="btn ">
                        <a href="https://sanojswiggyclone.netlify.app/" target="_blank">
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
                  style={{ width: "21rem", height: "36rem" }}
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
                    Login , Signup Page and Create Account. Product Page, Add to Cart, Payment Section.
                    A collaborative project built by 4 Developers within 7 days.
                    Area of Responsibility : Develop multiple product and product details page.
                    <br/>
                    <br/>
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
                        <a href="https://sanojzaraclone.netlify.app/" target="_blank">
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
                  style={{ width: "21rem", height: "36rem" }}
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
                    E-commerce app using HTML CSS and JavaScript we mainly focuses on frontend part.
                    In frontend part design home page, features page, product page,  categories page, blog
                    page, review page, add to card, search, login, create an account, footer and blogs page.

          
                    
                    <br/>
                    <br/>
                    Tech Stack: HTML | CSS| JavaScript.
              
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
                        <a href="https://sanojvegmartwebsite.netlify.app/" target="_blank">
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
                  style={{ width: "21rem", height: "32rem" }}
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
                   Text transform convert the text into uppercase and lowercase,
                  it can count the number of words in your
                    text and number of characters.
                    <br/>
                    <br/>
                    Tech Stack: HTML | CSS| JavaScript | React JS.
                    </p>
                    <div className="container d-flex justify-content-between">
                      <button className="btn ">
                        <a href="https://github.com/Sanojkumaryadav/React-Text-Converter" target="_blank">
                          <span>Click Me!!</span>
                          <span>Code</span>
                        </a>
                      </button>
                      <button className="btn ">
                        <a href="https://sanoj-tetx-transform-in-react.netlify.app/" target="_blank">
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
                  style={{ width: "21rem", height: "32rem" }}
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
                    E-commerce web app,
                    In frontend part design man page, Women page, signup page, categories
                    and login page.
                    <br/>
                    <br/>
                    Tech Stack: HTML | CSS| JavaScript | Local Storage.
                   </p>
                    <div className="container d-flex justify-content-between">
                      <button className="btn ">
                        <a href="https://github.com/Sanojkumaryadav/E-commerce-Pages" target="_blank">
                          <span>Click Me!!</span>
                          <span>Code</span>
                        </a>
                      </button>
                      <button className="btn ">
                        <a href="https://sanoj-e-commerce-pages.netlify.app/men.html" target="_blank">
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
                  style={{ width: "21rem", height: "32rem" }}
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
                    calculator where user can perform basic arithmetic operation.
                    arithmetic operation like multiplication,
                    subtraction, multiplication, division and remainder.
                    <br/>
                    <br/>
                    Tech Stack: HTML | CSS| JavaScript.
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
                        <a href="https://sanojcalculator.netlify.app/" target="_blank">
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
