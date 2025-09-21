import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { useState } from 'react';
import { 
  MapPin, 
  Building, 
  Calendar, 
  Mail, 
  Phone, 
  Linkedin,
  Github,
  Globe,
  Award,
  BookOpen,
  Users,
  MessageCircle,
  ArrowLeft,
  UserPlus
} from 'lucide-react';

export function AlumniFullProfile({ alumni, onBack, isConnected = false }) {
  const [connectionStatus, setConnectionStatus] = useState(isConnected);

  const handleConnect = () => {
    setConnectionStatus(!connectionStatus);
  };

  if (!alumni) return null;

  // Transform alumni data to match ProfileSection structure
  const experienceData = [
    {
      title: alumni.currentRole,
      company: alumni.currentCompany,
      location: alumni.location,
      duration: `${new Date().getFullYear() - parseInt(alumni.experience)} - Present`,
      description: alumni.bio
    }
  ];

  const educationData = [
    {
      degree: alumni.degree,
      institution: alumni.college,
      startYear: alumni.graduationYear - 4, // Assuming 4-year degree
      endYear: alumni.graduationYear,
      grade: "N/A"
    }
  ];

  return (
    <div className="fixed inset-0 bg-background z-50 overflow-y-auto">
      <div className="p-6 max-w-4xl mx-auto">
        {/* Back Button */}
        <Button variant="outline" onClick={onBack} className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Directory
        </Button>

        {/* Profile Header - Exact same structure as ProfileSection */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-start space-x-6">
              <Avatar className="h-24 w-24">
                <AvatarImage src={alumni.avatar} alt={alumni.name} />
                <AvatarFallback className="text-lg">{alumni.name.charAt(0)}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-2xl font-semibold">{alumni.name}</h1>
                    <p className="text-lg text-muted-foreground">{alumni.currentRole}</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Building className="h-4 w-4 mr-1" />
                        {alumni.currentCompany}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {alumni.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        Batch {alumni.graduationYear}
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button>
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Chat
                    </Button>
                    <Button variant="outline" onClick={handleConnect}>
                      <UserPlus className="h-4 w-4 mr-2" />
                      {connectionStatus ? 'Connected' : 'Connect'}
                    </Button>
                  </div>
                </div>
                
                <p className="mt-4 text-muted-foreground">
                  {alumni.bio}
                </p>
                
                <div className="flex items-center space-x-4 mt-4">
                  <Button variant="outline" size="sm">
                    <Mail className="h-4 w-4 mr-2" />
                    {connectionStatus ? alumni.email : 'Connect to view email'}
                  </Button>
                  <Button variant="outline" size="sm">
                    <Phone className="h-4 w-4 mr-2" />
                    {connectionStatus ? alumni.phone : 'Connect to view phone'}
                  </Button>
                  <Button variant="outline" size="sm">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Experience Section - Exact same structure as ProfileSection */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Building className="h-5 w-5 mr-2" />
              Work Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {experienceData.map((exp, index) => (
                <div key={index} className="border-l-2 border-primary pl-4 pb-4 relative">
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

        {/* Education Section - Exact same structure as ProfileSection */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="h-5 w-5 mr-2" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <div key={index} className="border-l-2 border-primary pl-4 pb-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{edu.degree}</h3>
                    <Badge variant="outline">{edu.startYear} - {edu.endYear}</Badge>
                  </div>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  {edu.grade !== "N/A" && <p className="mt-2">Grade: {edu.grade}</p>}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skills Section - Exact same structure as ProfileSection */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Skills & Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {alumni.skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Achievements Section - Exact same structure as ProfileSection */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="h-5 w-5 mr-2" />
              Achievements & Awards
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {alumni.achievements.map((achievement, index) => (
                <div key={index} className="border-l-2 border-primary pl-4 pb-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{achievement}</h3>
                    <Badge variant="outline">{new Date().getFullYear()}</Badge>
                  </div>
                  <p className="text-muted-foreground">{alumni.currentCompany}</p>
                  <p className="mt-2">{achievement}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Network Stats - Exact same structure as ProfileSection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <Users className="h-8 w-8 mx-auto text-blue-600 mb-2" />
              <p className="text-2xl font-semibold">{alumni.mutualConnections || 0}</p>
              <p className="text-sm text-muted-foreground">Mutual Connections</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <Award className="h-8 w-8 mx-auto text-purple-600 mb-2" />
              <p className="text-2xl font-semibold">{alumni.achievements.length}</p>
              <p className="text-sm text-muted-foreground">Endorsements</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}