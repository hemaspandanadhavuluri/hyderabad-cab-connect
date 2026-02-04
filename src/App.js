import React, { useState } from 'react';
import { Phone, Calendar, MapPin, ShieldCheck, Banknote, Car, Headphones, Menu, X, ArrowRight, Plane, Clock, Shield } from 'lucide-react';
import bangaloreImg from './assets/bangalore.jpg';
import vijayawadaImg from './assets/vijayawada.jpeg';
import mumbaiImg from './assets/mumbai.jpeg';
import vizagImg from './assets/vizag.jpeg';
import gunturImg from './assets/guntur.jpeg';
import rajahmundryImg from './assets/rajahmundry.jpeg';
import { Users, Briefcase, Gauge } from 'lucide-react';
import hatchbackImg from './assets/hatchpack.avif';
import sedanImg from './assets/sedan.jpg';
import suvImg from './assets/suv.jpg';

import AirportServices from './AirportServices';
import './App.css';

const App = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [travelDate, setTravelDate] = useState(''); // Added Date State
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Unified Handler for WhatsApp and SMS
  const handleContact = (method) => {
    const phoneNumber = "919121067423";
    const message = `Hi Shiva Cab Connect, I want to book a ride:%0A📍 Pickup: ${pickup || 'Hyderabad'}%0A🏁 Destination: ${destination || 'Not specified'}%0A📅 Date: ${travelDate || 'Not specified'}%0APlease share the price details.`;

    if (method === 'whatsapp') {
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    } else {
      // Basic SMS link for mobile
      window.location.href = `sms:+${phoneNumber}?body=${decodeURIComponent(message)}`;
    }
  };

  const intercityTrips = [
    { id: 1, city: 'Bangalore', image: bangaloreImg, desc: 'The Garden City - Safe and reliable intercity transfers.' },
    { id: 2, city: 'Vijayawada', image: vijayawadaImg, desc: 'Fast and direct drops to the heart of Andhra Pradesh.' },
    { id: 3, city: 'Mumbai', image: mumbaiImg, desc: 'The City of Dreams - Professional long-distance rides.' },
    { id: 4, city: 'Vizag', image: vizagImg, desc: 'Enjoy a scenic drive to the beautiful City of Destiny.' },
    { id: 5, city: 'Guntur', image: gunturImg, desc: 'Affordable and timely cab service to Guntur.' },
    { id: 6, city: 'Rajahmundry', image: rajahmundryImg, desc: 'Scenic drives along the Godavari to the Cultural Capital.' }
  ];

  const hydSpecialTrips = [
    { id: 1, place: 'Charminar & Laad Bazaar', desc: 'Explore the historic heart of the city.' },
    { id: 2, place: 'Golconda Fort', desc: 'Witness the majestic fort and light-sound show.' },
    { id: 3, place: 'Ramoji Film City', desc: 'Full day trip to the world\'s largest film studio.' },
    { id: 4, place: 'Birla Mandir & Hussain Sagar', desc: 'Evening tour of the white marble temple and lake.' }
  ];

  return (
    <div className="page-wrapper">
      <nav className="navbar">
        <div className="logo">
          <span className="logo-main">UB </span>
          <span className="logo-accent">Cabs</span>
        </div>
        
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="#intercity" onClick={() => setIsMenuOpen(false)}>Intercity</a></li>
          <li><a href="#outstation" onClick={() => setIsMenuOpen(false)}>Outstation</a></li>
          <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Airport</a></li>
          <li><a href="#pricing" onClick={() => setIsMenuOpen(false)}>Hyd Trips</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul>

        <a href="tel:+919121067423" className="nav-call-btn">
          <Phone size={18} fill="white" />
          Call Now
        </a>

        <div className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-overlay"></div>
        <div className="hero-container">
          <div className="hero-content">
            <span className="badge">#1 Hyderabad Taxi Service</span>
            <h1 className="hero-title">Your Trusted Travel Partner</h1>
            <h3 className="hero-subtitle"> By Shiva Tours and Travel</h3>
            <p className="hero-subtitle">
              Low-cost intercity drops, airport transfers, and local sightseeing. Experience comfort with 24/7 support.
            </p>
            
            <div className="hero-features">
              <div className="feature-pill"><ShieldCheck className="icon-blue" /><span>Safe Rides</span></div>
              <div className="feature-pill"><Banknote className="icon-orange" /><span>Low Fares</span></div>
              <div className="feature-pill"><Headphones className="icon-green" /><span>24/7 Support</span></div>
            </div>
          </div>

          <div className="booking-card">
            <h2 className="card-title">Book Your Ride</h2>
            <a href="tel:+919121067423" className="direct-call">
              <span className="call-label">CALL DIRECTLY FOR BEST PRICE</span>
              <span className="phone-number">+91 9121067423</span>
            </a>

            <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="input-group">
                  <label>Pickup City</label>
                  <input type="text" placeholder="Hyderabad" value={pickup} onChange={(e) => setPickup(e.target.value)} />
                </div>
                <div className="input-group">
                  <label>Destination</label>
                  <input type="text" placeholder="Vijayawada, Vizag..." value={destination} onChange={(e) => setDestination(e.target.value)} />
                </div>
              </div>
              <div className="input-group">
                <label>Travel Date</label>
                <input 
                  type="date" 
                  className="date-input" 
                  value={travelDate} 
                  onChange={(e) => setTravelDate(e.target.value)} 
                />
              </div>

              {/* Updated Buttons - Shared the same .book-btn class to keep your CSS styling */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button type="button" className="book-btn" style={{backgroundColor: '#25D366'}} onClick={() => handleContact('whatsapp')}>
                   WhatsApp for Price
                </button>
                <button type="button" className="book-btn" onClick={() => handleContact('sms')}>
                  <Car size={18} /> Get Price via SMS
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section id="services">
        <AirportServices />
      </section>

      <section className="intercity-section" id="intercity">
        <div className="container">
          <h2 className="section-heading">Popular Intercity Drops</h2>
          <div className="trips-grid">
            {intercityTrips.map((trip) => (
              <div key={trip.id} className="trip-card">
                <div className="trip-image-container">
                  <img src={trip.image} alt={trip.city} className="trip-image" />
                  <div className="trip-overlay"><span className="trip-tag">Lowest Price</span></div>
                </div>
                <div className="trip-details">
                  <h3>Hyderabad to {trip.city}</h3>
                  <p>{trip.desc}</p>
                  <button 
                    className="trip-cta-btn" 
                    style={{border: 'none', cursor: 'pointer', width: '100%', textAlign: 'left'}}
                    onClick={() => {
                        setDestination(trip.city);
                        window.scrollTo({top: 0, behavior: 'smooth'});
                    }}
                  >
                    Select City <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hyd-special-section" id="pricing">
        <div className="container">
          <h2 className="section-heading">Hyderabad Local Sightseeing</h2>
          <div className="special-trips-grid">
            {hydSpecialTrips.map((trip) => (
              <div key={trip.id} className="special-card">
                <MapPin className="icon-orange" />
                <h3>{trip.place}</h3>
                <p>{trip.desc}</p>
                <a href={`https://wa.me/919121067423?text=I%20want%20to%20know%20price%20for%20${trip.place}%20tour`} className="call-link">WhatsApp for Package</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-footer" id="contact">
        <div className="container">
          <div className="footer-content">
            <h2>Ready to Start Your Journey?</h2>
            <div className="contact-buttons">
              <a href="tel:+919121067423" className="footer-btn"><Phone size={20} /> +91 9121067423</a>
              <a href="https://wa.me/919121067423" className="footer-btn-wa">Chat on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;