import axios from "axios";

class ShoppingListService {
    getProducts = async () => {
        return axios
            .get(`http://localhost:8080/users/1/cart`)
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
            .delete(`http://localhost:8080/users/1/cart/${id}`)
            .catch((err) => {
                console.log(err);
                return "failed";
                // throw err;
            });
    }

    deleteAllProducts = async() => {
        return axios
            .delete(`http://localhost:8080/users/1/cart/deleteAll`)
            .catch((err) => {
                console.log(err);
                throw err;
            });
    }
}
export default new ShoppingListService();