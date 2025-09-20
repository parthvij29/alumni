import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Users, Calendar, Briefcase, MessageSquare, Heart, MessageCircle, Share2, MapPin, Clock } from 'lucide-react';

export function FeedSection() {
  const stats = [
    {
      icon: Users,
      value: '2,847',
      label: 'Alumni Connected',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Calendar,
      value: '15',
      label: 'Upcoming Events',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Briefcase,
      value: '89',
      label: 'Job Opportunities',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: MessageSquare,
      value: '12',
      label: 'New Messages',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const recentPosts = [
    {
      id: 1,
      author: {
        name: 'Dr. Priya Sharma',
        avatar: 'https://github.com/shadcn.png',
        role: 'Senior Software Engineer at TCS',
        year: '2018'
      },
      content: 'Excited to announce that I\'ll be conducting a workshop on \'AI in Healthcare\' next month. Looking forward to sharing knowledge with fellow alumni!',
      timestamp: '2 hours ago',
      likes: 24,
      comments: 8
    },
    {
      id: 2,
      author: {
        name: 'Rajesh Kumar',
        avatar: 'https://github.com/shadcn.png',
        role: 'Product Manager at Flipkart',
        year: '2016'
      },
      content: 'Our startup just secured Series A funding! Grateful for all the mentorship from our alumni network. Happy to connect with anyone interested in fintech.',
      timestamp: '4 hours ago',
      likes: 45,
      comments: 12
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Annual Alumni Meet 2024',
      date: 'March 15, 2024',
      location: 'New Delhi',
      attendees: 156
    },
    {
      id: 2,
      title: 'Tech Innovation Summit',
      date: 'March 22, 2024',
      location: 'Bangalore',
      attendees: 89
    },
    {
      id: 3,
      title: 'Career Guidance Webinar',
      date: 'March 28, 2024',
      location: 'Online',
      attendees: 234
    }
  ];

  const latestOpportunities = [
    {
      id: 1,
      title: 'Senior Data Scientist',
      company: 'Microsoft India',
      location: 'Hyderabad',
      type: 'Full-time'
    },
    {
      id: 2,
      title: 'Research Intern',
      company: 'IIT Delhi',
      location: 'New Delhi',
      type: 'Internship'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
        <h1 className="text-2xl text-gray-900 mb-2">Welcome back!</h1>
        <p className="text-gray-600">Stay connected with your alumni network and explore new opportunities.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div>
                  <div className="text-2xl text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Posts - Left Column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl text-gray-900">Recent Posts</h2>
          </div>

          <div className="space-y-4">
            {recentPosts.map((post) => (
              <Card key={post.id}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3 mb-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={post.author.avatar} />
                      <AvatarFallback>{post.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="text-sm text-gray-900">{post.author.name}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {post.author.year}
                        </Badge>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {post.author.role}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {post.timestamp}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{post.content}</p>
                  
                  <div className="flex items-center space-x-6 pt-3 border-t">
                    <Button variant="ghost" size="sm" className="text-gray-500 p-0">
                      <Heart className="h-4 w-4 mr-1" />
                      {post.likes}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-500 p-0">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      {post.comments}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-500 p-0">
                      <Share2 className="h-4 w-4 mr-1" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Events */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg text-gray-900">Upcoming Events</h3>
                <Button variant="ghost" size="sm" className="text-blue-600 p-0">
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="border-b last:border-b-0 pb-4 last:pb-0">
                  <h4 className="text-sm text-gray-900 mb-1">{event.title}</h4>
                  <div className="flex items-center text-xs text-gray-500 mb-1">
                    <Calendar className="h-3 w-3 mr-1" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-xs text-gray-500 mb-1">
                    <MapPin className="h-3 w-3 mr-1" />
                    {event.location}
                  </div>
                  <div className="text-xs text-gray-600">
                    {event.attendees} attending
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Latest Opportunities */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg text-gray-900">Latest Opportunities</h3>
                <Button variant="ghost" size="sm" className="text-blue-600 p-0">
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {latestOpportunities.map((opportunity) => (
                <div key={opportunity.id} className="border-b last:border-b-0 pb-4 last:pb-0">
                  <h4 className="text-sm text-gray-900 mb-1">{opportunity.title}</h4>
                  <div className="flex items-center text-xs text-gray-500 mb-1">
                    <Briefcase className="h-3 w-3 mr-1" />
                    {opportunity.company}
                  </div>
                  <div className="flex items-center text-xs text-gray-500 mb-2">
                    <MapPin className="h-3 w-3 mr-1" />
                    {opportunity.location}
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {opportunity.type}
                    </Badge>
                    <Button size="sm" className="text-xs h-7 px-3">
                      Apply
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}