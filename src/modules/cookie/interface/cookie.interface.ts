import { Document } from 'mongoose';

export interface Cookie extends Document{
  readonly name: string;
}