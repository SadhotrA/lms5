export interface IUser {
    type: 'ADMIN' | 'EMPLOYEE' | 'PATRON';
    firstName: string;
    lastName: string;
    name: string;
    email: string;
    password: string;
}