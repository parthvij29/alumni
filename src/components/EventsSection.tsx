import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar, MapPin, Users, Clock, Plus, MessageCircle, Star } from 'lucide-react';

export function EventsSection() {
  const [showCreateEvent, setShowCreateEvent] = useState(false);
  const [eventType, setEventType] = useState('');

  const events = [
    {
      id: 1,
      title: 'IIT Delhi Alumni Reunion 2024',
      description: 'Join us for our annual reunion celebration with networking, cultural programs, and memorable moments.',
      date: '2024-03-15',
      time: '6:00 PM',
      location: 'IIT Delhi Campus',
      organizer: {
        name: 'Alumni Committee',
        avatar: '🏛️',
        verified: true
      },
      attendees: 156,
      maxAttendees: 200,
      type: 'reunion',
      status: 'upcoming',
      isCollegeEvent: true,
      requestedOrganizers: 3
    },
    {
      id: 2,
      title: 'Tech Talk: AI in Healthcare',
      description: 'A deep dive into how artificial intelligence is revolutionizing healthcare with real-world case studies.',
      date: '2024-02-28',
      time: '7:00 PM',
      location: 'Virtual Event',
      organizer: {
        name: 'Dr. Rahul Verma',
        avatar: 'https://github.com/shadcn.png',
        verified: false
      },
      attendees: 89,
      maxAttendees: 100,
      type: 'seminar',
      status: 'upcoming',
      isCollegeEvent: false
    },
    {
      id: 3,
      title: 'Mumbai Chapter Networking Mixer',
      description: 'Casual networking event for Mumbai-based alumni. Great food, drinks, and conversations!',
      date: '2024-02-25',
      time: '6:30 PM',
      location: 'The Leela Mumbai',
      organizer: {
        name: 'Priya Sharma',
        avatar: 'https://github.com/shadcn.png',
        verified: false
      },
      attendees: 45,
      maxAttendees: 60,
      type: 'networking',
      status: 'upcoming',
      isCollegeEvent: false
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'reunion': return 'bg-purple-100 text-purple-700';
      case 'seminar': return 'bg-blue-100 text-blue-700';
      case 'networking': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl text-gray-900">Events</h1>
          <p className="text-gray-600">Discover and join alumni events</p>
        </div>
        <Dialog open={showCreateEvent} onOpenChange={setShowCreateEvent}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Event
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Event</DialogTitle>
            </DialogHeader>
            <div className="space-y-6 p-1">
              <div className="space-y-2">
                <Label htmlFor="title">Event Title</Label>
                <Input id="title" placeholder="Enter event title" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Describe your event" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input id="date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Time</Label>
                  <Input id="time" type="time" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration</Label>
                  <Input id="duration" placeholder="e.g. 2 hours" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="Event location" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="type">Event Type</Label>
                  <Select value={eventType} onValueChange={setEventType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="reunion">Reunion</SelectItem>
                      <SelectItem value="seminar">Seminar</SelectItem>
                      <SelectItem value="networking">Networking</SelectItem>
                      <SelectItem value="workshop">Workshop</SelectItem>
                      <SelectItem value="social">Social</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maxAttendees">Max Attendees</Label>
                  <Input id="maxAttendees" type="number" placeholder="100" />
                </div>
              </div>
              <div className="flex items-center space-x-2 py-2">
                <input type="checkbox" id="collegeEvent" />
                <Label htmlFor="collegeEvent">This is a college/institutional event</Label>
              </div>
              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline" onClick={() => setShowCreateEvent(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setShowCreateEvent(false)}>
                  Create Event
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
                <SelectValue placeholder="Event Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="reunion">Reunions</SelectItem>
                <SelectItem value="seminar">Seminars</SelectItem>
                <SelectItem value="networking">Networking</SelectItem>
                <SelectItem value="workshop">Workshops</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="delhi">Delhi</SelectItem>
                <SelectItem value="mumbai">Mumbai</SelectItem>
                <SelectItem value="bangalore">Bangalore</SelectItem>
                <SelectItem value="virtual">Virtual</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Date Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Dates</SelectItem>
                <SelectItem value="thisWeek">This Week</SelectItem>
                <SelectItem value="thisMonth">This Month</SelectItem>
                <SelectItem value="nextMonth">Next Month</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">Apply Filters</Button>
          </div>
        </CardContent>
      </Card>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event) => (
          <Card key={event.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-lg">{event.title}</h3>
                    {event.isCollegeEvent && (
                      <Badge variant="outline" className="text-xs">
                        <Star className="h-3 w-3 mr-1" />
                        Official
                      </Badge>
                    )}
                  </div>
                  <Badge className={`text-xs ${getEventTypeColor(event.type)}`}>
                    {event.type}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm mb-4">{event.description}</p>
              
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{new Date(event.date).toLocaleDateString()} at {event.time}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  <span>{event.attendees}/{event.maxAttendees} attendees</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center space-x-2">
                  {typeof event.organizer.avatar === 'string' && event.organizer.avatar.startsWith('http') ? (
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={event.organizer.avatar} />
                      <AvatarFallback>{event.organizer.name[0]}</AvatarFallback>
                    </Avatar>
                  ) : (
                    <div className="h-6 w-6 bg-gray-200 rounded-full flex items-center justify-center text-xs">
                      {event.organizer.avatar}
                    </div>
                  )}
                  <span className="text-xs text-gray-600">
                    Organized by {event.organizer.name}
                  </span>
                  {event.organizer.verified && (
                    <Badge variant="secondary" className="text-xs">Verified</Badge>
                  )}
                </div>
              </div>

              <div className="flex space-x-2">
                <Button className="flex-1">
                  Join Event
                </Button>
                <Button variant="outline" size="sm">
                  <MessageCircle className="h-4 w-4" />
                </Button>
                {event.isCollegeEvent && event.requestedOrganizers && (
                  <Button variant="outline" size="sm">
                    Request Organizer Role
                  </Button>
                )}
              </div>

              {event.isCollegeEvent && event.requestedOrganizers > 0 && (
                <div className="mt-3 p-2 bg-yellow-50 rounded-lg">
                  <p className="text-xs text-yellow-700">
                    {event.requestedOrganizers} alumni have requested organizer roles
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}