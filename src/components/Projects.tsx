
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const Projects = () => {
  const projects = [
    {
      title: "TA Management System",
      description: "Comprehensive teaching assistant management platform with role-based access control",
      fullDescription: "A full-stack web application built with the MERN stack to streamline the management of teaching assistants. Features include user authentication with JWT, file upload with Cloudinary integration, role-based access control, and real-time notifications. The system allows administrators to manage TA assignments, track performance, and handle scheduling efficiently.",
      tech: ["React.js", "Node.js", "MongoDB", "Express", "JWT", "Cloudinary"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D",
      category: "Full-Stack"
    },
    {
      title: "Edu Connect",
      description: "Mobile app connecting schools and parents for better engagement",
      fullDescription: "A Flutter-based mobile application that bridges the communication gap between schools and parents. Built with Firebase backend, it features real-time messaging, event notifications, grade tracking, and attendance monitoring. The app supports both iOS and Android platforms with offline capabilities and push notifications.",
      tech: ["Flutter", "Firebase", "Dart", "Cloud Firestore", "FCM"],
      image: "https://images.unsplash.com/photo-1514575110897-1253ff7b2ccb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9iaWxlJTIwYXBwfGVufDB8fDB8fHww",
      category: "Mobile"
    },
    {
      title: "Break-time Reminder App",
      description: "iOS wellness app encouraging healthy work habits",
      fullDescription: "A native iOS application developed in Swift that promotes workplace wellness by reminding users to take regular breaks. Features include customizable reminder intervals, activity tracking, wellness tips, and integration with HealthKit. The app uses local notifications and provides detailed analytics on break patterns.",
      tech: ["Swift", "iOS", "HealthKit", "Core Data", "UserNotifications"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
      category: "Mobile"
    },
    {
      title: "Credit Card Management System",
      description: "Enterprise-grade financial system at Wipro",
      fullDescription: "A robust enterprise application developed during my tenure at Wipro for managing credit card operations. Built with Java Spring Boot and MongoDB, featuring Redis caching for optimal performance. The system handles transaction processing, fraud detection, account management, and reporting with high availability and security standards.",
      tech: ["Java", "Spring Boot", "MongoDB", "Redis", "REST APIs", "Microservices"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
      category: "Enterprise"
    },
    {
      title: "Smart Health Monitoring System",
      description: "IoT-enabled health monitoring with cloud integration",
      fullDescription: "An innovative IoT solution that monitors health parameters in real-time using various sensors. The system leverages IBM Cloud for data processing and storage, with a React.js frontend for data visualization. Features include real-time alerts, historical data analysis, and predictive health insights using machine learning algorithms.",
      tech: ["React.js", "IBM Cloud", "IoT", "Node.js", "Watson IoT", "Chart.js"],
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=300&fit=crop",
      category: "IoT"
    },
    {
      title: "128-bit RISC Processor",
      description: "Custom processor design using VHDL and FPGA",
      fullDescription: "A comprehensive hardware project involving the design and implementation of a 128-bit RISC processor using VHDL. The processor follows RISC-V architecture principles and was synthesized and tested on FPGA hardware. Features include pipelined execution, custom instruction set, and memory management unit.",
      tech: ["VHDL", "FPGA", "RISC-V", "Vivado", "ModelSim"],
      image: "https://images.unsplash.com/photo-1625571705670-38fc39c923ba?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZW1iZWRkZWQlMjBzeXN0ZW1zfGVufDB8fDB8fHww",
      category: "Hardware"
    },
    {
      title: "Vehicle Speed Tracking",
      description: "Embedded system using 8051 microcontroller",
      fullDescription: "An embedded system project that tracks and monitors vehicle speed using an 8051 microcontroller. The system includes GPS integration, LCD display, speed limit alerts, and data logging capabilities. Implemented with C programming and interfaced with various sensors and communication modules.",
      tech: ["8051 Microcontroller", "C", "GPS", "LCD", "Sensors"],
      image: "https://images.unsplash.com/opengraph/1x1.png?mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-w=64&mark-align=top%2Cleft&mark-pad=50&h=630&w=1200&blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1657379224967-c1fb6ace4f70%3Fcrop%3Dfaces%252Cedges%26h%3D630%26w%3D1200%26blend%3D000000%26blend-mode%3Dnormal%26blend-alpha%3D10%26mark-w%3D750%26mark-align%3Dmiddle%252Ccenter%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fw%253D750%2526h%253D84%2526txt%253Dspeed%252Bcar%2526txt-pad%253D80%2526txt-align%253Dmiddle%25252Cleft%2526txt-color%253D%252523000000%2526txt-size%253D40%2526txt-width%253D660%2526txt-clip%253Dellipsis%2526auto%253Dformat%2526fit%253Dcrop%2526q%253D60%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8Nnx8c3BlZWQlMjBjYXJ8ZW58MHx8fHwxNzUyMDA0NzMxfDA%26ixlib%3Drb-4.1.0&blend-w=1&auto=format&fit=crop&q=60",
      category: "Embedded"
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Full-Stack", "Mobile", "Enterprise", "IoT", "Hardware", "Embedded"];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full ${
                  selectedCategory === category 
                    ? "bg-blue-600 hover:bg-blue-700" 
                    : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-blue-600 text-white">{project.category}</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.tech.length - 3} more
                    </Badge>
                  )}
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                      View Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-gray-900">
                        {project.title}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <p className="text-gray-600 leading-relaxed">
                        {project.fullDescription}
                      </p>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <Badge key={techIndex} className="bg-blue-100 text-blue-800">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-4 pt-4">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                          View on GitHub
                        </Button>
                        <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full">
                          Live Demo
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
