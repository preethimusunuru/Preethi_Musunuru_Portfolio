import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20
        relative overflow-hidden
        bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50
      "
    >
      <div className="max-w-7xl mx-auto text-center relative z-10 text-gray-900">
        {/* Profile Image */}
        <div className="mb-8">
          <img
            src="/preethi.jpg"
            alt="Preethi Musunuru"
            className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>

        {/* Floating subtle name */}
        <h1 className="text-5xl md:text-7xl font-semibold mb-6 animate-bounce-slow text-gray-900">
          Preethi <span className="text-blue-600">Musunuru</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl mb-4 font-medium text-gray-700">
          Software Engineer | Full-Stack Developer | Cloud & Mobile Enthusiast
        </p>

        {/* Tagline */}
        <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-600">
          Bridging the gap between backend scalability, elegant frontends, and real-world embedded systems.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <a
            href="https://res.cloudinary.com/dg9cntzrg/image/upload/v1751916775/My%20resume/Preethi_Musunur_onvay6.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-md transition-all duration-300"
            >
              View Resume
            </Button>
          </a>

          <a
            href="https://res.cloudinary.com/dg9cntzrg/image/upload/fl_attachment/v1751916775/My%20resume/Preethi_Musunur_onvay6.pdf"
            download
          >
            <Button
              size="lg"
              className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-3 rounded-full shadow-md transition-all duration-300"
            >
              Download Resume
            </Button>
          </a>

          <a href="tel:+13096126760">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full transition-all duration-300"
            >
              Call Me
            </Button>
          </a>
        </div>

        {/* Resume Preview */}
        <div className="w-full max-w-4xl mx-auto mb-12">
          <iframe
            src="https://res.cloudinary.com/dg9cntzrg/image/upload/v1751916775/My%20resume/Preethi_Musunur_onvay6.pdf"
            title="Resume Preview"
            className="w-full h-[600px] rounded-lg shadow-lg border border-gray-300"
          />
        </div>

        {/* Scroll Icon */}
        <div className="mt-6 animate-bounce">
          <ArrowDown className="mx-auto text-gray-500" size={32} />
        </div>
      </div>

      {/* Additional styles */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
