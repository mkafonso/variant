import { Module } from '@nestjs/common'

import { AccountsModule } from './accounts/accounts.module'
import { ExperimentsModule } from './experiments/experiments.module'
import { ProductsModule } from './products/products.module'
import { SessionsModule } from './sessions/sessions.module'

@Module({
  imports: [AccountsModule, ProductsModule, ExperimentsModule, SessionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
