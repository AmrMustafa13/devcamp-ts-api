import { RequestHandler } from "express";

export interface GeoJSONPoint {
  type: "Point";
  coordinates: (number | undefined)[];
  formattedAddress: string | undefined;
  street: string | undefined;
  city: string | undefined;
  state: string | undefined;
  zipcode: string | undefined;
  country: string | undefined;
}

export type Careers = [
  "Web Development",
  "Mobile Development",
  "UI/UX",
  "Data Science",
  "Business",
  "Other"
];

export interface IBootcamp {
  name: string;
  slug: string;
  description: string;
  website: string;
  phone: string;
  email: string;
  address: string | undefined;
  location: GeoJSONPoint;
  careers: Careers;
  averageRating: number;
  averageCost: number;
  photo: string;
  housing: boolean;
  jobAssistance: boolean;
  jobGuarantee: boolean;
  acceptGi: boolean;
  createdAt: Date;
}

export type ExpressHandler<Req, Res> = RequestHandler<
  any,
  Partial<Res>,
  Partial<Req>,
  any
>;
