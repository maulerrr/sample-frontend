import axios from "axios";
import {useCookies} from "react-cookie";

async function DeletePost(postID) {
    const token = "Bearer " + localStorage.getItem("token")

    if (!token) return

    const options = {
        url: "http://localhost:3001/api/v1/post/" + postID,
        config: {
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        },
    }

    const response = (await axios.delete(
        options.url,
        options.config
    )).data

}

export default DeletePost;