import React, { useState} from "react";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { loginApi } from "../../../api/user";

export default function LoginForm(props){
    const {showRegisterForm, onCloseModal} = props;
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) =>{
            setLoading(true);
            const response = await loginApi(formData);
            if(response?.jwt) {
                console.log("Login OK");
                onCloseModal();
            } else {
                toast.error("El correo electronico o la contraseña son incorrectos")
            }
            
            setLoading(false);
        }
    });
    return(
        <Form className="login-form" onSubmit={formik.handleSubmit}>
            <Form.Input 
                name="identifier" 
                type="text" 
                placeholder="Correo electronico" 
                onChange={formik.handleChange} 
                error={formik.errors.identifier}
            />
            <Form.Input 
                name="password" 
                type="password" 
                placeholder="Contraseña" 
                onChange={formik.handleChange} 
                error={formik.errors.password}
            />
            <div className="actions">
                <Button type="button" basic onClick={showRegisterForm}>Registrarse</Button>
                <div>
                    <Button className="submit" type="submit" loading={loading}>Entrar</Button>
                    <Button className="" type="button">¿Has olvidado la contraseña?</Button>
                </div>
            </div>
        </Form>

        // <div>
        //     <h1>Estamos en el formulario de Login</h1>
        //     <button onClick={showRegisterForm}>Ir a registro</button>
        // </div>
    )
}

function initialValues() {
    return {
        identifier: "",
        password: "",
    };
}

function validationSchema() {
    return {
        identifier: Yup.string().email(true).required(true),
        password: Yup.string().required(true),
    };
}