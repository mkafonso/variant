import { createId } from '@paralleldrive/cuid2'

export class Session {
  public id: string
  public ipAddress: string
  public device: string
  public os: string
  public browserVersion: string
  public browserLanguage: string
  public location: string
  public numberOfVisits: number
  public variantAssignments: { [experimentId: string]: string }
  public createdAt: Date

  constructor(
    id: string,
    ipAddress: string,
    device: string,
    os: string,
    browserVersion: string,
    browserLanguage: string,
    location: string,
    numberOfVisits: number,
    variantAssignments: { [experimentId: string]: string },
    createdAt: Date,
  ) {
    this.id = id
    this.ipAddress = ipAddress
    this.device = device
    this.os = os
    this.browserVersion = browserVersion
    this.browserLanguage = browserLanguage
    this.location = location
    this.numberOfVisits = numberOfVisits
    this.variantAssignments = variantAssignments
    this.createdAt = createdAt
  }

  public static create(
    ipAddress: string,
    device: string,
    os: string,
    browserVersion: string,
    browserLanguage: string,
    location: string,
    numberOfVisits: number,
    variantAssignments: { [experimentId: string]: string },
  ): Session {
    const id = createId()
    const createdAt = new Date()

    return new Session(
      id,
      ipAddress,
      device,
      os,
      browserVersion,
      browserLanguage,
      location,
      numberOfVisits,
      variantAssignments,
      createdAt,
    )
  }
}
