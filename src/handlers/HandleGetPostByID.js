import axios from "axios"

async function HandleGetPostByID(post_id){
    const token = "Bearer " + localStorage.getItem("token")

    if (!token) return

    const options = {
        url: "http://10.12.96.140:3001/api/v1/post/" + post_id,
        config: {
            headers: {
                'Content-Type': "application/json",
                'Authorization': token
            }
        }
    }

    return axios.get(options.url, options.config)
}

export default HandleGetPostByID;