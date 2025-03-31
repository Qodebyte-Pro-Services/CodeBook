"use client";

import React, { useState, useEffect } from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  onClose?: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onClose) {
          onClose();
        }
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  const getBackgroundColor = () => {
    switch (type) {
      case 'success':
        return 'bg-green-200 text-green-800';
      case 'error':
        return 'bg-red-200 text-red-800';
      case 'warning':
        return 'bg-yellow-200 text-yellow-800';
      case 'info':
        return 'bg-blue-200 text-blue-800';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed top-4 right-4 p-4 rounded-md ${getBackgroundColor()} shadow-md`}
    >
      {message}
    </div>
  );
};

export default Toast;