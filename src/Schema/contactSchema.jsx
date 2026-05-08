import { z } from 'zod';

export const contactSchema = z.object({
  fullName: z.string().min(3, 'Minimum 3 characters'),
  email: z.string().email('Valid email format required'),
  phone: z.string().regex(/^\d+$/, 'Numbers only').min(11, 'Minimum 11 digits'),
  service: z.string().min(1, 'Service is required'),
  budget: z.string().min(1, 'Budget is required'),
  message: z.string().min(20, 'Minimum 20 characters'),
});
