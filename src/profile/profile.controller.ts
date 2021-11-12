
import { ApiUseTags, ApiImplicitParam } from "@nestjs/swagger";
import { Controller, Get, Put, Body, Param } from "@nestjs/common";
import { ProfileDto } from "./dto/profile.dto";
import { ProfileService } from "./profile.service";

@ApiUseTags('Profile')
@Controller('profile')
export class ProfileController {
    constructor(private readonly profileService: ProfileService){}
    @Get()
    async find(): Promise<ProfileDto> {
        return this.profileService.findOne();
    }

    @Put(':profileId')
    async update(@Param('profileId') profileId: string, @Body() profileDto: ProfileDto): Promise<ProfileDto> {
        return this.profileService.update(profileId, profileDto);
    }
}