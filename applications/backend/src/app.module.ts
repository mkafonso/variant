import { Module } from '@nestjs/common'

import { AccountsModule } from './accounts/accounts.module'
import { ExperimentsModule } from './experiments/experiments.module'
import { ProductsModule } from './products/products.module'

@Module({
  imports: [AccountsModule, ProductsModule, ExperimentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
