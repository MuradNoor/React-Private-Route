import { Link } from "react-router-dom";


const Register = () => {

    const handleRegister = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        console.log(name, email, password)
    }
    
    return (
                <div className="hero bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Register now!</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleRegister}>
        <fieldset className="fieldset">
            <label className="label">Name</label>
          <input type="text" className="input" name="name" placeholder="Your Name" />
          <label className="label">Email</label>
          <input type="email" className="input" name="email" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        </form>
            <p>Already Have an Account? Please<Link to='/login'><button className="btn btn-link">Login</button></Link></p>
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;