import { createContext, useContext, useState, useMemo, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const UserContext = createContext();

export default UserContext;

const UserContextProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [idUser, setIdUser] = useState("");
  const [idAdmin, setIdAdmin] = useState("");
  const [role, setRole] = useState("");

  const userMemo = useMemo(() => ({
    idUser,
    setIdUser,
    idAdmin,
    setIdAdmin,
    role,
    setRole,
  }));

  useEffect(() => {
    if (location.pathname !== "/") {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/refresh-token`, {
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.warn(data.id);
          navigate(location.pathname);
          if (!data.role) {
            setIdUser(data.id);
          } else {
            setIdAdmin(data.id);
            setRole(data.role);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);

  return (
    <UserContext.Provider value={userMemo}>{children}</UserContext.Provider>
  );
};

const useUserContext = () => useContext(UserContext);

UserContextProvider.propTypes = { children: PropTypes.element.isRequired };

export { UserContextProvider, useUserContext };
