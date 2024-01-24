import * as DATA_API from "./DATA_API";

const getData = async (APIpath) => {
    return fetch(APIpath, {
        cache: "no-store",
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            } else {
                return response;
            }
        })
        .then((response) => response.json());
};

const getList = async (listNumber) => {
    const APIpath = `${DATA_API.MAIN_PATH}${DATA_API.LIST_PATH}${listNumber}`;
    return await getData(APIpath);
};

const getItem = async (itemId) => {
    const APIpath = `${DATA_API.MAIN_PATH}${DATA_API.ITEM_PATH}${itemId}`;
    return await getData(APIpath);
};

export { getList, getItem };