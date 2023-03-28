import axios from "axios";

async function GetLike(post_id){
    const token = "Bearer " + localStorage.getItem("token")

    if (!token) return

    const user = JSON.parse(localStorage.getItem("user"))

    if (!user) return

    const options = {
        url: "http://localhost:3001/api/v1/post/like/get?user_id=" + user.id + "&post_id=" + post_id,
        config: {
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        }
    }

    return (await axios.get(options.url, options.config)).data
}

export default GetLike;