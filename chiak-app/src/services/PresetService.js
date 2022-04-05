import axios from "axios";
import UserService from "./UserService";

class PresetService {
    getPresets = async () => {
        return axios
            .get(`http://localhost:8080/users/${UserService.getCurrentUser().id}/presets`)
            .then((response) => {
                // localStorage.setItem("presets", JSON.stringify(response.data));
                return response.data;
            })
            .catch((err) => {
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
            throw err;
        });
    }
    deleteProfile = async(id) => {
        return axios
        .delete(`http://localhost:8080/users/${UserService.getCurrentUser().id}/presets/${id}`)
        .catch((err) => {
            throw err;
        })
    }
}
export default new PresetService();