import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const [user, setUser] = useState();
  const [services, setServices] = useState([]);

  const getServiceData = async () => {
    try {
      const response = await fetch(
        "https://devconnect-pro-1.onrender.com/api/data/service",
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const services = await response.json();
        setServices(services.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const userAuthentication = async () => {
    try {
      const response = await fetch(
        "https://devconnect-pro-1.onrender.com/api/auth/user",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("user data", data.userData);
        setUser(data.userData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServiceData();
    userAuthentication();
  }, []);

  //local storage
  const storeTokenInLS = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  //value of isLoggedIn
  let isLoggedIn = !!token;
  console.log("token", token);
  console.log("isLoggedIn", isLoggedIn);

  //to check logged in or not
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, storeTokenInLS, LogoutUser, user, services }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
