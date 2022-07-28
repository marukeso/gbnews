import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { ItemCountOrderByAggregateInput } from './item-count-order-by-aggregate.input';
import { ItemMaxOrderByAggregateInput } from './item-max-order-by-aggregate.input';
import { ItemMinOrderByAggregateInput } from './item-min-order-by-aggregate.input';

@InputType()
export class ItemOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ItemCountOrderByAggregateInput, {nullable:true})
    _count?: ItemCountOrderByAggregateInput;

    @Field(() => ItemMaxOrderByAggregateInput, {nullable:true})
    _max?: ItemMaxOrderByAggregateInput;

    @Field(() => ItemMinOrderByAggregateInput, {nullable:true})
    _min?: ItemMinOrderByAggregateInput;
}
