import axios from "axios";
import UserService from "./UserService";

class CatalogService {
    getProducts = async () => {
        return axios
            .get(`http://localhost:8080/products`)
            .then((response) => {
                localStorage.setItem("catalog", JSON.stringify(response.data));
                // return response.data;
            })
            .catch((err) => {
                return "failed"
                // throw err;
            });
    }
    
    addProduct = async (item) => {
        return axios
        .post(`http://localhost:8080/users/${UserService.getCurrentUser().id}/cart`, item)
        .catch((err) => {
            return "failed";
        });
    }

    search = async(product) => {
        return axios
            .post(`http://localhost/users/${UserService.getCurrentUser().id}/presets/1/getItems`, product)
            .then((response) => {
                localStorage.setItem("catalog", JSON.stringify(response.data));
            })
            .catch((err) => {
                throw(err);
            });
    }

    searchWithPreset = async(preset, search) => {
        return axios
        .post(`http://localhost:8080/products/${search}/getReco/`, preset)
        .then((response) => {
            localStorage.setItem("catalog", JSON.stringify(response.data));
        })
        .catch((err) => {
            throw err;
        })
    }

    searchWithNoPreset = async(search) => {
        return axios
        .post(`http://localhost:8080/products/${search}/getReco/`, {})
        .then((response) => {
            localStorage.setItem("catalog", JSON.stringify(response.data));
        })
        .catch((err) => {
            throw err;
        })
    }
}
export default new CatalogService();