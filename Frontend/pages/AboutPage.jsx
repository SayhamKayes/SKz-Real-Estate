import React from 'react';
import AboutHeritage from '../components/About/AboutHeritage.jsx';
import ClientReviews from '../components/Testimonials/ClientReviews.jsx';

export default function AboutPage() {
  return (
    <div className="pt-20 bg-[#FBFBF9]">
      {/* 1. Al-Modina Homes Development Ltd. Complete Company Dossier (PDF-Based) */}
      <AboutHeritage />

      {/* 2. Homeowner & Landowner Voices / Testimonials */}
      <ClientReviews />
    </div>
  );
}
