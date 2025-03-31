"use client";

import React, { useState, useEffect } from 'react';
import "../globals.css";

const Loading: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  if (!isClient || !isLoading) {
    return null;
  }

  return (
    <div className="loading-container">
      <div className="loading-bar">
        <div className="bar" style={{ animationDelay: '0s' }}></div>
        <div className="bar" style={{ animationDelay: '0.1s' }}></div>
        <div className="bar" style={{ animationDelay: '0.2s' }}></div>
        <div className="bar" style={{ animationDelay: '0.3s' }}></div>
        <div className="bar" style={{ animationDelay: '0.4s' }}></div>
        <div className="bar" style={{ animationDelay: '0.5s' }}></div>
        <div className="bar" style={{ animationDelay: '0.6s' }}></div>
        <div className="bar" style={{ animationDelay: '0.7s' }}></div>
      </div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;