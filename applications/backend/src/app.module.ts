import { Module } from '@nestjs/common'

import { AccountsModule } from './accounts/accounts.module'
import { ProductsModule } from './products/products.module'

@Module({
  imports: [AccountsModule, ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
