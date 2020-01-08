import { User } from "../user.entity";
import { ApiModelProperty } from "@nestjs/swagger";
export class UserDto {
    @ApiModelProperty()
    id: string;

    @ApiModelProperty()
    readonly email: string;

    @ApiModelProperty()
    readonly firstname: string;

    @ApiModelProperty()
    readonly lastname: string;

    constructor(user: User) {
        this.id = user.id;
        this.email = user.email;
        this.firstname = user.firstname;
        this.lastname = user.lastname;
    }
}
