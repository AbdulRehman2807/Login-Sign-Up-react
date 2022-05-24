
import * as React from "react";
import Grid from "@mui/material/Grid";

function SignUpp() {
  return (
    <div className={"Light Login"}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className="grid"
      >
        <div  className="box">
          <h1>Sign Up</h1>

          <form  >
            <div>
            <div>
            <input
              placeholder="Email"
              type="email"
              name="email"
              className="login-input"
            />
            </div>
           <div>
           <input
              placeholder="password"
              name="password"
              type="password"
              className="login-input"
            />
           </div>
           <div>
           <input
              placeholder="Confirm password"
              name="password"
              type="password"
              className="login-input"
            />
           </div>

           <div align="center" >
            <button style={{backgroundColor:"black",color:"white"}} type="submit">Login</button>

           </div>
            </div>
          </form>
        </div>
      </Grid>
    </div>
  );
}
export default SignUpp;
