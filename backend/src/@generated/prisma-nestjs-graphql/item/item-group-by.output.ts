import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { ItemCountAggregate } from './item-count-aggregate.output';
import { ItemMinAggregate } from './item-min-aggregate.output';
import { ItemMaxAggregate } from './item-max-aggregate.output';

@ObjectType()
export class ItemGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @HideField()
    createdAt!: Date | string;

    @HideField()
    updatedAt!: Date | string;

    @Field(() => ItemCountAggregate, {nullable:true})
    _count?: ItemCountAggregate;

    @Field(() => ItemMinAggregate, {nullable:true})
    _min?: ItemMinAggregate;

    @Field(() => ItemMaxAggregate, {nullable:true})
    _max?: ItemMaxAggregate;
}
