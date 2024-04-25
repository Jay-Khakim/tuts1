import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsEnum(["INTER", "ENGINEER", "ADMIN"], {
        message: "Valid role reuqired"
    })
    role: "INTERN" | "ENGINEER" | "ADMIN"
}