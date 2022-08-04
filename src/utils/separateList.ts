import { IPopularProduct } from "../types/productsTypes/productsTypes";
import { IUser } from "../types/usersTypes/usersTypes";

export const separateList = (list: any[]) => list.length && list.slice(0, 3);
