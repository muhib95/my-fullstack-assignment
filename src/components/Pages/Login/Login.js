import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { UserContext } from "../../UseContext/UseContext";
import { supabase } from "../../SupabaseClient/SupabaseClient";

const Login = () => {
  const { user, signInWithGitHub } = useContext(UserContext);
  console.log(user, signInWithGitHub);
  const gitHubLogIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  };
  return (
    <div>
      <div className="w-50 m-auto bg-light my-3">
        <h2 className="text-center">Sign up</h2>
        <div>
          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="border border-top-0 border-end-0 border-start-0 border-bottom border-bottom border-black border-4"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                className="border border-top-0 border-end-0 border-start-0 border-bottom border-bottom border-black border-4"
              />
            </Form.Group>
            <Button className="w-100" variant="primary">
              Sign Up
            </Button>
          </Form>
          <div>
            <p className="text-center">
              Don't have an account? <Link to="/register">Singup </Link>
            </p>
            <p className="text-center">or</p>
            <button className="text-center" onClick={() => gitHubLogIn()}>
              <AiFillGithub></AiFillGithub>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
