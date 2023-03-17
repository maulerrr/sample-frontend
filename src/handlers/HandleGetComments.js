import axios from "axios";

async function GetComments(post_id) {
    const token = "Bearer " + localStorage.getItem("token");

    const options = {
        url: "http://10.12.96.140:3001/api/v1/comment/" + post_id,
        config: {
            headers: {
                'Content-Type': "application/json",
                'Authorization': token
            }
        }
    }

    return axios.get(options.url, options.config);
}

export default GetComments;