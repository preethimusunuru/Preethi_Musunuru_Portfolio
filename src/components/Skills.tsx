
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["Java", "Python", "JavaScript", "TypeScript", "C", "C++", "Swift", ".NET"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: ["React.js", "AngularJS", "Flutter", "HTML/CSS", "Tailwind CSS", "Bootstrap"],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: ["Spring Boot", "Flask", "Node.js", "Express.js", "Microservices"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: ["MongoDB", "MySQL", "Redis", "ElasticSearch", "Firebase"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      skills: ["AWS (ECS, Lambda, S3)", "Azure", "IBM Cloud", "Docker", "Jenkins", "GitHub"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Testing & APIs",
      icon: "🧪",
      skills: ["JUnit", "Selenium", "Cucumber", "RESTful APIs", "GraphQL", "Postman"],
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Mobile Development",
      icon: "📱",
      skills: ["Flutter", "Swift", "iOS Development", "Firebase", "React Native"],
      color: "from-teal-500 to-green-500"
    },
    {
      title: "Embedded/VLSI",
      icon: "🔧",
      skills: ["VHDL", "RISC-V", "8051 Microcontroller", "FPGA", "IoT"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks for building scalable, efficient solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      className="bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-800 transition-colors cursor-default text-sm py-1 px-3"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Skill Level Indicators */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Proficiency Levels</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-700">Full-Stack Development</span>
                <div className="flex-1 mx-4 bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full" style={{width: '95%'}}></div>
                </div>
                <span className="text-sm text-gray-600">95%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-700">Cloud Technologies</span>
                <div className="flex-1 mx-4 bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-green-500 to-teal-500 h-3 rounded-full" style={{width: '90%'}}></div>
                </div>
                <span className="text-sm text-gray-600">90%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-700">Mobile Development</span>
                <div className="flex-1 mx-4 bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full" style={{width: '85%'}}></div>
                </div>
                <span className="text-sm text-gray-600">85%</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-700">Database Management</span>
                <div className="flex-1 mx-4 bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full" style={{width: '88%'}}></div>
                </div>
                <span className="text-sm text-gray-600">88%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-700">DevOps & Testing</span>
                <div className="flex-1 mx-4 bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full" style={{width: '82%'}}></div>
                </div>
                <span className="text-sm text-gray-600">82%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-700">Embedded Systems</span>
                <div className="flex-1 mx-4 bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-3 rounded-full" style={{width: '78%'}}></div>
                </div>
                <span className="text-sm text-gray-600">78%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
