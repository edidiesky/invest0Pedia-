import React from "react";
import { BiChevronRight, BiChevronUp } from "react-icons/bi";
import { Link } from "react-router-dom";
import Navbar from "./Header";
export default function Options() {
  const Hero = () => {
    return (
      <div className="W-100">
        <div className="w-100 back-grey py-10">
        <div
          className="container1 auto flex item-center"
          style={{ position: "absolute", top: "0%", left:'0'}}
        >
          <Navbar />
        </div>
          <div className="container1 auto center grid-auto grid-2 grid-gap4 center">
            <div className="w-100 flex column">
              <h1 className="text-light">
                Built to <br /> make investing easy
              </h1>
              <p className="w-80 fs-18">
                Automated technology is how we make investing easier, better,
                and more accessible.
              </p>
              <div className="py-2 pb-4">
                <Link to={"/page-login"} className="btn-primary py-2 px-3">
                  Get Started
                </Link>
              </div>
            </div>
            <img
              style={{ width: "100%" }}
              src="https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/recurring-deposit-man-donut.png?width=1385&name=recurring-deposit-man-donut.png"
              alt="A person sitting in an allocation chart floating amongst the clouds an looking at their phone that has an on track retirement goal."
              width="1232"
              srcset="https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/person-phone-donut-chart-retirement.png?width=616&amp;name=person-phone-donut-chart-retirement.png 616w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/person-phone-donut-chart-retirement.png?width=1232&amp;name=person-phone-donut-chart-retirement.png 1232w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/person-phone-donut-chart-retirement.png?width=1848&amp;name=person-phone-donut-chart-retirement.png 1848w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/person-phone-donut-chart-retirement.png?width=2464&amp;name=person-phone-donut-chart-retirement.png 2464w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/person-phone-donut-chart-retirement.png?width=3080&amp;name=person-phone-donut-chart-retirement.png 3080w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/person-phone-donut-chart-retirement.png?width=3696&amp;name=person-phone-donut-chart-retirement.png 3696w"
            />
          </div>
        </div>
        <div
          className="W-100"
          style={{ height: "8rem", position: "relative" }}
        ></div>
        {/* <div className="arch-circle navy">
          <svg
            className="arch-circle_desktop"
            width="2000"  
            height="186"
            viewBox="0 0 2000 186"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Arch illustration - desktop </title>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2000 157.654C1731.94 59.4275 1382.37 0 1000 0C617.634 0 268.057 59.4275 0 157.654V186H2000V157.654Z"
              fill="#e3f8ff"
            ></path>
          </svg>

          <svg
            className="arch-circle_mobile"
            width="800"
            height="109"
            viewBox="0 0 800 109"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Arch illustration - mobile </title>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M799.53 81.8947C693.396 30.9547 553.467 0 400.113 0C246.76 0 106.831 30.9547 0.696289 81.8947V109H799.53L799.53 81.8947Z"
              fill="#e3f8ff"
            ></path>
          </svg>
        </div> */}
      </div>
    );
  };
  const Interest2 = () => {
    return (
      <div className="w-100 py-10">
        <div className="container1 auto grid-2 grid-gap4 center">
          <div className="w-100 flex column gap-2">
            <h2 className="fs-46 text-extra-bold text-dark">
              Your investing portfolio made easy.
            </h2>
            <p className="fs-20 text-dark text-light">
              We custom-build our portfolios using either low-cost ETFs or
              cryptocurrencies. Your investments will automatically adjust when
              possible to help reduce the impact of market volatility and keep
              you on track.
            </p>
          </div>

          <img
            src="https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/core-climate-impact-portfolios.png?width=1337&name=core-climate-impact-portfolios.png"
            alt="Saving goals of a vintage car, a rainy-day fund, and a trip to Japan, with an saving rate of 4.00% APY."
            srcset="https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/saving-goals-APY-rate.png?width=484&amp;name=saving-goals-APY-rate.png 484w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/saving-goals-APY-rate.png?width=968&amp;name=saving-goals-APY-rate.png 968w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/saving-goals-APY-rate.png?width=1452&amp;name=saving-goals-APY-rate.png 1452w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/saving-goals-APY-rate.png?width=1936&amp;name=saving-goals-APY-rate.png 1936w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/saving-goals-APY-rate.png?width=2420&amp;name=saving-goals-APY-rate.png 2420w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/saving-goals-APY-rate.png?width=2904&amp;name=saving-goals-APY-rate.png 2904w"
            className="imgs"
          />
        </div>
      </div>
    );
  };
  const Interest = () => {
    return (
      <div className="w-100 py-10 back-grey2">
        <div className="container1 auto grid-2 grid-gap4 center">
          <img
            src="hs-fs/hubfs/Graphics/webpage-graphics/yoga-pose-rocks-coinfe55.png?width=760&amp;name=yoga-pose-rocks-coin.png"
            alt="A woman doing a yoga pose next to a stack of rocks that has a coin with the Betterment logo on it at the top."
            width="760"
            srcset="https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/yoga-pose-rocks-coin.png?width=380&amp;name=yoga-pose-rocks-coin.png 380w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/yoga-pose-rocks-coin.png?width=760&amp;name=yoga-pose-rocks-coin.png 760w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/yoga-pose-rocks-coin.png?width=1140&amp;name=yoga-pose-rocks-coin.png 1140w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/yoga-pose-rocks-coin.png?width=1520&amp;name=yoga-pose-rocks-coin.png 1520w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/yoga-pose-rocks-coin.png?width=1900&amp;name=yoga-pose-rocks-coin.png 1900w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/yoga-pose-rocks-coin.png?width=2280&amp;name=yoga-pose-rocks-coin.png 2280w"
            className="imgs"
          />

          <div className="w-100 flex column gap-2">
            <h2 className="fs-46 text-extra-bold text-dark">
              Automated investing helps remove the hassle.
            </h2>
            <p className="fs-20 text-dark text-light">
              Once you deposit, we automatically invest in the market. No
              holding accounts or manual steps. Plus, our algorithms continually
              monitor and manage your portfolio at a fraction of the cost of a
              traditional advisor.
            </p>
          </div>
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
                Portfolio rebalancing.
              </h4>
              <p className="fs-16 text-bold text-dark">
                We keep your account at your preferred ratio of stocks and
                bonds, or cryptocurrencies once at the balance threshold.
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
                d="M12.3 17c0-4.8 3.9-8.8 8.7-8.8h6c4.8 0 8.8 4 8.8 8.8h-3.5c0-2.9-2.4-5.3-5.3-5.3h-6a5.2 5.2 0 100 10.6h6a8.7 8.7 0 110 17.4h-6a8.8 8.8 0 01-8.8-8.7h3.6c0 2.9 2.3 5.3 5.2 5.3h6a5.2 5.2 0 100-10.5h-6c-4.8 0-8.8-4-8.8-8.8z"
                clip-rule="evenodd"
              ></path>
              <path
                fill-rule="evenodd"
                d="M22.3 44V4h3.4v40h-3.4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <div className="w-100 flex column gap-2">
              <h4 className="text-dark fs-26 text-extra-bold">
                Portfolio rebalancing.
              </h4>
              <p className="fs-16 text-bold text-dark">
                We keep your account at your preferred ratio of stocks and
                bonds, or cryptocurrencies once at the balance threshold.
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
                d="M9.8 10v14c0 7.9 6.3 14.3 14.2 14.3v3.5c-9.8 0-17.8-8-17.8-17.8V10h3.5z"
                clip-rule="evenodd"
              ></path>
              <path
                fill-rule="evenodd"
                d="M38.3 38V24c0-7.9-6.4-14.3-14.3-14.3V6.3c9.8 0 17.8 7.9 17.8 17.7v14h-3.5z"
                clip-rule="evenodd"
              ></path>
              <path
                fill-rule="evenodd"
                d="M8 7.5l7.2 7.3-2.4 2.4L8 12.5l-4.8 4.7-2.4-2.4L8 7.5z"
                clip-rule="evenodd"
              ></path>
              <path
                fill-rule="evenodd"
                d="M40 40.5l-7.2-7.3 2.4-2.4 4.8 4.7 4.8-4.7 2.4 2.4-7.2 7.3z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <div className="w-100 flex column gap-2">
              <h4 className="text-dark fs-26 text-extra-bold">
                Portfolio rebalancing.
              </h4>
              <p className="fs-16 text-bold text-dark">
                We keep your account at your preferred ratio of stocks and
                bonds, or cryptocurrencies once at the balance threshold.
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
      <div className="w-100 py-8 column flex">
        <div className="container1 auto grid-2 grid-gap4 center">
          <div className="w-100 flex column gap-2">
            <h2 className="fs-46 text-extra-bold text-dark">
              Tax-smart tools built to minimize tax impact.
            </h2>
            <p className="fs-20 text-dark text-light">
              Our automated tax tools, which you can turn on anytime, are
              designed to help maximize returns. These are the tricks of the
              trade the pros use—we just think everyone should have easy access
              to them.
            </p>
          </div>
          <img
            src="hs-fs/hubfs/Graphics/webpage-graphics/tax-loss-harvesting-lemonadef501.png?width=964&amp;name=tax-loss-harvesting-lemonade.png"
            alt="A lemon, and a glass of lemonade behind a banner indicating Tax losses are getting harvisted."
            width="964"
            srcset="https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/tax-loss-harvesting-lemonade.png?width=482&amp;name=tax-loss-harvesting-lemonade.png 482w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/tax-loss-harvesting-lemonade.png?width=964&amp;name=tax-loss-harvesting-lemonade.png 964w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/tax-loss-harvesting-lemonade.png?width=1446&amp;name=tax-loss-harvesting-lemonade.png 1446w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/tax-loss-harvesting-lemonade.png?width=1928&amp;name=tax-loss-harvesting-lemonade.png 1928w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/tax-loss-harvesting-lemonade.png?width=2410&amp;name=tax-loss-harvesting-lemonade.png 2410w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/tax-loss-harvesting-lemonade.png?width=2892&amp;name=tax-loss-harvesting-lemonade.png 2892w"
            className="imgs"
          ></img>
        </div>
        <div className="container1 py-10 auto grid-3 grid-gap4">
          <div className="w-100 py-2 flex column gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              aria-hidden="true"
              style={{width:"7rem", height:"7rem"}}
            >
              <path
                fill-rule="evenodd"
                d="M41.2 13.2L18 36.5 6.8 25.2l2.4-2.4 8.8 8.7 20.8-20.7 2.4 2.4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <div className="w-100 flex column gap-2">
              <h4 className="text-dark fs-26 text-extra-bold">
                Portfolio rebalancing.
              </h4>
              <p className="fs-16 text-bold text-dark">
                We keep your account at your preferred ratio of stocks and
                bonds, or cryptocurrencies once at the balance threshold.
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
                d="M12.3 17c0-4.8 3.9-8.8 8.7-8.8h6c4.8 0 8.8 4 8.8 8.8h-3.5c0-2.9-2.4-5.3-5.3-5.3h-6a5.2 5.2 0 100 10.6h6a8.7 8.7 0 110 17.4h-6a8.8 8.8 0 01-8.8-8.7h3.6c0 2.9 2.3 5.3 5.2 5.3h6a5.2 5.2 0 100-10.5h-6c-4.8 0-8.8-4-8.8-8.8z"
                clip-rule="evenodd"
              ></path>
              <path
                fill-rule="evenodd"
                d="M22.3 44V4h3.4v40h-3.4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <div className="w-100 flex column gap-2">
              <h4 className="text-dark fs-26 text-extra-bold">
                Portfolio rebalancing.
              </h4>
              <p className="fs-16 text-bold text-dark">
                We keep your account at your preferred ratio of stocks and
                bonds, or cryptocurrencies once at the balance threshold.
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
                d="M9.8 10v14c0 7.9 6.3 14.3 14.2 14.3v3.5c-9.8 0-17.8-8-17.8-17.8V10h3.5z"
                clip-rule="evenodd"
              ></path>
              <path
                fill-rule="evenodd"
                d="M38.3 38V24c0-7.9-6.4-14.3-14.3-14.3V6.3c9.8 0 17.8 7.9 17.8 17.7v14h-3.5z"
                clip-rule="evenodd"
              ></path>
              <path
                fill-rule="evenodd"
                d="M8 7.5l7.2 7.3-2.4 2.4L8 12.5l-4.8 4.7-2.4-2.4L8 7.5z"
                clip-rule="evenodd"
              ></path>
              <path
                fill-rule="evenodd"
                d="M40 40.5l-7.2-7.3 2.4-2.4 4.8 4.7 4.8-4.7 2.4 2.4-7.2 7.3z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <div className="w-100 flex column gap-2">
              <h4 className="text-dark fs-26 text-extra-bold">
                Portfolio rebalancing.
              </h4>
              <p className="fs-16 text-bold text-dark">
                We keep your account at your preferred ratio of stocks and
                bonds, or cryptocurrencies once at the balance threshold.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const OptionTop1 = () => {
    return (
      <div className="w-100 py-8 flex back-grey">
        <div className="container1 center auto my-4 grid-2 grid-gap4">
          <h2 className="fs-46 text-extra-bold text-dark">
            See what your money can be.
            <span className="block line1 fs-18 text-light text-dark">
              No matter what you want to do with your money, we’ll help you
              save, invest, and live the life you want.
            </span>
          </h2>
          <img
            style={{ width: "55rem" }}
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
    </div>
  );
}
