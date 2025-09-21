import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { 
  Users, 
  Calendar, 
  Briefcase, 
  Search, 
  Filter, 
  Download, 
  Eye, 
  Check, 
  X, 
  LogOut,
  Shield,
  AlertCircle,
  TrendingUp
} from 'lucide-react';

interface AdminPanelProps {
  onLogout: () => void;
}

export function AdminPanel({ onLogout }: AdminPanelProps) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const stats = {
    totalAlumni: 12450,
    activeUsers: 8920,
    pendingApprovals: 23,
    recentRegistrations: 45
  };

  const alumniData = [
    {
      id: 1,
      name: 'Priya Sharma',
      email: 'priya.sharma@email.com',
      college: 'IIT Delhi',
      graduationYear: '2018',
      currentRole: 'Senior Software Engineer',
      currentCompany: 'Google India',
      location: 'Mumbai',
      joinDate: '2024-01-15',
      status: 'active',
      eventsAttended: 5,
      opportunitiesPosted: 3,
      lastActive: '2 hours ago'
    },
    {
      id: 2,
      name: 'Rahul Kumar',
      email: 'rahul.kumar@email.com',
      college: 'BITS Pilani',
      graduationYear: '2016',
      currentRole: 'Product Manager',
      currentCompany: 'Microsoft',
      location: 'Bangalore',
      joinDate: '2023-11-20',
      status: 'active',
      eventsAttended: 8,
      opportunitiesPosted: 5,
      lastActive: '1 day ago'
    },
    {
      id: 3,
      name: 'Anjali Gupta',
      email: 'anjali.gupta@email.com',
      college: 'NIT Trichy',
      graduationYear: '2015',
      currentRole: 'Data Scientist',
      currentCompany: 'Amazon',
      location: 'Delhi',
      joinDate: '2024-02-10',
      status: 'pending',
      eventsAttended: 0,
      opportunitiesPosted: 0,
      lastActive: 'Never'
    }
  ];

  const pendingApprovals = [
    {
      id: 1,
      type: 'event',
      title: 'IIT Delhi Tech Symposium 2024',
      requestedBy: 'Amit Kumar',
      college: 'IIT Delhi',
      requestDate: '2024-02-20',
      description: 'Annual tech symposium with industry speakers',
      status: 'pending'
    },
    {
      id: 2,
      type: 'organizer',
      title: 'Mumbai Alumni Meetup',
      requestedBy: 'Neha Patel',
      college: 'BITS Pilani',
      requestDate: '2024-02-18',
      description: 'Request to become event organizer',
      status: 'pending'
    },
    {
      id: 3,
      type: 'user_verification',
      title: 'Alumni Verification Request',
      requestedBy: 'Rajesh Singh',
      college: 'DTU',
      requestDate: '2024-02-15',
      description: 'Verification of alumni status',
      status: 'pending'
    }
  ];

  const filteredAlumni = alumniData.filter(alumni => {
    const matchesSearch = alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alumni.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alumni.college.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || alumni.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <h1 className="text-xl text-gray-900">Admin Panel</h1>
                <p className="text-sm text-gray-500">REunify</p>
              </div>
            </div>
            <Button variant="outline" onClick={onLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm text-gray-600">Total Alumni</p>
                  <p className="text-2xl">{stats.totalAlumni.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm text-gray-600">Active Users</p>
                  <p className="text-2xl">{stats.activeUsers.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <AlertCircle className="h-8 w-8 text-orange-600" />
                <div className="ml-4">
                  <p className="text-sm text-gray-600">Pending Approvals</p>
                  <p className="text-2xl">{stats.pendingApprovals}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm text-gray-600">New This Month</p>
                  <p className="text-2xl">{stats.recentRegistrations}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="database" className="space-y-4">
          <TabsList>
            <TabsTrigger value="database">Alumni Database</TabsTrigger>
            <TabsTrigger value="approvals">Pending Approvals</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="database" className="space-y-4">
            {/* Filters and Search */}
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-wrap gap-4 items-center">
                  <div className="flex items-center space-x-2">
                    <Search className="h-4 w-4 text-gray-500" />
                    <Input
                      placeholder="Search alumni..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-64"
                    />
                  </div>
                  <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="College" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Colleges</SelectItem>
                      <SelectItem value="iit-delhi">IIT Delhi</SelectItem>
                      <SelectItem value="bits-pilani">BITS Pilani</SelectItem>
                      <SelectItem value="nit-trichy">NIT Trichy</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    More Filters
                  </Button>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Alumni Table */}
            <Card>
              <CardHeader>
                <h2 className="text-lg">Alumni Database ({filteredAlumni.length} records)</h2>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Alumni</TableHead>
                      <TableHead>College</TableHead>
                      <TableHead>Current Role</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Active</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredAlumni.map((alumni) => (
                      <TableRow key={alumni.id}>
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback>{alumni.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm">{alumni.name}</p>
                              <p className="text-xs text-gray-500">{alumni.email}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="text-sm">{alumni.college}</p>
                            <p className="text-xs text-gray-500">'{alumni.graduationYear.slice(-2)}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="text-sm">{alumni.currentRole}</p>
                            <p className="text-xs text-gray-500">{alumni.currentCompany}</p>
                          </div>
                        </TableCell>
                        <TableCell>{alumni.location}</TableCell>
                        <TableCell>
                          <Badge variant={alumni.status === 'active' ? 'default' : alumni.status === 'pending' ? 'secondary' : 'outline'}>
                            {alumni.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-xs text-gray-500">{alumni.lastActive}</TableCell>
                        <TableCell>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => {
                              setSelectedUser(alumni);
                              setShowUserDetails(true);
                            }}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="approvals" className="space-y-4">
            <Card>
              <CardHeader>
                <h2 className="text-lg">Pending Approvals ({pendingApprovals.length})</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingApprovals.map((request) => (
                    <div key={request.id} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge variant="outline">
                              {request.type === 'event' && <Calendar className="h-3 w-3 mr-1" />}
                              {request.type === 'organizer' && <Users className="h-3 w-3 mr-1" />}
                              {request.type === 'user_verification' && <Shield className="h-3 w-3 mr-1" />}
                              {request.type.replace('_', ' ')}
                            </Badge>
                            <span className="text-xs text-gray-500">{request.requestDate}</span>
                          </div>
                          <h3 className="text-sm mb-1">{request.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">{request.description}</p>
                          <div className="text-xs text-gray-500">
                            Requested by: {request.requestedBy} ({request.college})
                          </div>
                        </div>
                        <div className="flex space-x-2 ml-4">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="text-green-600">
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="text-red-600">
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <h3 className="text-lg">User Growth</h3>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-gray-500">
                    <p>Analytics chart would be rendered here</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <h3 className="text-lg">Engagement Metrics</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Daily Active Users</span>
                      <span>2,340</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Events Created</span>
                      <span>156</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Opportunities Posted</span>
                      <span>423</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Messages Sent</span>
                      <span>12,450</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* User Details Dialog */}
      <Dialog open={showUserDetails} onOpenChange={setShowUserDetails}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Alumni Details</DialogTitle>
          </DialogHeader>
          {selectedUser && (
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="text-lg">
                    {selectedUser.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg">{selectedUser.name}</h3>
                  <p className="text-gray-600">{selectedUser.currentRole} at {selectedUser.currentCompany}</p>
                  <Badge variant={selectedUser.status === 'active' ? 'default' : 'secondary'}>
                    {selectedUser.status}
                  </Badge>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Email:</span>
                  <p>{selectedUser.email}</p>
                </div>
                <div>
                  <span className="text-gray-600">College:</span>
                  <p>{selectedUser.college} ({selectedUser.graduationYear})</p>
                </div>
                <div>
                  <span className="text-gray-600">Location:</span>
                  <p>{selectedUser.location}</p>
                </div>
                <div>
                  <span className="text-gray-600">Join Date:</span>
                  <p>{selectedUser.joinDate}</p>
                </div>
                <div>
                  <span className="text-gray-600">Events Attended:</span>
                  <p>{selectedUser.eventsAttended}</p>
                </div>
                <div>
                  <span className="text-gray-600">Opportunities Posted:</span>
                  <p>{selectedUser.opportunitiesPosted}</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}