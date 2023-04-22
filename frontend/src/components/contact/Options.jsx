import React from "react";
import { BiChevronRight, BiChevronUp } from "react-icons/bi";
import Header from "./Navbar";
export default function Options() {
  const Hero = () => {
    return (
      <div className="w-100" style={{minHeight:'60vh', background:"#000b50", display:'flex', alignItems:'center', justifyContent:'center'}}>
        <div
          className="w-100"
          style={{
            position: "absolute",
            top: "0",
            height: "2rem",
            left: "0",  
            background: "#212121",
          }}
        ></div>
        <div
          className="container1 auto text-white flex item-center"
          style={{ position: "absolute", top: "0%" }}
        >
          <Header />
        </div>
        {/* <div className="container1 auto py-2"></div> */}
        <div className="w-80 auto flex column index h-100 text-center">
          <h1 className="text-white text-center">
          Questions? We're <br /> here to help
          </h1>
        </div>
      </div>
    );
  };
  const Interest2 = () => {
    return (
      <div className="w-100 py-10">
        <div className="container1 auto grid-2 grid-gap4">
          <img
            src="hs-fs/hubfs/Graphics/webpage-graphics/saving-goals-APY-ratea1ac.png?width=968&amp;name=saving-goals-APY-rate.png"
            alt="Saving goals of a vintage car, a rainy-day fund, and a trip to Japan, with an saving rate of 4.00% APY."
            srcset="https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/saving-goals-APY-rate.png?width=484&amp;name=saving-goals-APY-rate.png 484w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/saving-goals-APY-rate.png?width=968&amp;name=saving-goals-APY-rate.png 968w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/saving-goals-APY-rate.png?width=1452&amp;name=saving-goals-APY-rate.png 1452w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/saving-goals-APY-rate.png?width=1936&amp;name=saving-goals-APY-rate.png 1936w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/saving-goals-APY-rate.png?width=2420&amp;name=saving-goals-APY-rate.png 2420w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/saving-goals-APY-rate.png?width=2904&amp;name=saving-goals-APY-rate.png 2904w"
            className="imgs w-100"
          />
          <h2 className="fs-46 text-extra-bold text-dark">
            A high-yield cash account helps your savings grow.
            <span className="block line1 fs-18 text-light text-dark">
              A home for your savings that earns 12x the national average.**
              With our high-yield Cash Reserve, you’re set to grow your money
              for all your near-term plans.
            </span>
          </h2>
        </div>
      </div>
    );
  };
  const Interest = () => {
    return (
      <div className="w-100 py-10 back-grey2">
        <div className="container1 auto grid-2 grid-gap4">
          <h2 className="fs-46 text-extra-bold text-dark">
            Build wealth with automated investing.
            <span className="block line1 fs-18 text-light text-dark">
              We make investing easy. No day trading or navigating market ups
              and downs. We’re here to help you earn more over the long term and
              make smart decisions with your money.
            </span>
          </h2>
          <img
            src="hs-fs/hubfs/Graphics/webpage-graphics/investing-goals-person-phone-mobile98d0.png?width=1400&amp;name=investing-goals-person-phone-mobile.png"
            alt="Investing goals of a college fund, a home down payment, and retirement, with a person holding a phone."
            className="imgs"
            srcset="https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/investing-goals-person-phone-mobile.png?width=700&amp;name=investing-goals-person-phone-mobile.png 700w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/investing-goals-person-phone-mobile.png?width=1400&amp;name=investing-goals-person-phone-mobile.png 1400w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/investing-goals-person-phone-mobile.png?width=2100&amp;name=investing-goals-person-phone-mobile.png 2100w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/investing-goals-person-phone-mobile.png?width=2800&amp;name=investing-goals-person-phone-mobile.png 2800w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/investing-goals-person-phone-mobile.png?width=3500&amp;name=investing-goals-person-phone-mobile.png 3500w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/investing-goals-person-phone-mobile.png?width=4200&amp;name=investing-goals-person-phone-mobile.png 4200w"
          />
        </div>
        <div className="container1 py-10 auto grid-3 grid-gap4">
          <div className="w-100 py-2 flex column gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              aria-hidden="true"
              style={{ width: "6rem", height: "6rem" }}
            >
              <path
                fill-rule="evenodd"
                d="M22.5 36.5h3v-25h-3v25zM19 40V8h10v32H19z"
                clip-rule="evenodd"
              ></path>
              <path
                fill-rule="evenodd"
                d="M9.5 36.5h3v-9h-3v9zM6 40V24h10v16H6z"
                clip-rule="evenodd"
              ></path>
              <path
                fill-rule="evenodd"
                d="M35.5 36.5h3v-17h-3v17zM32 40V16h10v24H32z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <h4 className="text-dark fs-18 text-extra-bold">
              We handle the hard stuff.
              <span className="block fs-18 text-light text-dark">
                From recurring deposits to dividend reinvesting to managing your
                portfolio.
              </span>
            </h4>
          </div>
          <div className="w-100 py-2 flex column gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              aria-hidden="true"
              style={{ width: "6rem", height: "6rem" }}
            >
              <path
                fill-rule="evenodd"
                d="M24 40.5a16.5 16.5 0 100-33 16.5 16.5 0 000 33zm0 3.5a20 20 0 100-40 20 20 0 000 40z"
                clip-rule="evenodd"
              ></path>
              <path
                fill-rule="evenodd"
                d="M24 32.5a8.5 8.5 0 100-17 8.5 8.5 0 000 17zm0 3.5a12 12 0 100-24 12 12 0 000 24z"
                clip-rule="evenodd"
              ></path>
              <path
                fill-rule="evenodd"
                d="M22.3 14V6h3.4v8h-3.4z"
                clip-rule="evenodd"
              ></path>
              <path
                fill-rule="evenodd"
                d="M22.3 42v-8h3.4v8h-3.4z"
                clip-rule="evenodd"
              ></path>
              <path
                fill-rule="evenodd"
                d="M34 22.3h8v3.4h-8v-3.4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <h4 className="text-dark fs-18 text-extra-bold">
              Invest the way you want.
              <span className="block fs-18 text-light text-dark">
                Get started with diversified portfolios of stocks and bonds or
                crypto.
              </span>
            </h4>
          </div>
          <div className="w-100 py-2 flex column gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              aria-hidden="true"
              style={{ width: "6rem", height: "6rem" }}
            >
              <path
                fill-rule="evenodd"
                d="M36 7.5H12c-.3 0-.5.2-.5.5v32c0 .3.2.5.5.5h24c.3 0 .5-.2.5-.5V8c0-.3-.2-.5-.5-.5zM12 4a4 4 0 00-4 4v32a4 4 0 004 4h24a4 4 0 004-4V8a4 4 0 00-4-4H12z"
                clip-rule="evenodd"
              ></path>
              <path
                fill-rule="evenodd"
                d="M37 17.8H10.3v-3.6H37v3.6z"
                clip-rule="evenodd"
              ></path>
              <path d="M22 20.7h4v4h-4v-4z"></path>
              <path d="M16 20.7h4v4h-4v-4z"></path>
              <path d="M28 20.7h4v4h-4v-4z"></path>
              <path d="M22 27.3h4v4h-4v-4z"></path>
              <path d="M16 27.3h4v4h-4v-4z"></path>
              <path d="M28 27.3h4v4h-4v-4z"></path>
              <path d="M28 34h4v4h-4v-4z"></path>
              <path d="M16 34h6.7v4H16v-4z"></path>
              <path d="M22.7 34H26v4h-3.3v-4z"></path>
            </svg>
            <h4 className="text-dark fs-18 text-extra-bold">
              Limit tax impact.
              <span className="block fs-18 text-light text-dark">
                Automated and optimized tax strategies are designed to help you
                minimize the tax impact on your investments.
              </span>
            </h4>
          </div>
        </div>
      </div>
    );
  };
  const OptionTop2 = () => {
    return (
      <div className="w-100 flex column">
        <div className="w-100 flex column" style={{ background: "#f5f5f5" }}>
          <div className="container1 center auto py-10 flex column item-center justify-center">
           
            <h2 className="text-dark text-center py-4">
              Find answers to your questions:
            </h2>
            <div className="flex container1 column gap-3">
              <div className="w-100 px-3 item-center flex justify-space py-3 back-white shadow radius-1">
                <div className="flex gap-2 item-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                    style={{ width: "4rem", height: "4rem" }}
                  >
                    <path d="M22 28h4v16h-4V28z"></path>
                    <path d="M40 4H10L6 8l4 4h30V4z"></path>
                    <path
                      fill-rule="evenodd"
                      d="M11.4 7.5h25.1v1h-25l-.6-.5.5-.5zM10 4h30v8H10L6 8l4-4z"
                      clip-rule="evenodd"
                    ></path>
                    <path d="M8 16h30l4 4-4 4H8v-8z"></path>
                    <path
                      fill-rule="evenodd"
                      d="M36.6 19.5H11.5v1h25l.6-.5-.5-.5zM38 16H8v8h30l4-4-4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <p className="fs-20 text-light text-dark">Getting started </p>
                </div>
                <BiChevronRight style={{ width: "4rem", height: "4rem" }} />
              </div>
              <div className="w-100 px-3 item-center flex justify-space py-3 back-white shadow radius-1">
                <div className="flex gap-2 item-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                    style={{ width: "4rem", height: "4rem" }}
                  >
                    <path
                      fill-rule="evenodd"
                      d="M24.6 4.6a2 2 0 00-1.4-.6H6v32h28V14.8c0-.5-.2-1-.6-1.4l-8.8-8.8zm5.9 27.9v-17l-8-8h-13v25h21z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      d="M38.3 40.3V16h3.5v27.8H18v-3.5h20.3z"
                      clip-rule="evenodd"
                    ></path>
                    <path d="M22 16V6l10 10H22z"></path>
                  </svg>
                  <p className="fs-20 text-light text-dark">
                    Filling your taxes{" "}
                  </p>
                </div>
                <BiChevronRight style={{ width: "4rem", height: "4rem" }} />
              </div>

              <div className="w-100 px-3 item-center flex justify-space py-3 back-white shadow radius-1">
                <div className="flex gap-2 item-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                    style={{ width: "4rem", height: "4rem" }}
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 12.3h32v3.4H10v-3.4z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      d="M40 35.8H6v-3.5h34v3.5z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      d="M5.5 14l9.3-9.2 2.4 2.4-6.7 6.8 6.7 6.8-2.4 2.4L5.5 14z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      d="M42.5 34l-9.3-9.2-2.4 2.4 6.7 6.8-6.7 6.8 2.4 2.4 9.3-9.2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <p className="fs-20 text-light text-dark">
                    Transferring in and out{" "}
                  </p>
                </div>
                <BiChevronRight style={{ width: "4rem", height: "4rem" }} />
              </div>
              <div className="w-100 px-3 item-center flex justify-space py-3 back-white shadow radius-1">
                <div className="flex gap-2 item-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                    style={{ width: "4rem", height: "4rem" }}
                  >
                    <path
                      fill-rule="evenodd"
                      d="M42 20H6v-4L24 4l18 12v4zM24 8.2l-12.4 8.3h24.8L24 8.2z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      d="M42 41.8H6v-3.5h36v3.5z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      d="M26.3 34V24h3.4v10h-3.4z"
                      clip-rule="evenodd"
                    ></path>    
                    <path
                      fill-rule="evenodd"
                      d="M34.3 34V24h3.5v10h-3.5z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      d="M18.3 34V24h3.4v10h-3.4z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      d="M10.3 34V24h3.4v10h-3.4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <p className="fs-20 text-light text-dark">
                    All of our help centers{" "}
                  </p>
                </div>
                <BiChevronRight style={{ width: "4rem", height: "4rem" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const OptionTop = () => {
    return (
      <div className="w-100 py-8 flex">
        <div className="container1 center auto my-4 grid-2 grid-gap4">
          <img
            src="https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/hand-holding-coin-1.png?width=1096&name=hand-holding-coin-1.png"
            alt=""
            className="w-100"
          />
          <h2 className="fs-46 text-extra-bold text-dark">
            Keep more of your money with low fees.
            <span className="block line1 fs-18 text-light text-dark">
              We offer no-fee cash accounts‡ and low-cost investing so everyone
              can do what’s best for their money.
            </span>
          </h2>
        </div>
      </div>
    );
  };
  const OptionTop1 = () => {
    return (
      <div className="w-100 py-8 flex">
        <div className="container1 center auto my-4 grid-2 grid-gap4">
          <h2 className="fs-46 text-extra-bold text-dark">
            Speak with an advisor.
            <span className="block line1 fs-18 text-light text-dark">
              Moving money to Invesstock or looking for help with financial
              planning? We have two great teams, each excited to work with you.
            </span>
            <butto className="btn-primary fs-16">
              Explore our one-one services
            </butto>
          </h2>
          <img src="https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/nick-holeman.png?width=689&name=nick-holeman.png" />
        </div>
      </div>
    );
  };

  return (
    <div>
      <Hero />
      <OptionTop2 />
      <Interest2 />
      <OptionTop1 />
    </div>
  );
}
