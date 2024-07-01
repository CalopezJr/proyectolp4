import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css'; 

function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        // Lógica de registro
        console.log('Registrando con:', { firstName, lastName, username, email, password });
        // Navegar a la página principal después de registrarse
        navigate('/home');
    };

    return (
        <div className="login-container">
            <form onSubmit={handleRegister} className="login-form">
                <h2>Registrarse</h2>
                <label>
                    Nombre:
                    <input 
                        type="text" 
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)} 
                        required
                    />
                </label>
                <label>
                    Apellido:
                    <input 
                        type="text" 
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)} 
                        required
                    />
                </label>
                <label>
                    Nombre de Usuario:
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required
                    />
                </label>
                <label>
                    Correo Electrónico:
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required
                    />
                </label>
                <label>
                    Contraseña:
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required
                    />
                    <small className="password-hint">
                        La contraseña debe contener letras, números y al menos una mayúscula.
                    </small>
                </label>
                <button type="submit" className="btn-login">Registrarse</button>
            </form>
        </div>
    );
}

export default Register;
