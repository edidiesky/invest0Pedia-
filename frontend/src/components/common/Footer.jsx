import React from "react";
import { BiChevronRight, BiChevronUp } from "react-icons/bi";
export default function Footer() {
  const FooterBackground = () => {
    return (
      <div className="w-100 py-10" style={{ background: "#000b50" }}>
        <div className="container1 auto py-10 flex item-center column justify-center">
          <img
            src="images/person-sideway-profile.png"
            alt=""
            style={{ width: "10rem", height: "10rem" }}
          />
          <div className="container py-2 flex column gap-2">
            <h4 className="fs-20 text-white text-center">
              I like the different types of accounts offered on Invesstock, the
              high APY and how easy it is to check my accounts on mobile.
              <span className="block py-1 fs-16 text-bold">- Karen G</span>
            </h4>
            <div className="py-1 border-bottom1"></div>
            <p className="fs-12 text-bold text-white text-center">
              Client of Invesstock. Views may not be representative, see more
              reviews at the App Store and Google Play Store.
            </p>
          </div>
        </div>
          {/* <div className="container1 pt-4 auto grid-2 grid-gap2">
            <h2 className="text-white fs-30 text-extra-bold">
              Still have questions?
            </h2>
            <ul>
              <li className="border-bottom1 fs-18 text-bold text-white py-3 px-1 flex item-center justify-space w-100">
                How does betterment work?
                <BiChevronUp />
              </li>
              <li className="border-bottom1 fs-18 text-bold text-white py-3 px-1 flex item-center justify-space w-100">
                How will I ahve access to real humans?
                <BiChevronUp />
              </li>
              <li className="border-bottom1 fs-18 text-bold text-white py-3 px-1 flex item-center justify-space w-100">
                Is my money safe at betterment?
                <BiChevronUp />
              </li>
              <li className="border-bottom1 fs-18 text-bold text-white py-3 px-1 flex item-center justify-space w-100">
                How are the expert behind the scenes?
                <BiChevronUp />
              </li>
            </ul>
          </div> */}
      </div>
    );
  };

  const FooterBottom = () => {
    return (
      <div style={{ background: "#000b50" }}>
        {/* <svg
      height="150"
      viewBox="0 0 2000 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: "#000b50", width: "100%" }}
    >
      <title>Triangle illustration </title>
      <path
        d="M0 122.922L1004.7 0L2000 122.922V149.5H0V122.922Z"
        fill="currentColor"
      ></path>
    </svg> */}
        <footer className="bt-section footer pb-6 container1 auto flex column white">
          <div className="bt-container">
            <div
              id="hs_cos_wrapper_module_16267052898241"
              className="pb-4"
              data-hs-cos-general-type="widget"
              data-hs-cos-type="module"
            >
              <div className="flex flex item-center gap-4">
                <div className="flex-1">
                  <svg
                    viewBox="0 0 91 74"
                    width="35"
                    height="29"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                  >
                    <title>Betterment Logo Icon SVG Footer</title>
                    <path
                      d="M45.2571 60.0478C53.6288 63.0794 68.2782 68.3853 81.1967 73.0658C87.083 65.4792 90.5143 55.8131 90.5143 45.0369C90.5143 19.3603 71.0593 0 45.2571 0C19.4571 0 0 19.3603 0 45.0369C0 55.8153 3.42913 65.4792 9.31758 73.0658C22.26 68.3788 36.9311 63.0643 45.2571 60.0478Z"
                      fill="#FFC729"
                    ></path>
                  </svg>
                </div>

                <nav className="w-100 flex item-center gap-2">
                  <ul className="w-100 grid-auto">
                    <li className="flex column gap-1">
                      <div className="text-white flex column gap-2 fs-16 text-bold">
                        Accounts
                      </div>

                      <ul className="flex column gap-1 fs-16 text-bold">
                        <li>
                          <a
                            style={{
                              
                              color: "#Fff",
                              fontSize:'14px'
                            }}
                            className="footer__menu__item"
                            href="investing.html"
                            target=""
                            data-track-event="ElementClicked"
                            data-track-name="Investing"
                            data-track-module="Footer"
                            data-interaction-listener-registered="true"
                          >
                            Automated Investing
                          </a>
                        </li>

                        <li>
                          <a
                            style={{
                              
                              color: "#Fff",
                              fontSize:'14px'
                            }}
                            className="footer__menu__item"
                            href="cash-reserve.html"
                            target=""
                            data-track-event="ElementClicked"
                            data-track-name="High-yield cash account"
                            data-track-module="Footer"
                            data-interaction-listener-registered="true"
                          >
                            High-yield cash account
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="flex column gap-1">
                      <div className="text-white flex column gap-1 fs-16 text-bold">
                        Investments
                      </div>

                      <ul className="flex column gap-1 fs-16 text-bold">
                        <li>
                          <a
                            style={{
                              
                              color: "#Fff",
                              fontSize:'14px'
                            }}
                            className="footer__menu__item"
                            href="investments.html"
                            target=""
                            data-track-event="ElementClicked"
                            data-track-name="Portfolio options"
                            data-track-module="Footer"
                            data-interaction-listener-registered="true"
                          >
                            Portfolio options
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="flex column gap-1">
                      <div className="text-white flex column gap-1 fs-16 text-bold">
                        Tools
                      </div>

                      <ul>
                        <li>
                          <a
                            style={{
                              fontSize:"14px",
                              color: "#Fff",
                            }}
                            className="footer__menu__item"
                            href=""
                            target=""
                            data-track-event="ElementClicked"
                            data-track-name="Retirement planning"
                            data-track-module="Footer"
                            data-interaction-listener-registered="true"
                          >
                            Retirement planning
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="flex column gap-1">
                      <div className="text-white flex column gap-1 fs-18 text-bold">
                        Help
                      </div>

                      <ul>
                        <li>
                          <a
                            style={{
                              
                              color: "#Fff",
                              fontSize: "16px",
                            }}
                            className="footer__menu__item"
                            href="financial-experts.html"
                            target=""
                            data-track-event="ElementClicked"
                            data-track-name="Expert guidance"
                            data-track-module="Footer"
                            data-interaction-listener-registered="true"
                          >
                            Expert guidance
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="flex column gap-1">
                      <div className="text-white flex column gap-1 fs-16 text-bold">
                        Company
                      </div>

                      <ul>
                        <li>
                          <a
                            style={{
                              
                              color: "#Fff",
                              fontSize: "14px",
                            }}
                            className="footer__menu__item"
                            href="about.html"
                            target=""
                            data-track-event="ElementClicked"
                            data-track-name="About us"
                            data-track-module="Footer"
                            data-interaction-listener-registered="true"
                          >
                            About us
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* <div className="footer-bottom-menu">
                <div className="footer-social-icons">
                  <ul className="flex">
                    <li>
                      <a
                        href=""
                        style={{
                          textDecoration: "underline",
                          color: "#Fff",
                          fontSize: "16px",
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          aria-label="Betterment on Instagram"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {" "}
                          <title>Betterment on Instagram</title>{" "}
                          <path
                            d="M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163ZM12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0V0ZM12 5.838C8.597 5.838 5.838 8.597 5.838 12C5.838 15.403 8.597 18.163 12 18.163C15.403 18.163 18.162 15.404 18.162 12C18.162 8.597 15.403 5.838 12 5.838ZM12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.21 14.209 16 12 16ZM18.406 4.155C17.61 4.155 16.965 4.8 16.965 5.595C16.965 6.39 17.61 7.035 18.406 7.035C19.201 7.035 19.845 6.39 19.845 5.595C19.845 4.8 19.201 4.155 18.406 4.155Z"
                            fill="currentColor"
                          ></path>{" "}
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        style={{
                          textDecoration: "underline",
                          color: "#Fff",
                          fontSize: "16px",
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          aria-label="Betterment on Facebook"
                          role="img"
                        >
                          <title>Betterment on Facebook</title>
                          <path d="M9.5 3H12V0H9.5C7.5 0 6 1.6 6 3.5V5H4v3h2v8h3V8h2.5l.5-3H9V3.5c0-.3.2-.5.5-.5"></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        style={{
                          textDecoration: "underline",
                          color: "#Fff",
                          fontSize: "16px",
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          aria-label="Betterment on Twitter"
                          role="img"
                        >
                          {" "}
                          <title>Betterment on Twitter</title>{" "}
                          <path d="M16 2.7c-.6.3-1.2.5-1.9.5.7-.4 1.2-1 1.5-1.8a6 6 0 01-2.1.8 3.3 3.3 0 00-5.6 3A9.3 9.3 0 011 1.8a3.3 3.3 0 001 4.4c-.5 0-1-.2-1.5-.4 0 1.6 1.2 3 2.7 3.2a3.3 3.3 0 01-1.5 0 3.3 3.3 0 003 2.4A6.6 6.6 0 010 12.7a9.3 9.3 0 0014.4-8.3c.6-.4 1.2-1 1.6-1.7"></path>{" "}
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        style={{
                          textDecoration: "underline",
                          color: "#Fff",
                          fontSize: "16px",
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          aria-label="Betterment on LinkedIn"
                          role="img"
                        >
                          {" "}
                          <title>Betterment on LinkedIn</title>{" "}
                          <path d="M.2 15.2h3.4V4.9H.2v10.3zM1.9 0C.8 0 0 .8 0 1.8s.7 1.8 1.9 1.8 2-.8 2-1.8S3 0 1.9 0zM16 9.3v5.9h-3.4V9.7c0-1.4-.5-2.3-1.8-2.3-1 0-1.5.6-1.7 1.2l-.1.9v5.7H5.5V4.9H9v1.5c.4-.7 1.2-1.7 3-1.7 2.3 0 4 1.5 4 4.6z"></path>{" "}
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="footer-apps-icons"></div>

                <div className="footer-bottom-links">
                  <ul className="flex">
                    <li>
                      <a
                        href="contact.html"
                        data-track-event="ElementClicked"
                        data-track-name="Contact us"
                        data-track-module="Footer"
                        data-interaction-listener-registered="true"
                      >
                        Contact us
                      </a>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>

            <div
              id="hs_cos_wrapper_module_16301570831873"
              className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module"
              data-hs-cos-general-type="widget"
              data-hs-cos-type="module"
            >
              <div className="flex column gap-1">
                <div className="flex column gap-2">
                  <div className="flex column gap-2">
                    <p className="text-white">
                      The reported customer count of 74,000+ is as of Dec. 31,
                      2022.
                    </p>
                  </div>

                  <div className="flex column gap-2">
                    <p className="text-white">
                      Invesstock's reported assets under management (AUM) of
                      $12+ Billion is as of Dec. 31, 2022.
                    </p>
                  </div>

                  <div className="flex column gap-2">
                    <p className="text-white">
                      This experience and any marketing of the experience are
                      provided by Invesstock LLC. To the extent that there is
                      marketing related to Invesstock Checking, it is provided
                      by Invesstock Financial LLC.
                    </p>
                    <p className="text-white">
                      We want you to know a few things:&nbsp;&nbsp;
                    </p>
                    <p className="text-white">
                      <strong className="text-white">Who Provides What Service?</strong>
                    </p>
                    <p className="text-white">
                      Investment Advice:&nbsp; Advisory services for traditional
                      investments (e.g., ETFs) and digital assets are provided
                      by Invesstock LLC, an SEC-registered investment adviser.
                      Invesstock LLC also offers the Invesstock Cash Reserve
                      product. Invesstock LLC does not require clients to
                      maintain a minimum investment account balance. However,
                      accounts below a certain balance may have certain
                      restrictions. For more information, please see{" "}
                      <a
                        href=""
                        style={{
                          textDecoration: "underline",
                          color: "#Fff",
                          fontSize: "16px",
                        }}
                      >
                        <span>additional disclosure</span>
                      </a>
                      .&nbsp;
                    </p>
                    <p className="text-white">
                      Traditional Investment Brokerage Services &amp;
                      Custody:&nbsp; Brokerage services are provided to clients
                      of Invesstock LLC by Invesstock Securities, an
                      SEC-registered broker-dealer and member of{" "}
                      <a
                        href=""
                        style={{ textDecoration: "underline", color: "#Fff" }}
                        rel="noopener"
                      >
                        FINRA
                      </a>{" "}
                      /
                      <a
                        href=""
                        style={{ textDecoration: "underline", color: "#Fff" }}
                        rel="noopener"
                      >
                        SIPC
                      </a>
                      , and Apex Clearing Corporation, a third-party SEC
                      registered broker-dealer and member FINRA/SIPC.
                    </p>
                    <p className="text-white">
                      Digital Asset Trading Services &amp; Custody:&nbsp;
                      Digital asset trading services and custody are provided by
                      Gemini Trust Company, LLC.&nbsp;{" "}
                      <span style={{ color: "#2b2b3c" }}>
                        For further details regarding the custody of assets,
                        including cash, held at Gemini Trust Company, please see
                        your Gemini{" "}
                      </span>
                      <a
                        href=""
                        style={{ textDecoration: "underline", color: "#Fff" }}
                      >
                        <span>user agreement</span>
                      </a>
                      <span style={{ color: "#2b2b3c" }}>.</span>
                    </p>
                    <p className="text-white">
                      Invesstock Checking:&nbsp; Invesstock Checking is made
                      available through Invesstock Financial LLC. Checking
                      accounts and the Invesstock Visa Debit Card provided by
                      and issued by nbkc bank, Member FDIC. Neither Invesstock
                      LLC norInvesstock Financial LLC, nor any of their
                      affiliates, is a bank.
                    </p>
                    <p className="text-white">
                      <strong className="text-white">Let’s Talk About Risk:</strong>
                    </p>
                    <p className="text-white">
                      Investing involves risk and there is the potential of
                      losing money when you invest in securities and digital
                      assets. Past performance does not guarantee future results
                      and the likelihood of investment outcomes are hypothetical
                      in nature.&nbsp;&nbsp;
                    </p>
                    <p className="text-white">
                      Investments in securities and digital assets are: Not FDIC
                      Insured • Not Bank Guaranteed • May Lose Value.&nbsp;
                    </p>
                    <p className="text-white">
                      Furthermore, investing in digital assets is highly
                      speculative and volatile, and only suitable for investors
                      who are able to bear the risk of potential loss and
                      experience sharp drawdowns.<em>&nbsp; </em>
                      <span style={{ color: "#1d2844" }}>
                        Digital assets are not legal tender and are not backed
                        by the U.S. government.{" "}
                      </span>
                      Digital assets are not subject to SIPC
                      protections.&nbsp;&nbsp;
                    </p>
                    <p className="text-white">
                      Before investing, consider your investment objectives and
                      Invesstock LLC's fees and expenses. Invesstock LLC's
                      internet-based advisory services are designed to assist
                      clients in achieving discrete financial goals. They are
                      not intended to provide comprehensive tax advice or
                      financial planning with respect to every aspect of a
                      client's financial situation and do not incorporate
                      specific investments that clients hold elsewhere.{" "}
                      <a
                        href=""
                        style={{ textDecoration: "underline", color: "#Fff" }}
                      >
                        <span>Form CRS</span>
                      </a>
                      ,{" "}
                      <a
                        href=""
                        style={{ textDecoration: "underline", color: "#Fff" }}
                      >
                        <span>Form ADV Part II</span>
                      </a>{" "}
                      and{" "}
                      <a
                        href=""
                        style={{ textDecoration: "underline", color: "#Fff" }}
                      >
                        <span>other disclosures</span>
                      </a>
                      .&nbsp;
                    </p>
                    <p className="text-white">
                      Not an offer, solicitation of an offer, or advice to buy
                      or sell securities in jurisdictions where Invesstock LLC
                      is not registered.
                    </p>
                    <p className="text-white">
                      <strong className="text-white">Who Provides the Market Data?</strong>
                    </p>
                    <p className="text-white">
                      <a
                        href=""
                        style={{ textDecoration: "underline", color: "#Fff" }}
                      >
                        <span>Market Data</span>
                      </a>{" "}
                      by Xignite. Fund data © 2022 Morningstar.&nbsp; All Rights
                      Reserved.&nbsp; The information contained herein:&nbsp;
                      (1) is proprietary to Morningstar and/or its content
                      providers; (2) may not be copied or distributed; and&nbsp;
                      (3) is not warranted to be accurate, complete or
                      timely.&nbsp; Neither Morningstar nor its content
                      providers are responsible for any damages or losses
                      arising from any use of this information.&nbsp;&nbsp;
                    </p>
                  </div>

                  <div className="flex column gap-2">
                    <div>
                      <p className="text-white text-start">
                        {" "}
                        You are viewing a web property located at
                        Invesstock.org. Different properties may be provided by
                        a different entity with different marketing standards.{" "}
                      </p>

                      <ul className="flex item-center gap-2 py-2">
                        <li>
                          <a
                            style={{
                              textDecoration: "underline",
                              color: "#Fff",
                            }}
                            href="legal/terms.html"
                          >
                            Terms of Use
                          </a>
                        </li>

                        <li>
                          <a
                            style={{
                              textDecoration: "underline",
                              color: "#Fff",
                            }}
                            href="legal/privacy-policy.html"
                          >
                            Privacy Policy
                          </a>
                        </li>

                        <li>
                          <a
                            style={{
                              textDecoration: "underline",
                              color: "#Fff",
                            }}
                            href="legal/copyright-intellectual-property.html"
                          >
                            Trademark
                          </a>
                        </li>

                        <li>
                          <a
                            style={{
                              textDecoration: "underline",
                              color: "#Fff",
                            }}
                            href="legal.html"
                          >
                            Legal Directory
                          </a>
                        </li>
                      </ul>

                      <p className="text-white text-start">
                        Invesstock assumes no responsibility or liability
                        whatsoever for the content, accuracy, reliability or
                        opinions expressed in a third-party website, to which a
                        published article links (a “linked website”). Such
                        linked websites are not monitored, investigated, or
                        checked for accuracy or completeness by Invesstock. It
                        is your responsibility to evaluate the accuracy,
                        reliability, timeliness and completeness of any
                        information available on a linked website. All products,
                        services, and content obtained from a linked website are
                        provided “as is” without warranty of any kind, express
                        or implied, including, but not limited to, implied
                        warranties of merchantability, fitness for a particular
                        purpose, title, non-infringement, security, or accuracy.
                        If Invesstock has a relationship or affiliation with the
                        author or content, it will note this in additional
                        disclosure.
                      </p>
                      <p className="text-white text-start">
                        © Invesstock. All rights reserved
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  };

  return (
    <div className="w-100 py-6">
      <FooterBackground />
      <FooterBottom />
    </div>
  );
}
