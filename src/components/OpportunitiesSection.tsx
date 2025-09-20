import React, { useState, useRef } from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Briefcase, MapPin, Clock, DollarSign, Plus, BookOpen, Users, Award, Calendar, X } from 'lucide-react';

export function OpportunitiesSection() {
  const [showCreateOpportunity, setShowCreateOpportunity] = useState(false);
  const [opportunityType, setOpportunityType] = useState('');
  const [compensationDuration, setCompensationDuration] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [showTagSuggestions, setShowTagSuggestions] = useState(false);
  const tagInputRef = useRef<HTMLInputElement>(null);

  // Predefined tags (simulating existing tags)
  const existingTags = [
    'React', 'Node.js', 'JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'Angular', 'Vue.js',
    'Full-time', 'Part-time', 'Remote', 'On-site', 'Hybrid', 'Freelance', 'Contract',
    'UI/UX', 'Frontend', 'Backend', 'Full-stack', 'DevOps', 'Mobile Development',
    'Product Management', 'Data Science', 'Machine Learning', 'AI', 'Blockchain',
    'Startup', 'Fintech', 'Edtech', 'Healthcare', 'E-commerce', 'SaaS',
    'Leadership', 'Mentorship', 'Internship', 'Entry Level', 'Senior Level',
    'Microservices', 'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes'
  ];

  const opportunities = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Google India',
      type: 'job',
      location: 'Bangalore',
      salary: '₹25-35 LPA',
      experience: '3-5 years',
      description: 'We are looking for a Senior Software Engineer to join our Search team. You will work on large-scale distributed systems.',
      postedBy: {
        name: 'Priya Sharma',
        avatar: 'https://github.com/shadcn.png',
        college: 'IIT Delhi',
        year: '2018'
      },
      postedDate: '2 days ago',
      applicants: 23,
      tags: ['React', 'Node.js', 'Microservices', 'Full-time']
    },
    {
      id: 2,
      title: 'Product Management Internship',
      company: 'Zomato',
      type: 'internship',
      location: 'Gurgaon',
      salary: '₹50,000/month',
      experience: '0-1 years',
      description: 'Join our Product team as an intern and get hands-on experience in product strategy and execution.',
      postedBy: {
        name: 'Rahul Kumar',
        avatar: 'https://github.com/shadcn.png',
        college: 'BITS Pilani',
        year: '2016'
      },
      postedDate: '1 week ago',
      applicants: 45,
      tags: ['Product Management', 'Strategy', 'Internship']
    },
    {
      id: 3,
      title: 'Freelance UI/UX Designer',
      company: 'Multiple Startups',
      type: 'freelancing',
      location: 'Remote',
      salary: '₹2,000-5,000/day',
      experience: '2+ years',
      description: 'Looking for talented designers to work on various startup projects. Flexible timings and remote work.',
      postedBy: {
        name: 'Anjali Gupta',
        avatar: 'https://github.com/shadcn.png',
        college: 'NIT Trichy',
        year: '2015'
      },
      postedDate: '3 days ago',
      applicants: 12,
      tags: ['UI/UX', 'Figma', 'Remote', 'Freelance']
    },
    {
      id: 4,
      title: 'Tech Conference 2024',
      company: 'Indian Tech Summit',
      type: 'seminar',
      location: 'Mumbai',
      salary: 'Free',
      experience: 'All levels',
      description: 'Annual tech conference featuring talks from industry leaders. Great networking opportunity.',
      postedBy: {
        name: 'Tech Summit Team',
        avatar: '🎯',
        college: 'Various',
        year: 'N/A'
      },
      postedDate: '5 days ago',
      applicants: 156,
      tags: ['Conference', 'Networking', 'AI/ML', 'Blockchain']
    },
    {
      id: 5,
      title: 'Startup Mentorship Program',
      company: 'Alumni Mentors Network',
      type: 'mentorship',
      location: 'Virtual',
      salary: 'Voluntary',
      experience: '5+ years',
      description: 'Become a mentor for upcoming entrepreneurs. Share your experience and guide the next generation.',
      postedBy: {
        name: 'Dr. Vikram Singh',
        avatar: 'https://github.com/shadcn.png',
        college: 'IIT Mumbai',
        year: '2010'
      },
      postedDate: '1 day ago',
      applicants: 8,
      tags: ['Mentorship', 'Startups', 'Entrepreneurship']
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'job': return <Briefcase className="h-4 w-4" />;
      case 'internship': return <BookOpen className="h-4 w-4" />;
      case 'freelancing': return <Users className="h-4 w-4" />;
      case 'seminar': return <Award className="h-4 w-4" />;
      case 'mentorship': return <Users className="h-4 w-4" />;
      default: return <Briefcase className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'job': return 'bg-blue-100 text-blue-700';
      case 'internship': return 'bg-green-100 text-green-700';
      case 'freelancing': return 'bg-purple-100 text-purple-700';
      case 'seminar': return 'bg-orange-100 text-orange-700';
      case 'mentorship': return 'bg-pink-100 text-pink-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getCompensationPlaceholder = () => {
    switch (compensationDuration) {
      case 'yearly': return 'e.g., ₹10-15 LPA';
      case 'monthly': return 'e.g., ₹50,000/month';
      case 'one-time': return 'e.g., ₹25,000';
      default: return 'Enter compensation';
    }
  };

  const handleTagInputChange = (value: string) => {
    setTagInput(value);
    setShowTagSuggestions(value.length > 0);
  };

  const addTag = (tag: string) => {
    if (tag.trim() && !selectedTags.includes(tag.trim())) {
      setSelectedTags([...selectedTags, tag.trim()]);
    }
    setTagInput('');
    setShowTagSuggestions(false);
    tagInputRef.current?.focus();
  };

  const removeTag = (tagToRemove: string) => {
    setSelectedTags(prev => prev.filter(tag => tag !== tagToRemove));
  };


  const handleTagInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      addTag(tagInput);
    } else if (e.key === 'Backspace' && !tagInput && selectedTags.length > 0) {
      removeTag(selectedTags[selectedTags.length - 1]);
    }
  };

  const filteredTags = existingTags.filter(tag => 
    tag.toLowerCase().includes(tagInput.toLowerCase()) && 
    !selectedTags.includes(tag)
  );

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl text-gray-900">Opportunities</h1>
          <p className="text-gray-600">Jobs, internships, freelancing, seminars & mentorships</p>
        </div>
        <Dialog open={showCreateOpportunity} onOpenChange={setShowCreateOpportunity}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Post Opportunity
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Post New Opportunity</DialogTitle>
            </DialogHeader>
            <div className="space-y-6 p-1">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Enter opportunity title" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company/Organization</Label>
                <Input id="company" placeholder="Company name" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="type">Type</Label>
                  <Select value={opportunityType} onValueChange={setOpportunityType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="job">Job</SelectItem>
                      <SelectItem value="internship">Internship</SelectItem>
                      <SelectItem value="freelancing">Freelancing</SelectItem>
                      <SelectItem value="seminar">Seminar/Conference</SelectItem>
                      <SelectItem value="mentorship">Mentorship</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="Location" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="compensation-duration">Compensation Duration</Label>
                  <Select value={compensationDuration} onValueChange={setCompensationDuration}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="one-time">One Time</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="yearly">Yearly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="salary">
                    Compensation {compensationDuration === 'yearly' ? '(LPA)' : ''}
                  </Label>
                  <Input 
                    id="salary" 
                    placeholder={getCompensationPlaceholder()} 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="experience">Experience Required</Label>
                <Select value={experienceLevel} onValueChange={setExperienceLevel}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-levels">All levels</SelectItem>
                    <SelectItem value="0-1">0-1 years</SelectItem>
                    <SelectItem value="1-2">1-2 years</SelectItem>
                    <SelectItem value="2-4">2-4 years</SelectItem>
                    <SelectItem value="5+">5+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Describe the opportunity" rows={4} />
              </div>
              <div className="space-y-2">
                <Label>Tags</Label>
                <div className="border rounded-md p-3 min-h-[80px] relative">
                  <Input
                    ref={tagInputRef}
                    value={tagInput}
                    onChange={(e) => handleTagInputChange(e.target.value)}
                    onKeyDown={handleTagInputKeyDown}
                    placeholder={selectedTags.length === 0 ? "Type to search or create tags..." : "Add more tags..."}
                    className="border-0 p-2 shadow-none focus-visible:ring-0 mb-2"
                  />
                  <p className="text-xs text-gray-500 mb-3">
                    Type to search existing tags or create new ones. Press Enter to add.
                  </p>
                  {selectedTags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {selectedTags.map((tag, index) => (
                        <Badge 
                          key={`${tag}-${index}`}
                          variant="secondary" 
                          className="flex items-center gap-1 px-2 py-1"
                        >
                          {tag}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeTag(tag);
                            }}
                            className="ml-1"
                          >
                            <X className="h-3 w-3 pointer-events-none hover:text-red-500 transition-colors" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  )}
                  {showTagSuggestions && tagInput && (
                    <div className="absolute top-full left-0 right-0 bg-white border rounded-md shadow-lg z-10 max-h-40 overflow-y-auto mt-1">
                      {filteredTags.length > 0 ? (
                        filteredTags.slice(0, 8).map((tag, index) => (
                          <div
                            key={index}
                            className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                            onClick={() => addTag(tag)}
                          >
                            {tag}
                          </div>
                        ))
                      ) : (
                        <div
                          className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm text-green-600"
                          onClick={() => addTag(tagInput)}
                        >
                          + Create "{tagInput}"
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline" onClick={() => setShowCreateOpportunity(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setShowCreateOpportunity(false)}>
                  Post Opportunity
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-4 items-center">
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="job">Jobs</SelectItem>
                <SelectItem value="internship">Internships</SelectItem>
                <SelectItem value="freelancing">Freelancing</SelectItem>
                <SelectItem value="seminar">Seminars</SelectItem>
                <SelectItem value="mentorship">Mentorship</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="bangalore">Bangalore</SelectItem>
                <SelectItem value="mumbai">Mumbai</SelectItem>
                <SelectItem value="delhi">Delhi</SelectItem>
                <SelectItem value="remote">Remote</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Experience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Experience</SelectItem>
                <SelectItem value="0-1">0-1 years</SelectItem>
                <SelectItem value="2-4">2-4 years</SelectItem>
                <SelectItem value="5+">5+ years</SelectItem>
              </SelectContent>
            </Select>
            <Input placeholder="Search opportunities..." className="w-64" />
            <Button variant="outline">Apply Filters</Button>
          </div>
        </CardContent>
      </Card>

      {/* Opportunities Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {opportunities.map((opportunity) => (
          <Card key={opportunity.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    {getTypeIcon(opportunity.type)}
                    <h3 className="text-lg">{opportunity.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-2">{opportunity.company}</p>
                  <Badge className={`text-xs ${getTypeColor(opportunity.type)}`}>
                    {opportunity.type}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{opportunity.location}</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4 mr-2" />
                  <span>{opportunity.salary}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{opportunity.experience}</span>
                </div>
              </div>

              <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                {opportunity.description}
              </p>

              <div className="flex flex-wrap gap-1 mb-4">
                {opportunity.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <div className="flex items-center space-x-2">
                  {typeof opportunity.postedBy.avatar === 'string' && opportunity.postedBy.avatar.startsWith('http') ? (
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={opportunity.postedBy.avatar} />
                      <AvatarFallback>{opportunity.postedBy.name[0]}</AvatarFallback>
                    </Avatar>
                  ) : (
                    <div className="h-6 w-6 bg-gray-200 rounded-full flex items-center justify-center text-xs">
                      {opportunity.postedBy.avatar}
                    </div>
                  )}
                  <span>
                    {opportunity.postedBy.name}
                    {opportunity.postedBy.college !== 'Various' && (
                      <span className="text-gray-500">
                        • {opportunity.postedBy.college} '{opportunity.postedBy.year?.slice(-2)}
                      </span>
                    )}
                  </span>
                </div>
                <span>{opportunity.postedDate}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">
                  {opportunity.applicants} interested
                </span>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                  <Button size="sm">
                    Apply Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}