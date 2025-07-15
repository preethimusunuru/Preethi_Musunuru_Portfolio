
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      company: "ZettaPrime",
      role: "Full-Stack Developer",
      duration: "2023 - 2024",
      description: "Developed and maintained full-stack microservices architecture using React.js for frontend and various backend technologies. Implemented Redis caching solutions and deployed applications on AWS cloud infrastructure.",
      tech: ["React.js", "Microservices", "Redis", "AWS", "Docker", "Node.js"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      company: "Wipro",
      role: "Software Engineer",
      duration: "2021 - 2022",
      description: "Worked on enterprise Java applications using Spring Boot framework. Developed automated testing suites with Selenium and Cucumber, and built RESTful APIs for various financial services applications.",
      tech: ["Java", "Spring Boot", "Selenium", "Cucumber", "REST APIs", "MongoDB"],
      color: "from-green-500 to-teal-500"
    },
    {
      company: "Neven IT",
      role: "Java Developer",
      duration: "2020 - 2021",
      description: "Developed enterprise applications using Java and Hibernate ORM. Built responsive web interfaces with AngularJS and integrated various third-party APIs for business process automation.",
      tech: ["Java", "Hibernate", "AngularJS", "MySQL", "REST APIs"],
      color: "from-purple-500 to-pink-500"
    },
    {
      company: "SmartBridge",
      role: "Frontend Developer Intern",
      duration: "2020",
      description: "Contributed to React.js frontend development projects. Gained hands-on experience in modern web development practices, responsive design, and component-based architecture.",
      tech: ["React.js", "HTML/CSS", "JavaScript", "Bootstrap"],
      color: "from-orange-500 to-red-500"
    },
    {
      company: "CodeMania",
      role: "Machine Learning Intern",
      duration: "2019",
      description: "Worked on machine learning projects involving Convolutional Neural Networks (CNN) and Recurrent Neural Networks (RNN). Gained experience in data preprocessing, model training, and evaluation.",
      tech: ["Python", "TensorFlow", "CNN", "RNN", "Data Science"],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience Timeline
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${exp.color} text-white text-sm font-medium mb-4`}>
                        {exp.duration}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.role}</h3>
                      <h4 className="text-lg font-semibold text-blue-600 mb-4">{exp.company}</h4>
                      <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs border-blue-200 text-blue-700">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Timeline dot */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${exp.color} border-4 border-white shadow-lg z-10`}></div>
                </div>
                
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
