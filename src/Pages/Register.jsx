import React from 'react';

const Register = () => {
    return (
         <div className="max-w-md mx-auto p-6 border rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="input input-bordered w-full" />
        <input type="email" placeholder="Email" className="input input-bordered w-full" />
        <input type="password" placeholder="Password" className="input input-bordered w-full" />
        <button className="btn btn-primary w-full">Register</button>
      </form>
    </div>
    );
};

export default Register;