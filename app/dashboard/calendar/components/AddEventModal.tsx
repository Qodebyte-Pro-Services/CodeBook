"use client";
import React, { useState, useEffect } from 'react';
import Input from '@/app/dashboard/teachers/add-teacher/compoenent/Input';
import TextAreaInput from '../../teachers/add-teacher/compoenent/TextAreaInput';

interface AddEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: { 
    title: string; 
    description: string; 
    startDate: Date; 
    endDate: Date; 
    startTime: string; 
    closingTime: string; 
    color: string 
  }) => void;
  selectedDate?: Date;  
  eventToEdit?: {
    title: string;
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
    description?: string;
    color?: string;
  } | null;
  isEditing?: boolean;
}

const AddEventModal: React.FC<AddEventModalProps> = ({ 
  isOpen, 
  onClose, 
  onSave, 
  selectedDate,
  eventToEdit, 
  isEditing = false 
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState(selectedDate || new Date()); 
  const [endDate, setEndDate] = useState(selectedDate || new Date());
  const [startTime, setStartTime] = useState('09:00');
  const [closingTime, setClosingTime] = useState('17:00');
  const [color, setColor] = useState('#000000');

  useEffect(() => {
    if (isEditing && eventToEdit) {
      setTitle(eventToEdit.title);
      setDescription(eventToEdit.description || '');
      setStartDate(new Date(eventToEdit.startDate));
      setEndDate(new Date(eventToEdit.endDate));
      setStartTime(eventToEdit.startTime);
      setClosingTime(eventToEdit.endTime);
      setColor(eventToEdit.color || '#000000');
    } else if (selectedDate) {  
      setStartDate(new Date(selectedDate));
      setEndDate(new Date(selectedDate));
    } else {
      
      setTitle('');
      setDescription('');
      setStartDate(new Date());
      setEndDate(new Date());
      setStartTime('09:00');
      setClosingTime('17:00');
      setColor('#000000');
    }
  }, [isEditing, eventToEdit, selectedDate]);

  const formatDateForInput = (date: Date) => {
    // Get the local date parts to avoid timezone issues
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleSave = () => {
    onSave({ 
      title, 
      description, 
      startDate, 
      endDate, 
      startTime, 
      closingTime, 
      color 
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 bg-gray-500/75 transition-opacity flex justify-center md:px-0 px-2 items-center">
      <div className="bg-white p-6 rounded-lg xl:w-1/3 md:w-1/2 w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">
            {isEditing ? 'Edit School Event' : 'Add School Event'}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <Input 
          label="Title" 
          placeholder="Event Title" 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        
        <TextAreaInput 
          label="Description" 
          placeholder="Event Description"  
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />

        <div className="grid grid-cols-2 gap-4">
          <div className="flex-1">
            <Input 
              type="date" 
              value={formatDateForInput(startDate)} 
              onChange={(e) => setStartDate(new Date(e.target.value))} 
              label='Start Date' 
              placeholder='' 
            />
          </div>
          <div className="flex-1">
            <Input 
              type="date" 
              value={formatDateForInput(endDate)} 
              onChange={(e) => setEndDate(new Date(e.target.value))} 
              label='End Date' 
              placeholder='' 
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-5">
          <div className="flex-1">
            <Input 
              type="time" 
              value={startTime} 
              onChange={(e) => setStartTime(e.target.value)}  
              label='Start Time'  
              placeholder=''
            />
          </div>
          <div className="flex-1">
            <Input 
              type="time" 
              value={closingTime} 
              onChange={(e) => setClosingTime(e.target.value)} 
              label='Closing Time' 
              placeholder='' 
            />
          </div>
        </div>
        
        <div className="mt-4">
          <Input 
            type="color" 
            value={color} 
            onChange={(e) => setColor(e.target.value)} 
            label='Event Color' 
            placeholder='' 
          />
        </div>

        <button 
          onClick={handleSave} 
          className="w-full bg-blue-500 text-white rounded-md py-2 mt-4 hover:bg-blue-600"
        >
          {isEditing ? 'Update Event' : 'Save Event'}
        </button>
      </div>
    </div>
  );
};

export default AddEventModal;