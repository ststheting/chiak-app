import axios from "axios";

class CatalogService {
    getProducts = async () => {
        return axios
            .get(`http://localhost:8080/products`)
            .then((response) => {
                localStorage.setItem("catalog", JSON.stringify(response.data));
                // return response.data;
            })
            .catch((err) => {
                console.log(err);
                return "failed"
                // throw err;
            });
    }
    
    addProduct = async (item) => {
        return axios
        .post(`http://localhost:8080/users/1/cart`, item)
        .catch((err) => {
            console.log(err);
            throw err;
        });
    }

    search = async(product) => {
        return axios
            .post(`http://localhost/users/1/presets/1/getItems`, product)
            .catch((err) => {
                console.log(err);
                throw(err);
            });
    }
}
export default new CatalogService();