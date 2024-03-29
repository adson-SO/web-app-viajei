import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../img/logo.png'

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        console.log(email, password);

        try {
            const response = await axios.post(`http://localhost:8080/api/v1/signin`,
                JSON.stringify({email, password}),
                {
                    headers: { 
                        'Content-Type': 'application/json',
                    }
                }            
            );

            sessionStorage.clear();
            sessionStorage.setItem('token', response.data.token);
            sessionStorage.setItem('userId', response.data.userId);

            navigate('/search/travel', {
                state: response.data
            });
        } catch (err) {
            console.log(err);
            alert('Algo deu errado!');
        }
    };

    return (
      <div className="login-form-wrap">
            <div>
                <form className='login-form'>
                <img src={logo} alt="app-viajei-icon"></img>
                <h1>Login</h1>
                <label htmlFor="email">E-mail</label>
                <input type="email" 
                        name="email" 
                        placeholder="Digite seu e-mail" 
                        required
                        autoFocus={true}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                <label htmlFor="password">Senha</label>
                <input type="password" 
                        name="password" 
                        placeholder="Digite sua senha" 
                        required
                        onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" 
                        className='btn-login'
                        onClick={(e) => handleLogin(e)}>Login</button>
                </form>
            </div>
      </div>
    );
}