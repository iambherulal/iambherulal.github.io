import React from 'react';
import Footer from './component/Footer';
import Banner from './img/bherulalgameti.jpg';
import About from './img/bherulalgametidark.png';

function Main() {
    return (
        <main className="main-area">
        <section className="hero-banner" data-scroll-index="1">
            <div className="container">
                <div className="row align-items-center banner-column">
                    <div className="col-lg-7 col-xl-6 col-md-10 wow fadeInUp">
                        <div className="hero-inner">
                            <h1>I'm <br />
                                Bheru Lal Gameti
                            </h1>
                            <p>I've been a WordPress developer for 5 years. I live and breathe WordPress.</p>
                            <p>My custom-built websites are fast loading, accessible, and easy to manage. My design partners will help you improve conversion rates and user engagement.</p>
                            <ul className="hero-social-list">
                                <li><a target="_blank" rel="noreferrer" title="Bheru lal Gameti Github"
                                        href="https://www.github.com/iambherulal"><i className="fab fa-github"></i></a>
                                </li>
                                <li><a target="_blank" rel="noreferrer" title="Bheru lal Gameti Linkedin"
                                        href="https://www.linkedin.com/in/iambherulal"><i
                                            className="fab fa-linkedin"></i></a></li>
                                <li><a target="_blank" rel="noreferrer" title="Bheru lal Gameti Instagram"
                                        href="https://www.instagram.com/iambherulal"><i
                                            className="fab fa-instagram"></i></a></li>
                                <li><a target="_blank" rel="noreferrer" title="Bheru lal Gameti WordPress"
                                        href="https://profiles.wordpress.org/iambherulal"><i
                                            className="fab fa-wordpress"></i></a></li>
                                <li><a target="_blank" rel="noreferrer" title="globally digital"
                                        href="https://www.globally.digital"><i className="fas fa-globe-asia"></i></a>
                                </li>
                            </ul>
                            <a href="/#" data-scroll-nav="2" className="about-me-banner">
                                <span className="icon"><i className="fas fa-arrow-down"></i></span>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-5 col-xl-6 col-md-12 hero-img-resp wow fadeInUp" data-wow-duration="0.7s"
                        data-wow-delay="0.5s">
                        <div className="hero-img">
                            <img src={Banner} title="Bheru Lal Gameti"
                                alt="Bheru Lal Gameti WordPress Developer" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
            <a href="mailto:iambherulal@gmail.com" className="hero-email-link">iambherulal@gmail.com</a>
            <a href="/#" data-scroll-nav="2" className="scroll-down-btn">Scroll Down</a>
        </section>
        <section className="section px-3" id="about" data-scroll-index="2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-img wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.2s">
                            <img src={About} alt="Bheru Lal Gameti" title="Bheru Lal Gameti"
                                className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-inner wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.1s">
                            <h6>About Me</h6>
                            <p>I'm Bheru Lal Gameti , a young 21 year old WordPress Developer, Full Stack Developer,
                                Blogger and Cyber Security Expert.</p>
                            <p>I started my life as a perfectly imperfect child with many flaws. I am the kind of
                                person who loves learning and was never concerned about the end result. In my free
                                time, I love to learn new things, play with my cat and i love to write code. After
                                learning HTML, CSS, JS and basic php in my high school, I discovered my passion is
                                "Creating solutions with technology". After High School I decide start my carrier in
                                IT industry so i Join Computer Science Course Bachelors of Computer Applications.
                            </p>
                            <p>The main area of my expertise is back end development. PHP, SQL, custom WordPress
                                plugins Development, wordpress themes Development from scratch and coding
                                interactive layouts.</p>
                            <a href="https://www.linkedin.com/in/iambherulal" target="_blank" rel="noreferrer" className="primary-btn">
                                <span className="text">Contact Me</span>
                                <span className="icon"><i className="fa fa-lightbulb"></i></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section pb-minus-76 bg-primary-light px-3" id="myresume">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-heading-left">
                            <h2>My Employment</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 wow fadeInDown" data-wow-duration="0.5s" data-wow-delay="0.1s">
                        <div className="resume-item">
                            <div className="body">
                                <div className="icon-outer-line">
                                    <div className="icon-inner-line">
                                        <span className="fas fa-user-tie"></span>
                                    </div>
                                </div>
                                <div className="text">
                                    <h6><a target="_blank" rel="noreferrer" href="https://www.globally.digital/">globally digital</a>
                                    </h6>
                                    <h5>Full Stack Developer</h5>
                                    <span>2021</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInDown" data-wow-duration="0.5s" data-wow-delay="0.2s">
                        <div className="resume-item">
                            <div className="body">
                                <div className="icon-outer-line">
                                    <div className="icon-inner-line">
                                        <span className="fas fa-user-tie"></span>
                                    </div>
                                </div>
                                <div className="text">
                                    <h6>Cypherox Technologies Pvt Ltd</h6>
                                    <h5>WordPress Developer</h5>
                                    <span>2019-2020</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInDown" data-wow-duration="0.5s" data-wow-delay="0.3s">
                        <div className="resume-item">
                            <div className="body">
                                <div className="icon-outer-line">
                                    <div className="icon-inner-line">
                                        <span className="fas fa-user-tie"></span>
                                    </div>
                                </div>
                                <div className="text">
                                    <h6>Assure Websolution</h6>
                                    <h5>WordPress Developer</h5>
                                    <span>2018-2019</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInDown" data-wow-duration="0.5s" data-wow-delay="0.4s">
                        <div className="resume-item">
                            <div className="body">
                                <div className="icon-outer-line">
                                    <div className="icon-inner-line">
                                        <span className="fas fa-user-tie"></span>
                                    </div>
                                </div>
                                <div className="text">
                                    <h6>Secure Meter Limited</h6>
                                    <h5>Outsource Processing</h5>
                                    <span>2017-2018</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section pb-minus-76 px-3" id="aboutsechool">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="section-heading">
                            <span>About Me</span>
                            <h2>THE WEB AFFAIR</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 wow fadeInDown" data-wow-duration="0.5s" data-wow-delay="0.1s">
                        <div className="about-item">
                            <div className="body">
                                <h3>ABOUT MY YEARS AS A STUDENT</h3>
                                <p>I'm always been an average student. <b>Science</b> were my favorite subjects. I was always keen to learn something new and apply it. during high school and I had hard time deciding what I want to do after school. In college, I worked more on my interpersonal skills. </p>
                                <p>Curiosity has been my biggest teacher. I explore the internet to learn techniques and best practices, and according to me formal education just slowed this process of self-learning. I spend 80% of my time learning things. New tools, new languages, frameworks, vanilla code or design practices. The remaining in implementation and taking feedback’s from real users. Sleepless nights for pushing an update, that’s what I live for. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInDown" data-wow-duration="0.5s" data-wow-delay="0.1s">
                        <div className="about-item">
                            <div className="body">
                                <h3>ABOUT ME AND THE WEB</h3>
                                <p>I did job for around 2-3 years at multiple companies. In 2021 I have started work with <b><a href="https://www.globally.digital/" target="_blank" rel="noreferrer">globally.digital</a></b>, a WordPress agency focusing on high performance sites for web publishers.</p>
                                <p>I believe that internet will change everything. I already see that happening but in future it will be embedded even deeper in our life. Internet is empowering everything we do, therefore it’s becoming more complex. Users have more options and less patience for the content. For me it is fascinating how all this fits together. And I feel proud every time when I open favorite my text editor (Microsoft Visual Studio) and see "Code the Web".</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section pb-minus-70 bg-primary-light px-3" data-scroll-index="3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10">
                        <div className="section-heading-left">
                            <h2>How I develop WordPress websites</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay="0.1s">
                        <div className="services-item">
                            <div className="body">
                                <h4>01</h4>
                                <h5>Custom built to your specific needs</h5>
                                <p>Your business needs more than a generic theme with minor customization. Off the rack themes are bloated with features you don’t need.Every time worked with a premade theme, it works out to be more expensive than starting from scratch and coding a custom WordPress theme</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.2s">
                        <div className="services-item">
                            <div className="body">
                                <h4>02</h4>
                                <h5>Minimal plugins</h5>
                                <p>Plugins are easy to install but hard to remove. Websites with dozens of plugins can become a house of cards – you don’t know what will happen if you deactivate one. I use industry standard plugins when they make sense (like a contact form), and build your unique functionality from scratch.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInRight" data-wow-duration="0.5s" data-wow-delay="0.1s">
                        <div className="services-item">
                            <div className="body">
                                <h4>03</h4>
                                <h5>As easy to edit as a Word document</h5>
                                <p>The purpose of a CMS is to let you manage content yourself, without the need of a developer. I focus on crafting the backend editing experience to be as easy to use as the frontend.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay="0.1s">
                        <div className="services-item">
                            <div className="body">
                                <h4>04</h4>
                                <h5>Faster than your competitors</h5>
                                <p>A 0.1 second improvement of mobile site speed can increase conversion rates by 8-10%. I can deliver speed and efficiency no off-the-shelf theme can match.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.2s">
                        <div className="services-item">
                            <div className="body">
                                <h4>05</h4>
                                <h5>Accessible to all users</h5>
                                <p>15% of visitors experience some level of disability, and accessibility lawsuits are increasing. I build websites that meet the Web Content Accessibility Guidelines (WCAG) 2.1 standards.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInRight" data-wow-duration="0.5s" data-wow-delay="0.1s">
                        <div className="services-item">
                            <div className="body">
                                <h4>06</h4>
                                <h5>Built to last</h5>
                                <p>The web changes fast, but you don’t need a new website every few years. I can build you a solid foundation that will adapt to your future needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section bg-dark-blue pb-30 px-3" data-scroll-index="4">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="section-heading" style={{marginBottom: "50px"}}>
                            <span>How I Work</span>
                            <h2>How we solve your problems</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center text-center">
                    <div className="col-md-10">
                        <div className="how-it-work-body text-white">                                
                            <p>A successful web project requires deep collaboration between design and development. My two design partners and I have worked together on over 100 projects over the past five years.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 wow fadeInUp" data-wow-duration="0.7s" data-wow-delay="0.2s">
                        <div className="how-i-work-item">
                            <div className="number">
                                <span>01</span>
                            </div>
                            <div className="text">
                                <h5>Discovery</h5>
                                <p>We sit down and figure out exactly what you need for your site. This involves a questionnaire, design audit, and technical review of your current site. At the end of this phase, we create a plan for your new website based on your specific needs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 wow fadeInUp" data-wow-duration="0.7s" data-wow-delay="0.4s">
                        <div className="how-i-work-item">
                            <div className="number">
                                <span>02</span>
                            </div>
                            <div className="text">
                                <h5>Design</h5>
                                <p>We design the key pages of your site based on our plan from discovery. We create a style guide and begin design exploration of key pages. We’ll continue iterating until we have mockups that meet the plan requirements.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 wow fadeInUp" data-wow-duration="0.7s" data-wow-delay="0.6s">
                        <div className="how-i-work-item">
                            <div className="number">
                                <span>03</span>
                            </div>
                            <div className="text">
                                <h5>Development</h5>
                                <p>We turn the mockups into reality. We copy your existing site, remove all unnecessary plugins, and build a fully custom theme. We integrate performance and accessibility audits throughout the development process.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="pb-0 bg-primary-light">
            <div className="call-to-action">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <div className="call-to-action-inner">
                                <h2>Dou you want to start a new project ?</h2>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="call-to-action-btn">
                                <a href="https://www.globally.digital/request-a-quote" target="_blank" rel="noreferrer" data-scroll-nav="7" className="white-btn">
                                    <span className="text">Contact Us</span>
                                    <span className="icon"><i className="fa fa-arrow-right"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section px-3" id="contact" data-scroll-index="5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-heading">
                            <span>Contact</span>
                            <h2>Contact Me</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="contact-info-item">
                            <div className="icon">
                                <span className="fa fa-envelope-open-text"></span>
                            </div>
                            <div className="body">
                                <h5>Email</h5>
                                <p><a href="mailto:iambherulal@gmail.com">iambherulal@gmail.com</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="contact-info-item">
                            <div className="icon">
                                <span className="fas fa-phone"></span>
                            </div>
                            <div className="body">
                                <h5>Phone:</h5>
                                <p><a href="tel:8209281826"> +91 82092 81826</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer name="Bheru Lal Gameti" website="https://www.globally.digital/" company="globally.digital" />
    </main>        
    )
}

export default Main
