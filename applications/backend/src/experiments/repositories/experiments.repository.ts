import { Experiment } from '../entities'

export abstract class ExperimentsRepositoryInterface {
  abstract create(experiment: Experiment): Promise<Experiment>

  abstract delete(id: string): Promise<void>

  abstract getAllByProductId(productId: string): Promise<Experiment[]>

  abstract getById(id: string): Promise<Experiment | null>
}
