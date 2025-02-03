import { createContext } from "react";
import UserContext from "./CreateContext";
import Home from "./Pages/Home/Home";

const UserContext = ()=>{

  const [isAuthenticated, setIsAuthenticated] = useState(
      localStorage.getItem("auth") === "true"
    );
    return (
      <>
      <UserContext.Provider value={{User}} >
              <Home/>
      </UserContext.Provider>
      </>
    )
}

export default UserContext;