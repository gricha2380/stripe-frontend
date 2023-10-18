import React, { useState, useEffect } from "react";
import "./App.css";

const API_URL = "https://u2k6fzfuk3xmx7i3ogednebr2m0mpuxv.lambda-url.us-east-1.on.aws";
let loading = false;

const handleSubmit = async event => {
  event.preventDefault();
  console.log('loading status', loading)
  loading = true;
  console.log('loading status should change', loading)
    fetch(API_URL, {
      method: "POST",
      mode: 'cors',
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify("")
    }).then(response => { console.log('I got a response', response); return response.json();})
    .then(response => {
      console.log('backend response', response)
      // console.log('response token', response.token)
      // this.setState({setLoading: false});
      // this.setState({error:response.err})
      if (response.message) {
        // this.setState({error:response.message});
        this.resetForm()
      }
      if (response.url) {
        console.log('Redirecting page to '+ response.url);
        window.location.href = response.url;
      }
    }).catch(error => {
      // this.setState({setLoading: false});
      console.log('error...',error)
      if (error.response ) {if (error.response.status === 401) console.log({error:error.response.data.message})}
      else console.log({error:"Something went wrong. Please try again later."});
      // if (error.response ) {if (error.response.status === 401) this.setState({error:error.response.data.message})}
      // else this.setState({error:"Something went wrong. Please try again later."});
    });
    loading = false;
    console.log('loading status should change', loading)
  // }
};

const ProductDisplay = () => (
  <section>
    <div className="tooltip tooltip-bottom" data-tip="Captain Gregor Richardson, at your service.">
      <div className="product">
      <img
        src="/captain.png"
        alt="Gregor Richardson - Solutions Architect"
      />
    </div>
      <div className="description">
      </div>
    </div>
    <div  className="button btn btn-purple" onClick={(e) => {handleSubmit(e) }} disabled={false}>
      Add Gregor to your <span className="line">cart</span> team
    </div>
    {loading ? <span className="loading loading-spinner loading-md"></span> : null}
    {/* <span className="loading loading-spinner loading-md"></span> */}

    {/* works: basic form input. Issue: redirects after the page */}
    {/* <form action="https://u2k6fzfuk3xmx7i3ogednebr2m0mpuxv.lambda-url.us-east-1.on.aws" method="POST">
      <button type="submit">
        Add me to your <span strikethrough="true">cart</span> team
      </button>
    </form> */}


  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function CheckoutWidget() {
  
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    // console.log('checking url query')
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! Thank you for your interest 😉.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- Feel free to reach out to me when ready: gregor@gregorrichardson.com."
      );
    }
  }, []);

  return message ? (
    <>
    {document.getElementById('my_modal_1').showModal()}
    <ProductDisplay response={message} />
    </>
  ) : (
    <ProductDisplay response={message} />
  );
  // return message ? (
  //   <Message message={message} />
  // ) : (
  //   <ProductDisplay />
  // );
}