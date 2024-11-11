export interface IUser {
   name: string;
   email: string;
   avatar?: string;
   favorite: string[];
   basket: Record<string, number>;
}
