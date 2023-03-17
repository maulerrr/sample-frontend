import axios from "axios";

async function GetComments(post_id) {
    const token = "Bearer " + localStorage.getItem("token");

    const options = {
        url: "https://sample-project-production.up.railway.app/api/v1/comment/" + post_id,
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