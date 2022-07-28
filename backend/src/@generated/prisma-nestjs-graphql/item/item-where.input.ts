import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ItemWhereInput {

    @Field(() => [ItemWhereInput], {nullable:true})
    AND?: Array<ItemWhereInput>;

    @Field(() => [ItemWhereInput], {nullable:true})
    OR?: Array<ItemWhereInput>;

    @Field(() => [ItemWhereInput], {nullable:true})
    NOT?: Array<ItemWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;
}
