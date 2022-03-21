import axios from "axios";

class PresetService {
    getPresets = async () => {
        return axios
            .get(`http://localhost:8080/users/1/presets`)
            .then((response) => {
                localStorage.setItem("presets", JSON.stringify(response.data));
                // return response.data;
            })
            .catch((err) => {
                console.log(err);
                return "failed"
                // throw err;
            });
    }
}

export default new PresetService();