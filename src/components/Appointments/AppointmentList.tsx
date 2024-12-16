import React from 'react';
import { AppointmentCard } from './AppointmentCard';
import type { Appointment } from '../../types';

interface AppointmentListProps {
  appointments: Appointment[];
  onStatusChange: (id: string, status: Appointment['status']) => void;
}

export function AppointmentList({ appointments, onStatusChange }: AppointmentListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {appointments.map((appointment) => (
        <AppointmentCard
          key={appointment.id}
          appointment={appointment}
          onStatusChange={onStatusChange}
        />
      ))}
    </div>
  );
}