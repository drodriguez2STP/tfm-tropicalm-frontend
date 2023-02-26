import React, { useState } from "react";
import LoginForm from "./LoginFrom";
import RegisterForm from "./RegisterForm";

export default function Auth(props) {
    const { onCloseModal, setTitleModal } = props;
    const [showLogin, setShowLogin] = useState(true);

    const showLoginFrom = () => {
        setTitleModal("Inicia sesión");
        setShowLogin(true);
    };
    const showRegisterForm = () => {
        setTitleModal("Crea nuevo usuario");
        setShowLogin(false);
    };

    return showLogin ? (<LoginForm showRegisterForm={showRegisterForm} onCloseModal={onCloseModal}/>) : (<RegisterForm showLoginFrom={showLoginFrom}/>);
}