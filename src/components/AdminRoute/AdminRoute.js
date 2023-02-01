import { useContext } from "react";
import { UserContext } from "../UseContext/UseContext";

const AdminRoute = () => {
  const { user } = useContext(UserContext);
  console.log(user);
};

export default AdminRoute;
