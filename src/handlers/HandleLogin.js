import axios from "axios"
import {useCookies} from "react-cookie";

async function Login(email, password){
    const options = {
        url: "http://10.12.96.140:3001/api/v1/auth/login",
        headers: "",
        body: {
            email: email,
            password: password
        }
    }

    const response = (await axios.post(
        options.url,
        options.body,
        options.headers
    )).data

    localStorage.setItem("token", response.data.token)

    const user = {
        id : response?.data.user_id,
        username : response?.data.username,
        email : response?.data.email,
    }

    localStorage.setItem("user", JSON.stringify(user))

    return response
}

export default Login;