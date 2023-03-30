import axios from "axios"
import {useCookies} from "react-cookie";

async function Login(email, password){

    const options = {
        url: "https://sample-ginless-production.up.railway.app/api/v1/auth/login",
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
        email : response?.data.email,
        username : response?.data.username,
    }

    localStorage.setItem("user", JSON.stringify(user))

    return response
}

export default Login;