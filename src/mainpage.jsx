import React, { useState, useEffect } from 'react';
import { Play, Tv, Facebook, ShoppingCart, Twitter, Instagram, Linkedin, Youtube, Heart, Globe, Menu, X, ArrowRight, Star, Users, Award, ExternalLink } from 'lucide-react';

import marctv from "../src/assets/marktv.png"
import projectsmile from "../src/assets/projectsmilefund.jpg"
import projectsmilefund from "../src/assets/projectsmile.jpg"

const FounderWebpage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const videoId = "-zrF1dgO9Vo";
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSupportClick = () => {
    window.open('https://www.paypal.com/donate/?hosted_button_id=7QRRA68W82CF4', '_blank');
  };

  const socialLinks = [
    { icon: Youtube, url: 'https://www.youtube.com/@JoeMittiga', color: '#ff0000' },
    { icon: Instagram, url: 'https://www.instagram.com/joemittiga2/', color: '#e4405f' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/joemittiga/', color: '#0077b5' },
    { icon: Facebook, url: 'https://www.facebook.com/people/Joe-Mittiga/61574825025092/', color: '#1877f2' },
    { icon: Twitter, url: 'https://x.com/mittiga95743', color: '#1da1f2' },
  ];

  
  const platforms = [
    {
      icon: marctv,
      title: 'On The Marc TV',
      desc: 'On The Marc TV is a global OTT streaming TV and radio platform based in Arizona. It streams in more than 195 countries and reaches households worldwide. The network includes over 150 TV and radio channels where shows, podcasts, and ads are syndicated. It mainly supports creators, entrepreneurs, and businesses, helping them reach a global audience while earning through a revenue-sharing model.',
      url: 'https://onthemarctv.com/',
      color: '#ff0000',
      bgColor: 'rgba(255, 0, 0, 0.1)',
      buttonColor: '#1c4fd8'
    },
    {
      icon: projectsmile,
      title: 'Project Smile Fund',
      desc: 'Project Smile has a dedicated website featuring exclusive merchandise, and every purchase made directly supports the cause. When you buy from the store, the proceeds are donated to Project Smile, helping fund its mission of educating and supporting underprivileged children. It\'s a simple yet impactful way to shop with purpose every item you purchase contributes to creating smiles and changing lives.',
      url: 'http://projectsmile.fund/',
      color: '#1c4fd8',
      bgColor: 'rgba(28, 79, 216, 0.1)',
      buttonColor: '#fa8229'
    },
    {
      icon: projectsmilefund,
      title: 'Project Smile',
      desc: 'ProjectSmile is a platform created by Joe to provide study resources and support for underprivileged communities. Every effort goes toward spreading knowledge and hope to those in need. Through education and compassion, we aim to empower children and families to build brighter futures. It\'s more than a platform—it\'s a movement to create smiles and change lives.',
      url: 'http://projectsmile.world/',
      color: '#fa8229',
      bgColor: 'rgba(250, 130, 41, 0.1)',
      buttonColor: '#1c4fd8'
    },
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Navbar */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(20px)',
        boxShadow: isScrolled ? '0 10px 25px rgba(0, 0, 0, 0.1)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(229, 231, 235, 1)' : 'none',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}>
        <div style={{ 
          maxWidth: '80rem', 
          margin: '0 auto', 
          padding: windowWidth < 640 ? '0 1rem' : '0 2rem'
        }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            height: windowWidth < 640 ? '3.5rem' : '4.5rem'
          }}>
            {/* Logo */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center',
              flex: '1'
            }}>
              <h1 style={{ 
                fontSize: windowWidth < 640 ? '1.125rem' : windowWidth < 768 ? '1.375rem' : '1.5rem', 
                fontWeight: '900', 
                color: '#111827', 
                margin: 0,
                transition: 'all 0.3s ease',
                letterSpacing: '-0.025em',
                lineHeight: '1'
              }}>
                Project<span style={{ color: '#fa8229' }}> Smile</span>
              </h1>
            </div>
            
            {/* Support Button */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center',
              justifyContent: 'flex-end'
            }}>
              <button 
                onClick={handleSupportClick}
                style={{
                  backgroundColor: '#fa8229',
                  color: 'white',
                  padding: windowWidth < 640 ? '0.625rem 1.25rem' : '0.75rem 1.75rem',
                  borderRadius: '9999px',
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  fontSize: windowWidth < 640 ? '0.8rem' : '0.875rem',
                  transform: 'scale(1)',
                  boxShadow: '0 4px 14px rgba(250, 130, 41, 0.25)',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#ea7520';
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 8px 25px rgba(250, 130, 41, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#fa8229';
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 4px 14px rgba(250, 130, 41, 0.25)';
                }}
                onMouseDown={(e) => {
                  e.target.style.transform = 'scale(0.98)';
                }}
                onMouseUp={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                }}
              >
                Support Us
              </button>
            </div>
          </div>
        </div>
      </nav>


      {/* Hero Section */}
      <section id="about" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, rgba(239, 246, 255, 0.6) 0%, rgba(255, 247, 237, 0.6) 100%)',
        paddingTop: '5rem',
        position: 'relative'
      }}>
        {/* Animated Background Elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '100px',
          height: '100px',
          background: 'linear-gradient(135deg, rgba(250, 130, 41, 0.1), rgba(250, 130, 41, 0.2))',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '30%',
          right: '15%',
          width: '60px',
          height: '60px',
          background: 'linear-gradient(135deg, rgba(28, 79, 216, 0.1), rgba(28, 79, 216, 0.2))',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite reverse'
        }}></div>
        
        <style>
          {`
            @keyframes float {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-20px) rotate(180deg); }
            }
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            @keyframes fadeInLeft {
              from {
                opacity: 0;
                transform: translateX(-30px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
            @keyframes fadeInRight {
              from {
                opacity: 0;
                transform: translateX(30px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
            @keyframes scaleIn {
              from {
                opacity: 0;
                transform: scale(0.9);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }
            .hero-content { animation: fadeInLeft 0.8s ease-out; }
            .hero-image { animation: fadeInRight 0.8s ease-out 0.2s both; }
            .hero-badge { animation: scaleIn 0.6s ease-out 0.4s both; }
            .hero-buttons { animation: fadeInUp 0.6s ease-out 0.6s both; }
            .social-icons { animation: fadeInUp 0.6s ease-out 0.8s both; }
            @keyframes pulse {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.5; }
            }
          `}
        </style>

        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem', width: '100%' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: windowWidth >= 1024 ? '1fr 1fr' : '1fr',
            gap: windowWidth >= 1024 ? '4rem' : '2rem',
            alignItems: 'center'
          }}>
            {/* Content */}
            <div className="hero-content" style={{ 
              textAlign: windowWidth >= 1024 ? 'left' : 'center',
              order: windowWidth >= 1024 ? 1 : 2
            }}>
              <div className="hero-badge" style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.5rem 1.25rem',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                fontWeight: '700',
                marginBottom: '2rem',
                backgroundColor: 'white',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                border: '2px solid #fb923c',
                color: '#fa8229'
              }}>
                <Star size={14} style={{ marginRight: '0.5rem' }} />
                Global Speaker & Author
              </div>
              
              <h1 style={{ 
                fontSize: windowWidth >= 1024 ? '4rem' : windowWidth >= 640 ? '3rem' : '2.5rem', 
                fontWeight: '900', 
                color: '#111827', 
                marginBottom: '2rem', 
                lineHeight: '1.1',
                margin: '0 0 2rem 0'
              }}>
                JOE
                <br />
                <span style={{
                  background: 'linear-gradient(135deg, #fa8229 0%, #ff6b35 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>MITTIGA</span>
              </h1>
              
              <div style={{ 
                color: '#374151', 
                fontSize: windowWidth >= 640 ? '1.125rem' : '1rem', 
                lineHeight: '1.7', 
                marginBottom: '2.5rem', 
                maxWidth: '42rem'
              }}>
                <p style={{ marginBottom: '1.5rem', textAlign: 'justify' }}>
                  Joe Mittiga is a Global TEDx Speaker, best-selling author, and the visionary Founder of ProjectSmile.world. Known for blending spiritual wisdom with real-world success, Joe helps people reconnect with their true power, purpose, and inner peace.
                </p>
                <p style={{ margin: 0, textAlign: 'justify' }}>
                  Through his talks, coaching, and writing, Joe has inspired thousands to rise into their highest potential—living with more clarity, love, and abundance. His journey of transformation and heart-centered leadership continues to guide individuals and organizations worldwide.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="hero-buttons" style={{ 
                display: 'flex', 
                flexDirection: windowWidth >= 640 ? 'row' : 'column',
                gap: '1rem', 
                justifyContent: windowWidth >= 1024 ? 'flex-start' : 'center',
                marginBottom: '3rem'
              }}>
                <button
                  onClick={() => handleSocialClick('https://www.paypal.com/donate/?hosted_button_id=7QRRA68W82CF4')}
                  style={{
                    backgroundColor: '#1c4fd8',
                    color: 'white',
                    padding: '1rem 2rem',
                    borderRadius: '9999px',
                    fontWeight: '600',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(28, 79, 216, 0.3)',
                    transform: 'translateY(0)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#1e40af';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 25px rgba(28, 79, 216, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#1c4fd8';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 12px rgba(28, 79, 216, 0.3)';
                  }}
                >
                  <Users size={20} style={{ marginRight: '0.75rem' }} />
                  Support Us
                </button>
                <button
                  onClick={() => handleSocialClick('https://projectsmile.world/')}
                  style={{
                    backgroundColor: 'white',
                    color: '#111827',
                    padding: '1rem 2rem',
                    borderRadius: '9999px',
                    fontWeight: '600',
                    border: '2px solid #111827',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    transform: 'translateY(0)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#111827';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.color = '#111827';
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  Explore Work
                  <ArrowRight size={20} style={{ marginLeft: '0.75rem' }} />
                </button>
              </div>

              {/* Social Links */}
              <div className="social-icons" style={{ 
                display: 'flex', 
                justifyContent: windowWidth >= 1024 ? 'flex-start' : 'center',
                gap: '1rem'
              }}>
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    onClick={() => handleSocialClick(social.url)}
                    style={{
                      width: '3.5rem',
                      height: '3.5rem',
                      borderRadius: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'white',
                      border: '1px solid rgba(229, 231, 235, 1)',
                      cursor: 'pointer',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      transform: 'translateY(0)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-3px) scale(1.05)';
                      e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
                      e.target.style.backgroundColor = social.color;
                      e.target.querySelector('svg').style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0) scale(1)';
                      e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                      e.target.style.backgroundColor = 'white';
                      e.target.querySelector('svg').style.color = '#6b7280';
                    }}
                  >
                    <social.icon size={24} style={{ color: '#6b7280', transition: 'color 0.3s ease' }} />
                  </button>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="hero-image" style={{ 
              order: windowWidth >= 1024 ? 2 : 1,
              display: 'flex',
              justifyContent: 'center'
            }}>
              <div style={{ position: 'relative', maxWidth: '28rem', margin: '0 auto' }}>
                <div style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '50%',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
                  border: '6px solid white',
                  width: windowWidth >= 1024 ? '28rem' : windowWidth >= 640 ? '24rem' : '20rem',
                  height: windowWidth >= 1024 ? '28rem' : windowWidth >= 640 ? '24rem' : '20rem',
                  margin: '0 auto',
                  transition: 'all 0.3s ease'
                }}>
                  <img
                    src="/joemittunga.jpg"
                    alt="Joe Mittiga - Founder"
                    style={{ 
                      width: '100%', 
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(17, 24, 39, 0.2), transparent)'
                  }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" style={{ padding: '5rem 0', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: windowWidth >= 1024 ? '3.5rem' : windowWidth >= 640 ? '2.5rem' : '2rem',
              fontWeight: '900',
              color: '#111827',
              marginBottom: '2rem',
              lineHeight: '1.1'
            }}>
              Inspiring 
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #fa8229 0%, #ff6b35 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Transformation</span>
            </h2>
            <p style={{
              fontSize: windowWidth >= 640 ? '1.25rem' : '1rem',
              color: '#374151',
              maxWidth: '48rem',
              margin: '0 auto',
              lineHeight: '1.7'
            }}>
              Joe Mittiga – Global TEDx Speaker, Author & Conscious CEO inspiring healing, purpose, and authentic success.
            </p>
          </div>
          
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '1.5rem',
              overflow: 'hidden',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
              border: '4px solid white',
              position: 'relative',
              transition: 'all 0.3s ease',
              aspectRatio: '16/9',
              width: '100%'
            }}>
              {!isPlaying ? (
                <div 
                  style={{ 
                    position: 'relative', 
                    cursor: 'pointer',
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden'
                  }}
                  onClick={handlePlayVideo}
                >
                  <img 
                    src={thumbnailUrl}
                    alt="Video Thumbnail"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                  {/* Play button overlay */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    borderRadius: '50%',
                    width: '5rem',
                    height: '5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: '3px solid #fa8229'
                  }}>
                    <Play size={28} style={{ color: '#fa8229', marginLeft: '4px' }} />
                  </div>
                  {/* Hover effect overlay */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(248, 130, 41, 0.1)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease'
                  }} 
                  onMouseEnter={(e) => e.target.style.opacity = '1'}
                  onMouseLeave={(e) => e.target.style.opacity = '0'}
                  />
                </div>
              ) : (
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    width: '100%',
                    height: '100%'
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section id="books" style={{ padding: '5rem 0', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: windowWidth >= 1024 ? '3.5rem' : windowWidth >= 640 ? '2.5rem' : '2rem', 
              fontWeight: '900', 
              color: '#111827', 
              marginBottom: '2rem', 
              lineHeight: '1.1'
            }}>
              TRANSFORMATIONAL
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #fa8229 0%, #ff6b35 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>BOOKS</span>
            </h2>
            <p style={{ 
              fontSize: windowWidth >= 640 ? '1.25rem' : '1rem', 
              color: '#374151', 
              maxWidth: '48rem', 
              margin: '0 auto', 
              lineHeight: '1.7'
            }}>
              Discover powerful insights and practical wisdom for healing, growth, and authentic success 
              through Joe's transformational books.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: windowWidth >= 768 ? 'repeat(2, 1fr)' : '1fr',
            gap: '2rem',
            maxWidth: '64rem',
            margin: '0 auto'
          }}>
            {/* First Book - Available */}
            <div style={{
              backgroundColor: '#fef7ed',
              borderRadius: '1.5rem',
              padding: '2rem',
              border: '1px solid #fed7aa',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: 'translateY(0)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.borderColor = '#fa8229';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = '#fed7aa';
            }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                {/* Book Cover Placeholder */}
                <div style={{
                  width: '120px',
                  height: '160px',
                  backgroundColor: '#fa8229',
                  borderRadius: '0.75rem',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 20px rgba(250, 130, 41, 0.3)',
                  position: 'relative',
                  background: 'linear-gradient(135deg, #fa8229 0%, #ff6b35 100%)'
                }}>
                  <div style={{
                    color: 'white',
                    fontSize: '0.75rem',
                    fontWeight: '900',
                    textAlign: 'center',
                    padding: '1rem',
                    lineHeight: '1.2'
                  }}>
                    HEALING
                    <br />
                    ADDICTION
                  </div>
                </div>

                {/* Book Details */}
                <div style={{ flex: 1 }}>
                  <div style={{
                    display: 'inline-block',
                    backgroundColor: '#16a34a',
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    marginBottom: '1rem'
                  }}>
                    AVAILABLE NOW
                  </div>
                  
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: '900', 
                    color: '#111827', 
                    marginBottom: '1rem',
                    margin: '0 0 1rem 0',
                    lineHeight: '1.3'
                  }}>
                    HEALING ADDICTION: A Journey to Reclaim Your Inner Child
                  </h3>
                  
                  <p style={{ 
                    color: '#4b5563', 
                    marginBottom: '1.5rem', 
                    lineHeight: '1.6',
                    margin: '0 0 1.5rem 0',
                    fontSize: '0.9rem'
                  }}>
                    This book is not just words - it is a mirror. A mirror to see your hidden pain, buried memories, and the little child inside you who is still waiting to be seen, loved, and healed.
                  </p>

                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem', 
                    marginBottom: '1.5rem',
                    fontSize: '0.875rem',
                    color: '#6b7280'
                  }}>
                    <span>📥 566 Downloads</span>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <button
                      onClick={() => handleSocialClick('https://www.paypal.com/donate/?hosted_button_id=7QRRA68W82CF4')}
                      style={{
                        backgroundColor: '#fa8229',
                        color: 'white',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '0.75rem',
                        fontWeight: '600',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        fontSize: '0.875rem'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#ea7520';
                        e.target.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#fa8229';
                        e.target.style.transform = 'translateY(0)';
                      }}
                    >
                      Support Author
                    </button>
                    <button
                      style={{
                        backgroundColor: 'transparent',
                        color: '#fa8229',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '0.75rem',
                        fontWeight: '600',
                        border: '2px solid #fa8229',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        fontSize: '0.875rem'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#fa8229';
                        e.target.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = '#fa8229';
                      }}
                    >
                      Download Free
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Book - Coming Soon */}
            <div style={{
              backgroundColor: '#f1f5f9',
              borderRadius: '1.5rem',
              padding: '2rem',
              border: '1px solid #cbd5e1',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: 'translateY(0)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.borderColor = '#1c4fd8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = '#cbd5e1';
            }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                {/* Book Cover Placeholder */}
                <div style={{
                  width: '120px',
                  height: '160px',
                  backgroundColor: '#1c4fd8',
                  borderRadius: '0.75rem',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 20px rgba(28, 79, 216, 0.3)',
                  position: 'relative',
                  background: 'linear-gradient(135deg, #1c4fd8 0%, #1e40af 100%)'
                }}>
                  <div style={{
                    color: 'white',
                    fontSize: '0.75rem',
                    fontWeight: '900',
                    textAlign: 'center',
                    padding: '1rem',
                    lineHeight: '1.2'
                  }}>
                    COMING
                    <br />
                    SOON
                  </div>
                </div>

                {/* Book Details */}
                <div style={{ flex: 1 }}>
                  <div style={{
                    display: 'inline-block',
                    backgroundColor: '#f59e0b',
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    marginBottom: '1rem'
                  }}>
                    COMING SOON
                  </div>
                  
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: '900', 
                    color: '#111827', 
                    marginBottom: '1rem',
                    margin: '0 0 1rem 0',
                    lineHeight: '1.3'
                  }}>
                    THE AWAKENED ENTREPRENEUR
                  </h3>
                  
                  <p style={{ 
                    color: '#4b5563', 
                    marginBottom: '1.5rem', 
                    lineHeight: '1.6',
                    margin: '0 0 1.5rem 0',
                    fontSize: '0.9rem'
                  }}>
                    A revolutionary guide to building businesses with consciousness, purpose, and authentic success. Learn how to align your entrepreneurial journey with your soul's mission.
                  </p>

                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem', 
                    marginBottom: '1.5rem',
                    fontSize: '0.875rem',
                    color: '#6b7280'
                  }}>
                    <span>🔔 Get notified on release</span>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <button
                      style={{
                        backgroundColor: '#64748b',
                        color: 'white',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '0.75rem',
                        fontWeight: '600',
                        border: 'none',
                        cursor: 'not-allowed',
                        transition: 'all 0.3s ease',
                        fontSize: '0.875rem',
                        opacity: '0.7'
                      }}
                      disabled
                    >
                      Pre-Order Soon
                    </button>
                    <button
                      onClick={() => handleSocialClick('https://projectsmile.world/')}
                      style={{
                        backgroundColor: 'transparent',
                        color: '#1c4fd8',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '0.75rem',
                        fontWeight: '600',
                        border: '2px solid #1c4fd8',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        fontSize: '0.875rem'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#1c4fd8';
                        e.target.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = '#1c4fd8';
                      }}
                    >
                      Get Notified
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Platforms Section */}
      <section id="platforms" style={{ padding: '5rem 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: windowWidth >= 1024 ? '3.5rem' : windowWidth >= 640 ? '2.5rem' : '2rem', 
              fontWeight: '900', 
              color: '#111827', 
              marginBottom: '2rem', 
              lineHeight: '1.1'
            }}>
              JOIN THE
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #fa8229 0%, #ff6b35 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>COMMUNITY</span>
            </h2>
            <p style={{ 
              fontSize: windowWidth >= 640 ? '1.25rem' : '1rem', 
              color: '#374151', 
              maxWidth: '48rem', 
              margin: '0 auto', 
              lineHeight: '1.7'
            }}>
              Connect with Joe across multiple platforms and become part of a thriving community 
              of entrepreneurs, innovators, and change-makers from around the world.
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: windowWidth >= 1280 ? 'repeat(3, 1fr)' : windowWidth >= 768 ? 'repeat(2, 1fr)' : '1fr',
            gap: '2rem'
          }}>
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="preview-container"
                style={{
                  backgroundColor: 'white',
                  borderRadius: '1.5rem',
                  padding: '2rem',
                  border: '1px solid rgba(243, 244, 246, 1)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  transform: 'translateY(0)',
                  opacity: 1,
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                  e.currentTarget.style.borderColor = platform.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.borderColor = 'rgba(243, 244, 246, 1)';
                }}
              >
                {/* Platform Image */}
                <div style={{
                  width: '100%',
                  height: '12rem',
                  borderRadius: '1rem',
                  marginBottom: '1.5rem',
                  overflow: 'hidden',
                  border: `2px solid ${platform.color}`,
                  backgroundColor: platform.bgColor,
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img
                    src={platform.icon}
                    alt={`${platform.title} logo`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '0.75rem',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                    }}
                  />
                </div>
                
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '900', 
                  color: '#111827', 
                  marginBottom: '1rem',
                  margin: '0 0 1rem 0'
                }}>
                  {platform.title}
                </h3>
                
                <p style={{ 
                  color: '#4b5563', 
                  marginBottom: '2rem', 
                  lineHeight: '1.7',
                  margin: '0 0 2rem 0',
                  textAlign: 'justify',
                  fontSize: '0.9rem'
                }}>
                  {platform.desc}
                </p>
                
                <button
                  onClick={() => handleSocialClick(platform.url)}
                  style={{
                    width: '100%',
                    padding: '1rem 1.5rem',
                    borderRadius: '1rem',
                    fontWeight: '700',
                    color: 'white',
                    backgroundColor: platform.buttonColor,
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: 'translateY(0)',
                    fontSize: '0.9rem'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = `0 8px 25px ${platform.buttonColor}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  Connect Now
                  <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer id="contact" style={{ backgroundColor: '#111827', color: 'white', padding: '4rem 0' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h3 style={{ 
              fontSize: windowWidth >= 1024 ? '2.5rem' : windowWidth >= 640 ? '2rem' : '1.75rem', 
              fontWeight: '900', 
              marginBottom: '1.5rem', 
              lineHeight: '1.2'
            }}>
              READY TO
              <br />
              <span style={{ color: '#fa8229' }}>AWAKEN YOUR TRUE POTENTIAL?</span>
            </h3>
            <p style={{ 
              fontSize: windowWidth >= 640 ? '1.125rem' : '1rem', 
              color: '#d1d5db', 
              maxWidth: '48rem', 
              margin: '0 auto', 
              lineHeight: '1.7'
            }}>
              Join thousands who are choosing healing, purpose, and authentic success. Stay inspired, live with love, and step boldly into who you're meant to be.
            </p>
          </div>
          
          {/* Social Icons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
            {socialLinks.map((social, index) => (
              <button
                key={index}
                onClick={() => handleSocialClick(social.url)}
                style={{
                  width: '3.5rem',
                  height: '3.5rem',
                  borderRadius: '1rem',
                  backgroundColor: '#1f2937',
                  border: '1px solid #374151',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: 'translateY(0)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = social.color;
                  e.currentTarget.style.borderColor = social.color;
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)';
                  e.currentTarget.style.boxShadow = `0 8px 25px ${social.color}40`;
                  e.currentTarget.querySelector('svg').style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#1f2937';
                  e.currentTarget.style.borderColor = '#374151';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.querySelector('svg').style.color = '#9ca3af';
                }}
              >
                <social.icon size={20} style={{ color: '#9ca3af', transition: 'color 0.3s ease' }} />
              </button>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div style={{ 
            display: 'flex', 
            flexDirection: windowWidth >= 768 ? 'row' : 'column',
            gap: '1rem', 
            justifyContent: 'center', 
            marginBottom: '3rem',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={() => handleSocialClick('https://projectsmile.world')}
              style={{
                padding: windowWidth >= 640 ? '1rem 2rem' : '0.875rem 1.5rem',
                borderRadius: '9999px',
                fontWeight: '700',
                fontSize: windowWidth >= 640 ? '1rem' : '0.875rem',
                color: 'white',
                backgroundColor: '#1c4fd8',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 10px 25px rgba(28, 79, 216, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: 'translateY(0)'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#1e40af';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 15px 35px rgba(28, 79, 216, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#1c4fd8';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 10px 25px rgba(28, 79, 216, 0.3)';
              }}
            >
              <Globe size={20} style={{ marginRight: '0.75rem' }} />
              EXPLORE WEBSITE
            </button>
            <button
              onClick={() => handleSocialClick('https://www.paypal.com/donate/?hosted_button_id=7QRRA68W82CF4')}
              style={{
                padding: windowWidth >= 640 ? '1rem 2rem' : '0.875rem 1.5rem',
                borderRadius: '9999px',
                fontWeight: '700',
                fontSize: windowWidth >= 640 ? '1rem' : '0.875rem',
                color: '#fb923c',
                backgroundColor: 'transparent',
                border: '2px solid #fb923c',
                cursor: 'pointer',
                boxShadow: '0 10px 25px rgba(251, 146, 60, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: 'translateY(0)'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#fb923c';
                e.target.style.color = 'white';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 15px 35px rgba(251, 146, 60, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#fb923c';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 10px 25px rgba(251, 146, 60, 0.2)';
              }}
            >
              <Heart size={20} style={{ marginRight: '0.75rem' }} />
              SUPPORT THE MISSION
            </button>
            <button
              onClick={() => handleSocialClick('https://www.projectsmile.fund/')}
              style={{
                padding: windowWidth >= 640 ? '1rem 2rem' : '0.875rem 1.5rem',
                borderRadius: '9999px',
                fontWeight: '700',
                fontSize: windowWidth >= 640 ? '1rem' : '0.875rem',
                color: 'white',
                backgroundColor: '#1c4fd8',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 10px 25px rgba(28, 79, 216, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: 'translateY(0)'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#1e40af';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 15px 35px rgba(28, 79, 216, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#1c4fd8';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 10px 25px rgba(28, 79, 216, 0.3)';
              }}
            >
              <ShoppingCart size={20} style={{ marginRight: '0.75rem' }} />
              EXPLORE PRODUCTS
            </button>
          </div>
          
          {/* Footer Bottom */}
          <div style={{ 
            textAlign: 'center', 
            paddingTop: '2rem', 
            borderTop: '1px solid #1f2937'
          }}>
            <p style={{ color: '#6b7280', margin: 0, fontSize: '0.875rem' }}>
              © 2025 Joe Mittiga. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FounderWebpage;