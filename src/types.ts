export type ScreenTab = 'home' | 'about' | 'projects' | 'focus' | 'impact' | 'stories' | 'get-involved' | 'contact';

export interface Director {
  id: string;
  name: string;
  title: string;
  bio: string;
  fullBio: string;
  imageUrl: string;
  email?: string;
  quote?: string;
}

export interface FocusArea {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badgeColor?: string;
  bgGradient?: string;
  detailedInfo: string;
  projectsCount: number;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  location: string;
  beneficiaries: string;
  imageUrl: string;
  secondaryImages?: string[];
  status: 'active' | 'upcoming' | 'completed';
  quarter?: string;
  fundedPercentage?: number;
}

export interface Story {
  id: string;
  title: string;
  summary: string;
  fullContent: string;
  date: string;
  author: string;
  imageUrl: string;
  category: string;
  readTime: string;
}

export interface UpcomingProject {
  id: string;
  title: string;
  timeline: string;
  imageUrl: string;
  description: string;
}

export interface ImpactMetric {
  id: string;
  label: string;
  value: string;
  icon: string;
  description: string;
}

export interface VolunteerFormData {
  fullName: string;
  email: string;
  phone: string;
  areaOfInterest: string;
  district: string;
  message: string;
}

export interface DonationOptions {
  type: 'one-time' | 'monthly';
  amount: number;
  customAmount?: string;
  cause?: string;
  donorName?: string;
  donorEmail?: string;
  donorPhone?: string;
  panNumber?: string;
}
