import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { SiLeetcode } from "react-icons/si";
import { Link } from 'react-router-dom';

export default function Portfolio() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = ['Developer', 'Creator', 'Innovator', 'Problem Solver'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const projects = [
    {
      title: "Gradeify",
      description: "Smart Academic Management Portal",
      status: "Active",
      emoji: "🚀",
      content: "Leading development of a revolutionary academic management & exam planner for students and teachers. Built with PHP, CSS & HTML5.",
      technologies: ["PHP", "HTML5", "CSS", "SQL"],
      links: [
        { text: "Demo - Live Website", url: "https://gradify.infinityfree.me/dept/Home.php" },
        { text: "GitHub Repo - You can also contribute!", url: "https://github.com/puneet136/Gradify-Smart-Academic-Management-Portal" }
      ]
    },
    {
      title: "Library Management System",
      description: "Developed a Library Management System using Java and MySQL to streamline book inventory, user management, and borrowing/return processes with an interactive UI.",
      emoji: "🤖",
      technologies: ["Java", "JSwing", "SQL"],
      links: [
        { text: "View Project", url: "https://github.com/puneet136/LibraryManagementSystem" }
      ]
    },
    {
      title: "Email Send API",
      description: "Engineered a secure Email Sending API with Spring Boot, JWT-based authentication, and Angular frontend integration, enabling authenticated users to compose, send, and manage emails efficiently.",
      emoji: "📧",
      technologies: ["Java", "Spring Boot", "JWT", "Angular"],
      content: [
        "Implemented JWT authentication to ensure secure and stateless access.",
        "Developed RESTful APIs in Spring Boot for email sending and management.",
        "Integrated Angular frontend for user-friendly email operations.",
        "Ensured scalability and maintainability with layered architecture."
      ],
      links: [
        { text: "View Project", url: "https://github.com/puneet136/Email-Send-API" }
      ]
    },
  ];

  const handleViewProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Navbar theme={theme} onThemeToggle={toggleTheme} />

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

            {/* Left Column */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Hi, I'm{' '}
                  <span className="inline-block">
                    {['P', 'u', 'n', 'e', 'e', 't', ' ', 'A', 'g', 'r', 'a', 'w', 'a', 'l'].map((letter, index) => (
                      <span
                        key={index}
                        className="inline-block animate-bounce bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {letter === ' ' ? '\u00A0' : letter}
                      </span>
                    ))}
                  </span>
                </h1>

                <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                  🚀 Full Stack{' '}
                  <span className="font-semibold text-blue-600 dark:text-blue-400 transition-all duration-500">
                    {words[currentWordIndex]}
                  </span>
                  {' '}Full Stack Developer | Open Source Contributor
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={handleViewProjects}>
                  View Projects
                </Button>

                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">Contact Me</Link>
                </Button>
              </div>

              <div className="flex gap-4">
                <Button variant="ghost" size="sm" className="p-2" asChild>
                  <a href="https://github.com/puneet136" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    <span className="ml-2">GitHub</span>
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="p-2" asChild>
                  <a href="https://www.linkedin.com/in/puneet-agrawal/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    <span className="ml-2">LinkedIn</span>
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="p-2" asChild>
                  <a href="https://leetcode.com/u/Puneet_13/" target="_blank" rel="noopener noreferrer">
                    <SiLeetcode className="h-5 w-5 text-black-500" />
                    <span className="ml-2">LeetCode</span>
                  </a>
                </Button>

              </div>
            </div> {/* End Left Column */}

            {/* Right Column - Photo */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/profile.jpg" // Replace with your image path in the public folder
                alt="Puneet Agrawal"
                className="w-80 h-80 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div> {/* End Right Column */}

          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Crafting digital experiences that blend innovation with purpose.
              Each project tells a story of growth and creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{project.emoji}</span>
                    <div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        {project.description}
                        {project.status && (
                          <Badge variant="secondary" className="text-xs">
                            {project.status}
                          </Badge>
                        )}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {Array.isArray(project.content) ? project.content.map((line, i) => <p key={i}>{line}</p>) : project.content}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-2">
                    {project.links.map((link, linkIndex) => (
                      <Button
                        key={linkIndex}
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start p-2 h-auto"
                        asChild
                      >
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          {link.text}
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          

        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              © 2025 Puneet Agrawal. All rights reserved.
            </p>
            
            <div className="flex justify-center gap-6 text-sm">
              <a href="mailto:puneetagrawalspu@gmail.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <Mail className="h-4 w-4" />
                puneetagrawalspu@gmail.com
              </a>
              <a href="tel:+919116665162" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <Phone className="h-4 w-4" />
                +91 9116665162
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Jaipur , India
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}