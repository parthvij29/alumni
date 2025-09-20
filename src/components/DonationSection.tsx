import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Progress } from './ui/progress';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { 
  Heart, 
  GraduationCap, 
  Building, 
  Users, 
  Target, 
  Calendar,
  DollarSign,
  Trophy,
  BookOpen,
  Laptop
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function DonationSection() {
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [showDonateDialog, setShowDonateDialog] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  const campaigns = [
    {
      id: 1,
      title: 'New Computer Lab for Engineering Students',
      description: 'Help us build a state-of-the-art computer lab with latest hardware and software for engineering students.',
      college: 'IIT Delhi',
      targetAmount: 5000000,
      raisedAmount: 3250000,
      donors: 245,
      daysLeft: 45,
      category: 'Infrastructure',
      image: 'computer lab students',
      organizer: {
        name: 'IIT Delhi Alumni Committee',
        verified: true
      }
    },
    {
      id: 2,
      title: 'Scholarship Fund for Underprivileged Students',
      description: 'Provide scholarships to deserving students from economically weaker sections to pursue their dreams.',
      college: 'BITS Pilani',
      targetAmount: 2000000,
      raisedAmount: 1650000,
      donors: 189,
      daysLeft: 30,
      category: 'Scholarships',
      image: 'students graduation happy',
      organizer: {
        name: 'BITS Pilani Foundation',
        verified: true
      }
    },
    {
      id: 3,
      title: 'Library Renovation Project',
      description: 'Modernize our college library with digital resources, comfortable study spaces, and improved facilities.',
      college: 'NIT Trichy',
      targetAmount: 1500000,
      raisedAmount: 850000,
      donors: 156,
      daysLeft: 60,
      category: 'Infrastructure',
      image: 'modern library books',
      organizer: {
        name: 'NIT Trichy Development Fund',
        verified: true
      }
    },
    {
      id: 4,
      title: 'Student Innovation Center',
      description: 'Create a dedicated space for student entrepreneurs and innovators with modern equipment and mentorship.',
      college: 'DTU',
      targetAmount: 3000000,
      raisedAmount: 750000,
      donors: 98,
      daysLeft: 90,
      category: 'Innovation',
      image: 'startup office modern',
      organizer: {
        name: 'DTU Innovation Cell',
        verified: true
      }
    }
  ];

  const recentDonations = [
    {
      id: 1,
      donor: 'Priya Sharma',
      amount: 25000,
      campaign: 'Computer Lab Project',
      time: '2 hours ago',
      college: 'IIT Delhi \'18'
    },
    {
      id: 2,
      donor: 'Rahul Kumar',
      amount: 15000,
      campaign: 'Scholarship Fund',
      time: '5 hours ago',
      college: 'BITS Pilani \'16'
    },
    {
      id: 3,
      donor: 'Anonymous',
      amount: 50000,
      campaign: 'Library Renovation',
      time: '1 day ago',
      college: 'Alumni'
    }
  ];

  const predefinedAmounts = [1000, 5000, 10000, 25000, 50000, 100000];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Infrastructure': return <Building className="h-4 w-4" />;
      case 'Scholarships': return <GraduationCap className="h-4 w-4" />;
      case 'Innovation': return <Laptop className="h-4 w-4" />;
      default: return <Heart className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Infrastructure': return 'bg-blue-100 text-blue-700';
      case 'Scholarships': return 'bg-green-100 text-green-700';
      case 'Innovation': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl text-gray-900">Give Back to Your Alma Mater</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Support current and future students by contributing to various initiatives at your college. 
          Every donation makes a difference in shaping tomorrow's leaders.
        </p>
      </div>

      {/* Impact Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Heart className="h-8 w-8 mx-auto text-red-600 mb-2" />
            <div className="text-2xl">₹2.5Cr</div>
            <div className="text-sm text-gray-600">Total Raised</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Users className="h-8 w-8 mx-auto text-blue-600 mb-2" />
            <div className="text-2xl">1,245</div>
            <div className="text-sm text-gray-600">Active Donors</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Target className="h-8 w-8 mx-auto text-green-600 mb-2" />
            <div className="text-2xl">15</div>
            <div className="text-sm text-gray-600">Active Campaigns</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Trophy className="h-8 w-8 mx-auto text-yellow-600 mb-2" />
            <div className="text-2xl">8</div>
            <div className="text-sm text-gray-600">Completed Projects</div>
          </CardContent>
        </Card>
      </div>

      {/* Active Campaigns */}
      <div>
        <h2 className="text-2xl text-gray-900 mb-4">Active Campaigns</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {campaigns.map((campaign) => (
            <Card key={campaign.id} className="hover:shadow-md transition-shadow">
              <div className="aspect-video relative">
                <ImageWithFallback
                  src={`https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=300&fit=crop`}
                  alt={campaign.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg mb-2">{campaign.title}</h3>
                    <div className="flex items-center space-x-2 mb-2">
                      <GraduationCap className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{campaign.college}</span>
                      <Badge className={`text-xs ${getCategoryColor(campaign.category)}`}>
                        {getCategoryIcon(campaign.category)}
                        <span className="ml-1">{campaign.category}</span>
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm mb-4">{campaign.description}</p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>₹{(campaign.raisedAmount / 100000).toFixed(1)}L raised</span>
                    <span>₹{(campaign.targetAmount / 100000).toFixed(1)}L goal</span>
                  </div>
                  <Progress value={(campaign.raisedAmount / campaign.targetAmount) * 100} className="h-2" />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{campaign.donors} donors</span>
                    <span>{campaign.daysLeft} days left</span>
                  </div>
                </div>

                <Button 
                  className="w-full"
                  onClick={() => {
                    setSelectedCampaign(campaign);
                    setShowDonateDialog(true);
                  }}
                >
                  <Heart className="h-4 w-4 mr-2" />
                  Donate Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Donations */}
      <Card>
        <CardHeader>
          <h2 className="text-lg">Recent Donations</h2>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentDonations.map((donation) => (
              <div key={donation.id} className="flex items-center justify-between py-2 border-b last:border-b-0">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>{donation.donor === 'Anonymous' ? '?' : donation.donor[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm">{donation.donor}</p>
                    <p className="text-xs text-gray-600">{donation.college}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm">₹{donation.amount.toLocaleString()}</p>
                  <p className="text-xs text-gray-600">{donation.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Donation Dialog */}
      <Dialog open={showDonateDialog} onOpenChange={setShowDonateDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Make a Donation</DialogTitle>
          </DialogHeader>
          {selectedCampaign && (
            <div className="space-y-4">
              <div className="text-center">
                <h3 className="text-lg mb-2">{selectedCampaign.title}</h3>
                <p className="text-sm text-gray-600">{selectedCampaign.college}</p>
              </div>

              <div>
                <Label>Select Amount</Label>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  {predefinedAmounts.map((amount) => (
                    <Button
                      key={amount}
                      variant={selectedAmount === amount.toString() ? "default" : "outline"}
                      size="sm"
                      onClick={() => {
                        setSelectedAmount(amount.toString());
                        setCustomAmount('');
                      }}
                    >
                      ₹{amount.toLocaleString()}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="customAmount">Custom Amount</Label>
                <Input
                  id="customAmount"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount('');
                  }}
                />
              </div>

              <div>
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea
                  id="message"
                  placeholder="Leave a message of support..."
                  rows={3}
                />
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" id="anonymous" />
                <Label htmlFor="anonymous" className="text-sm">Donate anonymously</Label>
              </div>

              <div className="flex space-x-2">
                <Button variant="outline" className="flex-1" onClick={() => setShowDonateDialog(false)}>
                  Cancel
                </Button>
                <Button className="flex-1">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Donate ₹{customAmount || selectedAmount}
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}