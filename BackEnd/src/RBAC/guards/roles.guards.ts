import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());

    if (!roles) {
      return true;  // If no roles are defined, allow access
    }
 
    const request = context.switchToHttp().getRequest();
    const user = request.user;  // Retrieved from JWT Guard

    if (!roles.includes(user.userType)) {
      throw new ForbiddenException('You do not have permission to access this resource');
    }

    return true;  // Allow access if userType matches the roles required
  }
}
