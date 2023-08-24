import { API } from "../_constants";
import Services from "./config";

const getTransactionHistory = async (token, data) => {
    const Url = API.GET_TRANSACTION_HISTORY;
    const services = new Services(Url, token);
    const response = await services.get(data);
    return response;
}

const postTransaction = async (token, data) => {
    const Url = API.TRANSACTION;
    const services = new Services(Url, token);
    const response = await services.post(data);
    return response;
}

export {
    getTransactionHistory,
    postTransaction
};