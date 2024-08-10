import { Injectable } from '@nestjs/common'

import { GetOrCreateSessionDto } from '../dto'
import { Session } from '../entities'
import { SessionsRepositoryInterface } from '../repositories'

@Injectable()
export class GetOrCreateSessionService {
  constructor(
    private readonly sessionsRepository: SessionsRepositoryInterface,
  ) {}

  async execute(data: GetOrCreateSessionDto) {
    const session = await this.sessionsRepository.getById(data.sessionId)
    if (session) {
      return session
    }

    const experiment = Session.create(
      data.ipAddress,
      data.device,
      data.os,
      data.browserVersion,
      data.browserLanguage,
      data.location,
      data.numberOfVisits,
      data.variantAssignments,
    )

    return await this.sessionsRepository.create(experiment)
  }
}
