import { Condition } from "./condition.entity";

export const conditionProviders = [
    { provide: "ConditionsRepository", useValue: Condition }
];
