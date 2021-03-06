import React from "react";
import Link from "gatsby-link";

const IndexPage = () => (
  <div className="homepage">
    <div className="hero">
      <div className="site-container">
        <div className="hero-content">
          <div className="hero-cta">
            <div className="hero-cta__title">
              Want to be enlightened and engaged by premium editorial with no
              ads?
            </div>
            <Link to="/#mission" className="hero-cta__btn">LEARN MORE</Link>
          </div>
          <img
            className="hero-image"
            src={require("../images/qc_moving_02.gif")}
          />
        </div>
      </div>
    </div>
    <div id="mission" className="mission">
      <div className="site-container">
        <div className="mission-content">
          <img
            className="mission-image"
            src={require("../images/no_alerts.png")}
          />
          <div className="mission-headline">
            We don't deal in clickbait, <br /> hyperbole or fake news{" "}
          </div>
          <div className="mission-copy">
            Quiet Corner is a micro-paywall that allows you to buy the best
             media on your phone or desktop.
             In an age of noisy browsing, Quiet Corner exists to preserve
             the true art of storytelling.
          </div>
        </div>
      </div>
    </div>
    <div className="pay-as-you-go">
      <div className="site-container">
        <div className="pay-as-you-go-content">
          <div className="pay-as-you-go-content-container">
            <div className="pay-as-you-go__headline-wrap">
              <img
                className="pay-as-you-go__burst"
                src={require("../images/burst.png")}
              />
              <div className="pay-as-you-go__bubble">
                First 5 <br /> Stories Free!
              </div>
              <div className="pay-as-you-go__headline">
                No subscriptions,<br /> pay as you go
              </div>
              <div className="pay-as-you-go__copy">
                No one likes direct debits.
                We don't do that here. We're pay-by-play.
                Just a few cents to keep you informed and entertained.
                Think of it as a bus pass. Keep topping up, keep riding. Exit any time.
              </div>
            </div>
          </div>
          <img
            className="pay-as-you-go-image"
            src={require("../images/screen_grab.png")}
          />
        </div>
      </div>
    </div>
    <div className="publishers-rejoice">
      <div className="site-container">
        <div className="publishers-rejoice-container">
          <img
            className="publishers-rejoice__img"
            src={require("../images/publishers_icon.png")}
          />
          <div className="publishers-rejoice__headline">A way forward for publishers</div>
          <div className="publishers-rejoice__copy">
            We're here to allow publishers to create a sustainable business,
            oxygenised by quality, self-funded storytelling,
            not heartless advertorial or trashy listicles.
            And, if a reader doesn't like a story, the refund is theirs.
          </div>
        </div>
      </div>
    </div>
    <div id="contact" className="contact">
      <div className="site-container">
        <div className="contact-container">
            <div className="contact-headline">Want to get in touch?</div>
            <form name="contact" action="/" data-netlify="true" className="contact-form">
                <label>NAME</label>
                <input name="name" type="text" />
                <label>EMAIL</label>
                <input name="email" type="text" />
                <label>COMPANY</label>
                <input name="company" type="text" />
                <label>MESSAGE</label>
                <textarea name="message"></textarea>
                <button className="contact-form__btn">SEND MESSAGE</button>
            </form>
        </div>
      </div>
    </div>
    <div className="footer">
      <img src={require("../images/welcome_logo.png")} />
      <div className="copyright">Copyright 2018, Quiet Corner</div>
    </div>
  </div>
);

export default IndexPage;
