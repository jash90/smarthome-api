import { Room } from "./room.entity";

export const roomProviders = [{ provide: "RoomsRepository", useValue: Room }];
