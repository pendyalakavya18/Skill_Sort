import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 to-indigo-600 py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              About SkillSort
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Transforming the way companies find and evaluate talent through innovative AI technology.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:20px_20px]"></div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-8">
                At SkillSort, we're on a mission to revolutionize the hiring process by leveraging cutting-edge AI technology. We believe that finding the right talent shouldn't be a matter of luck or endless hours of manual screening.
              </p>
              <p className="text-lg text-gray-600">
                Our platform is designed to help companies make data-driven hiring decisions, saving time and resources while ensuring the best possible match between candidates and positions.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <h3 className="text-4xl font-bold text-purple-600 mb-2">95%</h3>
                  <p className="text-gray-600">Accuracy Rate</p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <h3 className="text-4xl font-bold text-purple-600 mb-2">75%</h3>
                  <p className="text-gray-600">Time Saved</p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <h3 className="text-4xl font-bold text-purple-600 mb-2">1M+</h3>
                  <p className="text-gray-600">Resumes Processed</p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <h3 className="text-4xl font-bold text-purple-600 mb-2">500+</h3>
                  <p className="text-gray-600">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the experts behind SkillSort who are passionate about transforming the recruitment industry.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'CEO & Co-founder',
                description: '15+ years of experience in HR technology and AI'
              },
              {
                name: 'Michael Chen',
                role: 'CTO',
                description: 'Former ML Lead at major tech companies'
              },
              {
                name: 'Emily Rodriguez',
                role: 'Head of Product',
                description: 'Expert in UX and product development'
              }
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full mx-auto mb-6"></div>
                <h3 className="text-xl font-semibold text-center mb-2">{member.name}</h3>
                <p className="text-purple-600 text-center mb-4">{member.role}</p>
                <p className="text-gray-600 text-center">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'Constantly pushing the boundaries of what\'s possible with AI'
              },
              {
                title: 'Fairness',
                description: 'Ensuring unbiased and equitable hiring processes'
              },
              {
                title: 'Efficiency',
                description: 'Streamlining recruitment to save time and resources'
              },
              {
                title: 'Privacy',
                description: 'Maintaining the highest standards of data security'
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl text-white">#{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Hiring Process?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join hundreds of companies already using SkillSort to find their perfect candidates.
          </p>
          <Link
            to="/register"
            className="inline-block bg-white text-purple-600 font-semibold px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors duration-300"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About; 