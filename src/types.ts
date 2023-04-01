export interface Clinic {
  id: number;
  name: string;
}

export interface Patient {
  id: number;
  clinic_id: number;
  first_name: string;
  last_name: string;
  date_of_birth: string;
}
