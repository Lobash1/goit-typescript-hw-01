export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

//  Record
const RoleDescription: Record<UserRole, string> = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};
