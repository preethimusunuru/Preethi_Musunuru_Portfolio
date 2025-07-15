import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "preethimusunuru@gmail.com",
      href: "mailto:preethimusunuru@gmail.com"
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+1 309-612-6760",
      href: "tel:+13096126760"
    },
    {
      icon: "📍",
      label: "Location",
      value: "United States",
      href: "#"
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/preethimusunuru",
      href: "https://www.linkedin.com/in/preethi-musunuru-289995176/"
    },
    {
      icon: "🔗",
      label: "GitHub",
      value: "github.com/Preethi",
      href: "https://github.com/preethimusunuru"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your next project or explore collaboration opportunities? Let's start a conversation!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                I'm always interested in discussing new opportunities, collaborating on innovative projects, 
                or simply connecting with fellow developers. Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <a 
                      href={info.href}
                      className="flex items-center space-x-4 group"
                      target={info.href.startsWith('http') ? '_blank' : '_self'}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    >
                      <div className="text-2xl">{info.icon}</div>
                      <div>
                        <div className="text-sm text-gray-500 font-medium">{info.label}</div>
                        <div className="text-gray-900 group-hover:text-blue-600 transition-colors font-medium">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
              <form 
                className="space-y-6"
                action="https://formspree.io/f/xovwgwez"
                method="POST"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <Input 
                      name="firstName"
                      required
                      placeholder="Your first name"
                      className="bg-white/80 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <Input 
                      name="lastName"
                      required
                      placeholder="Your last name"
                      className="bg-white/80 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input 
                    name="email"
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    className="bg-white/80 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <Input 
                    name="subject"
                    required
                    placeholder="What's this about?"
                    className="bg-white/80 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea 
                    name="message"
                    required
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    className="bg-white/80 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full text-lg font-medium"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            © 2025 Preethi Musunuru
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
