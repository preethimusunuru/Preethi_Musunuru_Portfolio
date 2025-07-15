
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Education = () => {
  const educationData = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Florida Atlantic University",
      duration: "2022 - 2024",
      location: "Boca Raton, FL",
      description: "Advanced coursework in software engineering, algorithms, and distributed systems. Focus on full-stack development and cloud computing technologies.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      degree: "Bachelor of Technology in Electronics and Communication Engineering",
      institution: "Gudlavalleru Engineering College",
      duration: "2017 - 2021",
      location: "Andhra Pradesh, India",
      description: "Comprehensive engineering education with emphasis on digital systems, embedded programming, and signal processing. Strong foundation in mathematics and analytical thinking.",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic foundation that shaped my technical expertise and problem-solving approach
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {educationData.map((edu, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${edu.color} text-white text-sm font-medium mb-6`}>
                  {edu.duration}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {edu.degree}
                </h3>
                
                <h4 className="text-xl font-semibold text-blue-600 mb-2">
                  {edu.institution}
                </h4>
                
                <p className="text-gray-500 mb-4 font-medium">
                  📍 {edu.location}
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  {edu.description}
                </p>
                
                {/* Academic achievements or highlights could go here */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Degree Completed</span>
                    <span className="text-green-600 font-medium">✓ Graduated</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional academic information */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 shadow-xl max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Academic Highlights</h3>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">3.7 GPA</div>
                  <div className="text-sm opacity-90">Strong Academic Performance</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">7+</div>
                  <div className="text-sm opacity-90">Years of Education</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">2</div>
                  <div className="text-sm opacity-90">Degrees Earned</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
