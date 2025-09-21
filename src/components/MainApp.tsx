import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { ChatSection } from './ChatSection';
import { EventsSection } from './EventsSection';
import { OpportunitiesSection } from './OpportunitiesSection';
import { ProfileSection } from './ProfileSection';
import { DashboardSection } from './DashboardSection';
import { DonationSection } from './DonationSection';
import { DirectorySection } from './DirectorySection';
import { 
  MessageCircle, 
  Calendar, 
  Briefcase, 
  User, 
  Home, 
  Heart,
  Search,
  Bell,
  LogOut,
  Filter,
  Users
} from 'lucide-react';

interface MainAppProps {
  onLogout: () => void;
  userRole: 'alumni' | 'admin';
}

type Section = 'dashboard' | 'chat' | 'events' | 'opportunities' | 'directory' | 'profile' | 'donations';

export function MainApp({ onLogout, userRole }: MainAppProps) {
  const [currentSection, setCurrentSection] = useState<Section>('dashboard');

  const renderSection = () => {
    switch (currentSection) {
      case 'dashboard':
        return <DashboardSection onNavigate={setCurrentSection} />;
      case 'chat':
        return <ChatSection />;
      case 'events':
        return <EventsSection />;
      case 'opportunities':
        return <OpportunitiesSection />;
      case 'directory':
        return <DirectorySection />;
      case 'profile':
        return <ProfileSection />;
      case 'donations':
        return <DonationSection />;
      default:
        return <DashboardSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 bg-gradient-to-r from-orange-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white">🇮🇳</span>
                </div>
              </div>
              <div className="ml-4">
                <h1 className="text-xl text-gray-900">REunify</h1>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-lg mx-8">
              <div className="relative flex items-center">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search alumni, events, opportunities..."
                    className="pl-10 pr-4 bg-gray-50"
                  />
                </div>
                <Button variant="ghost" size="sm" className="ml-2">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <Button variant="ghost" size="sm" onClick={onLogout}>
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Side Navigation */}
        <nav className="w-64 bg-white h-screen sticky top-16 border-r">
          <div className="p-4">
            <div className="space-y-2">
              <Button
                variant={currentSection === 'dashboard' ? 'default' : 'ghost'}
                className="w-full justify-start"
                onClick={() => setCurrentSection('dashboard')}
              >
                <Home className="mr-2 h-4 w-4" />
                Dashboard
              </Button>
              <Button
                variant={currentSection === 'chat' ? 'default' : 'ghost'}
                className="w-full justify-start"
                onClick={() => setCurrentSection('chat')}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Messages
                <Badge className="ml-auto" variant="secondary">3</Badge>
              </Button>
              <Button
                variant={currentSection === 'events' ? 'default' : 'ghost'}
                className="w-full justify-start"
                onClick={() => setCurrentSection('events')}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Events
              </Button>
              <Button
                variant={currentSection === 'opportunities' ? 'default' : 'ghost'}
                className="w-full justify-start"
                onClick={() => setCurrentSection('opportunities')}
              >
                <Briefcase className="mr-2 h-4 w-4" />
                Opportunities
                <Badge className="ml-auto" variant="secondary">12</Badge>
              </Button>
              <Button
                variant={currentSection === 'directory' ? 'default' : 'ghost'}
                className="w-full justify-start"
                onClick={() => setCurrentSection('directory')}
              >
                <Users className="mr-2 h-4 w-4" />
                Directory
              </Button>
              <Button
                variant={currentSection === 'profile' ? 'default' : 'ghost'}
                className="w-full justify-start"
                onClick={() => setCurrentSection('profile')}
              >
                <User className="mr-2 h-4 w-4" />
                Profile
              </Button>
              <Button
                variant={currentSection === 'donations' ? 'default' : 'ghost'}
                className="w-full justify-start"
                onClick={() => setCurrentSection('donations')}
              >
                <Heart className="mr-2 h-4 w-4" />
                Donations
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-sm text-gray-600 mb-3">Your Network</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Connections</span>
                  <span>342</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Events Attended</span>
                  <span>12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Opportunities Shared</span>
                  <span>8</span>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {renderSection()}
        </main>
      </div>
    </div>
  );
}