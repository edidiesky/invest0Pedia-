import React from "react";
import { BiChevronRight, BiChevronUp } from "react-icons/bi";
import Navbar from "../home/Header";
export default function Options() {
  const Hero = () => {
    return (
      <div
        className="w-100 hero"
        style={{ background: "#e3f8ff", minHeight: "70vh" }}
      >
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
        {/* <div
          className="container1 auto flex item-center"
          style={{ position: "absolute", top: "0%", left: "0" }}
        >
          <Navbar />
        </div> */}
        <header className="w-80 flex column">
          <h1 className="">
            A better way to <br />
            grow and invest
          </h1>
          <p className="w-50 fs-18">
            We're here to help people turn everyday investments, no matter how
            small, into their dreams, no matter how big.
          </p>
        </header>
        {/* navbar */}
      </div>
    );
  };
  const Interest2 = () => {
    return (
      <div className="w-100 py-10 flex column gap-4">
        <div className="container1 auto grid-2 grid-gap4">
          <div className="flex column gap-3">
            <h2 className="fs-46 text-extra-bold text-dark">
              “Invesstock” is different for everyone.
            </h2>
            <p
              className="block line1 fs-26 text-light text-dark"
              style={{ paddingRight: "3rem" }}
            >
              It can feel big, like retiring early. It can feel urgent, like
              investing in a climate-conscious portfolio. Or it can just feel
              helpful, like using recurring deposits so you never forget to
              save.
            </p>
          </div>
          <img
            src="https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/woman-phone-seeing-stars.png?width=520&name=woman-phone-seeing-stars.png"
            alt="A woman looking at her phone, which is shining a light on her."
            className="imgs"
          />
        </div>
        <div className="container1 py-8 auto grid-2 grid-gap4">
          <img
            src="https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/phone-shining-light.png?width=1325&name=phone-shining-light.png"
            alt="A woman looking at her phone, which is shining a light on her."
            className="imgs"
          />
          <div className="flex column gap-3">
            <h2 className="fs-46 text-extra-bold text-dark">
              We offer the best of both worlds.
            </h2>
            <p
              className="block line1 fs-26 text-light text-dark"
              style={{ paddingRight: "3rem" }}
            >
              We do that by combining easy-to-use, automated investing
              technology with great advice so you can make "better" what you
              want it to be., like using recurring deposits so you never forget
              to save.
            </p>
          </div>
        </div>
        <div className="container1 py-8 auto grid-2 grid-gap4">
          <div className="flex column gap-3">
            <h2 className="fs-46 text-extra-bold text-dark">
              You deserve financial peace of mind.
            </h2>
            <p
              className="block line1 fs-26 text-light text-dark"
              style={{ paddingRight: "3rem" }}
            >
              That's where we come in. We're here to simplify overly-complex
              ideas. To help you set goals and give purpose to your money. To
              build peace of mind into your financial future.
            </p>
          </div>
          <img
            src="https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/compass-stairs-doorway.png?width=1391&name=compass-stairs-doorway.png"
            alt="A woman looking at her phone, which is shining a light on her."
            className="imgs"
          />
        </div>
      </div>
    );
  };
  const Interest = () => {
    return (
      <div className="w-100 py-10 back-grey2">
        <div className="container1 py-6 auto grid-2 grid-gap4">
          <h2 className="fs-46 text-extra-bold text-dark">
            " No one ever tiptoed to real change. We’re constantly looking for
            new ways to disrupt financial services and create a better world for
            our customers. "
            <span className="block fs-26 text-grey pt-3">Sarah Levy, CEO</span>
          </h2>
          <img
            src="images/headshot-jason-hamilton.png"
            alt="Investing goals of a college fund, a home down payment, and retirement, with a person holding a phone."
            className="imgs"
          />
        </div>
      </div>
    );
  };
  const OptionTop = () => {
    return (
      <div className="w-100 py-8 flex">
        <div
          className="container flex column gap-3"
          style={{
            gap: "6rem ",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2 className="text-dark fs-46 text-center">
            The Betterment Leadership Team
          </h2>
          <div
            className="w-100 py-1 back-white shadow1 px-2 radius-1 flex column gap-2"
            style={{
              border: "1px solid #c7c7c7",
              width: "400px",
              justifyContent: "center",
              alignItems: "center",
              padding: "6rem 0",
            }}
          >
            <img
              src="images/seth-rosenbloom.jpg"
              alt=""
              style={{
                width: "20rem",
                height: "20rem",
                borderRadius: "50%",
                transform: "translateY(-50%)",
              }}
            />
            <h3 className="text-dark fs-26 text-extra-bold text-center">
              Sarah Levy
              <span className="block fs-20 text-light text-dark">
                Chief Executive Officer
              </span>
            </h3>
          </div>
          <div
            className="container py-10 auto grid-3 grid-gap4"
            style={{ gridRowGap: "18rem" }}
          >
            <div
              className="w-100 py-1 back-white shadow1 px-2 radius-1 flex column gap-2"
              style={{
                border: "1px solid #c7c7c7",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="images/jon-mauney.jpg"
                alt=""
                style={{
                  width: "20rem",
                  height: "20rem",
                  borderRadius: "50%",
                  transform: "translateY(-50%)",
                }}
              />
              <h3 className="text-dark fs-26 text-extra-bold text-center">
                <span className="block fs-20 text-light text-dark">
                  VP and General Manager, Betterment at Work
                </span>
              </h3>
            </div>
            <div
              className="w-100 py-1 back-white shadow1 px-2 radius-1 flex column gap-2"
              style={{
                border: "1px solid #c7c7c7",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="images/john-mileham.jpg"
                alt=""
                style={{
                  width: "20rem",
                  height: "20rem",
                  borderRadius: "50%",
                  transform: "translateY(-50%)",
                }}
              />
              <h3 className="text-dark fs-26 text-extra-bold text-center">
                Raoul Bhavnani
                <span className="block fs-18 text-light text-dark">
                  Chief Communications Officer
                </span>
              </h3>
            </div>
            <div
              className="w-100 py-1 back-white shadow1 px-2 radius-1 flex column gap-2"
              style={{
                border: "1px solid #c7c7c7",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="images/mike-reust.jpg"
                alt=""
                style={{
                  width: "20rem",
                  height: "20rem",
                  borderRadius: "50%",
                  transform: "translateY(-50%)",
                }}
              />
              <h3 className="text-dark fs-26 text-extra-bold text-center">
                Boris Khentov
                <span className="block fs-20 text-light text-dark">
                  SVP, Product Strategy
                </span>
              </h3>
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
      <div
        className="container1 py-10 auto grid-3 grid-gap4"
        style={{ transform: "translateY(-160px)" }}
      >
        <div className="w-100 py-2 back-white shadow1 px-2 radius-1 flex column gap-2">
          <h3 className="text-dark fs-26 text-extra-bold text-center">
            "The bottom line: Betterment is a clear leader among robo-advisors."
            <span className="block fs-18 text-light text-dark">
              Nerd Wallet
            </span>
          </h3>
        </div>
        <div className="w-100 py-2 back-white shadow1 px-2 radius-1 flex column gap-2">
          <h3 className="text-dark fs-26 text-extra-bold text-center">
            "This app is a good option for those who want more hands-off
            investing..."
            <span className="block fs-18 text-light text-dark">
              The Balance
            </span>
          </h3>
        </div>
        <div className="w-100 py-2 back-white shadow1 px-2 radius-1 flex column gap-2">
          <h3 className="text-dark fs-26 text-extra-bold text-center">
            "Betterment pioneered the robo advisor industry as we know it
            today."
            <span className="block fs-18 text-light text-dark">Massabe</span>
          </h3>
        </div>
      </div>
      <OptionTop />
      
    </div>
  );
}
