import React from 'react'
import './Footer.css'
import amazon from "./../../assets/amazon.png"
import amex from "../../assets/amex.png"
import mastercard from "../../assets/mastercard.png"
import paypal from "../../assets/paypal.png"
import appstore from "../../assets/appstore.png"
import googleplay from "../../assets/googleplay.png"
export default function Footer() {
  return <>


    <footer className="footer-container mt-10">
      <div className="app-download-section">
        <h3>Get the FreshCart app</h3>
        <p>We will send you a link, open it on your phone to download the app.</p>
        <div className="email-input-container">
          <input type="email" placeholder="Email ..." />
          <button className="share-link-button">Share App Link</button>
        </div>
      </div>

      <div className="footer-bottom-section">
        <div className="payment-partners flex">
          <p>Payment Partners</p>
          <img src={amazon} alt="Amazon Pay" />
          <img src={amex} alt="American Express" />
          <img src={mastercard} alt="Mastercard" />
          <img src={paypal} alt="Paypal" />
        </div>
        <div className="app-download-buttons flex">
          <p>Get deliveries with FreshCart</p>
          <img src={appstore} alt="App Store" />
          <img src={googleplay} alt="Google Play" />
        </div>
      </div>
    </footer>

  </>

}
