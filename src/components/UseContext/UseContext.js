import React from "react";
import { createContext } from "react";
import { supabase } from "../SupabaseClient/SupabaseClient";
export const UserContext = createContext();

const UseContext = ({ children }) => {
  const signInWithGitHub = async () => {
    return await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  };
  const user = { name: "Muhib" };
  const userInfo = { user, signInWithGitHub };
  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

export default UseContext;
