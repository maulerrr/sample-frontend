import axios from "axios";
import {useCookies} from "react-cookie";

async function DeletePost(postID) {
    const token = "Bearer " + localStorage.getItem("token")

    if (!token) return

    const user = JSON.parse(localStorage.getItem("user"))

    if (!user) return

    const options = {
        url: "http://10.12.96.144:3001/api/v1/post/" + user.id + "/" + postID,
        config: {
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        },
    }

    const response = (await axios.delete(
        options.url,
        options.config,
    )).data

}

export default DeletePost;