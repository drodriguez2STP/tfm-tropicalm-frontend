import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { registerApi } from "../../../api/user";
import { toast } from "react-toastify";


export default function RegisterForm(props){
    const { showLoginFrom } = props;
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
            setLoading(true);
            const response = await registerApi(formData);
            console.log(response);
            if (response?.jwt) {
                toast.success("Registro correcto");
                showLoginFrom();
            } else {
                console.log("Error al registrar el usuario, intentelo mas tarde");
                toast.error(response.error.message)
            }
            setLoading(false);
       }
    })

    return(
        <Form className="login-form" onSubmit = {formik.handleSubmit}>
            <Form.Input name="name" type="text" placeholder="Nombre" onChange={formik.handleChange} error={formik.errors.name} />
            <Form.Input name="lastname" type="text" placeholder="Apellidos" onChange={formik.handleChange} error={formik.errors.lastname}/>
            <Form.Input name="username" type="text" placeholder="Nombre de usuario" onChange={formik.handleChange} error={formik.errors.username}/>
            <Form.Input name="email" type="text" placeholder="Correo electrónico" onChange={formik.handleChange} error={formik.errors.email}/>
            <Form.Input name="password" type="password" placeholder="Contraseña" onChange={formik.handleChange} error={formik.errors.password} />
            <div className="actions">
                <Button type="button" basic onClick={showLoginFrom}>
                    Iniciar secion
                </Button>
                <Button type="submit" className="submit" loading={loading}>
                    Registrar
                </Button>

            </div>



        </Form>

        // <div>
        //     <h1>Estamos en el registro de usuarios</h1>
        //     <button onClick={showLoginFrom}>Ir a login</button>
        // </div>
    );
}


function initialValues(){
    return {
        name: "",
        lastname: "",
        username: "",
        email: "",
        password: ""
    }
}

function validationSchema(){
    return {
        name: Yup.string().required("Requiere el nombre"),
        lastname: Yup.string().required("Requiere un apellido"),
        username: Yup.string().required("Requiere el nombre de usuario"),
        email: Yup.string().email("Requiere un correo un correo electrónico").required(true),
        password: Yup.string().min(6, "Debe de ser minimo 6 caracteres").required("Requiere una contraseña"),
    };
}