import { Controller, Get, Post, Body } from '@nestjs/common';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../schemas/category.schema';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async findAll(): Promise<Category[]> {
    return this.categoriesService.findAll();
  }

  @Post()
  async create(@Body() category: Category): Promise<Category> {
    return this.categoriesService.create(category);
  }

  @Post('seed')
  async seed() {
    const categories = [
      { name: "Hamısı" },
      { name: "Mənzil və həyət evləri" },
      { name: "Partnyor şirkətlər" },
      { name: "Torpaq sahəsi" },
      { name: "Ev tikintisi və təmir" },
      { name: "Dövlət ipotekası" },
      { name: "Biznes obyekti" },
    ];
    
    return this.categoriesService.insertMany(categories as any);
  }
}
