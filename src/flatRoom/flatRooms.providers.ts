import { FlatRoom } from "./flatRoom.entity";

export const flatRoomProviders = [
    { provide: "FlatRoomsRepository", useValue: FlatRoom }
];
