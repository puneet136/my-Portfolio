import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import Navbar from '@/components/Navbar';
import { 
  Code, 
  Database, 
  Palette, 
  Server, 
  Smartphone, 
  Globe, 
  Heart, 
  Coffee, 
  BookOpen, 
  Trophy,
  Target,
  Users,
  Lightbulb,
  Rocket
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const skills = [
    { name: 'Spring/SpringBoot', level: 75, icon: Globe },
    { name: 'Angular', level: 85, icon: Server },
    { name: 'Java', level: 90, icon: Code },
    { name: 'Database', level: 85, icon: Database },
    { name: 'Data Structures & Algorithm', level: 75, icon: Palette },
  ];

  const interests = [
    { name: 'Open Source', icon: Code, description: 'Contributing to open source projects and building developer tools' },
    { name: 'Innovation', icon: Rocket, description: 'Building products that solve real-world problems' }
  ];

  const values = [
    {
      title: 'Continuous Learning',
      description: 'Always staying updated with the latest technologies and best practices in software development.',
      icon: BookOpen
    },
    {
      title: 'Quality Code',
      description: 'Writing clean, maintainable, and well-documented code that stands the test of time.',
      icon: Target
    },
    {
      title: 'Collaboration',
      description: 'Believing in the power of teamwork and knowledge sharing to achieve great results.',
      icon: Users
    },
    {
      title: 'Innovation',
      description: 'Pushing boundaries and finding creative solutions to complex technical challenges.',
      icon: Lightbulb
    }
  ];

  const timeline = [
    { year: '2023', title: 'Started College Journey', description: ' Explore About the college nature .', type: 'past' },
    { year: '2024', title: 'Open Source Contributor', description: 'Started contributing to open source projects on GitHub.', type: 'past' },
    { year: '2025', title: 'Started Full Stack Journey', description: 'Began learning and building projects with Java, Spring Boot, and Angular.', type: 'current' },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Navbar theme={theme} onThemeToggle={toggleTheme} />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Passionate developer, lifelong learner, and problem solver dedicated to creating innovative solutions
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Personal Story */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Heart className="h-8 w-8 text-red-500" />
                My Story
              </h2>
              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Hi! I'm Puneet Agrawal, a passionate Full Stack Developer with a deep love for creating
                  innovative solutions that make a real difference. My journey in tech started with curiosity
                  and has evolved into a mission to build products that solve real-world problems.
                </p>
                <p>
                  When I'm not coding, you'll find me mentoring fellow developers, contributing to open source
                  projects, or exploring the latest tech trends. I believe in the power of community and
                  continuous learning.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-600 p-1">
                  <div className="w-full h-full rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-8xl">
                    👨‍💻
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl animate-bounce">
                  ⚡
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center text-xl animate-pulse">
                  💡
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-16" />

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <Code className="h-8 w-8 text-blue-500" />
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div key={index} className="space-y-3">
                  <div className="flex items-center gap-3">
                    <IconComponent className="h-5 w-5 text-blue-500" />
                    <span className="font-semibold">{skill.name}</span>
                    <span className="ml-auto text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              );
            })}
          </div>
        </section>

//         <Separator className="my-16" />

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <Trophy className="h-8 w-8 text-yellow-500" />
            My Journey
          </h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-indigo-500"></div>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  <div className="relative z-10 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">
                    {item.year.slice(-2)}
                  </div>
                  <Card className="flex-1">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                        <Badge variant={item.type === 'current' ? 'default' : 'secondary'}>
                          {item.year}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Separator className="my-16" />

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <Target className="h-8 w-8 text-green-500" />
            What Drives Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <IconComponent className="h-6 w-6 text-blue-500" />
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Interests */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <Coffee className="h-8 w-8 text-orange-500" />
            What I Love Doing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {interests.map((interest, index) => {
              const IconComponent = interest.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <IconComponent className="h-6 w-6 text-blue-500" />
                      {interest.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">{interest.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Let's Build Something Amazing Together!</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always excited to work on new projects and collaborate with like-minded people.
            Whether you have an idea or just want to chat about tech, I'd love to hear from you!
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get In Touch
            </Link>
            <Link
              to="/resume"
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Resume
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}