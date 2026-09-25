import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const statsRef = useRef(null);
  const featuresRef = useRef(null);
  const storyRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const elements = [statsRef.current, featuresRef.current, storyRef.current];
    elements.forEach(el => {
      if (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gray-900 text-white">
        <div className="absolute inset-0">
          <img 
            src="/about-banner.jpg" 
            alt="Sanjay Fabricators - Metal Fabrication" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-block bg-red-500 text-white font-bold px-4 py-1 rounded-full text-sm mb-4">
              Since 2010
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Sanjay Fabricators
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6">
              Excellence in Metal Fabrication
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-lg border border-red-500/30">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Quality Craftsmanship
              </span>
              <span className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-lg border border-blue-500/30">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                500+ Happy Clients
              </span>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40L60 46.7C120 53.3 240 66.7 360 66.7C480 66.7 600 53.3 720 53.3C840 53.3 960 66.7 1080 66.7C1200 66.7 1320 53.3 1380 46.7L1440 40V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V40Z" fill="#F9FAFB"/>
          </svg>
        </div>
      </div>

      {/* Story Section */}
      <div ref={storyRef} className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Our Story</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100">
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              <span className="font-bold text-gray-900">Since 2010</span>, Sanjay Fabricators has been a trusted name in the metal fabrication industry. We specialize in crafting high-quality <span className="font-semibold">metal pot tables, shelf racks, pyro stands, and custom metal products</span> for residential and commercial use.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              With over a decade of experience, we pride ourselves on delivering excellence in every project. Our commitment to quality craftsmanship and customer satisfaction has made us a preferred partner for businesses and individuals across India.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Whether you need a <span className="font-semibold text-red-600">custom metal pot table</span>, a <span className="font-semibold text-red-600">heavy-duty shelf rack</span>, or a <span className="font-semibold text-red-600">pyro stand</span>, Sanjay Fabricators delivers quality you can trust.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div ref={statsRef} className="bg-gradient-to-r from-red-500 to-red-600 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center text-white">
              <div className="text-5xl md:text-6xl font-bold mb-2">14+</div>
              <div className="text-sm md:text-base font-medium opacity-90">Years Experience</div>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl md:text-6xl font-bold mb-2">500+</div>
              <div className="text-sm md:text-base font-medium opacity-90">Products Delivered</div>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl md:text-6xl font-bold mb-2">500+</div>
              <div className="text-sm md:text-base font-medium opacity-90">Happy Clients</div>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl md:text-6xl font-bold mb-2">100%</div>
              <div className="text-sm md:text-base font-medium opacity-90">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div ref={featuresRef} className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Why Choose Sanjay Fabricators?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Quality craftsmanship and customer satisfaction since 2010</p>
          <div className="w-24 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500 transition duration-300">
              <span className="text-3xl group-hover:text-white transition duration-300">🔧</span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Quality Craftsmanship</h3>
            <p className="text-sm text-gray-600">Precision metal fabrication with attention to every detail</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 transition duration-300">
              <span className="text-3xl group-hover:text-white transition duration-300">⚡</span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Fast Delivery</h3>
            <p className="text-sm text-gray-600">Timely completion and delivery of all orders</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500 transition duration-300">
              <span className="text-3xl group-hover:text-white transition duration-300">🛠️</span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Custom Solutions</h3>
            <p className="text-sm text-gray-600">Tailored metal fabrication to meet your specific needs</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500 transition duration-300">
              <span className="text-3xl group-hover:text-white transition duration-300">🤝</span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Customer First</h3>
            <p className="text-sm text-gray-600">Dedicated support and service for complete satisfaction</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your metal fabrication requirements. We're here to help you find the perfect solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Get in Touch
            </Link>
            <a 
              href="https://wa.me/919310602295" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;