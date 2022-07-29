import jwtDecode from "jwt-decode";

export const StoreJwt = (jwtToken) => {
    const decodedJwt = jwtDecode(jwtToken)
    // console.log('Decoded JWT:', decodedJwt)\
    localStorage.setItem("h0_ni128ehiond1289n", jwtToken)
    localStorage.setItem("h0_s7yf8q7g398fh924", JSON.stringify(decodedJwt.user)) //User Data
    localStorage.setItem("h0_sd8h28jedf", JSON.stringify(decodedJwt.exp)) //Expire
}

export const clearJwt = () => {
    localStorage.clear()
}