import { Experiment } from '../entities'

export abstract class ExperimentsRepositoryInterface {
  abstract create(experiment: Experiment): Promise<Experiment>
}
