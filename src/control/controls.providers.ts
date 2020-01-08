import { Control } from "./control.entity";

export const controlProviders = [
    { provide: "ControlsRepository", useValue: Control }
];
