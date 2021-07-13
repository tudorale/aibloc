import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./main.css";
import "./responsive.css";
import { Link } from "react-router-dom";
import Readmore from "./images/readmore.svg";
import IllustrationOne from "./images/m1.svg";
import IllustrationTwo from "./images/m2.svg";
import { Power3, gsap } from "gsap";
import First from "./images/first.png";
import Second from "./images/second.png";
import Canvas from "./demoCanvas/CanvasDemo";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderVideo1 from "./images/sliderVideo1.mp4";
import SliderVideo2 from "./images/sliderVideo2.mp4";
import SliderVideo3 from "./images/sliderVideo3.mp4";
import SliderVideo4 from "./images/sliderVideo4.mp4";
import Typed from 'typed.js';

function Main() {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  const SliderVideos_playTime = [7010, 10010, 9010, 8010];
  const [autoPlaySpeed, setAutoPlaySpeed] = useState(SliderVideos_playTime[0]);

  useEffect(() => {
    let videoOne = document.querySelector("#videoOne");
    videoOne.play(); // play the first video on render.
  }, [])

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: autoPlaySpeed,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, index) => {
        let videos = document.querySelectorAll(".video");
        videos[index + 1].currentTime = 0;
        videos[index + 1].play();

        if (index === 0) {
            setAutoPlaySpeed(SliderVideos_playTime[0]);
            
          } else if (index === 1) {
            setAutoPlaySpeed(SliderVideos_playTime[1]);
          } else if (index === 2) {
            setAutoPlaySpeed(SliderVideos_playTime[2]);
          } else if (index === 3) {
            setAutoPlaySpeed(SliderVideos_playTime[3]);
          } else {
            setAutoPlaySpeed(SliderVideos_playTime[1]);
          }
    }
  };

  let text = useRef(null);
  let subText = useRef(null);
  let svg = useRef(null);

  let navbar = useRef(null);
  let wrapper = useRef(null);
  let model = useRef(null);

  useEffect(() => {
    gsap.to(wrapper.current, { duration: 0, css: { visibility: "visible" } });

    // nav

    gsap.from(navbar.current, {
      duration: 0.8,
      opacity: 0,
      y: -40,
      ease: Power3.easeOut,
    });

    // hero
    gsap.from(text.current, {
      duration: 0.6,
      opacity: 0,
      y: 40,
      ease: Power3.easeOut,
      delay: 0.6,
    });

    gsap.from(model.current, {
      duration: 0.6,
      opacity: 0,
      y: 40,
      ease: Power3.easeOut,
      delay: 1.3,
    });

    gsap.from(subText.current, {
      duration: 0.6,
      opacity: 0,
      y: 40,
      ease: Power3.easeOut,
      delay: 0.8,
    });

    gsap.from(svg.current, {
      duration: 0.6,
      opacity: 0,
      y: 40,
      ease: Power3.easeOut,
      delay: 1,
    });
  }, []);

  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
	const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
    	strings: [
        'Build your model without writing a single line of code',
        'Let Ai Bloc handle all the setup and scalability configurations',
        'Focus your time and energy in analysing metrics and Ai Bloc will worry about the rest'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false,
      
    };
        typed.current = new Typed(el.current, options);
    
    return () => {
      typed.current.destroy();
    }
  }, [])

  let status = false;

  const handleNavbar = () => {
    status = !status;

    let nav = document.querySelector(".navWrapper");
    let line = document.querySelectorAll(".line");
    let logo = document.querySelector(".logo");

    if (status) {
      nav.style.left = "0";
      nav.style.zIndex = "998";
      nav.style.opacity = "1";
      logo.style.color = "white";

      line[1].style.opacity = "0";
      line[1].style.left = "-35px";

      line[0].style.transform = "rotate(45deg)";
      line[0].style.top = "10px";

      line[2].style.transform = "rotate(-45deg)";
      line[2].style.top = "-10px";
    } else {
      nav.style.left = "-300px";
      nav.style.zIndex = "-1";
      nav.style.opacity = "0";

      logo.style.color = "#6C63FF";

      line[1].style.opacity = "1";
      line[1].style.left = "0px";

      line[0].style.transform = "rotate(0deg)";
      line[0].style.top = "0px";

      line[2].style.transform = "rotate(0deg)";
      line[2].style.top = "0px";
    }
  };

  return (
    <>
      <div className="wrapper" ref={wrapper}>
        <div className="navbar" ref={navbar}>
          <h1 className="logo">Ai Bloc</h1>

          <div className="hamburger" onClick={handleNavbar}>
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
          </div>

          <div className="navWrapper">
            <ul className="leftLinks">
              <li>
                <Link to="/comunity">Comunity</Link>
              </li>
              <li>
                <Link to="/demo">Demo</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/docs">Docs</Link>
              </li>
            </ul>

            <div className="rightLinks">
              <p>
                <Link to="/sign-in">Sign In</Link>
              </p>
              <Link to="/sign-up">
                <button type="button">Create Account</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="insideWrapper">
          <div className="hero">
            <div className="left">
              <h1 ref={text}>
                <span className="purple">No-code</span> platform for Data
                Science and Machine <span className="addon">Learning</span>
              </h1>
              <p ref={subText}>
                Hassle free, user friendly interface optimized for productivity.
                The use of <span className="purple">Ai Bloc Components</span>{" "}
                makes it easy for code distribution and reusability
              </p>
              <img ref={svg} alt="read more" src={Readmore} />
            </div>

            <div className="right" ref={model}>
              <Canvas />
            </div>
          </div>
        </div>

        <div className="section-one">
          <div className="content">
            <div className="left">
              <h1 className="note" data-aos="fade-up">
                WHAT MAKES US THE BEST?
              </h1>

              <h1 className="title" data-aos="fade-up">
                Drag & Drop Model Builder
              </h1>
              <p data-aos="fade-up">
                With this feature on our platform you can easily visualize model
                metrics, weight distributions and parameters weightage without
                training the model.
              </p>
              <p data-aos="fade-up">
                Lots of customization available ranging from basic to advanced
                options.
              </p>
              <p data-aos="fade-up">
                Several layers for creating custom model from scratch or choose
                from a range of pre-built models.
              </p>
              <p data-aos="fade-up">
                Get model erros in real-time as you create your model.
              </p>
              <p data-aos="fade-up">
                Download Jupyter Notebook and Python files for the Tensorflow
                model.
              </p>
            </div>

            <div className="right">
              <Slider {...settings}>
                <div className="sliderWrapper">
                  <video id="videoOne" className="video" muted loop>
                    <source src={SliderVideo1} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="sliderWrapper">
                  <video id="videoTwo" className="video" muted loop>
                    <source src={SliderVideo2} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="sliderWrapper">
                  <video id="videoThree" className="video" muted loop>
                    <source src={SliderVideo3} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="sliderWrapper">
                  <video id="videoFour" className="video" muted loop>
                    <source src={SliderVideo4} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </Slider>
            </div>
          </div>
        </div>

        <div className="sectionsWrapper">
          <div className="section-three">
            <h1 data-aos="fade-up">Pipelines and Data Handling made easy</h1>
            <div className="content">
              <div className="left">
                <h2 data-aos="fade-up">What we offer?</h2>

                <p data-aos="fade-right">
                  Pipelines consist of{" "}
                  <span className="purple">Ai Bloc Components</span> which
                  increases reusability and productivity.
                </p>
                <p data-aos="fade-right">
                  Now you can run several pipelines simultaneously with
                  real-time metrics visualization.
                </p>
                <p data-aos="fade-right">
                  Pipelines can be merged or segregated into other pipelines
                  with use of{" "}
                  <span className="purple">Ai Bloc Connector Component.</span>
                </p>
                <p data-aos="fade-right">
                  As <span className="purple">Ai Bloc Projects</span>, pipelines
                  are also shareable and can be imported with just a click of a
                  button.
                </p>
                <p data-aos="fade-right">
                  Data can be used privately or made public for use amongst{" "}
                  <span className="purple">Ai Bloc Community</span>.
                </p>
                <p data-aos="fade-right">
                  Private data can be shared using access keys without hassle of
                  actual data transfer.
                </p>

                <span data-aos="fade-right" className="note">
                  <Link to="/sign-up">Join now</Link> to discover more
                </span>
              </div>

              <div className="right" data-aos="fade-up">
                <img alt="" src={Second} />
              </div>
            </div>
          </div>

          <div className="section-four">
            <h1 data-aos="fade-up">
              Scalable & Automated Model <span className="training">Training</span> <span className="purple">*</span>
            </h1>

            <div className="content">
              <div className="card card-1" data-aos="fade-right">
                <h2 className="title">Training Platforms</h2>
                <p>
                  <span className="purple">Ai Bloc</span> offers several
                  training platforms ranging from a single CPU to Multi-GPU and
                  Multi-CPU training options
                </p>
              </div>

              <div className="card image" data-aos="fade-right">
                <img alt="" src={First} id="img" />
              </div>

              <div className="card text" data-aos="fade-up">
                <h1 ref={el}></h1>
              </div>

              <div className="card card-2" data-aos="fade-down">
                <h2 className="title">Easy for everyone</h2>
                <p>
                  What you need to get started? Minimal setup required and{" "}
                  <span className="purple">NO Coding</span> skills involved to
                  train models on the cloud and functionalities like model
                  checkpoints and callbacks can be integrated easily
                </p>
              </div>

              <div className="card card-3" data-aos="fade-right">
                <h2 className="title">Customization</h2>
                <p>
                  Are you a creative person? Because now you can{" "}
                  <span className="purple">customize</span> your dashboard as
                  you want for the real-time training metrics
                </p>
              </div>
            </div>
          </div>

          <div className="section-five">
            <h1 data-aos="fade-up">
              Discover the <span className="purple">Ai Bloc</span> Marketspace <span className="purple">*</span>
            </h1>
            <div className="content">
              <div className="card card-1" data-aos="fade-right">
                <p>
                  <span className="purple">Ai Bloc Marketspace</span> will host
                  pre-made components that can either be used for free or
                  purchased from the publisher, components ranging from simple
                  data cleaning functions to full fleged pipelines, they are
                  available to use on a single click.
                </p>
              </div>

              <div className="card card-3" data-aos="fade-up">
                <p>
                  Users can choose to use components with{" "}
                  <span className="purple">Ai Bloc Tools</span> or can purchase
                  and use them with third party services using custom
                  configurations.
                </p>
              </div>

              <div className="card card-2" data-aos="fade-up">
                <img src={IllustrationOne} alt="" />
              </div>

              <div className="card card-4" data-aos="fade-up">
                <img src={IllustrationTwo} alt="" />
              </div>
            </div>
          </div>

          <div className="section-six">
            <h1 data-aos="fade-up">Pricing</h1>

            <div className="content">
              <div className="card card-1" data-aos="fade-down-right">
                <svg
                  className="standard"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" />
                </svg>
                <h2>Standard</h2>
                <p className="info">
                  Here will come the text about this package
                </p>
                <div className="features">
                  <p>
                    <div className="true"></div> Feature 1
                  </p>
                  <p style={{ textDecoration: "line-through" }}>
                    <div className="false"></div> Feature 2
                  </p>
                  <p style={{ textDecoration: "line-through" }}>
                    <div className="false"></div> Feature 3
                  </p>
                </div>
                <button>Purchase Now</button>
              </div>

              <div className="card card-2" data-aos="fade-down">
                <svg
                  className="bussines"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 18v2h-20v-2h20zm-19.989-6.426l2.624-1.5 4.765 1.815s9.197-5.519 11.773-7.038c2.226-1.312 4.268-.853 4.647-.216.448.753.131 2.366-2.576 4.09-2.166 1.38-9.233 5.855-9.233 5.855-4.969 2.708-7.565.657-7.565.657l-4.435-3.663zm5.587-6.621l-2.598 1.5 6.252 3.173 5.388-3.227-9.042-1.446z" />
                </svg>
                <h2>Bussines</h2>
                <p className="info">
                  Here will come the text about this package
                </p>
                <div className="features">
                  <p>
                    <div className="true"></div> Feature 1
                  </p>
                  <p>
                    <div className="true"></div> Feature 2
                  </p>
                  <p style={{ textDecoration: "line-through" }}>
                    <div className="false"></div> Feature 3
                  </p>
                </div>
                <button>Purchase Now</button>
              </div>

              <div className="card card-3" data-aos="fade-up">
                <svg
                  className="enterprise"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.944 2.038c-.369-.026-.729-.038-1.083-.038-7.671 0-12.038 5.848-13.627 10.554l4.216 4.215c4.842-1.734 10.55-5.939 10.55-13.528 0-.392-.024-.793-.056-1.203zm-10.058 12.645l-2.571-2.571c1.089-2.55 4.185-7.978 10.88-8.312-.224 5.149-3.604 8.856-8.309 10.883zm4.88 1.371c-.488.333-.973.633-1.452.901-.167.794-.591 1.643-1.205 2.366-.001-.514-.145-1.032-.396-1.55-.441.2-.86.373-1.261.524.589 1.524-.011 2.649-.816 3.705 1.156-.087 2.369-.653 3.324-1.609 1.032-1.031 1.755-2.518 1.806-4.337zm-10.542-5.77c-.517-.249-1.032-.39-1.545-.392.716-.607 1.556-1.029 2.343-1.2.28-.493.595-.979.926-1.457-1.819.049-3.307.774-4.34 1.805-.955.955-1.52 2.169-1.608 3.324 1.056-.806 2.183-1.406 3.706-.815.155-.42.326-.842.518-1.265zm6.901.591c-.35-.348-.35-.913 0-1.261.348-.348.912-.348 1.261 0 .349.349.349.914 0 1.262-.349.349-.913.349-1.261-.001zm4.414-4.414c-.696-.696-1.826-.696-2.522 0-.697.696-.697 1.827 0 2.523.696.697 1.826.697 2.523 0 .695-.696.695-1.827-.001-2.523zm-1.703 1.703c-.243-.244-.243-.64 0-.883.242-.244.64-.244.885 0 .242.243.241.639 0 .883-.245.243-.642.243-.885 0zm-6.492 9.024c-1.734 1.844-3.656 2.787-5.72 2.787-3.2 0-5.624-2.354-5.624-5.311 0-1.485.611-3.122 2.043-4.689-3.201 5.137 1.126 10.128 6.694 4.607l.765.765c-.91 1.061-1.661 1.977-2.971 2.638 1.344.057 2.87-.745 4.017-1.593l.796.796z" />
                </svg>
                <h2>Enterprise</h2>
                <p className="info">
                  Here will come the text about this package
                </p>
                <div className="features">
                  <p>
                    <div className="true"></div> Feature 1
                  </p>
                  <p>
                    <div className="true"></div> Feature 2
                  </p>
                  <p>
                    <div className="true"></div> Feature 3
                  </p>
                </div>
                <button>Purchase Now</button>
              </div>
            </div>
          </div>
        
          <h3 className="information" data-aos="fade-up"><span className="purple">*</span> These <span className="purple">Ai Bloc</span> features are under development, until then you can enjoy our already made features.</h3>

        </div>

        <div className="footer">
          <h1>Ai Bloc</h1>

          <div className="links">
            <div className="products">
              <h2>Products</h2>
              <Link to="/tools">Tools</Link>
              <Link to="/marketspace">Marketspace</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/components">Components</Link>
            </div>

            <div className="learn">
              <h2>Learn</h2>
              <Link to="/docs">Docs</Link>
              <Link to="/comunity">Comunity</Link>
            </div>
          </div>

          <p className="copyright">Copyright 2021 © Ai Bloc</p>
          <div className="legalLinks">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
