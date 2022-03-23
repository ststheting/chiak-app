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
                console.log("your mother pass away");
                return "failed"
                // throw err;
            });
    }
    addProfile = async (profile) => {
        return axios
        .post(`http://localhost:8080/users/1/presets`, profile)
        .catch((err) => {
            console.log(err);
            throw err;
        });
    }
    deleteProfile = async(id) => {
        return axios
        .delete(`http://localhost:8080/users/1/presets/${id}`, id)
        .catch((err) => {
            console.log(err);
            throw err;
        })
    }
}
export default new PresetService();