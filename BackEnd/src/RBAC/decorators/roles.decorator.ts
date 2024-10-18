import { SetMetadata } from '@nestjs/common';

// Define the Roles decorator to assign user roles (PARENT or DOCTOR)
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
