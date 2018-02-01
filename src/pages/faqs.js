import React from "react";
import Link from "gatsby-link";

import Faq from "../components/Faq";

const SecondPage = () => (
  <div>
    <div className="site-container">
      <div className="faqs">
        <div className="hero-cta">
          <div className="hero-cta__title">Have a Question?</div>
        </div>
        <div className="faq-wrapper">
          <Faq
            headline="Why do I need to use Quiet Corner?"
            paragraphOne="You don’t. Media is in a very tricky place, however. Once upon a time our models were a mix of advertising and reader contribution. Recently, most of us have lost the war to Google and Facebook. We spent thousands trying to build our audiences with them and now have to pay to turn them on. We all make mistakes, but can you believe some of us embedded entire Instant Articles in Facebook with the promise of healthy ad commissions? "
            paragraphTwo="We can’t change the past but we can shape the future. And, that means to stay alive and thrive, we need to be self-funded and run our media businesses with a mix of advertising and reader contributions. And, if we were really honest with ourselves, we’d likely all choose to have our sites be pure and devoid of the clutter of advertising. "
            paragraphThree="Picture this, to those of us in print media: your most loyal reader subscribes to your print edition, or wanders down to the newsstand to pick up the latest issue. They sit back, consume the magazine and that afternoon, they go browsing the internet. Here, they find the cover story + main feature in its entirety, identical except for how it’s displayed: every word, every photo, every caption. Is this how we look after our most loyal customer?"
          />
          <Faq
            headline="How much does Quiet Corner software cost me?"
            paragraphOne="It's free."
          />
          <Faq
            headline="What commission does Quiet Corner take?"
            paragraphOne="Quiet Corner takes 10% of revenue. There are Stripe charges also associated."
          />
          <Faq
            headline="How should I price my story?"
            paragraphOne="Quiet Corner is about quality storytelling. It should be special. And, we suggest that stories should represent far more value than they are priced. Does a 20c story represent $1 value? The answer here is, of course, arbitrary. Our guiding principle is that we hope to create a platform that encourages quality and a very satisfied audience."
          />
          <Faq
            headline="I want to include advertising on my story. How do I?"
            paragraphOne="Sorry, Quiet Corner exists to preserve the art of storytelling. It’s about a culturally ravenous audience investing in quality. No fluff, no ads."
          />
          <Faq
            headline="Should I disable the paywall after a number of days?"
            paragraphOne="We encourage timeless and evergreen content behind the paywall. What we’re all trying to do is re-educate our audience that quality comes at a very fair price. If a story or publisher has an expiring paywall, it will encourage readers to wait until the paywall expires."
          />
          <Faq
            headline="Will the paywall affect my google ranking?"
            paragraphOne="No, Google will pick up as usual. It’s google search ranking maybe affected however because it will receive a reduced number of views."
          />
          <Faq
            headline="Can you put a full-time subscription paywall on my site?"
            paragraphOne="No, we want our audiences to feel guilty in the same way you do when you have a gym membership when you’re not using it enough. No one likes direct debits. We don’t do that here. We’re pay-by-play. Quiet Corner is a micro-paywall that allows you to buy the best media on your phone or desktop – without ads."
          />
          <Faq
            headline="Will Quiet Corner piss my reader’s off?"
            paragraphOne="Your work has likely always been free. Now it’s not. This will almost certainly create concern with your readers. However, we’re challenging the status quo that all media is free. Which is a desperately unsustainable model. We’re about providing a platform to create the work we’re proud of. It’s not clickbait, it’s not a race to the bottom, it’s the work that represents us at our best. It’s for our loyalists."
           />
        </div>
      </div>
    </div>
    <div className="footer">
      <img src={require("../images/welcome_logo.png")} />
      <div className="copyright">Copyright 2018, Quiet Corner</div>
    </div>
  </div>
);

export default SecondPage;
