import React from "react";
import { BiChevronRight, BiChevronUp } from "react-icons/bi";
import { Link } from "react-router-dom";
import Navbar from "./Header";
export default function Options() {
  const Hero = () => {
    return (
      <div className="w-100 hero1 column back-grey">
        <div
          className="container1 auto flex item-center"
          style={{ position: "absolute", top: "0%" }}
        >
          <Navbar />
        </div>
        <div className="container1 flex column">
          <h1 className="text-light">
            Save and earn <br /> more with <br /> 4.00% APY*
          </h1>
          <p className="w-50 fs-18">
            Grow your savings with a high-yield cash account. Invesstock’s Cash
            Reserve secures your money during volatile times while earning 12x
            the national average.**
          </p>
          <div className="py-2 pb-4">
            <Link to={"/page-login"} className="btn-primary py-2 px-3">
              Get Started
            </Link>
          </div>
        </div>
        <div
          className="container1 auto border-bottom py-2"
          style={{
            position: "absolute",
            bottom: "5%",
            borderTop: "1px solid rgba(0,0,0,.08)",
          }}
        >
          <p className="fs-12 text-bold text-dark">
            Cash Reserve is only available to clients of Betterment LLC, which
            is not a bank, and cash transfers to program banks are conducted
            through the clients’ brokerage accounts at Betterment Securities.
            For Cash Reserve (“CR”), Betterment LLC only receives compensation
            from our program banks; Betterment LLC and Betterment Securities do
            not charge fees on your CR balance.
          </p>
        </div>
        {/* navbar */}
      </div>
    );
  };
  const OptionTop2 = () => {
    return (
      <div className="w-100 flex column py-8 back-grey">
        <div className="container1 center auto my-4 grid-2 grid-gap4">
          <h2 className="fs-46 text-extra-bold text-dark">
            Optimize your cash today. Start saving for tomorrow.
            <span className="block line1 fs-18 text-light text-dark">
              Set money aside for what matters to you. Use our automated tools
              to help you achieve them.
            </span>
          </h2>
          <img
            src="hs-fs/hubfs/Graphics/webpage-graphics/goals-recurring-deposit-mobilea08f.png?width=964&amp;name=goals-recurring-deposit-mobile.png"
            alt="Two goals with recurring deposit turned on. One for a new sofa, and another for a rainy-day fund."
            width="964"
            srcset="https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/goals-recurring-deposit-mobile.png?width=482&amp;name=goals-recurring-deposit-mobile.png 482w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/goals-recurring-deposit-mobile.png?width=964&amp;name=goals-recurring-deposit-mobile.png 964w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/goals-recurring-deposit-mobile.png?width=1446&amp;name=goals-recurring-deposit-mobile.png 1446w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/goals-recurring-deposit-mobile.png?width=1928&amp;name=goals-recurring-deposit-mobile.png 1928w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/goals-recurring-deposit-mobile.png?width=2410&amp;name=goals-recurring-deposit-mobile.png 2410w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/goals-recurring-deposit-mobile.png?width=2892&amp;name=goals-recurring-deposit-mobile.png 2892w"
            className="imgs"
          ></img>
        </div>
      </div>
    );
  };
  const OptionTop1 = () => {
    return (
      <div className="w-100 py-8 flex">
        <div className="container1 center auto my-4 grid-2 grid-gap4">
          <h2 className="fs-46 text-extra-bold text-dark">
            See what your money can be.
            <span className="block line1 fs-18 text-light text-dark">
              No matter what you want to do with your money, we’ll help you
              save, invest, and live the life you want.
            </span>
          </h2>
          <img
            src="hs-fs/hubfs/Graphics/webpage-graphics/vault-shield-check-markb148.png?width=1153&amp;name=vault-shield-check-mark.png"
            alt="A vault next to a shield with a check mark on it."
            width="1153"
            srcset="https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/vault-shield-check-mark.png?width=577&amp;name=vault-shield-check-mark.png 577w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/vault-shield-check-mark.png?width=1153&amp;name=vault-shield-check-mark.png 1153w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/vault-shield-check-mark.png?width=1730&amp;name=vault-shield-check-mark.png 1730w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/vault-shield-check-mark.png?width=2306&amp;name=vault-shield-check-mark.png 2306w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/vault-shield-check-mark.png?width=2883&amp;name=vault-shield-check-mark.png 2883w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/vault-shield-check-mark.png?width=3459&amp;name=vault-shield-check-mark.png 3459w"
            className="imgs"
          ></img>
        </div>
      </div>
    );
  };
  const OptionTop4 = () => {
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
          <h2 className="text-dark fs-40 container1 auto text-center">
            What makes Betterment’s Cash Reserve better?
          </h2>
          <div
            className="container py-6 auto grid-auto grid-gap3"
            style={{ gridRowGap: "18rem" }}
          >
            <div className="w-100 py-1 back-white radius-1 flex column gap-2">
              <img
                class="item-image"
                src="https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/coin-slot-green.png?width=563&name=coin-slot-green.png"
                alt="Shield with a check mark."
                className="imgs"
              />
              <h3 className="text-dark fs-20 text-extra-bold text-center">
                $0 fees.
                <span className="block fs-16 text-light text-dark">
                  Forget any monthly or maintenance costs—what you earn is what
                  you keep.
                </span>
              </h3>
            </div>
            <div className="w-100 py-1 back-white radius-1 flex column gap-2">
              <img
                class="item-image"
                src="hs-fs/hubfs/Graphics/webpage-graphics/check-mark-shield5dd0.png?width=420&amp;name=check-mark-shield.png"
                alt="Shield with a check mark."
                width="420"
                srcset="https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/check-mark-shield.png?width=210&amp;name=check-mark-shield.png 210w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/check-mark-shield.png?width=420&amp;name=check-mark-shield.png 420w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/check-mark-shield.png?width=630&amp;name=check-mark-shield.png 630w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/check-mark-shield.png?width=840&amp;name=check-mark-shield.png 840w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/check-mark-shield.png?width=1050&amp;name=check-mark-shield.png 1050w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/check-mark-shield.png?width=1260&amp;name=check-mark-shield.png 1260w"
                className="imgs"
              />
              <h3 className="text-dark fs-20 text-extra-bold text-center">
                $1M insured.†
                <span className="block fs-16 text-light text-dark">
                  Rest easy with FDIC insurance up to $1M (4x the standard
                  amount) with our program banks.
                </span>
              </h3>
            </div>
            <div className="w-100 py-1 back-white radius-1 flex column gap-2">
              <img
                class="item-image"
                src="hs-fs/hubfs/Graphics/webpage-graphics/flower-cash-butterflies3298.png?width=420&amp;name=flower-cash-butterflies.png"
                alt="A small flowering plant surrounded by butterflies"
                width="420"
                className="imgs"
                srcset="https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/flower-cash-butterflies.png?width=210&amp;name=flower-cash-butterflies.png 210w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/flower-cash-butterflies.png?width=420&amp;name=flower-cash-butterflies.png 420w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/flower-cash-butterflies.png?width=630&amp;name=flower-cash-butterflies.png 630w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/flower-cash-butterflies.png?width=840&amp;name=flower-cash-butterflies.png 840w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/flower-cash-butterflies.png?width=1050&amp;name=flower-cash-butterflies.png 1050w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/flower-cash-butterflies.png?width=1260&amp;name=flower-cash-butterflies.png 1260w"
              />
              <h3 className="text-dark fs-20 text-extra-bold text-center">
                Unlimited withdrawals.
                <span className="block fs-16 text-light text-dark">
                  Compare this to other banks that limit how often you can
                  access your money.
                </span>
              </h3>
            </div>
            <div className="w-100 py-1 back-white radius-1 flex column gap-2">
              <img
                className="imgs"
                src="https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/flower-cash-butterflies.png?width=630&name=flower-cash-butterflies.png"
                alt="Hand holding a pile of cash."
                srcset="https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/hand-cash-pile.png?width=210&amp;name=hand-cash-pile.png 210w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/hand-cash-pile.png?width=420&amp;name=hand-cash-pile.png 420w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/hand-cash-pile.png?width=630&amp;name=hand-cash-pile.png 630w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/hand-cash-pile.png?width=840&amp;name=hand-cash-pile.png 840w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/hand-cash-pile.png?width=1050&amp;name=hand-cash-pile.png 1050w, https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/hand-cash-pile.png?width=1260&amp;name=hand-cash-pile.png 1260w"
              />
              <h3 className="text-dark fs-20 text-extra-bold text-center">
                No minimum balance.
                <span className="block fs-16 text-light text-dark">
                  Other institutions offer higher interest rates based on a
                  larger balance—you can grow your money with us for as little
                  as $10.
                </span>
              </h3>
            </div>
          </div>
          <Link to={"/page-login"} className="btn-primary py-2 px-3">
            Get Started
          </Link>
        </div>
      </div>
    );
  };
  return (
    <div>
      <Hero />
      <OptionTop4 />
      <OptionTop2 />
      <OptionTop1 />
    </div>
  );
}
