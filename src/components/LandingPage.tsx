import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Users, Calendar, Briefcase, MessageCircle, Heart, Shield } from 'lucide-react';

interface LandingPageProps {
  onLogin: (role: 'alumni' | 'admin') => void;
}

export function LandingPage({ onLogin }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 bg-gradient-to-r from-orange-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white">🇮🇳</span>
                </div>
              </div>
              <div className="ml-4">
                <h1 className="text-xl text-gray-900">AlumniConnect India</h1>
              </div>
            </div>
            <div className="flex space-x-4">
              <Button variant="outline" onClick={() => onLogin('alumni')}>
                Alumni Login
              </Button>
              <Button onClick={() => onLogin('admin')}>
                Admin Login
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">From</span>
                <span className="block text-orange-600">Nostalgia</span>
                <span className="block">to</span>
                <span className="block text-blue-600">New Memories</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Connect with your alma mater, fellow alumni, and build lasting professional relationships. 
                Share opportunities, attend events, and give back to your community.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700"
                  onClick={() => onLogin('alumni')}
                >
                  Join the Network
                </Button>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1678340458954-bd5c98b55c20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzdHVkZW50cyUyMGdyYWR1YXRpb24lMjBjZXJlbW9ueXxlbnwxfHx8fDE3NTgxMTE4MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Indian students graduation ceremony"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl text-gray-900">Everything you need to stay connected</h2>
            <p className="mt-4 text-lg text-gray-600">
              A comprehensive platform designed for the Indian alumni community
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <MessageCircle className="h-8 w-8 text-blue-600" />
                  <div className="ml-4">
                    <h3 className="text-lg text-gray-900">Smart Messaging</h3>
                    <p className="mt-2 text-base text-gray-500">
                      WhatsApp-style chat with filters by college, year, and location
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Calendar className="h-8 w-8 text-orange-600" />
                  <div className="ml-4">
                    <h3 className="text-lg text-gray-900">Events & Reunions</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Post events, request organizer roles, and join community discussions
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Briefcase className="h-8 w-8 text-green-600" />
                  <div className="ml-4">
                    <h3 className="text-lg text-gray-900">Opportunities</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Jobs, internships, freelancing, seminars, and mentorships
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Users className="h-8 w-8 text-purple-600" />
                  <div className="ml-4">
                    <h3 className="text-lg text-gray-900">Alumni Network</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Connect with alumni across cities and industries
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Heart className="h-8 w-8 text-red-600" />
                  <div className="ml-4">
                    <h3 className="text-lg text-gray-900">Give Back</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Support your alma mater through donations and mentorship
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Shield className="h-8 w-8 text-gray-600" />
                  <div className="ml-4">
                    <h3 className="text-lg text-gray-900">Government Verified</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Secure, verified platform backed by government standards
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl text-gray-900">Trusted by thousands</h2>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl text-blue-600">50,000+</div>
              <div className="mt-2 text-lg text-gray-600">Alumni Connected</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-orange-600">500+</div>
              <div className="mt-2 text-lg text-gray-600">Educational Institutions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-green-600">10,000+</div>
              <div className="mt-2 text-lg text-gray-600">Opportunities Shared</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              <div className="h-8 w-8 bg-gradient-to-r from-orange-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white">🇮🇳</span>
              </div>
              <span className="text-xl text-white">AlumniConnect India</span>
            </div>
            <p className="text-gray-400">
              Connecting India's brightest minds across generations
            </p>
            <div className="mt-4 flex justify-center space-x-4">
              <Badge variant="outline" className="text-gray-400 border-gray-600">
                Government of India Initiative
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}