export type UserModel = {
  id: number | null;
  email: string;
  firstName: string;
  lastName: string;
  roles?: string | string[]
}