import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, TextField, MenuItem } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { auth, db } from "../../firebaseConfig"; 
import { UserContext } from "../../context/UserContext"; 
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import "./AuthForm.css";

const AuthForm = ({ isLogin, isLogout }) => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { logout } = useContext(UserContext);
  
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      userName: "",
      rol: "Usuario",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Ingrese un correo electrónico válido")
        .required("El correo electrónico es obligatorio"),
      password: Yup.string()
        .required("La contraseña es obligatoria")
        .min(6, "La contraseña debe tener al menos 6 caracteres"),
      userName: isLogin
        ? Yup.string()
        : Yup.string().required("El nombre de usuario es obligatorio"),
    }),
    onSubmit: async (values) => {
      try {
        if (isLogin) {
          await signInWithEmailAndPassword(auth, values.email, values.password);
        } else {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            values.email,
            values.password
          );
          const user = userCredential.user;
          const userDoc = {
            email: user.email,
            rol: values.rol,
            userName: values.userName,
          };
          const usersCollection = collection(db, "users");
          await addDoc(usersCollection, userDoc);
        }
        navigate("/")
      } catch (error) {
        setError(error.message);
      }
    },
  });

  return (
    <div className="AuthFormContainer">
      <div className="AuthForm">
        {isLogout ? (
          <h2>Cerrar Sesión</h2>
        ) : (
          <h2>{isLogin ? "Iniciar Sesión" : "Registrarse"}</h2>
        )}
        {isLogout ? (
            <Button onClick={logout} variant="contained" fullWidth>
              Aceptar
            </Button>
        ) : (
          <form onSubmit={formik.handleSubmit}>
            <TextField
              label="Correo Electrónico"
              variant="outlined"
              fullWidth
              id="email"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              label="Contraseña"
              variant="outlined"
              fullWidth
              id="password"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            {!isLogin && (
              <>
                <TextField
                  label="Nombre de Usuario"
                  variant="outlined"
                  fullWidth
                  id="userName"
                  name="userName"
                  value={formik.values.userName}
                  onChange={formik.handleChange}
                  error={formik.touched.userName && Boolean(formik.errors.userName)}
                  helperText={formik.touched.userName && formik.errors.userName}
                />
                <TextField
                  select
                  label="Rol"
                  variant="outlined"
                  fullWidth
                  id="rol"
                  name="rol"
                  value={formik.values.rol}
                  onChange={formik.handleChange}
                >
                  <MenuItem value="Usuario">Usuario</MenuItem>
                  <MenuItem value="Admin">Administrador</MenuItem>
                </TextField>
              </>
            )}
            {error && <p className="error-message">{error}</p>}
            <Button type="submit" variant="contained" fullWidth>
              {isLogin ? "Iniciar Sesión" : "Registrarse"}
            </Button>
            
          </form>
        )}
        {isLogin && !isLogout && (
          <p>
            ¿No tienes una cuenta?
            <Link to="/sign-up">Registrarse</Link>
          </p>
        )}
        {!isLogin && !isLogout && (
          <p>
            ¿Ya tienes una cuenta?
            <Link to="/login">Iniciar Sesión</Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthForm;