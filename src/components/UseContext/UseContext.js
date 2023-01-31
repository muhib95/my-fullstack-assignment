import React, { useState } from "react";
import { createContext } from "react";
import { supabase } from "../SupabaseClient/SupabaseClient";
export const UserContext = createContext();

const UseContext = ({ children }) => {
  const [homeValue, setHome] = useState("");
  const handleChange = (e) => {
    setHome(e.target.value);
    // console.log(e.target.value);
  };
  const signInWithGitHub = async () => {
    return await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  };
  const user = { name: "Muhib" };
  const userInfo = { user, signInWithGitHub, homeValue, handleChange };
  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

export default UseContext;
