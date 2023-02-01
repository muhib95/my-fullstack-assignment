import { createClient } from "@supabase/supabase-js";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
// import { supabase } from "../SupabaseClient/SupabaseClient";
export const UserContext = createContext();
const supabase = createClient(
  "https://dzxcaznxwznlwyyrunlw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6eGNhem54d3pubHd5eXJ1bmx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUxNzkwNTUsImV4cCI6MTk5MDc1NTA1NX0.lBUqrmQf61_AXrqX8KctmoUETGp7H9DnAm3zkzWUGH0"
);
const UseContext = ({ children }) => {
  const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(true);
  const [homeValue, setHome] = useState("");
  const handleChange = (e) => {
    setHome(e.target.value);
    // console.log(e.target.value);
  };

  function signInWithEmails(e) {
    const email = e.email;
    const password = e.password;
    console.log(e);

    return supabase.auth.signInWithPassword({
      email,
      password,
      data: {
        confirmation_sent_at: Date.now(),
      },
    });
  }

  function signUpWithEmails(e) {
    const email = e.email;
    const password = e.password;
    console.log(e);

    return supabase.auth.signUp({
      email,
      password,
      data: {
        confirmation_sent_at: Date.now(),
      },
    });
  }
  // useEffect(() => {}, []);

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      console.log(session.user.email);
      setUser(session.user.email);
    });
  }, []);

  function signInWithGitHub() {
    return supabase.auth.signInWithOAuth({
      provider: "discord",
    });
  }

  console.log(user);
  const userInfo = {
    user,
    signUpWithEmails,
    signInWithGitHub,
    signInWithEmails,

    homeValue,
    handleChange,
  };
  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

export default UseContext;
