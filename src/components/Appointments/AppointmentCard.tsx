import React from 'react';
import { Clock, Calendar, User, FileText } from 'lucide-react';
import type { Appointment } from '../../types';

interface AppointmentCardProps {
  appointment: Appointment;
  onStatusChange: (id: string, status: Appointment['status']) => void;
}

export function AppointmentCard({ appointment, onStatusChange }: AppointmentCardProps) {
  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    confirmed: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800'
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-3">
          <User className="h-5 w-5 text-blue-600" />
          <h3 className="text-lg font-semibold">{appointment.patientName}</h3>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${statusColors[appointment.status]}`}>
          {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
        </span>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center space-x-2 text-gray-600">
          <Calendar className="h-4 w-4" />
          <span>{appointment.date}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600">
          <Clock className="h-4 w-4" />
          <span>{appointment.time}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600">
          <FileText className="h-4 w-4" />
          <span>{appointment.reason}</span>
        </div>
      </div>

      <div className="mt-4 flex space-x-2">
        <button
          onClick={() => onStatusChange(appointment.id, 'confirmed')}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
        >
          Confirm
        </button>
        <button
          onClick={() => onStatusChange(appointment.id, 'cancelled')}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}