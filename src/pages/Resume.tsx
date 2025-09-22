import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Navbar from '@/components/Navbar';
import { Download, Mail, Phone, MapPin, Calendar, Building, GraduationCap, Award } from 'lucide-react';

export default function Resume() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Jaipur Engineering College And Research Center",
      period: "2023 - 2027",
      location: "Jaipur",
      gpa: "9.06/10.0",
      achievements: ["Secured 1st rank in college project exhibition in REN'25."],
    },
  ];

  const skills = {
    "Frontend": ["Angular", "Bootstrap", "Tailwind CSS", "HTML5", "CSS3"],
    "Backend": ["SpringBoot", "Python", "REST APIs"],
    "Database": ["MySQL"],
    "Tools": ["Git", "Vs code", "Postman"],
  };

  

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Navbar theme={theme} onThemeToggle={toggleTheme} />
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Puneet Agrawal</h1>
            <p className="text-xl">Full Stack Developer  | Open Source Contributor</p>
            <div className="flex justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                puneetagrawalspu@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +91 9116665162
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Jaipur , India
              </div>
            </div>
            <Button variant="secondary" size="lg" className="mt-6" asChild>
              <a href="https://drive.google.com/file/d/1C8xMmglhajs-qloyv5d0LVEAxksEa4DW/view?usp=sharing" download>
                <Download className="h-4 w-4 mr-2" />
                View PDF Resume
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Professional Summary */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <div className="w-1 h-6 bg-blue-600"></div>
            Professional Summary
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Dedicated Full Stack Developer with experience in building scalable web applications using Java, Spring Boot, and Angular. Passionate about open source contributions and exploring AI/ML technologies to solve real-world problems.
          </p>
        </section>



        {/* Education */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <div className="w-1 h-6 bg-blue-600"></div>
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="border-l-4 border-l-green-600">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <CardDescription className="flex items-center gap-2 text-base">
                        <GraduationCap className="h-4 w-4" />
                        {edu.institution}
                      </CardDescription>
                    </div>
                    <div className="text-right text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <MapPin className="h-4 w-4" />
                        {edu.location}
                      </div>
                      <div className="mt-1 font-semibold">GPA: {edu.gpa}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                    {edu.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <div className="w-1 h-6 bg-blue-600"></div>
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}