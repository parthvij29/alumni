import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { ScrollArea } from './ui/scroll-area';
import { 
  Search, 
  Send, 
  Filter, 
  Users, 
  MessageCircle, 
  Phone, 
  Video, 
  Hash,
  Megaphone,
  ChevronDown,
  ChevronRight,
  Plus,
  Settings,
  Building,
  Calendar,
  Briefcase,
  MapPin,
  MessageSquare
} from 'lucide-react';

type TabType = 'chats' | 'communities' | 'college' | 'events' | 'opportunities';

export function ChatSection() {
  const [activeTab, setActiveTab] = useState<TabType>('chats');
  const [selectedChat, setSelectedChat] = useState('general-chat');
  const [newMessage, setNewMessage] = useState('');
  const [selectedCollege, setSelectedCollege] = useState('iit-delhi');
  const [expandedCommunities, setExpandedCommunities] = useState<string[]>([]);
  const [expandedEvents, setExpandedEvents] = useState<string[]>([]);
  const [expandedOpportunities, setExpandedOpportunities] = useState<string[]>([]);

  // User's colleges (if they studied in multiple)
  const userColleges = [
    {
      id: 'iit-delhi',
      name: 'IIT Delhi',
      icon: '🏛️',
      graduationYear: '2018',
      memberCount: 1247
    },
    {
      id: 'nit-trichy',
      name: 'NIT Trichy',
      icon: '🎓',
      graduationYear: '2016',
      memberCount: 892
    }
  ];

  // Direct chats and groups
  const directChats = [
    {
      id: 'general-chat',
      name: 'General Alumni Chat',
      type: 'group',
      lastMessage: 'Rahul: Anyone attending the tech meetup?',
      timestamp: '10m ago',
      unread: 3,
      members: 156,
      avatar: '👥'
    },
    {
      id: 'dm-anjali',
      name: 'Anjali Gupta',
      type: 'individual',
      lastMessage: 'Hey! Are you free for coffee this week?',
      timestamp: '1h ago',
      unread: 1,
      college: 'NIT Trichy',
      year: '2017',
      avatar: 'https://github.com/shadcn.png'
    },
    {
      id: 'tech-group',
      name: 'Tech Professionals',
      type: 'group',
      lastMessage: 'New startup opportunity in Bangalore',
      timestamp: '2h ago',
      unread: 0,
      members: 89,
      avatar: '💻'
    },
    {
      id: 'dm-kiran',
      name: 'Kiran Patel',
      type: 'individual',
      lastMessage: 'Thanks for the recommendation!',
      timestamp: '2d ago',
      unread: 0,
      college: 'IIT Delhi',
      year: '2018',
      avatar: 'https://github.com/shadcn.png'
    }
  ];

  // Communities with WhatsApp-style structure
  const communities = [
    {
      id: 'bangalore-alumni',
      name: 'Bangalore Alumni',
      location: 'Bangalore',
      icon: '🌆',
      memberCount: 234,
      announcements: {
        id: 'bangalore-alumni-announcements',
        lastMessage: 'Admin: Weekend meetup this Saturday!',
        timestamp: '30m ago',
        unread: 2
      },
      groupChats: [
        {
          id: 'bangalore-alumni-general',
          name: 'General Discussion',
          lastMessage: 'Anyone knows good restaurants in Koramangala?',
          timestamp: '1h ago',
          unread: 0,
          members: 156
        },
        {
          id: 'bangalore-alumni-jobs',
          name: 'Job Opportunities',
          lastMessage: 'Backend dev opening at Flipkart',
          timestamp: '3h ago',
          unread: 1,
          members: 89
        }
      ]
    },
    {
      id: 'mumbai-professionals',
      name: 'Mumbai Professionals',
      location: 'Mumbai',
      icon: '🏙️',
      memberCount: 189,
      announcements: {
        id: 'mumbai-professionals-announcements',
        lastMessage: 'Admin: Networking event next week',
        timestamp: '1h ago',
        unread: 0
      },
      groupChats: [
        {
          id: 'mumbai-professionals-general',
          name: 'General Discussion',
          lastMessage: 'Traffic is crazy today!',
          timestamp: '45m ago',
          unread: 3,
          members: 134
        }
      ]
    },
    {
      id: 'delhi-startup',
      name: 'Delhi Startup Circle',
      location: 'Delhi NCR',
      icon: '🚀',
      memberCount: 145,
      announcements: {
        id: 'delhi-startup-announcements',
        lastMessage: 'Admin: Funding opportunities session',
        timestamp: '3h ago',
        unread: 1
      },
      groupChats: [
        {
          id: 'delhi-startup-general',
          name: 'General Discussion',
          lastMessage: 'Looking for co-founder',
          timestamp: '2h ago',
          unread: 0,
          members: 98
        },
        {
          id: 'delhi-startup-funding',
          name: 'Funding & Investment',
          lastMessage: 'Series A tips anyone?',
          timestamp: '4h ago',
          unread: 2,
          members: 67
        }
      ]
    }
  ];

  // Events with WhatsApp-style structure
  const userEvents = [
    {
      id: 'tech-summit-2024',
      name: 'Tech Summit 2024',
      date: 'Mar 15, 2024',
      location: 'Mumbai',
      icon: '🎤',
      announcements: {
        id: 'tech-summit-2024-announcements',
        lastMessage: 'Schedule updated - check your email',
        timestamp: '1h ago',
        unread: 2
      },
      groupChats: [
        {
          id: 'tech-summit-2024-general',
          name: 'General Chat',
          lastMessage: 'Excited for tomorrow!',
          timestamp: '30m ago',
          unread: 1,
          members: 456
        },
        {
          id: 'tech-summit-2024-networking',
          name: 'Networking',
          lastMessage: 'Anyone from AI/ML background?',
          timestamp: '2h ago',
          unread: 0,
          members: 234
        }
      ]
    },
    {
      id: 'alumni-meetup-bangalore',
      name: 'Alumni Meetup Bangalore',
      date: 'Mar 20, 2024',
      location: 'Bangalore',
      icon: '🎉',
      announcements: {
        id: 'alumni-meetup-bangalore-announcements',
        lastMessage: 'Venue confirmed - UB City Mall',
        timestamp: '2h ago',
        unread: 0
      },
      groupChats: [
        {
          id: 'alumni-meetup-bangalore-general',
          name: 'General Chat',
          lastMessage: 'Who all are coming from Whitefield?',
          timestamp: '1h ago',
          unread: 3,
          members: 89
        }
      ]
    }
  ];

  // Opportunities with WhatsApp-style structure
  const userOpportunities = [
    {
      id: 'google-sde',
      company: 'Google India',
      position: 'Senior Software Engineer',
      status: 'interview-scheduled',
      stage: 'Technical Round 2',
      icon: '🔍',
      announcements: {
        id: 'google-sde-announcements',
        lastMessage: 'Interview scheduled for March 18th at 2 PM',
        timestamp: '1h ago',
        unread: 3
      },
      groupChats: [
        {
          id: 'google-sde-hr-chat',
          name: 'HR Communication',
          lastMessage: 'Please confirm your availability',
          timestamp: '2h ago',
          unread: 0,
          members: 2
        }
      ]
    },
    {
      id: 'microsoft-pm',
      company: 'Microsoft',
      position: 'Product Manager',
      status: 'under-review',
      stage: 'Application Review',
      icon: '💼',
      announcements: {
        id: 'microsoft-pm-announcements',
        lastMessage: 'Application received - review in progress',
        timestamp: '1d ago',
        unread: 1
      },
      groupChats: [
        {
          id: 'microsoft-pm-hr-chat',
          name: 'HR Communication',
          lastMessage: 'Thanks for your application',
          timestamp: '1d ago',
          unread: 0,
          members: 2
        }
      ]
    },
    {
      id: 'startup-cto',
      company: 'TechStart Inc',
      position: 'CTO',
      status: 'offered',
      stage: 'Offer Negotiation',
      icon: '⚡',
      announcements: {
        id: 'startup-cto-announcements',
        lastMessage: 'Offer letter attached - please review',
        timestamp: '3h ago',
        unread: 2
      },
      groupChats: [
        {
          id: 'startup-cto-founder-chat',
          name: 'Founder Discussion',
          lastMessage: 'Looking forward to having you on board!',
          timestamp: '4h ago',
          unread: 1,
          members: 3
        }
      ]
    }
  ];

  const getCollegeChannels = (collegeId: string) => {
    const college = userColleges.find(c => c.id === collegeId);
    if (!college) return [];

    return [
      {
        id: `${collegeId}-announcements`,
        name: 'Announcements',
        type: 'announcement',
        icon: <Megaphone className="h-4 w-4" />,
        lastMessage: 'Admin: Alumni meet scheduled for March 15th',
        timestamp: '2h ago',
        unread: 0
      },
      {
        id: `${collegeId}-general`,
        name: 'General Discussion',
        type: 'group',
        icon: <MessageCircle className="h-4 w-4" />,
        lastMessage: 'Planning reunion activities',
        timestamp: '1h ago',
        unread: 2,
        members: 456
      },
      {
        id: `${collegeId}-jobs`,
        name: 'Job Opportunities',
        type: 'group',
        icon: <Briefcase className="h-4 w-4" />,
        lastMessage: 'Senior Dev role at Google',
        timestamp: '3h ago',
        unread: 5,
        members: 234
      },
      {
        id: `${collegeId}-batch-${college.graduationYear}`,
        name: `Batch ${college.graduationYear}`,
        type: 'batch',
        icon: <Hash className="h-4 w-4" />,
        lastMessage: 'Remember our final year project? 😄',
        timestamp: '30m ago',
        unread: 1,
        members: 67
      }
    ];
  };

  const toggleExpanded = (type: 'communities' | 'events' | 'opportunities', id: string) => {
    const setExpanded = type === 'communities' ? setExpandedCommunities : 
                      type === 'events' ? setExpandedEvents : setExpandedOpportunities;
    const expanded = type === 'communities' ? expandedCommunities : 
                    type === 'events' ? expandedEvents : expandedOpportunities;
    
    setExpanded(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const renderChip = (id: TabType, label: string, active: boolean) => (
    <button
      key={id}
      onClick={() => setActiveTab(id)}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
        active 
          ? 'bg-green-100 text-green-700 shadow-sm' 
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }`}
    >
      {label}
    </button>
  );

  const renderCollegeChips = () => (
    <div className="flex space-x-2 mb-4">
      {userColleges.map(college => (
        <button
          key={college.id}
          onClick={() => setSelectedCollege(college.id)}
          className={`px-3 py-2 rounded-full text-xs flex items-center space-x-2 transition-all font-medium ${
            selectedCollege === college.id
              ? 'bg-blue-100 text-blue-700 shadow-sm'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <span>{college.icon}</span>
          <span>{college.name}</span>
        </button>
      ))}
    </div>
  );

  const renderChannelItem = (channel: any, isSubChannel = false) => {
    const isSelected = selectedChat === channel.id;
    return (
      <div
        key={channel.id}
        className={`flex items-center px-4 py-3 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors ${
          isSelected ? 'bg-green-50 border border-green-200' : ''
        } ${isSubChannel ? 'ml-4 w-[246px]' : 'w-[262px]'}`}
        onClick={() => setSelectedChat(channel.id)}
      >
        <div className="text-gray-400 flex-shrink-0 mr-3">
          {channel.icon || <MessageCircle className="h-4 w-4" />}
        </div>
        <div className={`min-w-0 ${isSubChannel ? 'w-40' : 'w-48'}`}>
          <div className="flex items-center justify-between w-full">
            <span className={`text-sm truncate font-medium ${isSubChannel ? 'w-24' : 'w-32'} ${channel.type === 'announcement' ? 'text-orange-600' : ''}`}>
              {channel.name}
            </span>
            {channel.unread > 0 && (
              <Badge className="h-6 w-6 text-xs p-0 flex items-center justify-center bg-green-500 text-white min-w-[24px] flex-shrink-0 ml-2">
                {channel.unread}
              </Badge>
            )}
          </div>
          <p className="text-xs text-gray-600 truncate mt-1 w-full">{channel.lastMessage}</p>
          {channel.members && channel.type !== 'announcement' && (
            <div className="flex items-center mt-1">
              <Users className="h-3 w-3 text-gray-400 mr-1 flex-shrink-0" />
              <span className="text-xs text-gray-400 truncate">{channel.members} members</span>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderCommunityStructure = (community: any) => {
    const isExpanded = expandedCommunities.includes(community.id);
    return (
      <div key={community.id} className="mb-[8px] mt-[0px] mr-[0px] ml-[0px]">
        {/* Community Header */}
        <div 
          className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 cursor-pointer rounded-lg transition-colors w-72"
          onClick={() => toggleExpanded('communities', community.id)}
        >
          <div className="flex items-center min-w-0 w-64">
            {isExpanded ? (
              <ChevronDown className="h-4 w-4 text-gray-400 flex-shrink-0 mr-3" />
            ) : (
              <ChevronRight className="h-4 w-4 text-gray-400 flex-shrink-0 mr-3" />
            )}
            <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center text-lg flex-shrink-0 mr-3">
              {community.icon}
            </div>
            <div className="min-w-0 w-44">
              <div className="text-sm font-medium truncate w-full">{community.name}</div>
              <div className="text-xs text-gray-500 truncate w-full">{community.memberCount} members • {community.location}</div>
            </div>
          </div>
        </div>

        {/* Community Channels */}
        {isExpanded && (
          <div className="pl-6 space-y-1 w-full min-w-0 overflow-hidden">
            {/* Announcement Channel */}
            <div
              className={`flex items-center px-4 py-3 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors w-[262px] ${
                selectedChat === community.announcements.id ? 'bg-green-50 border border-green-200' : ''
              }`}
              onClick={() => setSelectedChat(community.announcements.id)}
            >
              <Megaphone className="h-4 w-4 text-orange-500 mr-3 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between w-full">
                  <span className="text-sm font-medium text-orange-600 truncate flex-1 min-w-0">Announcements</span>
                  {community.announcements.unread > 0 && (
                    <Badge className="h-6 w-6 text-xs p-0 flex items-center justify-center bg-orange-500 text-white min-w-[24px] flex-shrink-0 ml-2">
                      {community.announcements.unread}
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-gray-600 truncate mt-1 w-full">{community.announcements.lastMessage}</p>
              </div>
            </div>
            
            {/* Group Chats */}
            {community.groupChats.map((chat: any) => renderChannelItem({
              ...chat,
              icon: <MessageCircle className="h-4 w-4" />
            }))}
          </div>
        )}
      </div>
    );
  };

  const renderEventStructure = (event: any) => {
    const isExpanded = expandedEvents.includes(event.id);
    return (
      <div key={event.id} className="mb-2">
        {/* Event Header */}
        <div 
          className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 cursor-pointer rounded-lg transition-colors"
          onClick={() => toggleExpanded('events', event.id)}
        >
          <div className="flex items-center space-x-3">
            {isExpanded ? (
              <ChevronDown className="h-4 w-4 text-gray-400 flex-shrink-0" />
            ) : (
              <ChevronRight className="h-4 w-4 text-gray-400 flex-shrink-0" />
            )}
            <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-lg flex-shrink-0">
              {event.icon}
            </div>
            <div className="min-w-0">
              <div className="text-sm font-medium truncate">{event.name}</div>
              <div className="text-xs text-gray-500">{event.date} • {event.location}</div>
            </div>
          </div>
        </div>

        {/* Event Channels */}
        {isExpanded && (
          <div className="ml-6 space-y-1">
            {/* Announcement Channel */}
            <div
              className={`flex items-center space-x-3 px-4 py-3 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors w-[246px] ${
                selectedChat === event.announcements.id ? 'bg-green-50 border border-green-200' : ''
              }`}
              onClick={() => setSelectedChat(event.announcements.id)}
            >
              <Megaphone className="h-4 w-4 text-blue-500 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-600 pr-2">Announcements</span>
                  {event.announcements.unread > 0 && (
                    <Badge className="h-6 w-6 text-xs p-0 flex items-center justify-center bg-blue-500 text-white min-w-[24px] flex-shrink-0">
                      {event.announcements.unread}
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-gray-600 truncate mt-1">{event.announcements.lastMessage}</p>
              </div>
            </div>
            
            {/* Group Chats */}
            {event.groupChats.map((chat: any) => renderChannelItem({
              ...chat,
              icon: <MessageCircle className="h-4 w-4" />
            }))}
          </div>
        )}
      </div>
    );
  };

  const renderOpportunityStructure = (opportunity: any) => {
    const isExpanded = expandedOpportunities.includes(opportunity.id);
    return (
      <div key={opportunity.id} className="mb-2">
        {/* Opportunity Header */}
        <div 
          className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 cursor-pointer rounded-lg transition-colors"
          onClick={() => toggleExpanded('opportunities', opportunity.id)}
        >
          <div className="flex items-center space-x-3">
            {isExpanded ? (
              <ChevronDown className="h-4 w-4 text-gray-400 flex-shrink-0" />
            ) : (
              <ChevronRight className="h-4 w-4 text-gray-400 flex-shrink-0" />
            )}
            <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center text-lg flex-shrink-0">
              {opportunity.icon}
            </div>
            <div className="min-w-0">
              <div className="text-sm font-medium truncate">{opportunity.position}</div>
              <div className="text-xs text-gray-500">{opportunity.company} • {opportunity.stage}</div>
            </div>
          </div>
        </div>

        {/* Opportunity Channels */}
        {isExpanded && (
          <div className="ml-[24px] space-y-1 mt-[0px] mr-[0px] mb-[0px] p-[0px]">
            {/* Announcement Channel */}
            <div
              className={`flex items-center space-x-3 px-4 py-3 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors w-[238px] ${
                selectedChat === opportunity.announcements.id ? 'bg-green-50 border border-green-200' : ''
              }`}
              onClick={() => setSelectedChat(opportunity.announcements.id)}
            >
              <Megaphone className="h-4 w-4 text-purple-500 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-purple-600 pr-2">Interview Updates</span>
                  {opportunity.announcements.unread > 0 && (
                    <Badge className="h-6 w-6 text-xs p-0 flex items-center justify-center bg-purple-500 text-white min-w-[24px] flex-shrink-0">
                      {opportunity.announcements.unread}
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-gray-600 truncate mt-1">{opportunity.announcements.lastMessage}</p>
              </div>
            </div>
            
            {/* Group Chats */}
            {opportunity.groupChats.map((chat: any) => renderChannelItem({
              ...chat,
              icon: <MessageCircle className="h-4 w-4" />
            }))}
          </div>
        )}
      </div>
    );
  };

  const renderChatList = () => {
    switch (activeTab) {
      case 'chats':
        return (
          <div className="space-y-2">
            {directChats.map((chat) => (
              <div
                key={chat.id}
                className={`p-4 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors w-full max-w-full ${
                  selectedChat === chat.id ? 'bg-green-50 border border-green-200' : ''
                }`}
                onClick={() => setSelectedChat(chat.id)}
              >
                <div className="flex items-start space-x-3 w-full max-w-full min-w-0">
                  <div className="relative flex-shrink-0">
                    {chat.type === 'individual' ? (
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={chat.avatar} />
                        <AvatarFallback>{chat.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                    ) : (
                      <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center text-lg">
                        {chat.avatar}
                      </div>
                    )}
                    {chat.unread > 0 && (
                      <Badge className="absolute -top-1 -right-1 h-6 w-6 text-xs p-0 flex items-center justify-center bg-green-500 text-white min-w-[24px] flex-shrink-0">
                        {chat.unread}
                      </Badge>
                    )}
                  </div>
                  <div className="flex-1 min-w-0 overflow-hidden w-0">
                    <div className="flex items-center justify-between w-full min-w-0">
                      <h3 className="text-sm font-medium truncate flex-1 min-w-0">{chat.name}</h3>
                    </div>
                    <p className="text-xs text-gray-600 truncate mt-1 w-full">{chat.lastMessage}</p>
                    <div className="flex items-center justify-between mt-2 w-full min-w-0">
                      {chat.type === 'individual' && chat.college && (
                        <Badge variant="secondary" className="text-xs truncate max-w-[100px] flex-shrink-0">
                          {chat.college} '{chat.year?.slice(-2)}
                        </Badge>
                      )}
                      {chat.type === 'group' && chat.members && (
                        <div className="flex items-center flex-shrink-0 min-w-0">
                          <Users className="h-3 w-3 text-gray-400 mr-1 flex-shrink-0" />
                          <span className="text-xs text-gray-400 truncate">{chat.members} members</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'communities':
        return (
          <div className="space-y-2">
            {communities.map((community) => renderCommunityStructure(community))}
          </div>
        );

      case 'events':
        return (
          <div className="space-y-2">
            {userEvents.map((event) => renderEventStructure(event))}
          </div>
        );

      case 'opportunities':
        return (
          <div className="space-y-2">
            {userOpportunities.map((opportunity) => renderOpportunityStructure(opportunity))}
          </div>
        );

      default:
        return null;
    }
  };

  const renderCollegeChannels = () => {
    const channels = getCollegeChannels(selectedCollege);
    const college = userColleges.find(c => c.id === selectedCollege);

    return (
      <div className="space-y-4">
        {/* College Header */}
        <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="h-12 w-12 bg-blue-200 rounded-full flex items-center justify-center text-xl flex-shrink-0">
              {college?.icon}
            </div>
            <div className="min-w-0">
              <h3 className="font-medium text-blue-900 truncate">{college?.name}</h3>
              <p className="text-sm text-blue-600">Batch {college?.graduationYear} • {college?.memberCount} alumni</p>
            </div>
          </div>
        </div>

        {/* Channels */}
        <div className="space-y-2">
          {channels.map((channel) => renderChannelItem(channel))}
        </div>
      </div>
    );
  };

  // Sample messages
  const messages = [
    {
      id: 1,
      sender: 'Rahul Kumar',
      content: 'Hey everyone! There\'s a great tech meetup happening this weekend in Gurgaon. Anyone interested?',
      timestamp: '10:30 AM',
      isOwn: false,
      avatar: 'https://github.com/shadcn.png'
    },
    {
      id: 2,
      sender: 'Priya Sharma',
      content: 'Count me in! What\'s the topic?',
      timestamp: '10:32 AM',
      isOwn: false,
      avatar: 'https://github.com/shadcn.png'
    },
    {
      id: 3,
      sender: 'You',
      content: 'Sounds interesting! I\'ll try to make it.',
      timestamp: '10:35 AM',
      isOwn: true,
      avatar: 'https://github.com/shadcn.png'
    }
  ];

  return (
    <div className="h-[calc(100vh-8rem)] flex bg-white rounded-lg shadow-sm border">
      {/* Chat List */}
      <div className="w-80 border-r flex flex-col overflow-hidden">
        {/* Header with Chips */}
        <div className="p-4 border-b space-y-4 flex-shrink-0">
          <div className="flex items-center justify-between w-full">
            <h2 className="font-semibold text-gray-900 truncate flex-1 min-w-0">Messages</h2>
            <Button variant="ghost" size="sm" className="flex-shrink-0">
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          {/* Tab Chips */}
          <div className="flex flex-wrap gap-2 w-full">
            {renderChip('chats', 'Chats', activeTab === 'chats')}
            {renderChip('communities', 'Communities', activeTab === 'communities')}
            {renderChip('college', 'College', activeTab === 'college')}
            {renderChip('events', 'Events', activeTab === 'events')}
            {renderChip('opportunities', 'Opportunities', activeTab === 'opportunities')}
          </div>

          {/* Search */}
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Search conversations..." className="pl-10 w-full" />
          </div>
        </div>

        <ScrollArea className="flex-1 p-4 overflow-hidden">
          <div className="w-full min-w-0">
            {activeTab === 'college' ? (
              <>
                {userColleges.length > 1 && renderCollegeChips()}
                {renderCollegeChannels()}
              </>
            ) : (
              renderChatList()
            )}
          </div>
        </ScrollArea>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b bg-gradient-to-r from-green-50 to-blue-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-lg shadow-sm">
                🎓
              </div>
              <div>
                <h2 className="text-sm font-medium text-gray-800">Alumni Hangout 🚀</h2>
                <p className="text-xs text-gray-600">156 friends • 23 hanging out</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" className="hover:bg-white/50">
                <Phone className="h-4 w-4 text-green-600" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-white/50">
                <Video className="h-4 w-4 text-blue-600" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-white/50">
                <Users className="h-4 w-4 text-gray-600" />
              </Button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4 bg-gradient-to-b from-white to-gray-50/30">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex space-x-2 max-w-xs lg:max-w-md ${message.isOwn ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  {!message.isOwn && (
                    <Avatar className="h-8 w-8 ring-2 ring-white shadow-sm">
                      <AvatarImage src={message.avatar} />
                      <AvatarFallback className="bg-gradient-to-br from-green-400 to-blue-500 text-white text-xs">{message.sender.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                  )}
                  <div>
                    {!message.isOwn && (
                      <p className="text-xs text-gray-500 mb-1 px-1">{message.sender}</p>
                    )}
                    <div
                      className={`rounded-2xl px-4 py-2 shadow-sm ${
                        message.isOwn
                          ? 'bg-gradient-to-r from-green-500 to-green-600 text-white'
                          : 'bg-white border border-gray-100 text-gray-900'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.content}</p>
                    </div>
                    <p className={`text-xs text-gray-400 mt-1 px-1 ${message.isOwn ? 'text-right' : ''}`}>
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Message Input */}
        <div className="p-4 border-t bg-white">
          <div className="flex space-x-3 items-end">
            <Button 
              variant="ghost" 
              size="sm" 
              className="rounded-full h-10 w-10 p-0 hover:bg-gray-100 transition-all"
              onClick={() => {/* Will need drawer state management */}}
            >
              <Plus className="h-5 w-5 text-gray-600" />
            </Button>
            <Input
              placeholder=""
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1 rounded-full bg-gray-50 border-0 px-4 py-3 focus:bg-white focus:ring-2 focus:ring-green-200 transition-all"
              onKeyPress={(e) => {
                if (e.key === 'Enter' && newMessage.trim()) {
                  setNewMessage('');
                }
              }}
            />
            <Button size="sm" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full h-10 w-10 p-0 shadow-md hover:shadow-lg transition-all">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}