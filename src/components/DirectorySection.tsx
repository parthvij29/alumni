import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { AlumniFullProfile } from './AlumniFullProfile';
import { 
  Search, 
  Filter, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  MessageCircle, 
  ExternalLink,
  Users,
  Building,
  Calendar,
  Mail,
  Phone,
  Grid,
  List,
  Eye,
  Linkedin,
  UserPlus
} from 'lucide-react';

export function DirectorySection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedAlumni, setSelectedAlumni] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [showFullProfile, setShowFullProfile] = useState(false);
  const [connectedAlumni, setConnectedAlumni] = useState(new Set()); // Track connected alumni
  const [filters, setFilters] = useState({
    college: 'all',
    year: 'all',
    location: 'all',
    industry: 'all',
    company: 'all'
  });

  const alumniData = [
    {
      id: 1,
      name: 'Priya Sharma',
      email: 'priya.sharma@email.com',
      phone: '+91 9876543210',
      avatar: 'https://github.com/shadcn.png',
      college: 'IIT Delhi',
      degree: 'B.Tech Computer Science',
      graduationYear: '2018',
      currentCompany: 'Google India',
      currentRole: 'Senior Software Engineer',
      location: 'Mumbai, Maharashtra',
      industry: 'Technology',
      experience: '5 years',
      bio: 'Passionate about AI/ML and building scalable systems. Love mentoring and contributing to open source.',
      skills: ['React', 'Python', 'Machine Learning', 'AWS'],
      linkedin: 'linkedin.com/in/priyasharma',
      achievements: ['Google Cloud Certified', 'Tech Lead for 3 major projects'],
      isOnline: true,
      mutualConnections: 12,
      batchmates: true
    },
    {
      id: 2,
      name: 'Rahul Kumar',
      email: 'rahul.kumar@email.com',
      phone: '+91 9876543211',
      avatar: 'https://github.com/shadcn.png',
      college: 'IIT Delhi',
      degree: 'B.Tech Computer Science',
      graduationYear: '2018',
      currentCompany: 'Microsoft',
      currentRole: 'Product Manager',
      location: 'Bangalore, Karnataka',
      industry: 'Technology',
      experience: '5 years',
      bio: 'Product enthusiast with a background in engineering. Building products that impact millions of users.',
      skills: ['Product Management', 'Data Analysis', 'Strategy'],
      linkedin: 'linkedin.com/in/rahulkumar',
      achievements: ['PMP Certified', 'Led 5 successful product launches'],
      isOnline: false,
      mutualConnections: 8,
      batchmates: true
    },
    {
      id: 3,
      name: 'Anjali Gupta',
      email: 'anjali.gupta@email.com',
      phone: '+91 9876543212',
      avatar: 'https://github.com/shadcn.png',
      college: 'NIT Trichy',
      degree: 'B.Tech Electronics',
      graduationYear: '2015',
      currentCompany: 'Amazon',
      currentRole: 'Data Scientist',
      location: 'Delhi, NCR',
      industry: 'Technology',
      experience: '8 years',
      bio: 'Data scientist passionate about using AI to solve real-world problems. PhD in Machine Learning.',
      skills: ['Python', 'R', 'Deep Learning', 'Statistics'],
      linkedin: 'linkedin.com/in/anjaligupta',
      achievements: ['PhD in ML', '10+ published papers', 'Data Science team lead'],
      isOnline: true,
      mutualConnections: 5,
      batchmates: false
    },
    {
      id: 4,
      name: 'Vikram Singh',
      email: 'vikram.singh@email.com',
      phone: '+91 9876543213',
      avatar: 'https://github.com/shadcn.png',
      college: 'IIT Delhi',
      degree: 'B.Tech Mechanical',
      graduationYear: '2017',
      currentCompany: 'Tesla',
      currentRole: 'Senior Engineer',
      location: 'San Francisco, USA',
      industry: 'Automotive',
      experience: '6 years',
      bio: 'Mechanical engineer working on sustainable transportation. Passionate about clean energy and innovation.',
      skills: ['CAD Design', 'Project Management', 'Renewable Energy'],
      linkedin: 'linkedin.com/in/vikramsingh',
      achievements: ['Tesla Model Y contributor', 'Clean Energy Advocate'],
      isOnline: false,
      mutualConnections: 15,
      batchmates: false
    },
    {
      id: 5,
      name: 'Neha Patel',
      email: 'neha.patel@email.com',
      phone: '+91 9876543214',
      avatar: 'https://github.com/shadcn.png',
      college: 'BITS Pilani',
      degree: 'B.E Computer Science',
      graduationYear: '2019',
      currentCompany: 'Flipkart',
      currentRole: 'Software Engineer',
      location: 'Bangalore, Karnataka',
      industry: 'E-commerce',
      experience: '4 years',
      bio: 'Full-stack developer with expertise in microservices architecture. Building scalable e-commerce solutions.',
      skills: ['Java', 'Spring Boot', 'React', 'Microservices'],
      linkedin: 'linkedin.com/in/nehapatel',
      achievements: ['Flipkart Innovation Award', 'Tech Speaker at conferences'],
      isOnline: true,
      mutualConnections: 7,
      batchmates: false
    },
    {
      id: 6,
      name: 'Arjun Reddy',
      email: 'arjun.reddy@email.com',
      phone: '+91 9876543215',
      avatar: 'https://github.com/shadcn.png',
      college: 'IIT Delhi',
      degree: 'B.Tech Computer Science',
      graduationYear: '2018',
      currentCompany: 'Zomato',
      currentRole: 'Tech Lead',
      location: 'Gurgaon, Haryana',
      industry: 'Food Tech',
      experience: '5 years',
      bio: 'Technology leader passionate about food-tech innovations. Building systems that serve millions of orders daily.',
      skills: ['Node.js', 'MongoDB', 'System Design', 'Team Leadership'],
      linkedin: 'linkedin.com/in/arjunreddy',
      achievements: ['Led delivery optimization system', 'Zomato Tech Excellence Award'],
      isOnline: false,
      mutualConnections: 18,
      batchmates: true
    }
  ];

  const filteredAlumni = alumniData.filter(alumni => {
    const matchesSearch = alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alumni.currentCompany.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alumni.currentRole.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alumni.college.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCollege = filters.college === 'all' || alumni.college === filters.college;
    const matchesYear = filters.year === 'all' || alumni.graduationYear === filters.year;
    const matchesLocation = filters.location === 'all' || alumni.location.includes(filters.location);
    const matchesIndustry = filters.industry === 'all' || alumni.industry === filters.industry;
    const matchesCompany = filters.company === 'all' || alumni.currentCompany === filters.company;

    return matchesSearch && matchesCollege && matchesYear && matchesLocation && matchesIndustry && matchesCompany;
  });

  const batchmates = filteredAlumni.filter(alumni => alumni.batchmates);
  const allAlumni = filteredAlumni;

  // Show full-screen profile if requested
  if (showFullProfile && selectedAlumni) {
    return (
      <AlumniFullProfile 
        alumni={selectedAlumni}
        onBack={() => setShowFullProfile(false)}
        isConnected={connectedAlumni.has(selectedAlumni.id)}
      />
    );
  }

  const AlumniCard = ({ alumni, isGrid = true }) => (
    <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => {
      setSelectedAlumni(alumni);
      setShowProfile(true);
    }}>
      <CardContent className={`p-4 ${isGrid ? '' : 'flex items-center space-x-4'}`}>
        <div className={`flex ${isGrid ? 'flex-col items-center text-center space-y-3' : 'items-center space-x-4 flex-1'}`}>
          <div className="relative">
            <Avatar className={isGrid ? "h-16 w-16" : "h-12 w-12"}>
              <AvatarImage src={alumni.avatar} />
              <AvatarFallback>{alumni.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            {alumni.isOnline && (
              <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 rounded-full border-2 border-white"></div>
            )}
          </div>
          
          <div className={`${isGrid ? '' : 'flex-1'}`}>
            <h3 className={`${isGrid ? 'text-lg' : 'text-base'} mb-1`}>{alumni.name}</h3>
            <p className={`text-gray-600 ${isGrid ? 'text-sm' : 'text-sm'} mb-1`}>{alumni.currentRole}</p>
            <p className={`text-gray-500 ${isGrid ? 'text-xs' : 'text-xs'} mb-2`}>{alumni.currentCompany}</p>
            
            <div className={`flex ${isGrid ? 'flex-col space-y-1' : 'space-x-4'} text-xs text-gray-500 mb-2`}>
              <div className="flex items-center justify-center">
                <GraduationCap className="h-3 w-3 mr-1" />
                <span>{alumni.college} '{alumni.graduationYear.slice(-2)}</span>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="h-3 w-3 mr-1" />
                <span>{alumni.location.split(',')[0]}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1 mb-3 justify-center">
              {alumni.batchmates && (
                <Badge variant="default" className="text-xs">Batchmate</Badge>
              )}
              {alumni.mutualConnections > 0 && (
                <Badge variant="secondary" className="text-xs">{alumni.mutualConnections} mutual</Badge>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl text-gray-900">Alumni Directory</h1>
          <p className="text-gray-600">Connect with fellow alumni and batchmates</p>
        </div>
        <div className="flex space-x-2">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('grid')}
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('list')}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search by name, company, role, or college..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              <Select value={filters.college} onValueChange={(value) => setFilters({...filters, college: value})}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="College" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Colleges</SelectItem>
                  <SelectItem value="IIT Delhi">IIT Delhi</SelectItem>
                  <SelectItem value="IIT Mumbai">IIT Mumbai</SelectItem>
                  <SelectItem value="BITS Pilani">BITS Pilani</SelectItem>
                  <SelectItem value="NIT Trichy">NIT Trichy</SelectItem>
                  <SelectItem value="DTU">DTU</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filters.year} onValueChange={(value) => setFilters({...filters, year: value})}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Years</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                  <SelectItem value="2020">2020</SelectItem>
                  <SelectItem value="2019">2019</SelectItem>
                  <SelectItem value="2018">2018</SelectItem>
                  <SelectItem value="2017">2017</SelectItem>
                  <SelectItem value="2016">2016</SelectItem>
                  <SelectItem value="2015">2015</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filters.location} onValueChange={(value) => setFilters({...filters, location: value})}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="Mumbai">Mumbai</SelectItem>
                  <SelectItem value="Delhi">Delhi</SelectItem>
                  <SelectItem value="Bangalore">Bangalore</SelectItem>
                  <SelectItem value="Pune">Pune</SelectItem>
                  <SelectItem value="Hyderabad">Hyderabad</SelectItem>
                  <SelectItem value="USA">USA</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filters.industry} onValueChange={(value) => setFilters({...filters, industry: value})}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Industries</SelectItem>
                  <SelectItem value="Technology">Technology</SelectItem>
                  <SelectItem value="Finance">Finance</SelectItem>
                  <SelectItem value="Healthcare">Healthcare</SelectItem>
                  <SelectItem value="Education">Education</SelectItem>
                  <SelectItem value="Automotive">Automotive</SelectItem>
                  <SelectItem value="E-commerce">E-commerce</SelectItem>
                  <SelectItem value="Food Tech">Food Tech</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Advanced Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Alumni ({allAlumni.length})</TabsTrigger>
          <TabsTrigger value="batchmates">My Batchmates ({batchmates.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className={viewMode === 'grid' 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            : "space-y-2"
          }>
            {allAlumni.map((alumni) => (
              <AlumniCard key={alumni.id} alumni={alumni} isGrid={viewMode === 'grid'} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="batchmates" className="space-y-4">
          <div className={viewMode === 'grid' 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            : "space-y-2"
          }>
            {batchmates.map((alumni) => (
              <AlumniCard key={alumni.id} alumni={alumni} isGrid={viewMode === 'grid'} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Alumni Profile Dialog */}
      <Dialog open={showProfile} onOpenChange={setShowProfile}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Alumni Profile</DialogTitle>
          </DialogHeader>
          {selectedAlumni && (
            <div className="space-y-6">
              {/* Profile Header */}
              <div className="flex items-start space-x-4">
                <div className="relative">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={selectedAlumni.avatar} />
                    <AvatarFallback className="text-lg">
                      {selectedAlumni.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  {selectedAlumni.isOnline && (
                    <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl mb-1">{selectedAlumni.name}</h2>
                  <p className="text-gray-600 mb-2">{selectedAlumni.currentRole} at {selectedAlumni.currentCompany}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center">
                      <GraduationCap className="h-4 w-4 mr-1" />
                      <span>{selectedAlumni.college} '{selectedAlumni.graduationYear.slice(-2)}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{selectedAlumni.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-1" />
                      <span>{selectedAlumni.experience}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    {selectedAlumni.batchmates && (
                      <Badge variant="default">Batchmate</Badge>
                    )}
                    {selectedAlumni.mutualConnections > 0 && (
                      <Badge variant="secondary">{selectedAlumni.mutualConnections} mutual connections</Badge>
                    )}
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div>
                <h3 className="text-lg mb-2">About</h3>
                <p className="text-gray-700">{selectedAlumni.bio}</p>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-lg mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedAlumni.skills.map((skill, index) => (
                    <Badge key={index} variant="outline">{skill}</Badge>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-lg mb-2">Achievements</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {selectedAlumni.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>

              {/* Contact Information */}
              

              {/* Action Buttons */}
              <div className="flex space-x-3 pt-4 border-t">
                <Button 
                  className="flex-1"
                  onClick={() => {
                    setShowProfile(false);
                    setShowFullProfile(true);
                  }}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  View Full Profile
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => {
                    const newConnectedAlumni = new Set(connectedAlumni);
                    if (connectedAlumni.has(selectedAlumni.id)) {
                      newConnectedAlumni.delete(selectedAlumni.id);
                    } else {
                      newConnectedAlumni.add(selectedAlumni.id);
                    }
                    setConnectedAlumni(newConnectedAlumni);
                  }}
                >
                  <UserPlus className="h-4 w-4 mr-2" />
                  {connectedAlumni.has(selectedAlumni.id) ? 'Connected' : 'Connect'}
                </Button>
                <Button variant="outline">
                  <MessageCircle className="h-4 w-4" />
                </Button>
                
                <Button variant="outline" size="sm">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Full Alumni Profile Dialog */}
      <Dialog open={showFullProfile} onOpenChange={setShowFullProfile}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Full Alumni Profile</DialogTitle>
          </DialogHeader>
          {selectedAlumni && (
            <div className="space-y-6">
              {/* Profile Header */}
              <div className="flex items-start space-x-4">
                <div className="relative">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={selectedAlumni.avatar} />
                    <AvatarFallback className="text-lg">
                      {selectedAlumni.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  {selectedAlumni.isOnline && (
                    <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl mb-1">{selectedAlumni.name}</h2>
                  <p className="text-gray-600 mb-2">{selectedAlumni.currentRole} at {selectedAlumni.currentCompany}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center">
                      <GraduationCap className="h-4 w-4 mr-1" />
                      <span>{selectedAlumni.college} '{selectedAlumni.graduationYear.slice(-2)}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{selectedAlumni.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-1" />
                      <span>{selectedAlumni.experience}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    {selectedAlumni.batchmates && (
                      <Badge variant="default">Batchmate</Badge>
                    )}
                    {selectedAlumni.mutualConnections > 0 && (
                      <Badge variant="secondary">{selectedAlumni.mutualConnections} mutual connections</Badge>
                    )}
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div>
                <h3 className="text-lg mb-2">About</h3>
                <p className="text-gray-700">{selectedAlumni.bio}</p>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-lg mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedAlumni.skills.map((skill, index) => (
                    <Badge key={index} variant="outline">{skill}</Badge>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-lg mb-2">Achievements</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {selectedAlumni.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-lg mb-2">Contact</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-gray-400" />
                    <span>{selectedAlumni.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-gray-400" />
                    <span>{selectedAlumni.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2 text-gray-400" />
                    <a href={`https://${selectedAlumni.linkedin}`} className="text-blue-600 hover:underline">
                      {selectedAlumni.linkedin}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3 pt-4 border-t">
                <Button className="flex-1">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
                <Button variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  Connect
                </Button>
                <Button variant="outline">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}