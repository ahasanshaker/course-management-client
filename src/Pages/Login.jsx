import React from 'react';

const Login = () => {
    return (
         <div className="max-w-md mx-auto p-6 border rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form className="space-y-4">
        <input type="email" placeholder="Email" className="input input-bordered w-full" />
        <input type="password" placeholder="Password" className="input input-bordered w-full" />
        <button className="btn btn-primary w-full">Login</button>
      </form>
    </div>
    );
};

export default Login;