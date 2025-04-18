"use client";

import React, { useState, useEffect } from "react";

interface ToastProps {
  message: string;
  type: "success" | "error" | "warning" | "info" | "confirm";
  duration?: number; 
  onClose?: () => void;
  onConfirm?: () => void; 
  onCancel?: () => void; 
}

const Toast: React.FC<ToastProps> = ({
  message,
  type,
  duration = 3000,
  onClose,
  onConfirm,
  onCancel,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (type !== "confirm" && isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onClose) {
          onClose();
        }
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose, type]);

  const getBackgroundColor = () => {
    switch (type) {
      case "success":
        return "bg-green-200 text-green-800";
      case "error":
        return "bg-red-200 text-red-800";
      case "warning":
        return "bg-yellow-200 text-yellow-800";
      case "info":
        return "bg-blue-200 text-blue-800";
      case "confirm":
        return "bg-blue-400 text-white";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed  md:top-4  top-20 right-4 p-4 rounded-md ${getBackgroundColor()} shadow-md`}
    >
      <div>{message}</div>
      {type === "confirm" && (
        <div className="flex justify-end gap-2 mt-2">
          <button
            onClick={() => {
              if (onConfirm) onConfirm();
              setIsVisible(false);
            }}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Yes
          </button>
          <button
            onClick={() => {
              if (onCancel) onCancel();
              setIsVisible(false);
            }}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            No
          </button>
        </div>
      )}
    </div>
  );
};

export default Toast;