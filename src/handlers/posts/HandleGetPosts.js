import axios from "axios";

async function GetPosts() {
    const token = "Bearer " + localStorage.getItem("token");

    const options = {
        url: "https://sample-ginless-production.up.railway.app/api/v1/post/",
        config: {
            headers: {
                'Content-Type': "application/json",
                'Authorization': token
            }
        }
    }

    return axios.get(options.url, options.config);
}

export default GetPosts;