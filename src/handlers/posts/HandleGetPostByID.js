import axios from "axios"

async function HandleGetPostByID(post_id){
    const token = "Bearer " + localStorage.getItem("token")

    if (!token) return

    const options = {
        url: "https://http://localhost:3001/api/v1/post/get?id=" + post_id,
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