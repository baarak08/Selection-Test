import { useDispatch, useSelector } from "react-redux";
import { api } from "../api/api";
import { useEffect } from "react";

export default function AuthProvider({ children }) {
  const dispatch = useDispatch();
  const userSelector = useSelector((state) => state.auth);

  useEffect(() => {
    fetch();
  }, []);

  async function fetch() {
    try {
      const token = JSON.parse(localStorage.setItem("auth"));
      if (token) {
        const userData = await api
          .get("user/v2", {
            params: { token },
          })
          .then((res) => res.data);
        console.log(userData);
        if (userData) {
          dispatch({
            type: "login",
            payload: userData,
          });
        }
      }
    } catch (err) {
      console.log(err.message);
    }
  }
  return children;
}
