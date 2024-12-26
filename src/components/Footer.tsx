import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Clouds Softworks</h3>
            <p className="text-gray-400">
              Based in the cold city of Sioux Falls, South Dakota, our team has been developing innovative solutions for over 1 year with our team of exceptional developers and reverse engineers.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Connect</h3>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                administrator@mail.osplurm.me
              </p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://github.com/Clouds-Softworks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="mailto:administrator@mail.osplurm.me"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center text-gray-400">
          <p>Made with love by ccloudsz♡</p>
          <p>&copy; {new Date().getFullYear()} Clouds Softworks. All rights reserved.</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;