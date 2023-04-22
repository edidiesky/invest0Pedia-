import React from "react";
import { BiChevronRight, BiChevronUp } from "react-icons/bi";
import { Link } from "react-router-dom";
import Navbar from "./Header";
export default function Options() {
  const Hero = () => {
    return (
      <div className="w-100 hero">
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
          className="container1 auto flex item-center"
          style={{ position: "absolute", top: "0%",}}
        >
          <Navbar />
        </div>
        <header className="container1 flex column gap-2">
          <h1 className="w-50">
            A better way to
            grow and invest
          </h1>
          <p className="w-50 fs-18">
            Invesstock is built to help you achieve what you want with your
            money. Grow your savings today through a high-interest cash account
            and finance your future with automated investing.
          </p>
          <div className="py-2 pb-4">
            <Link to={"/page-login"} className="btn-primary py-2 px-3">
              Get Started
            </Link>
          </div>
        </header>
        {/* navbar */}
        {/* <picture>
          <source
            media="(min-width:699px)"
            srcset="https://f.hubspotusercontent20.net/hubfs/5274572/Graphics/webpage-graphics/landscape-day-bottom-image_desktop.svg"
          />
          <img
            src="hubfs/Graphics/webpage-graphics/landscape-day-bottom-image_mobile.svg"
            alt=""
            style={{
              position: "absolute",
              bottom: "0",
              left: "0",
            }}
          />
        </picture> */}
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
            className="imgs"
          />
          <div className="w-100 flex column gap-3">
            <h2 className="fs-46 text-extra-bold text-dark">
              A high-yield cash account helps your savings grow.
            </h2>
            <p className="fs-20 text-light text-dark">
              A home for your savings that earns 12x the national average.**
              With our high-yield Cash Reserve, you’re set to grow your money
              for all your near-term plans.
            </p>
          </div>
        </div>
      </div>
    );
  };
  const Interest = () => {
    return (
      <div className="w-100 py-10 back-grey2">
        <div className="container1 auto grid-2 grid-gap4">
        <div className="w-100 flex column gap-3">
            <h2 className="fs-46 text-extra-bold text-dark">
            Build wealth with automated investing.
            </h2>
            <p className="fs-20 text-light text-dark">
            We make investing easy. No day trading or navigating market ups
              and downs. We’re here to help you earn more over the long term and
              make smart decisions with your money.
            </p>
          </div>
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
            <div className="w-100 flex column gap-2">
              <h4 className="text-dark fs-26 text-extra-bold">
                We handle the hard stuff.
              </h4>
              <p className="fs-16 text-dark text-light">
                From recurring deposits to dividend reinvesting to managing your
                portfolio.
              </p>
            </div>
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
            <div className="w-100 flex column gap-2">
              <h4 className="text-dark fs-26 text-extra-bold">
                Invest the way you want.
              </h4>
              <p className="fs-16 text-dark text-light">
                Get started with diversified portfolios of stocks and bonds or
                crypto.
              </p>
            </div>
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
            <div className="w-100 flex column gap-2">
              <h4 className="text-dark fs-26 text-extra-bold">
                Limit tax impact.
              </h4>
              <p className="fs-16 text-dark text-light">
                Automated and optimized tax strategies are designed to help you
                minimize the tax impact on your investments.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const OptionTop2 = () => {
    return (
      <div className="w-100 flex column">
        <img
          src="images/cloud-background-white-blue-1.png"
          alt=""
          className="imgs"
        />
        <div className="w-100 back-grey flex column">
          <div className="container1 center auto py-10 flex column item-center justify-center">
            <img
              src="hs-fs/hubfs/Graphics/webpage-graphics/lightbulb1fd8.png?width=120&amp;name=lightbulb.png"
              alt="A lightbulb in a speech bubble."
              width="120"
              srcset="https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/lightbulb.png?width=60&amp;name=lightbulb.png 60w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/lightbulb.png?width=120&amp;name=lightbulb.png 120w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/lightbulb.png?width=180&amp;name=lightbulb.png 180w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/lightbulb.png?width=240&amp;name=lightbulb.png 240w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/lightbulb.png?width=300&amp;name=lightbulb.png 300w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/lightbulb.png?width=360&amp;name=lightbulb.png 360w"
            />
            <h2 className="text-dark text-center py-4">
              Want to know how you can make the most of your money? Choose your
              option.
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
                    <path
                      fill-rule="evenodd"
                      d="M36 7.5H12c-.3 0-.5.2-.5.5v32c0 .3.2.5.5.5h24c.3 0 .5-.2.5-.5V8c0-.3-.2-.5-.5-.5zM12 4a4 4 0 00-4 4v32a4 4 0 004 4h24a4 4 0 004-4V8a4 4 0 00-4-4H12z"
                      clip-rule="evenodd"
                    ></path>
                    <path d="M16 24V6h8v18l-4-4-4 4z"></path>
                    <path
                      fill-rule="evenodd"
                      d="M24 24V6h-8v18l4-4 4 4zm-6-4.8l2-2 2 2V8h-4v11.2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <p className="fs-20 text-light text-dark">I am in school </p>
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
                      d="M46 39.8H2v-3.5h44v3.5z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      d="M38 11.5H10c-.3 0-.5.2-.5.5v18c0 .3.2.5.5.5h28c.3 0 .5-.2.5-.5V12c0-.3-.2-.5-.5-.5zM10 8a4 4 0 00-4 4v18a4 4 0 004 4h28a4 4 0 004-4V12a4 4 0 00-4-4H10z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <p className="fs-20 text-light text-dark">
                    I am working or job hunting{" "}
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
                      d="M12.3 12.3A16.5 16.5 0 0010.1 33L33 10.1C26.5 6 18 6.7 12.3 12.3zm23.2-4.7A20 20 0 009.9 38.1L38 10c-.8-.9-1.7-1.6-2.6-2.3z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      d="M39.6 42l-14-14 2.5-2.4 14 14-2.5 2.5z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      d="M10.1 33C7 28 6.7 21.7 9.2 16.6a21 21 0 005.9 11.2l-5 5zm15.4-15.4l-8 7.9a16 16 0 01-5-13 16 16 0 0113 5zm2.4-2.5l5-5a16.7 16.7 0 00-16.2-.9 21 21 0 0111.2 6zm7.6-7.5A20 20 0 009.9 38.1L38 10c-.8-.9-1.7-1.6-2.6-2.3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <p className="fs-20 text-light text-dark">I am retired </p>
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
          <div className="w-100 flex column gap-2">
            <h2 className="fs-46 text-extra-bold text-dark">
              Keep more of your money with low fees.
            </h2>
            <p className="fs-20 text-dark text-light">
              We offer no-fee cash accounts‡ and low-cost investing so everyone
              can do what’s best for their money.
            </p>
          </div>
        </div>
      </div>
    );
  };
  const OptionTop1 = () => {
    return (
      <div className="w-100 py-8 flex back-grey">
        <div className="container1 center auto my-4 grid-2 grid-gap4">
          <div className="w-100 flex column gap-2">
            <h2 className="fs-46 text-extra-bold text-dark">
              See what your money can be.
            </h2>
            <p className="fs-20 text-dark text-light">
              No matter what you want to do with your money, we’ll help you
              save, invest, and live the life you want.
            </p>
          </div>
          <img
            style={{ width: "100%" }}
            src="hs-fs/hubfs/Graphics/webpage-graphics/person-phone-donut-chart-retirement1b4b.png?width=1232&amp;name=person-phone-donut-chart-retirement.png"
            alt="A person sitting in an allocation chart floating amongst the clouds an looking at their phone that has an on track retirement goal."
            width="1232"
            srcset="https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/person-phone-donut-chart-retirement.png?width=616&amp;name=person-phone-donut-chart-retirement.png 616w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/person-phone-donut-chart-retirement.png?width=1232&amp;name=person-phone-donut-chart-retirement.png 1232w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/person-phone-donut-chart-retirement.png?width=1848&amp;name=person-phone-donut-chart-retirement.png 1848w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/person-phone-donut-chart-retirement.png?width=2464&amp;name=person-phone-donut-chart-retirement.png 2464w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/person-phone-donut-chart-retirement.png?width=3080&amp;name=person-phone-donut-chart-retirement.png 3080w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/person-phone-donut-chart-retirement.png?width=3696&amp;name=person-phone-donut-chart-retirement.png 3696w"
          />
        </div>
      </div>
    );
  };

  return (
    <div>
      <Hero />
      <Interest2 />
      <Interest />
      <OptionTop />
      <OptionTop2 />
      <OptionTop1 />
    </div>
  );
}
