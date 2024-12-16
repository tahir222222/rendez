export interface Appointment {
  id: string;
  patientName: string;
  date: string;
  time: string;
  reason: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}

export interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
}