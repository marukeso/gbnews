import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Item } from 'src/@generated/prisma-nestjs-graphql/item/item.model';
import { FindFirstItemArgs } from 'src/@generated/prisma-nestjs-graphql/item/find-first-item.args';
import { CreateOneItemArgs } from 'src/@generated/prisma-nestjs-graphql/item/create-one-item.args';
import { FindUniqueItemArgs } from 'src/@generated/prisma-nestjs-graphql/item/find-unique-item.args';

@Injectable()
export class ItemsService {
  constructor(private readonly prisma: PrismaService) {}

  async findFirst(args: FindFirstItemArgs): Promise<Item | null> {
    return this.prisma.item.findFirst(args);
  }

  async findMany(): Promise<Item[]> {
    return this.prisma.item.findMany();
  }

  async findUnique(args: FindUniqueItemArgs): Promise<Item | null> {
    return this.prisma.item.findUnique(args);
  }

  async createItem(args: CreateOneItemArgs): Promise<Item> {
    return this.prisma.item.create(args);
  }
}
