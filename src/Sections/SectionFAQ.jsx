import React, { useRef, useState } from "react";
import Accordion from "../Accordion";

export const SectionFAQ = () => {
    const handleClick = (linkUrl) => {
        // Open the specified webpage link in a new tab when carousel-content is clicked
        window.open(linkUrl, '_blank');
      };
      
      return (
        <section className="seven">
        <div className="background-element-one" />
        <div className="background-element-two" />
          <div className="seven-content" >
            <h1 className="medium-headline white" >Frequently Asked Questions</h1>
            <div className="seven-row" >
    
              <div className="seven-row-left" >
                <Accordion
                  title="What is YTFIN?"
                  content="YTFIN is a revolutionary cryptocurrency token that integrates with YouTube's ad revenue system. By investing in YTFIN tokens, you gain the opportunity to earn a share of the profits generated from YouTube advertisements, distributed monthly."
                />
                <Accordion
                  title="How does YTFIN work?"
                  content="YTFIN pools ad revenue generated from YouTube and redistributes it among token holders. We curate YouTube content that generates ad revenue, which is then converted into YTFIN tokens. The more tokens you hold, the larger your share of the monthly revenue distribution."
                />
                <Accordion
                  title="Who can benefit from YTFIN?"
                  content="Anyone looking for passive income can benefit from YTFIN. Whether you're a YouTube enthusiast, a casual viewer, or an investor seeking to diversify your portfolio, YTFIN offers a unique opportunity to earn from the booming digital content industry."
                />
                <Accordion
                  title="How do I get started with YTFIN?"
                  content="Getting started is easy:
                  Visit our website.
                  Purchase YTFIN tokens through our platform or any other exchange where YTFIN is available.
                  Watch YouTube Videos we release daily.
                  Hold your tokens and watch as your share of YouTube ad revenue is distributed to your account each month.
                  Follow our Social Media & Telegram for updates.
                  THE MORE YOU WATCH THE MORE YOU EARN!"
                />
                <Accordion
                  title="Is YTFIN secure?"
                  content="Yes, YTFIN utilizes the Solana blockchain known for its high security, speed, and efficiency. All transactions are transparent and immutable, ensuring your investment is safe and your earnings are verifiable."
                />
                <Accordion
                  title="How often are earnings distributed?"
                  content="Earnings are distributed monthly. The amount you receive is based on the proportion of YTFIN tokens you hold relative to the total amount in circulation."
                />
                <Accordion
                  title="Can I sell or trade YTFIN tokens?"
                  content="Yes, YTFIN tokens can be sold or traded on participating cryptocurrency exchanges. This allows you flexibility in managing your investments."
                />
                <Accordion
                  title="How does YTFIN support content creators?"
                  content="By investing in YTFIN, you're indirectly supporting a wide range of YouTube content creators. The curated content that generates ad revenue helps creators grow their channels and viewership, contributing to the overall vitality of the digital content ecosystem."
                />
                <Accordion
                  title="What makes YTFIN different from other cryptocurrencies?"
                  content="Unlike most cryptocurrencies that are purely speculative, YTFIN provides a tangible income stream by redistributing YouTube ad revenue to token holders. This not only offers a regular income potential but also creates a direct link between your investment and the thriving digital content market."
                />
                <Accordion
                  title="Where can I learn more about YTFIN?"
                  content="For more detailed information, please visit our website, check out our whitepaper, or contact our support team. We are always here to help you understand more about how you can benefit from YTFIN."
                />
              </div>
    
              <div className="seven-row-right" >
                <div className="seven-socials" >
                  <h1 className="description white" >Lorem Ipsum</h1>
                  <div className="seven-socials-icons" >
                    <i className="fa-brands fa-twitter" onClick={() => handleClick('https://twitter.com/home')} ></i>
                    <i className="fa-brands fa-linkedin" onClick={() => handleClick('https://www.linkedin.com/feed/')} ></i>
                    <i className="fa-brands fa-instagram" onClick={() => handleClick('https://www.instagram.com/')} ></i>
                    <i className="fa-brands fa-discord" onClick={() => handleClick('https://discord.com/')} ></i>
                  </div>
                </div>
                <div className="seven-get-started" >
                  <h1 className="small-headline ready-to-get-started white" >Lorem Ipsum Dolor Sit</h1>
                  <h1 className="small-text ready-to-get-started-description white" >Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.</h1>
                  <div className="broneeri-kõne-seven " >
                    <h1 className="small-description white bold broneeri-kõne-text" >Lorem Ipsum</h1>
                  </div>
                </div>
              </div>
    
            </div>
          </div>
        </section>
      );
    };