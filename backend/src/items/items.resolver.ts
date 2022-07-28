import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Item } from 'src/@generated/prisma-nestjs-graphql/item/item.model';
import { CreateOneItemArgs } from 'src/@generated/prisma-nestjs-graphql/item/create-one-item.args';
import { ItemsService } from 'src/items/items.service';
import { FindFirstItemArgs } from 'src/@generated/prisma-nestjs-graphql/item/find-first-item.args';

@Resolver(() => Item)
export class ItemsResolver {
  constructor(private readonly itemsService: ItemsService) {}

  @Query(() => Item)
  item(@Args() args: FindFirstItemArgs) {
    return this.itemsService.findFirst(args);
  }

  @Query(() => [Item], { name: 'items' })
  findMany() {
    return this.itemsService.findMany();
  }

  @Mutation(() => Item)
  async createItem(@Args() args: CreateOneItemArgs) {
    return this.itemsService.createItem(args);
  }
}
