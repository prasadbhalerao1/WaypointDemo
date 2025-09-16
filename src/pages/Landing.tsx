import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Shield, Users, Brain, ArrowRight, Star } from 'lucide-react';

const Landing: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: 'AI-Guided Support',
      description: 'Get instant mental health guidance and coping strategies through our intelligent chatbot.',
    },
    {
      icon: Shield,
      title: 'Confidential & Safe',
      description: 'Your privacy is our priority. All conversations and data are completely confidential.',
    },
    {
      icon: Users,
      title: 'Peer Community',
      description: 'Connect with fellow students in a supportive, moderated environment.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-8 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-teal-100 rounded-full text-teal-800 text-sm font-medium mb-6">
            <Heart className="w-4 h-4 mr-2" />
            Smart India Hackathon 2025
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            Way<span className="text-teal-600">Point</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-teal-700 font-medium mb-4">
            Your Campus Mental Health Companion
          </p>
          
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            WayPoint bridges the gap in college mental health support with AI-guided assistance, 
            confidential counseling booking, peer support forums, and comprehensive wellness resources 
            - all designed specifically for Indian college students.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => navigate('/chatbot')}
              className="flex items-center px-8 py-4 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl text-lg font-medium"
            >
              Start Chat Support
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            
            <button 
              onClick={() => navigate('/resources')}
              className="flex items-center px-8 py-4 bg-white text-teal-600 border-2 border-teal-600 rounded-xl hover:bg-teal-50 transition-all duration-300 text-lg font-medium"
            >
              Explore Resources
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-8 py-16 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose WayPoint?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-xl text-gray-700 italic mb-6 leading-relaxed">
              "Mental health support shouldn't be a luxury. Every college student deserves access to 
              confidential, culturally-aware, and stigma-free psychological intervention tools."
            </blockquote>
            <cite className="text-teal-600 font-medium">- Department of Student Welfare</cite>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-16 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students already using WayPoint for their mental health support.
          </p>
          <button 
            onClick={() => navigate('/chatbot')}
            className="px-8 py-4 bg-white text-teal-600 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl text-lg font-medium"
          >
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Landing;