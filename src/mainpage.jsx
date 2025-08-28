import React, { useState, useEffect } from 'react';
import { Play, Facebook,ShoppingCart, Twitter, Instagram, Linkedin, Youtube, Heart, Globe, Menu, X, ArrowRight, Star, Users, Award } from 'lucide-react';

const FounderWebpage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navbarStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    boxShadow: isScrolled ? '0 10px 25px rgba(0, 0, 0, 0.1)' : 'none',
    borderBottom: isScrolled ? '1px solid rgba(229, 231, 235, 1)' : 'none',
    transition: 'all 0.3s ease'
  };

  const heroStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    background: 'linear-gradient(135deg, rgba(239, 246, 255, 0.6) 0%, rgba(255, 247, 237, 0.6) 100%)',
    paddingTop: '6rem'
  };

  const gradientTextStyle = {
    background: 'linear-gradient(135deg, #fa8229 0%, #ff6b35 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const buttonPrimary = {
    backgroundColor: '#1c4fd8',
    color: 'white',
    padding: '1rem 2.5rem',
    borderRadius: '9999px',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(28, 79, 216, 0.3)'
  };

  const buttonSecondary = {
    backgroundColor: 'white',
    color: '#111827',
    padding: '1rem 2.5rem',
    borderRadius: '9999px',
    fontWeight: 'bold',
    border: '2px solid #111827',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
  };

  const orangeButton = {
    backgroundColor: '#fa8229',
    color: 'white',
    padding: '0.75rem 2rem',
    borderRadius: '9999px',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  };

  // Video Section Component
  const [isPlaying, setIsPlaying] = useState(false);

  const videoGradientStyle = {
    background: 'linear-gradient(135deg, #fa8229 0%, #ff6b6b 50%, #4ecdc4 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const youtubeUrl = "https://www.youtube.com/watch?v=-zrF1dgO9Vo";
  const videoId = "-zrF1dgO9Vo";
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Navbar */}
      <nav style={navbarStyle}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '5rem' }}>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{
                // width: '3rem',
                // height: '3rem',
                // borderRadius: '0.75rem',
                // background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                // display: 'flex',
                // alignItems: 'center',
                // justifyContent: 'center',
                // marginRight: '1rem',
                // boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)'
              }}>
                {/* <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.25rem' }}>JA</span> */}
              </div>
              <h1 style={{ fontSize: '1.5rem', fontWeight: '900', color: '#111827', margin: 0 }}>
                Project<span style={{ color: '#fa8229' }}>  Smile</span>
              </h1>
            </div>
            
            {/* Desktop Menu */}
            <div style={{ display: window.innerWidth >= 768 ? 'flex' : 'none', alignItems: 'center', gap: '2.5rem' }}>
              {/* <a href="#home" style={{ color: '#374151', fontWeight: '600', textDecoration: 'none' }}>Home</a> */}
              <a href="#about" style={{ color: '#374151', fontWeight: '600', textDecoration: 'none' }}>About</a>
              <a href="#video" style={{ color: '#374151', fontWeight: '600', textDecoration: 'none' }}>Story</a>
              <a href="#platforms" style={{ color: '#374151', fontWeight: '600', textDecoration: 'none' }}>Connect</a>
              <button 
                onClick={() => handleSocialClick('https://johnanderson.com')}
                style={orangeButton}
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu} 
              style={{ 
                display: window.innerWidth < 768 ? 'block' : 'none',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem'
              }}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div style={{
              backgroundColor: 'white',
              borderRadius: '0.75rem',
              margin: '1rem',
              boxShadow: '0 20px 25px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(229, 231, 235, 1)',
              overflow: 'hidden'
            }}>
              <div style={{ padding: '1rem 0' }}>
                <a href="#home" style={{ display: 'block', padding: '0.75rem 1.5rem', color: '#1f2937', fontWeight: '600', textDecoration: 'none' }}>Home</a>
                <a href="#about" style={{ display: 'block', padding: '0.75rem 1.5rem', color: '#1f2937', fontWeight: '600', textDecoration: 'none' }}>About</a>
                <a href="#video" style={{ display: 'block', padding: '0.75rem 1.5rem', color: '#1f2937', fontWeight: '600', textDecoration: 'none' }}>Story</a>
                <a href="#platforms" style={{ display: 'block', padding: '0.75rem 1.5rem', color: '#1f2937', fontWeight: '600', textDecoration: 'none' }}>Connect</a>
                <div style={{ padding: '1rem 1.5rem 0.5rem' }}>
                  <button 
                    onClick={() => handleSocialClick('https://www.paypal.com/donate/?hosted_button_id=7QRRA68W82CF4')}
                    style={{ ...orangeButton, width: '100%' }}
                  >
                    Support Us
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" style={heroStyle}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth >= 1024 ? '2fr 1fr' : '1fr', gap: '4rem', alignItems: 'center' }}>
            {/* Content */}
            <div style={{ textAlign: window.innerWidth >= 1024 ? 'left' : 'center' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.5rem 1.25rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 'bold',
                marginBottom: '2rem',
                backgroundColor: 'white',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                border: '2px solid #fb923c',
                color: '#fa8229'
              }}>
                <Star size={16} style={{ marginRight: '0.5rem' }} />
                Global Speaker & Author
              </div>
              
              <h1 style={{ 
                fontSize: window.innerWidth >= 1024 ? '5rem' : '3rem', 
                fontWeight: '900', 
                color: '#111827', 
                marginBottom: '2rem', 
                lineHeight: '1.1',
                margin: '0 0 2rem 0'
              }}>
                JOE
                <br />
                <span style={gradientTextStyle}>MITTIGA</span>
              </h1>
              
              
              <div style={{ 
                color: '#374151', 
                fontSize: '1.125rem', 
                lineHeight: '1.7', 
                marginBottom: '2.5rem', 
                maxWidth: '42rem',
                textAlign: 'left'
              }}>
                <p style={{ marginBottom: '1.5rem' }}>
                Joe Mittiga is a Global TEDx Speaker, best-selling author, and the visionary Founder of ProjectSmile.world. Known for blending spiritual wisdom with real-world success, Joe helps people reconnect with their true power, purpose, and inner peace.
                </p>
                <p style={{ margin: 0 }}>
                Through his talks, coaching, and writing, Joe has inspired thousands to rise into their highest potential—living with more clarity, love, and abundance. His journey of transformation and heart-centered leadership continues to guide individuals and organizations worldwide.
                </p>
              </div>

              
              {/* Action Buttons */}
              <div style={{ 
                display: 'flex', 
                flexDirection: window.innerWidth >= 640 ? 'row' : 'column',
                gap: '1rem', 
                justifyContent: window.innerWidth >= 1024 ? 'flex-start' : 'center',
                marginBottom: '3rem'
              }}>
                <button
                  onClick={() => handleSocialClick('https://www.paypal.com/donate/?hosted_button_id=7QRRA68W82CF4')}
                  style={buttonPrimary}
                >
                  <Users size={20} style={{ marginRight: '0.75rem' }} />
                  Support Us
                </button>
                <button
                  onClick={() => handleSocialClick('https://projectsmile.world/')}
                  style={buttonSecondary}
                >
                  Explore Work
                  <ArrowRight size={20} style={{ marginLeft: '0.75rem' }} />
                </button>
              </div>

              {/* Social Links */}
              <div style={{ 
                display: 'flex', 
                justifyContent: window.innerWidth >= 1024 ? 'flex-start' : 'center',
                gap: '1rem'
              }}>
                {[
              { icon: Youtube, url: 'https://www.youtube.com/@JoeMittiga' },
              { icon: Instagram, url: 'https://www.instagram.com/joemittiga2/' },
              { icon: Linkedin, url: 'https://www.linkedin.com/in/joemittiga/' },
              { icon: Facebook, url: 'https://www.facebook.com/people/Joe-Mittiga/61574825025092/' },
              { icon: Twitter, url: 'https://x.com/mittiga95743' },
                ].map((social, index) => (
                  <button
                    key={index}
                    onClick={() => handleSocialClick(social.url)}
                    style={{
                      width: '3.5rem',
                      height: '3.5rem',
                      borderRadius: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'white',
                      border: '1px solid rgba(229, 231, 235, 1)',
                      cursor: 'pointer',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <social.icon size={24} style={{ color: social.color }} />
                  </button>
                ))}
              </div>
            </div>

            {/* Image */}
            <div>
              <div style={{ position: 'relative', maxWidth: '32rem', margin: '0 auto' }}>
                {/* Floating Elements */}
                <div style={{
                  position: 'absolute',
                  top: '-1.5rem',
                  right: '-1.5rem',
                  width: '5rem',
                  height: '5rem',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'white',
                  border: '4px solid #fa8229',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
                  zIndex: 10
                }}>
                  <Award size={28} style={{ color: '#fa8229' }} />
                </div>

                <div style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '50%',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
                  border: '6px solid white',
                  width: window.innerWidth >= 1024 ? '32rem' : '24rem',
                  height: window.innerWidth >= 1024 ? '32rem' : '24rem',
                  margin: '0 auto'
                }}>
                  <img
                    src="/joemittunga.jpg"
                    alt="John Anderson - Founder"
                    style={{ 
                      width: '100%', 
                      height: '100%',
                      objectFit: 'cover'
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
      <section id="video" style={{ padding: '6rem 0', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{
              fontSize: window.innerWidth >= 1024 ? '4.5rem' : '3rem',
              fontWeight: '900',
              color: '#111827',
              marginBottom: '2rem',
              lineHeight: '1.1'
            }}>
              Inspiring 
              <br />
              <span style={gradientTextStyle}>Transformation</span>
            </h2>
            <p style={{
              fontSize: '1.25rem',
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
              borderRadius: '1rem',
              overflow: 'hidden',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
              border: '4px solid white',
              position: 'relative'
            }}>
              {!isPlaying ? (
                // Thumbnail with play button overlay
                <div 
                  style={{ 
                    position: 'relative', 
                    cursor: 'pointer',
                    height: window.innerWidth >= 1024 ? '24rem' : '20rem'
                  }}
                  onClick={handlePlayVideo}
                >
                  <img 
                    src={thumbnailUrl}
                    alt="Video Thumbnail"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
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
                    width: '80px',
                    height: '80px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    border: '3px solid #fa8229'
                  }}>
                    <Play size={32} style={{ color: '#fa8229', marginLeft: '4px' }} />
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
                // YouTube embed
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    width: '100%',
                    height: window.innerWidth >= 1024 ? '24rem' : '20rem'
                  }}
                />
              )}
            </div>
            
          </div>
        </div>
      </section>

      {/* Social Platforms Section */}
      <section id="platforms" style={{ padding: '6rem 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>

            <h2 style={{ 
              fontSize: window.innerWidth >= 1024 ? '4.5rem' : '3rem', 
              fontWeight: '900', 
              color: '#111827', 
              marginBottom: '2rem', 
              lineHeight: '1.1'
            }}>
              JOIN THE
              <br />
              <span style={gradientTextStyle}>COMMUNITY</span>
            </h2>
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#374151', 
              maxWidth: '48rem', 
              margin: '0 auto', 
              lineHeight: '1.7'
            }}>
              Connect with John across multiple platforms and become part of a thriving community 
              of entrepreneurs, innovators, and change-makers from around the world.
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: window.innerWidth >= 1280 ? 'repeat(3, 1fr)' : window.innerWidth >= 768 ? 'repeat(2, 1fr)' : '1fr',
            gap: '2rem'
          }}>
            {[
              {
                icon: Youtube,
                title: 'YouTube',
                desc: 'Exclusive tutorials, behind-the-scenes content, and entrepreneurial masterclasses that will transform your business mindset.',
                url: 'https://youtube.com',
                color: '#ff0000',
                bgColor: 'rgba(255, 0, 0, 0.1)',
                buttonColor: '#1c4fd8'
              },
              {
                icon: Linkedin,
                title: 'LinkedIn',
                desc: 'Professional insights, industry analysis, and networking opportunities with global business leaders and innovators.',
                url: 'https://linkedin.com',
                color: '#1c4fd8',
                bgColor: 'rgba(28, 79, 216, 0.1)',
                buttonColor: '#fa8229'
              },
              {
                icon: Instagram,
                title: 'Instagram',
                desc: 'Daily motivation, lifestyle glimpses, and inspiring stories that fuel your entrepreneurial journey.',
                url: 'https://instagram.com',
                color: '#fa8229',
                bgColor: 'rgba(250, 130, 41, 0.1)',
                buttonColor: '#1c4fd8'
              },
              {
                icon: Twitter,
                title: 'Twitter',
                desc: 'Real-time updates, market insights, and quick tips that keep you ahead of industry trends and opportunities.',
                url: 'https://twitter.com',
                color: '#1c4fd8',
                bgColor: 'rgba(28, 79, 216, 0.1)',
                buttonColor: '#fa8229'
              },
              {
                icon: Facebook,
                title: 'Facebook',
                desc: 'Community discussions, event announcements, and meaningful conversations with fellow entrepreneurs worldwide.',
                url: 'https://facebook.com',
                color: '#1c4fd8',
                bgColor: 'rgba(28, 79, 216, 0.1)',
                buttonColor: '#1c4fd8'
              },
              {
                icon: Globe,
                title: 'Personal Blog',
                desc: 'In-depth articles, case studies, and comprehensive guides on building successful businesses and leading teams.',
                url: 'https://johnanderson.com',
                color: '#fa8229',
                bgColor: 'rgba(250, 130, 41, 0.1)',
                buttonColor: '#fa8229'
              }
            ].map((platform, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '1rem',
                  padding: '2rem',
                  border: '1px solid rgba(243, 244, 246, 1)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  width: '4rem',
                  height: '4rem',
                  borderRadius: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  backgroundColor: platform.bgColor,
                  border: `2px solid ${platform.color}`
                }}>
                  <platform.icon size={32} style={{ color: platform.color }} />
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
                  margin: '0 0 2rem 0'
                }}>
                  {platform.desc}
                </p>
                
                <button
                  onClick={() => handleSocialClick(platform.url)}
                  style={{
                    width: '100%',
                    padding: '1rem 1.5rem',
                    borderRadius: '0.75rem',
                    fontWeight: 'bold',
                    color: 'white',
                    backgroundColor: platform.buttonColor,
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease'
                  }}
                >
                  Connect Now
                  <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" style={{ backgroundColor: '#111827', color: 'white', padding: '5rem 0' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h3 style={{ 
              fontSize: window.innerWidth >= 1024 ? '3.75rem' : '2.5rem', 
              fontWeight: '900', 
              marginBottom: '2rem', 
              lineHeight: '1.1'
            }}>
              READY TO
              <br />
              <span style={{ color: '#fa8229' }}>AWAKEN YOUR TRUE POTENTIAL?</span>
            </h3>
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#d1d5db', 
              maxWidth: '48rem', 
              margin: '0 auto', 
              lineHeight: '1.7'
            }}>
              Join thousands who are choosing healing, purpose, and authentic success. Stay inspired, live with love, and step boldly into who you’re meant to be.
            </p>
          </div>
          
          {/* Social Icons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '4rem' }}>
            {[
              { icon: Youtube, url: 'https://www.youtube.com/@JoeMittiga' },
              { icon: Instagram, url: 'https://www.instagram.com/joemittiga2/' },
              { icon: Linkedin, url: 'https://www.linkedin.com/in/joemittiga/' },
              { icon: Facebook, url: 'https://www.facebook.com/people/Joe-Mittiga/61574825025092/' },
              { icon: Twitter, url: 'https://x.com/mittiga95743' },
            ].map((social, index) => (
              <button
                key={index}
                onClick={() => handleSocialClick(social.url)}
                style={{
                  width: '4rem',
                  height: '4rem',
                  borderRadius: '0.75rem',
                  backgroundColor: '#1f2937',
                  border: '1px solid #374151',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#374151';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#1f2937';
                }}
              >
                <social.icon size={28} style={{ color: '#9ca3af' }} />
              </button>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div style={{ 
            display: 'flex', 
            flexDirection: window.innerWidth >= 640 ? 'row' : 'column',
            gap: '1.5rem', 
            justifyContent: 'center', 
            marginBottom: '4rem'
          }}>
            <button
              onClick={() => handleSocialClick('https://projectsmile.world')}
              style={{
                padding: '1.25rem 3rem',
                borderRadius: '9999px',
                fontWeight: '900',
                fontSize: '1.125rem',
                color: 'white',
                backgroundColor: '#1c4fd8',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 10px 25px rgba(28, 79, 216, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease'
              }}
            >
              <Globe size={24} style={{ marginRight: '0.75rem' }} />
              EXPLORE WEBSITE
            </button>
            <button
              onClick={() => handleSocialClick('https://www.paypal.com/donate/?hosted_button_id=7QRRA68W82CF4')}
              style={{
                padding: '1.25rem 3rem',
                borderRadius: '9999px',
                fontWeight: '900',
                fontSize: '1.125rem',
                color: '#fb923c',
                backgroundColor: 'transparent',
                border: '2px solid #fb923c',
                cursor: 'pointer',
                boxShadow: '0 10px 25px rgba(251, 146, 60, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#fb923c';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#fb923c';
              }}
            >
              <Heart size={24} style={{ marginRight: '0.75rem' }} />

              SUPPORT THE MISSION
            </button>
            <button
              onClick={() => handleSocialClick('https://www.projectsmile.fund/')}
              style={{
                padding: '1.25rem 3rem',
                borderRadius: '9999px',
                fontWeight: '900',
                fontSize: '1.125rem',
                color: 'white',
                backgroundColor: '#1c4fd8',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 10px 25px rgba(28, 79, 216, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease'
              }}
            >
              <ShoppingCart size={24} style={{ marginRight: '0.75rem' }} />

              EXPLORE PRODUCTS
            </button>
          </div>
          
          {/* Footer Bottom */}
          <div style={{ 
            textAlign: 'center', 
            paddingTop: '2rem', 
            borderTop: '1px solid #1f2937'
          }}>
            <p style={{ color: '#6b7280', margin: 0 }}>
              © 2025 Joe Mittiga . All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FounderWebpage;