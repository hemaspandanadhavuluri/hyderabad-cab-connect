import React, { useState } from 'react';
import { Plane, Phone, ShieldCheck, Headphones, Clock } from 'lucide-react';
import './AirportServices.css';
import airportImg from './assets/airport.png';

const AirportServices = () => {
  // 1. Setup State for the form fields
  const [location, setLocation] = useState('');
  const [serviceType, setServiceType] = useState('Airport Drop');
  const [flightNo, setFlightNo] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [phone, setPhone] = useState('');

  // 2. Booking Handler Function
  const handleAirportBooking = (method) => {
    const myNumber = "919121067423";
    
    // Formatting the message for a professional look
    const message = `*Airport Booking Request - Shiva Cab Connect*%0A` +
                    `✈️ *Service:* ${serviceType}%0A` +
                    `📍 *Location:* ${location || 'Not specified'}%0A` +
                    `🔢 *Flight No:* ${flightNo || 'N/A'}%0A` +
                    `⏰ *Time:* ${dateTime || 'Not specified'}%0A` +
                    `📞 *Customer:* ${phone || 'Not specified'}%0A` +
                    `---%0APlease confirm the booking.`;

    if (method === 'whatsapp') {
      window.open(`https://wa.me/${myNumber}?text=${message}`, '_blank');
    } else {
      // SMS link (decodes for SMS app compatibility)
      window.location.href = `sms:+${myNumber}?body=${decodeURIComponent(message).replace(/\*/g, '')}`;
    }
  };

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

      {/* Hero Booking Section */}
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
                <h3 style={{paddingBottom:'15px'}}>Book My Airport Ride</h3>
                <form className="airport-booking-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="form-row-single">
                    <label>PICKUP LOCATION</label>
                    <input 
                      type="text" 
                      placeholder="Enter area name" 
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                  <div className="form-row-single">
                    <label>SERVICE TYPE</label>
                    <select value={serviceType} onChange={(e) => setServiceType(e.target.value)}>
                      <option>Airport Drop</option>
                      <option>Airport Pickup</option>
                    </select>
                  </div>
                  <div className="form-row-double">
                    <div className="input-half">
                      <label>FLIGHT NUMBER</label>
                      <input 
                        type="text" 
                        placeholder="e.g. AI-123" 
                        value={flightNo}
                        onChange={(e) => setFlightNo(e.target.value)}
                      />
                    </div>
                    <div className="input-half">
                      <label>PICKUP TIME</label>
                      <input 
                        type="datetime-local" 
                        value={dateTime}
                        onChange={(e) => setDateTime(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-row-single">
                    <label>PHONE NUMBER</label>
                    <input 
                      type="tel" 
                      placeholder="+91 Enter mobile number" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  {/* Dual Action Buttons */}
                  <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                    <button 
                      type="button" 
                      className="airport-submit-button"
                      style={{ backgroundColor: '#25D366', flex: 1 }}
                      onClick={() => handleAirportBooking('whatsapp')}
                    >
                      WhatsApp
                    </button>
                    <button 
                      type="button" 
                      className="airport-submit-button"
                      style={{ flex: 1 }}
                      onClick={() => handleAirportBooking('sms')}
                    >
                      SMS
                    </button>
                  </div>
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