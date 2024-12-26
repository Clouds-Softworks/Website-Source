import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative px-4 py-32 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
      <div className="relative text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Clouds <span className="text-gradient">Softworks</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Quality Matters.
        </p>
        <div className="flex justify-center gap-4">
          <a href="/projects">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium inline-flex items-center group transition-all" >
            Explore Projects
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          </a>
          <a href="mailto:administrator@mail.osplurm.me">
  <button className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors">
    Contact Us
  </button>
</a>

        </div>
      </div>
    </section>
  );
};

export default Hero;