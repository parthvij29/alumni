import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
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
  Edit,
  Award,
  BookOpen,
  Users,
  Plus,
  X,
  Trash2,
  Save
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
  const [isEditMode, setIsEditMode] = useState(false);
  const [showEducationModal, setShowEducationModal] = useState(false);
  const [showExperienceModal, setShowExperienceModal] = useState(false);
  const [showAchievementModal, setShowAchievementModal] = useState(false);
  const [showBasicInfoModal, setShowBasicInfoModal] = useState(false);
  const [editingEducation, setEditingEducation] = useState<any>(null);
  const [editingExperience, setEditingExperience] = useState<any>(null);
  const [editingAchievement, setEditingAchievement] = useState<any>(null);
  const [editingBasicInfo, setEditingBasicInfo] = useState<any>(null);
  const [skillsData, setSkillsData] = useState(skills);
  const [educationData, setEducationData] = useState(education);
  const [experienceData, setExperienceData] = useState(experience);
  const [achievementsData, setAchievementsData] = useState(achievements);
  const [newSkill, setNewSkill] = useState('');
  const [availableSkills] = useState([
    "JavaScript", "React", "Node.js", "Python", "Java", "TypeScript", "Angular", "Vue.js",
    "PHP", "Ruby", "Go", "Rust", "C++", "C#", "Swift", "Kotlin", "Flutter", "React Native",
    "AWS", "Azure", "GCP", "Docker", "Kubernetes", "Jenkins", "Git", "GitLab", "GitHub",
    "MongoDB", "PostgreSQL", "MySQL", "Redis", "Elasticsearch", "GraphQL", "REST API",
    "Machine Learning", "AI", "Data Science", "DevOps", "Agile", "Scrum", "Team Leadership",
    "Project Management", "UI/UX Design", "Figma", "Adobe XD", "Photoshop"
  ]);

  // Form states for modals
  const [educationForm, setEducationForm] = useState({
    degree: '',
    institution: '',
    startYear: '',
    endYear: '',
    grade: ''
  });

  const [experienceForm, setExperienceForm] = useState({
    title: '',
    company: '',
    location: '',
    startYear: '',
    endYear: '',
    description: ''
  });

  const [achievementForm, setAchievementForm] = useState({
    title: '',
    organization: '',
    year: '',
    description: ''
  });

  const [basicInfoForm, setBasicInfoForm] = useState({
    name: currentUser.name,
    role: currentUser.role,
    company: currentUser.company,
    location: currentUser.location,
    email: currentUser.email,
    phone: '+91 98765 43210',
    linkedin: 'linkedin.com/in/amitkumar',
    github: 'github.com/amitkumar',
    bio: 'Passionate software engineer with 4+ years of experience in full-stack development. Alumni of JNU, currently working at TCS leading innovative projects in web development.'
  });

  const handleEditEducation = (edu: any, index: number) => {
    const [startYear, endYear] = edu.year.split(' - ');
    setEducationForm({
      degree: edu.degree,
      institution: edu.institution,
      startYear: startYear,
      endYear: endYear || '',
      grade: edu.grade
    });
    setEditingEducation({ ...edu, index });
    setShowEducationModal(true);
  };

  const handleEditExperience = (exp: any, index: number) => {
    const [startYear, endYear] = exp.duration.split(' - ');
    setExperienceForm({
      title: exp.title,
      company: exp.company,
      location: exp.location,
      startYear: startYear,
      endYear: endYear === 'Present' ? '' : endYear,
      description: exp.description
    });
    setEditingExperience({ ...exp, index });
    setShowExperienceModal(true);
  };

  const handleEditAchievement = (achievement: any, index: number) => {
    setAchievementForm({
      title: achievement.title,
      organization: achievement.organization,
      year: achievement.year,
      description: achievement.description
    });
    setEditingAchievement({ ...achievement, index });
    setShowAchievementModal(true);
  };

  const handleAddEducation = () => {
    setEducationForm({
      degree: '',
      institution: '',
      startYear: '',
      endYear: '',
      grade: ''
    });
    setEditingEducation(null);
    setShowEducationModal(true);
  };

  const handleAddExperience = () => {
    setExperienceForm({
      title: '',
      company: '',
      location: '',
      startYear: '',
      endYear: '',
      description: ''
    });
    setEditingExperience(null);
    setShowExperienceModal(true);
  };

  const handleAddAchievement = () => {
    setAchievementForm({
      title: '',
      organization: '',
      year: '',
      description: ''
    });
    setEditingAchievement(null);
    setShowAchievementModal(true);
  };

  const handleSaveEducation = () => {
    const year = educationForm.endYear 
      ? `${educationForm.startYear} - ${educationForm.endYear}`
      : educationForm.startYear;

    const newEducation = {
      degree: educationForm.degree,
      institution: educationForm.institution,
      year: year,
      grade: educationForm.grade
    };

    if (editingEducation !== null) {
      const updatedEducation = [...educationData];
      updatedEducation[editingEducation.index] = newEducation;
      setEducationData(updatedEducation);
    } else {
      setEducationData([...educationData, newEducation]);
    }
    setShowEducationModal(false);
  };

  const handleSaveExperience = () => {
    const duration = experienceForm.endYear 
      ? `${experienceForm.startYear} - ${experienceForm.endYear}`
      : `${experienceForm.startYear} - Present`;

    const newExperience = {
      title: experienceForm.title,
      company: experienceForm.company,
      location: experienceForm.location,
      duration: duration,
      description: experienceForm.description
    };

    if (editingExperience !== null) {
      const updatedExperience = [...experienceData];
      updatedExperience[editingExperience.index] = newExperience;
      setExperienceData(updatedExperience);
    } else {
      setExperienceData([...experienceData, newExperience]);
    }
    setShowExperienceModal(false);
  };

  const handleSaveAchievement = () => {
    const newAchievement = {
      title: achievementForm.title,
      organization: achievementForm.organization,
      year: achievementForm.year,
      description: achievementForm.description
    };

    if (editingAchievement !== null) {
      const updatedAchievements = [...achievementsData];
      updatedAchievements[editingAchievement.index] = newAchievement;
      setAchievementsData(updatedAchievements);
    } else {
      setAchievementsData([...achievementsData, newAchievement]);
    }
    setShowAchievementModal(false);
  };

  const handleDeleteEducation = (index: number) => {
    const updatedEducation = educationData.filter((_, i) => i !== index);
    setEducationData(updatedEducation);
  };

  const handleDeleteExperience = (index: number) => {
    const updatedExperience = experienceData.filter((_, i) => i !== index);
    setExperienceData(updatedExperience);
  };

  const handleDeleteAchievement = (index: number) => {
    const updatedAchievements = achievementsData.filter((_, i) => i !== index);
    setAchievementsData(updatedAchievements);
  };

  const handleAddSkill = (skill: string) => {
    if (skill && !skillsData.includes(skill)) {
      setSkillsData([...skillsData, skill]);
    }
    setNewSkill('');
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkillsData(skillsData.filter(skill => skill !== skillToRemove));
  };

  const handleEditBasicInfo = () => {
    setShowBasicInfoModal(true);
  };

  const handleSaveBasicInfo = () => {
    // In a real app, this would update the user data
    console.log('Saving basic info:', basicInfoForm);
    setShowBasicInfoModal(false);
  };

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
                  <h1 className="text-2xl font-semibold">{basicInfoForm.name}</h1>
                  <p className="text-lg text-muted-foreground">{basicInfoForm.role}</p>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Building className="h-4 w-4 mr-1" />
                      {basicInfoForm.company}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {basicInfoForm.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      Batch {currentUser.batch}
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  {isEditMode ? (
                    <>
                      <Button variant="outline" onClick={() => setIsEditMode(false)}>
                        Cancel
                      </Button>
                      <Button onClick={() => setIsEditMode(false)}>
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                      </Button>
                    </>
                  ) : (
                    <Button onClick={() => setIsEditMode(true)}>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Button>
                  )}
                  {isEditMode && (
                    <Button variant="outline" size="sm" onClick={handleEditBasicInfo}>
                      <Edit className="h-4 w-4 mr-1" />
                      Edit Info
                    </Button>
                  )}
                </div>
              </div>
              
              <p className="mt-4 text-muted-foreground">
                {basicInfoForm.bio}
              </p>
              
              <div className="flex items-center space-x-4 mt-4">
                <Button variant="outline" size="sm">
                  <Mail className="h-4 w-4 mr-2" />
                  {basicInfoForm.email}
                </Button>
                <Button variant="outline" size="sm">
                  <Phone className="h-4 w-4 mr-2" />
                  {basicInfoForm.phone}
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

      {/* Experience Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center">
              <Building className="h-5 w-5 mr-2" />
              Work Experience
            </CardTitle>
            {isEditMode && (
              <Button variant="outline" size="sm" onClick={handleAddExperience}>
                <Plus className="h-4 w-4 mr-1" />
                Add Experience
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {experienceData.map((exp, index) => (
              <div key={index} className="border-l-2 border-primary pl-4 pb-4 relative">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{exp.title}</h3>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">{exp.duration}</Badge>
                    {isEditMode && (
                      <div className="flex space-x-1">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => handleEditExperience(exp, index)}
                          className="h-8 w-8 p-0"
                        >
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => handleDeleteExperience(index)}
                          className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    )}
                  </div>
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
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center">
              <BookOpen className="h-5 w-5 mr-2" />
              Education
            </CardTitle>
            {isEditMode && (
              <Button variant="outline" size="sm" onClick={handleAddEducation}>
                <Plus className="h-4 w-4 mr-1" />
                Add Education
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <div key={index} className="border-l-2 border-primary pl-4 pb-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">{edu.year}</Badge>
                    {isEditMode && (
                      <div className="flex space-x-1">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => handleEditEducation(edu, index)}
                          className="h-8 w-8 p-0"
                        >
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => handleDeleteEducation(index)}
                          className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    )}
                  </div>
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
          <div className="space-y-4">
            {isEditMode && (
              <div className="flex space-x-2">
                <Select value={newSkill} onValueChange={setNewSkill}>
                  <SelectTrigger className="flex-1">
                    <SelectValue placeholder="Select a skill to add..." />
                  </SelectTrigger>
                  <SelectContent>
                    {availableSkills
                      .filter(skill => !skillsData.includes(skill))
                      .map(skill => (
                        <SelectItem key={skill} value={skill}>
                          {skill}
                        </SelectItem>
                      ))
                    }
                  </SelectContent>
                </Select>
                <Button 
                  onClick={() => handleAddSkill(newSkill)}
                  disabled={!newSkill || skillsData.includes(newSkill)}
                >
                  Add
                </Button>
              </div>
            )}
            <div className="flex flex-wrap gap-2">
              {skillsData.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className={`px-3 py-1 ${isEditMode ? 'pr-1' : ''} relative group`}
                >
                  {skill}
                  {isEditMode && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveSkill(skill)}
                      className="ml-1 h-4 w-4 p-0 hover:bg-red-100 hover:text-red-600"
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  )}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Achievements Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center">
              <Award className="h-5 w-5 mr-2" />
              Achievements & Awards
            </CardTitle>
            {isEditMode && (
              <Button variant="outline" size="sm" onClick={handleAddAchievement}>
                <Plus className="h-4 w-4 mr-1" />
                Add Achievement
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {achievementsData.map((achievement, index) => (
              <div key={index} className="border-l-2 border-primary pl-4 pb-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{achievement.title}</h3>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">{achievement.year}</Badge>
                    {isEditMode && (
                      <div className="flex space-x-1">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => handleEditAchievement(achievement, index)}
                          className="h-8 w-8 p-0"
                        >
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => handleDeleteAchievement(index)}
                          className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-muted-foreground">{achievement.organization}</p>
                <p className="mt-2">{achievement.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

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

      {/* Modals */}
      <Dialog open={showEducationModal} onOpenChange={setShowEducationModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>
              {editingEducation ? 'Edit Education' : 'Add Education'}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="degree">Degree</Label>
              <Input 
                id="degree"
                type="text" 
                value={educationForm.degree} 
                onChange={e => setEducationForm({ ...educationForm, degree: e.target.value })}
                placeholder="e.g., Bachelor of Computer Science"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="institution">Institution</Label>
              <Input 
                id="institution"
                type="text" 
                value={educationForm.institution} 
                onChange={e => setEducationForm({ ...educationForm, institution: e.target.value })}
                placeholder="e.g., IIT Delhi"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="startYear">Start Year</Label>
                <Input 
                  id="startYear"
                  type="text" 
                  value={educationForm.startYear} 
                  onChange={e => setEducationForm({ ...educationForm, startYear: e.target.value })}
                  placeholder="2018"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="endYear">End Year</Label>
                <Input 
                  id="endYear"
                  type="text" 
                  value={educationForm.endYear} 
                  onChange={e => setEducationForm({ ...educationForm, endYear: e.target.value })}
                  placeholder="2022"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="grade">Grade/CGPA</Label>
              <Input 
                id="grade"
                type="text" 
                value={educationForm.grade} 
                onChange={e => setEducationForm({ ...educationForm, grade: e.target.value })}
                placeholder="8.5 CGPA"
              />
            </div>
            <div className="flex justify-end space-x-2 pt-4">
              <Button onClick={handleSaveEducation}>
                Save
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showExperienceModal} onOpenChange={setShowExperienceModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>
              {editingExperience ? 'Edit Experience' : 'Add Experience'}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Job Title</Label>
              <Input 
                id="title"
                type="text" 
                value={experienceForm.title} 
                onChange={e => setExperienceForm({ ...experienceForm, title: e.target.value })}
                placeholder="e.g., Software Engineer"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input 
                id="company"
                type="text" 
                value={experienceForm.company} 
                onChange={e => setExperienceForm({ ...experienceForm, company: e.target.value })}
                placeholder="e.g., Google"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input 
                id="location"
                type="text" 
                value={experienceForm.location} 
                onChange={e => setExperienceForm({ ...experienceForm, location: e.target.value })}
                placeholder="e.g., Mumbai"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expStartYear">Start Year</Label>
                <Input 
                  id="expStartYear"
                  type="text" 
                  value={experienceForm.startYear} 
                  onChange={e => setExperienceForm({ ...experienceForm, startYear: e.target.value })}
                  placeholder="2020"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="expEndYear">End Year</Label>
                <Input 
                  id="expEndYear"
                  type="text" 
                  value={experienceForm.endYear} 
                  onChange={e => setExperienceForm({ ...experienceForm, endYear: e.target.value })}
                  placeholder="2024 or leave empty for current"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea 
                id="description"
                value={experienceForm.description} 
                onChange={e => setExperienceForm({ ...experienceForm, description: e.target.value })}
                placeholder="Describe your role and achievements..."
                rows={3}
              />
            </div>
            <div className="flex justify-end space-x-2 pt-4">
              <Button onClick={handleSaveExperience}>
                Save
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showAchievementModal} onOpenChange={setShowAchievementModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>
              {editingAchievement ? 'Edit Achievement' : 'Add Achievement'}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="achievementTitle">Title</Label>
              <Input 
                id="achievementTitle"
                type="text" 
                value={achievementForm.title} 
                onChange={e => setAchievementForm({ ...achievementForm, title: e.target.value })}
                placeholder="e.g., Best Employee Award"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="organization">Organization</Label>
              <Input 
                id="organization"
                type="text" 
                value={achievementForm.organization} 
                onChange={e => setAchievementForm({ ...achievementForm, organization: e.target.value })}
                placeholder="e.g., TCS"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="year">Year</Label>
              <Input 
                id="year"
                type="text" 
                value={achievementForm.year} 
                onChange={e => setAchievementForm({ ...achievementForm, year: e.target.value })}
                placeholder="2023"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="achievementDescription">Description</Label>
              <Textarea 
                id="achievementDescription"
                value={achievementForm.description} 
                onChange={e => setAchievementForm({ ...achievementForm, description: e.target.value })}
                placeholder="Describe the achievement..."
                rows={3}
              />
            </div>
            <div className="flex justify-end space-x-2 pt-4">
              <Button onClick={handleSaveAchievement}>
                Save
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showBasicInfoModal} onOpenChange={setShowBasicInfoModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Basic Information</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name"
                type="text" 
                value={basicInfoForm.name} 
                onChange={e => setBasicInfoForm({ ...basicInfoForm, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Job Title</Label>
              <Input 
                id="role"
                type="text" 
                value={basicInfoForm.role} 
                onChange={e => setBasicInfoForm({ ...basicInfoForm, role: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="basicCompany">Company</Label>
              <Input 
                id="basicCompany"
                type="text" 
                value={basicInfoForm.company} 
                onChange={e => setBasicInfoForm({ ...basicInfoForm, company: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="basicLocation">Location</Label>
              <Input 
                id="basicLocation"
                type="text" 
                value={basicInfoForm.location} 
                onChange={e => setBasicInfoForm({ ...basicInfoForm, location: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email"
                type="email" 
                value={basicInfoForm.email} 
                onChange={e => setBasicInfoForm({ ...basicInfoForm, email: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input 
                id="phone"
                type="text" 
                value={basicInfoForm.phone} 
                onChange={e => setBasicInfoForm({ ...basicInfoForm, phone: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="linkedin">LinkedIn</Label>
              <Input 
                id="linkedin"
                type="text" 
                value={basicInfoForm.linkedin} 
                onChange={e => setBasicInfoForm({ ...basicInfoForm, linkedin: e.target.value })}
                placeholder="linkedin.com/in/yourprofile"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="github">GitHub</Label>
              <Input 
                id="github"
                type="text" 
                value={basicInfoForm.github} 
                onChange={e => setBasicInfoForm({ ...basicInfoForm, github: e.target.value })}
                placeholder="github.com/yourusername"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea 
                id="bio"
                value={basicInfoForm.bio} 
                onChange={e => setBasicInfoForm({ ...basicInfoForm, bio: e.target.value })}
                rows={3}
              />
            </div>
            <div className="flex justify-end space-x-2 pt-4">
              <Button onClick={handleSaveBasicInfo}>
                Save
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}