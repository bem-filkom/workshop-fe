const CheckLogin = () => {
    return (localStorage.getItem("h0_s7yf8q7g398fh924")
    && localStorage.getItem("h0_ni128ehiond1289n")
    && Date.now() < localStorage.getItem("h0_sd8h28jedf") * 1000)
}

export default CheckLogin