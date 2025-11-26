import React from 'react';

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string[];
}

export interface Certification {
  id: string;
  name: string;
  code: string;
  date: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  tags: string[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  website: string;
  linkedin: string;
  github: string;
}

export interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}