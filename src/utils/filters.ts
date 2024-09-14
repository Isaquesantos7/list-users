import { isWithinInterval } from "date-fns";
import { IFilterOption } from "../app/interfaces/filterOptions";
import { IUser } from "../app/interfaces/user/user";

export const filterUsersList = (filterOptions: IFilterOption, usersList: IUser[]): IUser[] => {
    let filteredList: IUser[] = [];

    filteredList = filterUserListByName(filterOptions.name, usersList);
    filteredList = filterUserListByStatus(filterOptions.status, filteredList);
    filteredList = filteredListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);
    
    return filteredList;
}

const filterUserListByName = (name: string, usersList: IUser[]): IUser[] => {
    const NAME_NOT_TYPED = name === undefined;

    if (NAME_NOT_TYPED) {
        return usersList;
    }

    const listFiltered: IUser[] = usersList.filter((user) => user.nome.toLowerCase().includes(name.toLowerCase()));

    return listFiltered;
}

const filterUserListByStatus = (status: boolean | undefined, usersList: IUser[]): IUser[] => {
    const STATUS_NOT_TYPED = status === undefined;

    if (STATUS_NOT_TYPED) {
        return usersList;
    }

    const listFiltered: IUser[] = usersList.filter((user) => user.ativo === status);

    return listFiltered;
}

const filteredListByDate = (startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] => {
    const DATES_NOT_SELECTED = startDate === undefined || endDate === undefined;

    if (DATES_NOT_SELECTED) {
        return usersList;
    }

    const filteredList = usersList.filter((user) => isWithinInterval(new Date(user.dataCadastro), {
        start: startDate,
        end: endDate
    }));

    return filteredList;
}