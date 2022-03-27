import axios from "axios";
import UserService from "./UserService";

class ShoppingListService {
    getProducts = async () => {
        return axios
            .get(`http://localhost:8080/users/${UserService.getCurrentUser().id}/cart`)
            .then((response) => {
                localStorage.setItem("list", JSON.stringify(response.data));
                // return response.data;
            })
            .catch((err) => {
                console.log(err);
                return "failed"
                // throw err;
            });
    }

    deleteProduct = async(id) => {
        return axios
            .delete(`http://localhost:8080/users/${UserService.getCurrentUser().id}/cart/${id}`)
            .catch((err) => {
                console.log(err);
                return "failed";
                // throw err;
            });
    }

    deleteAllProducts = async() => {
        return axios
            .delete(`http://localhost:8080/users/${UserService.getCurrentUser().id}/cart/deleteAll`)
            .catch((err) => {
                console.log(err);
                throw err;
            });
    }
}
export default new ShoppingListService();