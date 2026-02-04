import React from 'react';
import { Plane, Phone, ShieldCheck, Headphones, Clock } from 'lucide-react';
import './AirportServices.css';
import airportImg from './assets/airport.png';

const AirportServices = () => {
  return (
    <div className="airport-wrapper">
               {/* Feature Icons Section */}
      <section className="feature-icons-section">
        <div className="feature-card">
          <div className="icon-circle"><ShieldCheck size={24} /></div>
          <h3>Meet & Greet</h3>
          <p>Experience a warm welcome at the arrival hall. Our drivers will be waiting with a personalized name card.</p>
        </div>
        <div className="feature-card">
          <div className="icon-circle"><Plane size={24} /></div>
          <h3>Flight Tracking</h3>
          <p>We monitor your flight in real-time to adjust pickup times accordingly at no extra cost.</p>
        </div>
        <div className="feature-card">
          <div className="icon-circle"><Clock size={24} /></div>
          <h3>Punctual Pickup</h3>
          <p>Timeliness is our hallmark. We guarantee on-time pickups for airport drops ensuring you never miss a flight.</p>
        </div>
      </section>
      {/* Hero Booking Section with Background Image */}
      <section className="airport-hero" style={{ backgroundImage: `url(${airportImg})` }}>
        <div className="airport-hero-overlay">
          <div className="airport-hero-container">
            <div className="airport-hero-content">
              <h1>Book Your Airport Ride in Seconds</h1>
              <p>Join thousands of happy travelers who trust us for their airport commute. Fixed rates, professional drivers, and clean vehicles guaranteed.</p>
              
              <div className="hero-trust-badges">
                <div className="badge-item"><ShieldCheck size={20} /> No hidden airport parking or toll charges*</div>
                <div className="badge-item"><Phone size={20} /> 24/7 Dedicated Support +91 9121067423</div>
              </div>
            </div>

            <div className="airport-form-wrapper">
              <div className="call-now-floating">
                <small>CALL DIRECTLY</small>
                <strong>+91 9121067423</strong>
              </div>
              
              <div className="airport-white-card">
                <h3>Book My Airport Ride</h3>
                <form className="airport-booking-form">
                  <div className="form-row-single">
                    <label>PICKUP LOCATION</label>
                    <input type="text" placeholder="Enter area name" />
                  </div>
                  <div className="form-row-single">
                    <label>SERVICE TYPE</label>
                    <select><option>Airport Drop</option><option>Airport Pickup</option></select>
                  </div>
                  <div className="form-row-double">
                    <div className="input-half">
                      <label>FLIGHT NUMBER</label>
                      <input type="text" placeholder="e.g. AI-123" />
                    </div>
                    <div className="input-half">
                      <label>FLIGHT TIME / PICKUP TIME</label>
                      <input type="datetime-local" />
                    </div>
                  </div>
                  <div className="form-row-single">
                    <label>PHONE NUMBER</label>
                    <input type="tel" placeholder="+91 Enter mobile number" />
                  </div>
                  <button type="submit" className="airport-submit-button">
                    🚀 Book My Airport Ride
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
 
    </div>
  );
};

export default AirportServices;