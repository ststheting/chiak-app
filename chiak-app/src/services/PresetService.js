import axios from "axios";
import UserService from "./UserService";

class PresetService {
    getPresets = async () => {
        return axios
            .get(`http://localhost:8080/users/${UserService.getCurrentUser().id}/presets`)
            .then((response) => {
                console.log(UserService.getCurrentUser().id)
                console.log(response.data)
                localStorage.setItem("presets", JSON.stringify(response.data));
                // return response.data;
            })
            .catch((err) => {
                console.log(err);
                return "failed"
                // throw err;
            });
    }
    addProfile = async (profile) => {
        return axios
        .post(`http://localhost:8080/users/${UserService.getCurrentUser().id}/presets`, profile)
        .then((response) => {
            return response.data.id;
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
    }
    deleteProfile = async(id) => {
        console.log(id)
        console.log(UserService.getCurrentUser().id)
        return axios
        .delete(`http://localhost:8080/users/${UserService.getCurrentUser().id}/presets/${id}`)
        .catch((err) => {
            console.log(err);
            throw err;
        })
    }
}
export default new PresetService();