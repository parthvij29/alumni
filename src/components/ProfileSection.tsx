import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { 
  MapPin, 
  Building, 
  Calendar, 
  Mail, 
  Phone, 
  Linkedin,
  Github,
  Globe,
  Edit,
  Award,
  BookOpen,
  Users
} from 'lucide-react';

// Mock user data - in real app this would come from auth/database
const currentUser = {
  name: "Amit Kumar",
  role: "Senior Software Engineer",
  company: "Tata Consultancy Services", 
  location: "Mumbai",
  batch: "2018",
  email: "amit.kumar@tcs.com",
  avatar: "https://github.com/shadcn.png"
};

const education = [
  {
    degree: "Master of Computer Applications",
    institution: "Jawaharlal Nehru University",
    year: "2018-2020",
    grade: "8.5 CGPA"
  },
  {
    degree: "Bachelor of Computer Applications",
    institution: "Delhi University",
    year: "2015-2018",
    grade: "8.2 CGPA"
  }
];

const experience = [
  {
    title: "Senior Software Engineer",
    company: "Tata Consultancy Services",
    location: "Mumbai",
    duration: "2020 - Present",
    description: "Leading a team of 5 developers in building scalable web applications using React and Node.js."
  },
  {
    title: "Software Developer Intern",
    company: "Infosys",
    location: "Bangalore",
    duration: "2019 - 2020",
    description: "Developed REST APIs and worked on database optimization projects."
  }
];

const skills = [
  "JavaScript", "React", "Node.js", "Python", "Java", "AWS", "Docker", 
  "MongoDB", "PostgreSQL", "Git", "Agile", "Team Leadership"
];

const achievements = [
  {
    title: "Best Employee Award",
    organization: "TCS",
    year: "2023",
    description: "Recognized for outstanding performance and leadership"
  },
  {
    title: "Hackathon Winner",
    organization: "TechFest 2022",
    year: "2022",
    description: "First place in AI/ML category"
  }
];

export function ProfileSection() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Profile Header */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex items-start space-x-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
              <AvatarFallback className="text-lg">{currentUser.name.charAt(0)}</AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-semibold">{currentUser.name}</h1>
                  <p className="text-lg text-muted-foreground">{currentUser.role}</p>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Building className="h-4 w-4 mr-1" />
                      {currentUser.company}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {currentUser.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      Batch {currentUser.batch}
                    </div>
                  </div>
                </div>
                <Button>
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
              
              <p className="mt-4 text-muted-foreground">
                Passionate software engineer with 4+ years of experience in full-stack development. 
                Alumni of JNU, currently working at TCS leading innovative projects in web development.
              </p>
              
              <div className="flex items-center space-x-4 mt-4">
                <Button variant="outline" size="sm">
                  <Mail className="h-4 w-4 mr-2" />
                  {currentUser.email}
                </Button>
                <Button variant="outline" size="sm">
                  <Phone className="h-4 w-4 mr-2" />
                  +91 98765 43210
                </Button>
                <Button variant="outline" size="sm">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Experience Section */}
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Building className="h-5 w-5 mr-2" />
              Work Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-primary pl-4 pb-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{exp.title}</h3>
                    <Badge variant="outline">{exp.duration}</Badge>
                  </div>
                  <p className="text-muted-foreground">{exp.company} • {exp.location}</p>
                  <p className="mt-2">{exp.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Education Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="h-5 w-5 mr-2" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-primary pl-4 pb-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{edu.degree}</h3>
                    <Badge variant="outline">{edu.year}</Badge>
                  </div>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  <p className="mt-2">Grade: {edu.grade}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card>
          <CardHeader>
            <CardTitle>Skills & Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Achievements Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="h-5 w-5 mr-2" />
              Achievements & Awards
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="border-l-2 border-primary pl-4 pb-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{achievement.title}</h3>
                    <Badge variant="outline">{achievement.year}</Badge>
                  </div>
                  <p className="text-muted-foreground">{achievement.organization}</p>
                  <p className="mt-2">{achievement.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Network Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <Card>
          <CardContent className="p-4 text-center">
            <Users className="h-8 w-8 mx-auto text-blue-600 mb-2" />
            <p className="text-2xl font-semibold">487</p>
            <p className="text-sm text-muted-foreground">Connections</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <Globe className="h-8 w-8 mx-auto text-green-600 mb-2" />
            <p className="text-2xl font-semibold">1.2k</p>
            <p className="text-sm text-muted-foreground">Profile Views</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <Award className="h-8 w-8 mx-auto text-purple-600 mb-2" />
            <p className="text-2xl font-semibold">15</p>
            <p className="text-sm text-muted-foreground">Endorsements</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}