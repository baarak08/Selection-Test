import { Center, Spinner } from "@chakra-ui/react";
import "./App.css";
import { useEffect, useState } from "react";
import { Routes } from "react-router-dom";
import routes from "./routes/Routes";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(setLoading(false));
      }, 1000);
    });
  }, [loading]);
  return (
    <>
      {loading ? (
        <Center h={"100vh"}>
          <Spinner />
        </Center>
      ) : (
        <Routes>{routes.map((val) => val)}</Routes>
      )}
    </>
  );
}

export default App;
