import { IBootcamp } from "./types";

// Bootcamp API
export interface GetBootcampsRequest {}
export interface GetBootcampsResponse {
  success: boolean;
  data: IBootcamp[];
  count: number;
}

export interface GetBootcampRequest {}
export interface GetBootcampResponse {
  success: boolean;
  data: IBootcamp;
}

export interface CreateBootcampRequest extends IBootcamp {}
export interface CreateBootcampResponse {
  success: boolean;
  data: IBootcamp;
}

export interface UpdateBootcampRequest {}
export interface UpdateBootcampResponse {
  success: boolean;
  data: IBootcamp;
}

export interface DeleteBootcampRequest {}
export interface DeleteBootcampResponse {
  success: boolean;
  data: {};
}
