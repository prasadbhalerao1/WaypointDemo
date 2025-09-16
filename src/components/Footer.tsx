import React from 'react';
import { Heart, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Heart className="w-8 h-8 text-teal-400" />
              <span className="text-2xl font-bold">WayPoint</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted campus mental health companion, providing 24/7 support 
              and resources for college students across India.
            </p>
          </div>

          {/* Emergency Contacts */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-teal-400">Emergency Support</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-teal-400" />
                <div>
                  <p className="font-medium">National Suicide Prevention</p>
                  <p className="text-gray-300">9152987821</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-teal-400" />
                <div>
                  <p className="font-medium">Campus Emergency</p>
                  <p className="text-gray-300">100</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-teal-400" />
                <div>
                  <p className="font-medium">Crisis Support Email</p>
                  <p className="text-gray-300">help@waypoint.edu</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-teal-400">Quick Access</h3>
            <div className="space-y-2">
              <a href="/chatbot" className="block text-gray-300 hover:text-teal-400 transition-colors duration-200">
                AI Mental Health Support
              </a>
              <a href="/booking" className="block text-gray-300 hover:text-teal-400 transition-colors duration-200">
                Book Counseling Session
              </a>
              <a href="/resources" className="block text-gray-300 hover:text-teal-400 transition-colors duration-200">
                Wellness Resources
              </a>
              <a href="/forum" className="block text-gray-300 hover:text-teal-400 transition-colors duration-200">
                Peer Support Community
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-300">
              © 2025 WayPoint Mental Health Platform. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Smart India Hackathon 2025
            </p>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>by</span>
            <span className="font-medium text-teal-400">Prasad</span>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 p-4 bg-gray-800 rounded-lg">
          <p className="text-xs text-gray-400 text-center leading-relaxed">
            <strong className="text-gray-300">Important:</strong> WayPoint provides supportive resources and should not replace professional medical advice. 
            If you're experiencing a mental health emergency, please contact emergency services immediately or visit your nearest hospital.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;