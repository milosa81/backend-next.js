import { IsString, IsEmail } from "class-validator";

export interface Contact {
    readonly firstName: string;
    readonly lastName: string;
    readonly email?: string;
    readonly phone: string;
}