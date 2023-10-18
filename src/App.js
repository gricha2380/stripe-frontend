import React from "react";
import "./styles.css";
import CheckoutWidget from "./CheckoutWidget";
import PageBg from "./PageBg";
import Footer from "./Footer";

let message = undefined;
const query = new URLSearchParams(window.location.search);

const App = () => {
  return (
    <>
    <div className="App">
      {/* start page elements */}
      <PageBg />
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
    <div className="relative col-span-1 h-300 overflow-hidden rounded-xl NOborder md:col-span-2 p-5">
        <div className="flex xh-60 mb-5 text-left">
              <h3 className="text-xl text-bold">Gregor Richardson wants to work at{'\u00A0'}
              <div className="tooltip tooltip-right" data-tip="❤️"
              >
                <span className="stripe-logo" />
              </div>.
              </h3>
        </div>
              <div className="text-left mb-6">Stripe changed the world of e-commerce. It has been indespencible in my own personal projects as a developer and entrepreneur. My familiarity with the product along with my existing experience as a Solutions Architect makes me excited about the possibility of joining your company.</div>
              <div className="text-lg text-left">About Me</div>
              <ul className="max-w-lg space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 text-left checklist">
                <li>
                  <span className="font-semibold	">Payment industry experience</span>
                  <div className="pl-5 text-sm discription">Implementing web payment integrations on the Amazon Pay team
                    <div className="tooltip tooltip-right info" data-tip="Handling both pre-sales and post sales engagements">?</div>
                  </div>
                </li>
                <li >
                  <span className="font-semibold	">Solutions Architect experience</span>
                  <div className="pl-5 text-sm discription">I've had Solutions Architect roles in multiple product categories (AWS & Amazon Pay)
                    <div className="tooltip tooltip-right info" data-tip="AWS specialties - serverless computing">?</div>
                  </div>
                </li>
                <li>
                  <span className="font-semibold">Developer experience</span>
                  <div className="pl-5 text-sm discription">I've designed and built web applications at various scales for myself and others. I've used Stripe Checkout & Payments products for recurring billing integration.
                    <div className="tooltip tooltip-right info" data-tip="As an entreprenur & developer, Stripe played an important role in bringing my SaaS application to life: TradeCruncher.com">?</div>
                  </div>
                
                </li>
              </ul>

              {/* start modal */}
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Hello!</h3>
                  {(query.get("success")) ? message = "Order placed! Thank you for your interest 😉.": null}
                  {(query.get("canceled")) ? message = <>Order canceled -- Feel free to reach out to me any time: <a href="mailto:gregor@gregorrichardson.com" className="link">gregor@gregorrichardson.com</a></>: null}
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
              {/* end modal */}

              {/* start additional info */}
              <div className="grid grid-rows-1 grid-flow-col gap-4 skill-grid">
                <div className="tooltip tooltip-right" data-tip="Download My Resumé"><a href="/Gregor_Richardson_Resume.pdf" target="_blank"><div className="icon resume"></div></a></div>
                <div className="tooltip tooltip-right" data-tip="Email Me"><a href="mailto:gregor@gregorrichardson.com?subject=Stripe Solutions Architect&body=Hi Gregor,%0A %0A We'd love to bring you in for an interview!"><div className="icon email"></div></a></div>
                <div className="tooltip tooltip-right" data-tip="LinkedIn Page"><a href="https://www.linkedin.com/in/gregorrichardson/" target="_blank" rel="noreferrer"><div className="icon linkedin"></div></a></div>
              </div>
              {/* end additional info */}
    </div>
    <div className="relative col-span-1 h-300 overflow-hidden rounded-xl no-border border-gray-200 shadow-md0 ">
        <div className="flex h-300 items-center justify-center">
        <CheckoutWidget />
        </div>
        <div className="mx-auto max-w-md text-center">
            {/* <h2 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold text-transparent [text-wrap:balance] md:text-3xl md:font-normal">Performance first</h2> */}
        </div>
    </div>
    <div className="relative col-span-3 h-auto overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md frosty">
        {/* <div className="flex h-60 items-center justify-center">okay</div> */}
        <div className="mx-auto no-max-w-2xl text-center flex items-center justify-center pl-8 pr-8 pt-2 pb-8">

        <div className="grid grid-cols-3 gap-12 feature-grid">

            <div className="prose-sm mt-3 leading-normal text-gray-500 [text-wrap:balance] md:prose w-auto col-span-2">
              <h2 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold text-transparent [text-wrap:balance] md:text-3xl md:font-normal text-left">How this site was built</h2>
              <div className="text-left">
                <p>I used this project as an opportunity to dive into several technologies relevant to the role. It's a full stack web application, designed to give myself the opportunity to explore the full Stripe integration experience. I chose to use Stripe Checkout with a Stripe-hosted page. The <a href="https://stripe.com/docs/checkout/quickstart" target="_blank" rel="noreferrer">documentation</a> is best-in-class, and the existance of the <a href="https://github.com/stripe/stripe-node" target="_blank">stripe-node</a> and <a href="https://github.com/stripe/react-stripe-js" target="_blank">react-stripe-js</a> libraries made it straight forward to quickly incopiorate the necessary components. </p>
                <p>
                For the backend, I decided to leverage the cost efficient usage tiers of serverless infrastructure. I built it on AWS. Using S3, AWS Lambda and Cloudfront I was able to construct an HTTPS server that operates with no cost while supporting up to 1 million invocations per month.
                </p>
                {/* I used this site as an oppertunity to dive into various relevant technologies. */}
                
              </div>
            </div>


    <div className="text-left w-64">
      <h2 className="mt-3 bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold text-transparent [text-wrap:balance] md:text-3xl md:font-normal mb-8">Technologies</h2>
      <div className="mt-8">
        <p>
          <ul className="technologies">
            <span className="font-semibold text-gray-500">Payment Integration</span>
            <li>Stripe Checkout</li>
            <span className="font-semibold text-gray-500">Front End</span>
            <li>React + Tailwind</li>
            <span className="font-semibold text-gray-500">Back End</span>
            <li>Stataic Front End Hosting - AWS S3</li>
            <li>DNS - AWS Route 53</li>
            <li>Compute / API Server - AWS Lambda</li>
            <li>CDN & HTTPS - AWS CloudFront</li>
            <span className="font-semibold text-gray-500">Repository</span>
            <li>
              <a href="https://github.com/gricha2380/stripe-frontend" target="_blank" className="underline" rel="noreferrer">Github</a>
            </li>
          </ul>
        </p>
      </div>
    </div>

        </div>

        </div>
    </div>
</div>
{/* end page elements */}
    </div>
<Footer />
</>
  );
};

export default App;