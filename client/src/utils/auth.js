// Importing jwt-decode for user auth.
import decode from "jwt-decode";

class AuthService {
  getProfile() {
    const token = this.getToken();
    console.log("Decoding token:", token);
    return token ? decode(token) : null;
  }

  loggedIn() {
    const token = this.getToken();
    console.log("Checking token:", token);
    return token && !this.isTokenExpired(token) ? true : false;
  }

  isTokenExpired(token) {
    console.log("Decoding token:", token);
    const decoded = decode(token);
    console.log("Decoded token:", decoded);

    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem("id_token");
      return true;
    }
    return false;
  }

  getToken() {
    return localStorage.getItem("id_token");
  }

  login(token) {
    // Set the token in the localStorage
    localStorage.setItem("id_token", token);
  }
  logout() {
    localStorage.removeItem("id_token");
    window.location.reload();
  }
}

export default new AuthService();