import { RoomControl } from "./roomControl.entity";

export const roomControlProviders = [
    { provide: "RoomControlsRepository", useValue: RoomControl }
];
