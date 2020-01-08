import { Type } from "./type.entity";

export const typeProviders = [{ provide: "TypesRepository", useValue: Type }];
