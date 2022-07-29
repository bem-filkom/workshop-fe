import React, {useEffect, useState} from "react";
import CheckSession from "../../config/CheckSession";

const Logout = () => {
  const [hasCleared, setHasCleared] = useState(false);
  
  useEffect(() => {
    let hasToken = localStorage.getItem("h0_s7yf8q7g398fh924")
      && localStorage.getItem("h0_sd8h28jedf")
    
    if (hasToken) {
      const ready = async () => await localStorage.clear();
      ready().then(() => setHasCleared(true));
      window.location.replace('/');
    }
    setHasCleared(true)
  }, []);
  
  return hasCleared && <CheckSession redirect/>;
};

export default Logout;
