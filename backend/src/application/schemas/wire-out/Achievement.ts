import { ApiProperty } from '@nestjs/swagger';
import { AchievementType } from '../model/Enum';

export class AchievementResponse {
    @ApiProperty({ example: 1 })
    id: number;

    @ApiProperty({ example: AchievementType.CHALLENGE_CLEAN_CODE_LVL_2 })
    type: AchievementType;
}
