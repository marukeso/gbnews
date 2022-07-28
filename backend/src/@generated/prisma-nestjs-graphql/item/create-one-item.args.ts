import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemCreateInput } from './item-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneItemArgs {

    @Field(() => ItemCreateInput, {nullable:false})
    @Type(() => ItemCreateInput)
    @ValidateNested()
    @Type(() => ItemCreateInput)
    data!: ItemCreateInput;
}
