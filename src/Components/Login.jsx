import { Link } from "react-router-dom";


const Login = () => {

    const handleSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password)
    }
    return (
        <div className="hero bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" name="email" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        </form>
        <p>No Account? Please<Link to='/register'><button className="btn btn-link">Register</button></Link></p>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;