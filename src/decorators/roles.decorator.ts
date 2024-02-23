import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/guards/roles.guard';
import { Role } from 'src/users/user.schema';

export const ROLES = 'roles';
export const Roles = (roles: Role[]) => {
  return applyDecorators(SetMetadata(ROLES, roles), UseGuards(RolesGuard));
};
