import React, { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

// import { UserContext } from "../../UseContext/UseContext";

import { UserContext } from "../../UseContext/UseContext";

const Login = () => {
  const { signInWithEmails } = useContext(UserContext);
  const navigate = useNavigate();
  const [datas, setData] = useState({});

  const updateData = (e) => {
    setData({
      ...datas,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();

    signInWithEmails(datas).then((data) => {
      console.log(data.data.user);
      navigate("/");
    });
  };

  return (
    <div>
      <div className="w-50 m-auto bg-light my-3">
        <h2 className="text-center">Sign In</h2>
        <div>
          <div>
            <form onSubmit={submit}>
              <input name="email" type="email" onChange={updateData} />
              <input name="password" type="password" onChange={updateData} />
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
