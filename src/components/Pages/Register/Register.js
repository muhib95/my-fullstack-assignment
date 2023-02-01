import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";
// import { createClient } from "@supabase/supabase-js";
import { UserContext } from "../../UseContext/UseContext";

// const supabase = createClient(
//   "https://dzxcaznxwznlwyyrunlw.supabase.co",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6eGNhem54d3pubHd5eXJ1bmx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUxNzkwNTUsImV4cCI6MTk5MDc1NTA1NX0.lBUqrmQf61_AXrqX8KctmoUETGp7H9DnAm3zkzWUGH0"
// );

const Register = () => {
  const { signUpWithEmails } = useContext(UserContext);
  const [datas, setData] = useState({});

  // const signUp = (event) => {
  //   event.preventDefault();
  //   console.log(event.target.email.value);
  //   console.log(event.target.password.value);
  // };
  const updateData = (e) => {
    setData({
      ...datas,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    // const d = register(datas.email, datas.password);

    signUpWithEmails(datas);
  };

  // async function signInWithEmail(e) {
  //   const email = e.email;
  //   const password = e.password;
  //   console.log(e);
  //   const { data, error } = await supabase.auth.signUp({
  //     email,
  //     password,
  //     data: {
  //       confirmation_sent_at: Date.now(),
  //     },
  //   });
  // }

  return (
    <div className="w-50 m-auto bg-light my-3">
      <h2 className="text-center">Sign up</h2>
      <div>
        <form onSubmit={submit}>
          <input name="email" type="email" onChange={updateData} />
          <input name="password" type="password" onChange={updateData} />
          <button>Submit</button>
        </form>
        <div>
          <p className="text-center">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
