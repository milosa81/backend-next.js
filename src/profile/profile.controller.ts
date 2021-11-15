import { ApiUseTags, ApiImplicitParam } from "@nestjs/swagger";
import { Controller, Get, Put, Body, Param, HttpException } from "@nestjs/common";
import { ProfileDto } from "./dto/profile.dto";
import { ProfileService } from "./profile.service";
import { MongoIdValidationPipe } from "../shared/pipes/mongo-id-validation-pipe";

@ApiUseTags('Profile')
@Controller('profile')
export class ProfileController {
    constructor(private readonly profileService: ProfileService) { }
    @Get()
    async find(): Promise<ProfileDto> {
        try {
            return await this.profileService.findOne();
        } catch (err) {
            throw new HttpException(err.extraInfo, err.code);
        }
    }

    @Put(':profileId')
    async update(@Param('profileId', new MongoIdValidationPipe()) profileId: string, @Body() profileDto: ProfileDto): Promise<ProfileDto> {
        try {
            return await this.profileService.update(profileId, profileDto);
        } catch (err) {
            throw new HttpException(err.extraInfo, err.code);
        }
    }
}