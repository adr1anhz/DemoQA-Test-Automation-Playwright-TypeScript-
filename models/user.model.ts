
export type Subject =
  | 'Maths'
  | 'Physics'
  | 'Chemistry'
  | 'Economics'
  | 'English'
  | 'Biology'
  | 'History'
  | 'Arts';

export interface User {
  fullName?: string;
  email?: string;
  currentAddress?: string;
  permanentAddress?: string;
  firstName?: string;
  lastName?: string;
  age?: number;
  salary?: number;
  department?: string;
  
  sex?: string;
  mobileNumber?: string;
  dateOfBirth?: string;

  subjects?: Subject[];
}

