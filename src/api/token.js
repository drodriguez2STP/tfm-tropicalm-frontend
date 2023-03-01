import { TOKEN } from "../utils/constants" 
export function setToken(token) {
    localStorage.setItem("token", token);
}