import axios from "axios";

const axiosTodo = axios.create({
	baseURL:`https://todo-a04ab-default-rtdb.europe-west1.firebasedatabase.app/`
})

export default axiosTodo