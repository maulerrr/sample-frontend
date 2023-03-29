import axios from "axios";

async function Like(post_id){
    const token = "Bearer " + localStorage.getItem("token")
    const userID = JSON.parse(localStorage.getItem("user")).id

    if (!token) return

    const options = {
        url: "https://sample-ginless-production.up.railway.app/api/v1/post/like",
        config: {
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        },
        body: {
            user_id: userID,
            post_id: post_id,
        }
    }

    const response = await axios.post(
        options.url,
        options.body,
        options.config,
        )

    return response.data
}

export default Like;