import React from "react";
import './register.scss'
import {RegisterBg} from '../../assets';
import { Button, Gap, Input, Link } from "../../components";

const Register = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} className="bg-image" alt="image-bg" />
      </div>
      <div className="right">
        <p className="title">Register page</p>
        <Input label="Fullname" placeholder="Fullname" />
        <Gap height={18}/>
        <Input label="Email" placeholder="email" />
        <Gap height={18}/>
        <Input label="Password" placeholder="password" />
        <Gap height={20}/>
        <Button title="Register" />
        <Link title="Sudah punya akun, Login" />
      </div>
    </div>
  );
};

export default Register;
