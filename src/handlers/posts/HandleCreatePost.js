import axios from "axios";
import {useCookies} from "react-cookie";

async function CreatePost(header, body) {
    const token = "Bearer " + localStorage.getItem("token")

    if (!token) return

    const user = JSON.parse(localStorage.getItem("user"))

    console.log(user.user_id)

    if (!user) return

    const options = {
        url: "http://10.12.96.85:3001/api/v1/post/create",
        config: {
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        },
        body: {
            user_id: user.id,
            header: header,
            body: body
        }
    }

    const response = (await axios.post(
        options.url,
        options.body,
        options.config
    )).data

}

export default CreatePost;