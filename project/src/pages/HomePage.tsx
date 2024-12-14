import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { Briefcase, Users, Building2, TrendingUp } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import JobCard from '../components/JobCard';
import { jobs } from '../data/jobs';
import { SearchFilters } from '../types';

export default function HomePage() {
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    location: '',
    type: ''
  });

  const navigate = useNavigate(); // Hook for navigation

  // Additional featured jobs with description, salary, posted time, and type
  const additionalFeaturedJobs = [
    {
      id: '5',
      title: 'Frontend Developer',
      company: 'TechCorp',
      location: 'Remote',
      description: 'Work on the next generation of web applications and user interfaces.',
      salary: '$80,000 - $100,000/year',
      postedTime: '2 days ago',
      type: 'Full-Time'
    },
    {
      id: '6',
      title: 'Data Analyst',
      company: 'DataTech',
      location: 'New York',
      description: 'Analyze data to help drive business decisions and optimize processes.',
      salary: '$70,000 - $90,000/year',
      postedTime: '5 days ago',
      type: 'Full-Time'
    },
    {
      id: '7',
      title: 'Product Manager',
      company: 'InnoTech',
      location: 'San Francisco',
      description: 'Lead a cross-functional team to define and deliver new products.',
      salary: '$120,000 - $150,000/year',
      postedTime: '1 week ago',
      type: 'Part-Time'
    },
    {
      id: '8',
      title: 'UI/UX Designer',
      company: 'Designify',
      location: 'Los Angeles',
      description: 'Design intuitive, user-friendly interfaces and exceptional user experiences.',
      salary: '$90,000 - $110,000/year',
      postedTime: '3 days ago',
      type: 'Full-Time'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-indigo-900 to-purple-900">

      {/* Navbar */}
      <nav className="bg-gray-900 py-4 px-6 fixed top-0 left-0 right-0 z-10 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-white text-3xl font-extrabold tracking-tight">
            <span className="text-blue-500">My</span> Jobs
          </div>
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#featured-jobs" className="text-white hover:text-blue-300 text-lg">Featured Jobs</a>
            <a href="#categories" className="text-white hover:text-blue-300 text-lg">Categories</a>
            <button
  onClick={() => navigate('/about')}
  className="text-white hover:text-blue-300 text-lg"
>
  About
</button>
            <button
              className="text-white bg-transparent border-2 border-white px-4 py-2 rounded-md hover:bg-white hover:text-gray-900 transition-colors text-lg"
              onClick={() => navigate('/signin')} // Redirect to Sign In
            >
              Sign Out
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative px-6 lg:px-8 pt-32 pb-32 sm:pt-32 sm:pb-40">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              Find Your Dream Job Today
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Connect with top companies and opportunities that match your skills and aspirations.
            </p>
          </div>

          <div className="mt-12">
            <SearchBar filters={filters} setFilters={setFilters} />
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { icon: Briefcase, label: 'Active Jobs', value: '2,000+' },
              { icon: Building2, label: 'Companies', value: '800+' },
              { icon: Users, label: 'Job Seekers', value: '50,000+' },
              { icon: TrendingUp, label: 'Placements', value: '10,000+' }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="h-8 w-8 mx-auto text-blue-200" />
                <p className="mt-2 text-3xl font-semibold text-white">{stat.value}</p>
                <p className="text-blue-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Jobs Section */}
      <div id="featured-jobs" className="bg-gray-50 mt-24">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Featured Jobs
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore the latest opportunities from top companies
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Existing jobs */}
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
            {/* Additional featured jobs */}
            {additionalFeaturedJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-gray-800 via-gray-900 to-black hover:from-gray-700 hover:via-gray-800 hover:to-gray-900 transition-all">
              View All Jobs
              <Briefcase className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div id="categories" className="bg-white mt-24">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
            Popular Categories
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              'Software Development',
              'Data Science',
              'Product Management',
              'UI/UX Design',
              'Marketing',
              'Sales'
            ].map((category) => (
              <div
                key={category}
                className="group relative rounded-lg p-6 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-colors cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-gray-900">{category}</h3>
                <p className="mt-2 text-sm text-gray-600">
                  {Math.floor(Math.random() * 100)} open positions
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
