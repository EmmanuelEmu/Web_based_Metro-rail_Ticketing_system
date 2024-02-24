import { createContext } from "react";

// TYPES
export interface userType {
  title: string;
  dt1: number;
  dt2: number;
  dt3: number;
  firstName: string;
  lastName: string;
  midName: string;
  gender: string;
  phone: string;
  email: string;
  pass: string;
}

// INITIAL VALUES
export const userData: userType = {
  title: "CEO of Apple",
  dt1: 32,
  dt2: 40,
  dt3: 50,
  firstName: "Jane",
  lastName: "Doe",
  midName: "Baker",
  gender: "female",
  phone: "932-555-4247",
  email: "janedoe@gmail.com",
  pass: "password123"
};
export const UserMain = createContext(userData);