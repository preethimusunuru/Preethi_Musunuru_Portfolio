import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Passionate Full-Stack Developer
                </h3>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    With <span className="font-semibold text-blue-600">4+ years of experience</span> in full-stack, 
                    cloud, and mobile development, I specialize in creating scalable applications that bridge 
                    the gap between complex backend systems and intuitive user interfaces.
                  </p>
                  <p>
                    My expertise spans across modern technologies including <span className="font-semibold">Java, Python, 
                    Spring Boot, React.js, MongoDB, and AWS</span>, enabling me to deliver end-to-end solutions 
                    that meet both technical requirements and user needs.
                  </p>
                  <p>
                    I'm passionate about building applications that not only perform exceptionally but also 
                    provide seamless user experiences. From microservices architecture to mobile apps and 
                    embedded systems, I enjoy tackling diverse technical challenges.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-2">4+</div>
                  <div className="text-sm opacity-90">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-green-500 to-teal-600 text-white border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-2">15+</div>
                  <div className="text-sm opacity-90">Technologies</div>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-orange-500 to-red-600 text-white border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-2">10+</div>
                  <div className="text-sm opacity-90">Projects Completed</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-500 to-pink-600 text-white border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-2">5</div>
                  <div className="text-sm opacity-90">Companies Worked</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
