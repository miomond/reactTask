import * as React from 'react';
import './Title.css';
import headerBg from '../assets/header-background.jpg'
import Project1 from '../assets/project-1.jpg'
import Project2 from '../assets/project-2.jpg'
import Project3 from '../assets/project-3.jpg'
import referenceImage1 from '../assets/reference-image-1.jpg'
import referenceImage2 from '../assets/reference-image-2.jpg'
import Avatar from '../assets/avatar.jpg'
import './main.css'
import './mdb.min.css'




function Title(){
    return(<>
  
  <header className="d-print-none"></header>
  <div className="page-content">
    <div className="container">
      <div className="resume-container">
        <div className="shadow-1-strong bg-white my-5" id="intro">
          <div className="bg-info text-white">
            <div className="cover bg-image">
              <img src={headerBg} />
              <div
                className="mask"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  backdropFilter: "blur(2px)"
                }}
              >
                <div className="text-center p-5">
                  <div className="avatar p-1">
                    <img
                      className="img-thumbnail shadow-2-strong"
                      src={Avatar}
                      width={160}
                      height={160}
                    />
                  </div>
                  <div className="header-bio mt-3">
                    <div data-aos="zoom-in" data-aos-delay={0}>
                      <h2 className="h1">Walter Patterson</h2>
                      <p>Front-end Developer and Graphic Designer</p>
                    </div>
                    <div
                      className="header-social mb-3 d-print-none"
                      data-aos="zoom-in"
                      data-aos-delay={200}
                    >
                      <nav role="navigation">
                        <ul className="nav justify-content-center">
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="https://twitter.com/templateflip"
                              title="Twitter"
                            >
                              <i className="fab fa-twitter" />
                              <span className="menu-title sr-only">
                                Twitter
                              </span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="https://www.facebook.com/templateflip"
                              title="Facebook"
                            >
                              <i className="fab fa-facebook" />
                              <span className="menu-title sr-only">
                                Facebook
                              </span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="https://www.instagram.com/templateflip"
                              title="Instagram"
                            >
                              <i className="fab fa-instagram" />
                              <span className="menu-title sr-only">
                                Instagram
                              </span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="https://github.com/templateflip"
                              title="Github"
                            >
                              <i className="fab fa-github" />
                              <span className="menu-title sr-only">Github</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="d-print-none">
                    
                      <a
                        className="btn btn-info btn-lg shadow-sm mt-1"
                        href="#contact"
                        data-aos="fade-left"
                        data-aos-delay={700}
                      >
                        Hire Me
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-1-strong bg-white my-5 p-5" id="about">
          <div className="about-section">
            <div className="row">
              <div className="col-md-6">
                <h2 className="h2 fw-light mb-4">About Me</h2>
                <p>
                  Hello! I’m Walter Patterson. I am passionate about UI/UX
                  design and Web Design. I am a skilled{" "}
                  <strong>front-end developer</strong> and master of graphic
                  design tools such as Photoshop and Sketch. I am a quick
                  learner and a team worker that gets the job done.
                </p>
                <p>
                  I can easily capitalize on low hanging fruits and quickly
                  maximize timely deliverables for real-time schemas.
                </p>
              </div>
              <div className="col-md-5 offset-lg-1">
                <div className="row mt-2">
                  <h2 className="h2 fw-light mb-4">Bio</h2>
                  <div className="col-sm-5">
                    <div className="pb-2 fw-bolder">
                      <i
                        className="far fa-calendar-alt pe-2 text-muted"
                        style={{ width: 24, opacity: "0.85" }}
                      />{" "}
                      Age
                    </div>
                  </div>
                  <div className="col-sm-7">
                    <div className="pb-2">28</div>
                  </div>
                  <div className="col-sm-5">
                    <div className="pb-2 fw-bolder">
                      <i
                        className="far fa-envelope pe-2 text-muted"
                        style={{ width: 24, opacity: "0.85" }}
                      />{" "}
                      Email
                    </div>
                  </div>
                  <div className="col-sm-7">
                    <div className="pb-2">walter@company.com</div>
                  </div>
                  <div className="col-sm-5">
                    <div className="pb-2 fw-bolder">
                      <i
                        className="fab fa-skype pe-2 text-muted"
                        style={{ width: 24, opacity: "0.85" }}
                      />{" "}
                      Skype
                    </div>
                  </div>
                  <div className="col-sm-7">
                    <div className="pb-2">username@skype.com</div>
                  </div>
                  <div className="col-sm-5">
                    <div className="pb-2 fw-bolder">
                      <i
                        className="fas fa-phone pe-2 text-muted"
                        style={{ width: 24, opacity: "0.85" }}
                      />{" "}
                      Phone
                    </div>
                  </div>
                  <div className="col-sm-7">
                    <div className="pb-2">+0718-111-0011</div>
                  </div>
                  <div className="col-sm-5">
                    <div className="pb-2 fw-bolder">
                      <i
                        className="fas fa-map-marker-alt pe-2 text-muted"
                        style={{ width: 24, opacity: "0.85" }}
                      />{" "}
                      Address
                    </div>
                  </div>
                  <div className="col-sm-7">
                    <div className="pb-2">
                      131 W, City Center, New York, U.S.A
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-1-strong bg-white my-5 p-5" id="skills">
          <div className="skills-section">
            <h2 className="h2 fw-light mb-4">Professional Skills</h2>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <span className="fw-bolder">HTML</span>
                  <div className="progress my-2 rounded" style={{ height: 20 }}>
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      data-aos="zoom-in-right"
                      data-aos-delay={100}
                      data-aos-anchor=".skills-section"
                      style={{ width: "95%" }}
                      aria-valuenow={95}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      Master
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <span className="fw-bolder">CSS</span>
                  <div className="progress my-2 rounded" style={{ height: 20 }}>
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      data-aos="zoom-in-right"
                      data-aos-delay={200}
                      data-aos-anchor=".skills-section"
                      style={{ width: "85%" }}
                      aria-valuenow={85}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      Expert
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <span className="fw-bolder">JavaScript</span>
                  <div className="progress my-2 rounded" style={{ height: 20 }}>
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      data-aos="zoom-in-right"
                      data-aos-delay={300}
                      data-aos-anchor=".skills-section"
                      style={{ width: "75%" }}
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      Advance
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <span className="fw-bolder">WordPress</span>
                  <div className="progress my-2 rounded" style={{ height: 20 }}>
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      data-aos="zoom-in-right"
                      data-aos-delay={300}
                      data-aos-anchor=".skills-section"
                      style={{ width: "75%" }}
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      Advance
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <span className="fw-bolder">Adobe Photoshop</span>
                  <div className="progress my-2 rounded" style={{ height: 20 }}>
                    <div
                      className="progress-bar bg-secondary"
                      role="progressbar"
                      data-aos="zoom-in-right"
                      data-aos-delay={400}
                      data-aos-anchor=".skills-section"
                      style={{ width: "95%" }}
                      aria-valuenow={95}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      Master
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <span className="fw-bolder">Adobe Illustrator</span>
                  <div className="progress my-2 rounded" style={{ height: 20 }}>
                    <div
                      className="progress-bar bg-secondary"
                      role="progressbar"
                      data-aos="zoom-in-right"
                      data-aos-delay={400}
                      data-aos-anchor=".skills-section"
                      style={{ width: "90%" }}
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      Expert
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <span className="fw-bolder">Sketch</span>
                  <div className="progress my-2 rounded" style={{ height: 20 }}>
                    <div
                      className="progress-bar bg-secondary"
                      role="progressbar"
                      data-aos="zoom-in-right"
                      data-aos-delay={500}
                      data-aos-anchor=".skills-section"
                      style={{ width: "85%" }}
                      aria-valuenow={85}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      Expert
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <span className="fw-bolder">Adobe XD</span>
                  <div className="progress my-2 rounded" style={{ height: 20 }}>
                    <div
                      className="progress-bar bg-secondary"
                      role="progressbar"
                      data-aos="zoom-in-right"
                      data-aos-delay={600}
                      data-aos-anchor=".skills-section"
                      style={{ width: "75%" }}
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      Beginner
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-1-strong bg-white my-5 p-5" id="experience">
          <div className="work-experience-section">
            <h2 className="h2 fw-light mb-4">Work Experience</h2>
            <div className="timeline">
              <div className="timeline-card timeline-card-info">
                <div className="timeline-head px-4 pt-3">
                  <div className="h5">
                    Frontend Developer{" "}
                    <span className="text-muted h6">at Creative Agency</span>
                  </div>
                </div>
                <div className="timeline-body px-4 pb-4">
                  <div className="text-muted text-small mb-3">
                    May, 2015 - Present
                  </div>
                  <div>
                    Leverage agile frameworks to provide a robust synopsis for
                    high level overviews. Iterative approaches to corporate
                    strategy foster collaborative thinking to further the
                    overall value proposition.
                  </div>
                </div>
              </div>
              <div className="timeline-card timeline-card-info">
                <div className="timeline-head px-4 pt-3">
                  <div className="h5">
                    Graphic Designer{" "}
                    <span className="text-muted h6">at Design Studio</span>
                  </div>
                </div>
                <div className="timeline-body px-4 pb-4">
                  <div className="text-muted text-small mb-3">
                    June, 2013 - May, 2015
                  </div>
                  <div>
                    Override the digital divide with additional clickthroughs
                    from DevOps. Nanotechnology immersion along the information
                    highway will close the loop on focusing solely on the bottom
                    line.
                  </div>
                </div>
              </div>
              <div className="timeline-card timeline-card-info">
                <div className="timeline-head px-4 pt-3">
                  <div className="h5">
                    Junior Web Developer{" "}
                    <span className="text-muted h6">at Indie Studio</span>
                  </div>
                </div>
                <div className="timeline-body px-4 pb-4">
                  <div className="text-muted text-small mb-3">
                    Jan, 2011 - May, 2013
                  </div>
                  <div>
                    User generated content in real-time will have multiple
                    touchpoints for offshoring. Organically grow the holistic
                    world view of disruptive innovation via workplace diversity
                    and empowerment.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-1-strong bg-white my-5 p-5" id="education">
          <div className="education-section">
            <h2 className="h2 fw-light mb-4">Education</h2>
            <div className="timeline">
              <div className="timeline-card timeline-card-success">
                <div className="timeline-head px-4 pt-3">
                  <div className="h5">
                    Masters in Information Technology{" "}
                    <span className="text-muted h6">
                      from International University
                    </span>{" "}
                  </div>
                </div>
                <div className="timeline-body px-4 pb-4">
                  <div className="text-muted text-small mb-3">2011 - 2013</div>
                  <div>
                    Leverage agile frameworks to provide a robust synopsis for
                    high level overviews. Iterative approaches to corporate
                    strategy foster collaborative thinking to further the
                    overall value proposition.
                  </div>
                </div>
              </div>
              <div className="timeline-card timeline-card-success">
                <div className="timeline-head px-4 pt-3">
                  <div className="h5">
                    Bachelor of Computer Science{" "}
                    <span className="text-muted h6">from Regional College</span>{" "}
                  </div>
                </div>
                <div className="timeline-body px-4 pb-4">
                  <div className="text-muted text-small mb-3">2007 - 2011</div>
                  <div>
                    Override the digital divide with additional clickthroughs
                    from DevOps. Nanotechnology immersion along the information
                    highway will close the loop on focusing solely on the bottom
                    line.
                  </div>
                </div>
              </div>
              <div className="timeline-card timeline-card-success">
                <div className="timeline-head px-4 pt-3">
                  <div className="h5">
                    Science and Mathematics{" "}
                    <span className="text-muted h6">from Mt. High Scool</span>{" "}
                  </div>
                </div>
                <div className="timeline-body px-4 pb-4">
                  <div className="text-muted text-small mb-3">1995 - 2007</div>
                  <div>
                    User generated content in real-time will have multiple
                    touchpoints for offshoring. Organically grow the holistic
                    world view of disruptive innovation via workplace diversity
                    and empowerment.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="shadow-1-strong bg-white my-5 p-5 d-print-none"
          id="portfolio"
        >
          <div className="portfolio-section">
            <h2 className="h2 fw-light mb-4">Portfolio</h2>
            <div className="row g-0">
              <div className="col-md-6">
                <a href="https://dribbble.com/" target="_blank">
                  <img
                    className="img-fluid"
                    src={Project1}
                    width={800}
                    height={500}
                  />
                </a>
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div className="m-4 mt-md-2">
                  <p className="text-teal text-small">
                    Frontend / HTML / CSS / JavaScript
                  </p>
                  <h3>Photo Agency Website</h3>
                  <p className="text-muted">
                    Built highly performant website front end for a Photography
                    agency. Delivered codebase in HTML, CSS and modern
                    JavaScript.
                  </p>
                </div>
              </div>
            </div>
            <div className="row g-0 portfolio-reverse">
              <div className="col-md-6 d-flex align-items-center">
                <div className="m-4 mt-md-2 text-end">
                  <p className="text-teal text-small">
                    Graphic Design / Photoshop / Sketch
                  </p>
                  <h3>Restaurant Website Design</h3>
                  <p className="text-muted">
                    Web design for popular resturant chain involving complex
                    layouts done in both Photoshop and Sketch. Collaborated with
                    back-end and front-end team for finished product.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <a href="https://www.behance.net/" target="_blank">
                  <img
                    className="img-fluid"
                    src={Project2}
                    width={800}
                    height={500}
                  />
                </a>
              </div>
            </div>
            <div className="row g-0">
              <div className="col-md-6">
                <a href="https://dribbble.com/" target="_blank">
                  <img
                    className="img-fluid"
                    src={Project3}
                    width={800}
                    height={500}
                  />
                </a>
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div className="m-4 mt-md-2">
                  <p className="text-teal text-small">
                    Frontend / HTML / CSS / JavaScript
                  </p>
                  <h3>E-Commerce Website</h3>
                  <p className="text-muted">
                    Built highly performant website for an E-commerce Portal.
                    Worked with back-end team to timely deliver codebase in
                    HTML, CSS and modern JavaScript.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-1-strong bg-white my-5 p-5" id="references">
          <div className="reference-section">
            <h2 className="h2 fw-light mb-4">References</h2>
            <div className="row">
              <div className="col-md-6">
                <div className="d-flex mb-2">
                  <div className="avatar">
                    <img
                      src={referenceImage1}
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="header-bio m-3 mb-0">
                    <h3
                      className="h6 mb-1"
                      data-aos="fade-left"
                      data-aos-delay={0}
                    >
                      Aiyana
                    </h3>
                    <p className="text-muted text-small">
                      CEO / Web Design Company
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <i className="text-secondary fas fa-quote-left" />
                  <p className="lead mx-2">
                    Walter displays exemplary professionalism and is able to
                    take on challenges. He learns quickly and is an asset to any
                    team.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex mb-2">
                  <div className="avatar">
                    <img
                      src={referenceImage2}
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="header-bio m-3 mb-0">
                    <h3 className="h6 mb-1">Alexander</h3>
                    <p className="text-muted text-small">
                      Front-end Developer / Web Design Company
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <i className="text-secondary fas fa-quote-left" />
                  <p className="lead mx-2">
                    Walter is a great co-worker and problem solver. He is quick
                    to extend his helping hand and makes a good team player.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-1-strong bg-white my-5 p-5" id="contact">
          <div className="contant-section">
            <h2 className="h2 fw-light text mb-4">Contact</h2>
            <div className="row mb-4">
              <div className="col-md-5">
                <div className="mt-1">
                  <div className="h6">
                    <i
                      className="fas fa-phone pe-2 text-muted"
                      style={{ width: 24, opacity: "0.85" }}
                    />{" "}
                    +0718-111-0011
                  </div>
                  <div className="h6">
                    <i
                      className="far fa-envelope pe-2 text-muted"
                      style={{ width: 24, opacity: "0.85" }}
                    />{" "}
                    walter@company.com
                  </div>
                </div>
                <div className="mt-5 d-print-none">
                  <form
                    action="https://formspree.io/your@email.com"
                    method="POST"
                  >
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        required=""
                      />
                      <label className="form-label" htmlFor="name">
                        Name
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        required=""
                      />
                      <label className="form-label" htmlFor="email">
                        Email address
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <textarea
                        className="form-control"
                        style={{ resize: "none" }}
                        id="message"
                        rows={4}
                        required=""
                        defaultValue={""}
                      />
                      <label className="form-label" htmlFor="message">
                        Message
                      </label>
                    </div>
                    <button
                      className="btn btn-info btn-block mb-4"
                      type="submit"
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-md-7 d-print-none">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d496.9774799129763!2d-73.98032087190995!3d40.765927126473905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f9cfcb250d%3A0xdb570ddcb766e3a8!2sNew%20York%20City%20Center!5e0!3m2!1sen!2sin!4v1614183731149!5m2!1sen!2sin"
                  width={500}
                  height={400}
                  style={{ border: 0, width: "100%" }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer className="pt-4 pb-4 text-muted text-center d-print-none">
    <div className="container">
      <div className="my-3">
        <div className="h4">Walter Patterson</div>
        <div className="footer-nav">
          <nav role="navigation">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://twitter.com/templateflip"
                  title="Twitter"
                >
                  <i className="fab fa-twitter" />
                  <span className="menu-title sr-only">Twitter</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.facebook.com/templateflip"
                  title="Facebook"
                >
                  <i className="fab fa-facebook" />
                  <span className="menu-title sr-only">Facebook</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.instagram.com/templateflip"
                  title="Instagram"
                >
                  <i className="fab fa-instagram" />
                  <span className="menu-title sr-only">Instagram</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://github.com/templateflip"
                  title="Github"
                >
                  <i className="fab fa-github" />
                  <span className="menu-title sr-only">Github</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="text-small">
        <div className="mb-1">© Material Resume. All rights reserved.</div>
        <div>
          Design -{" "}
          <a href="https://templateflip.com/" target="_blank">
            TemplateFlip
          </a>
        </div>
      </div>
    </div>
  </footer>
</>

    )

}

export default Title;
