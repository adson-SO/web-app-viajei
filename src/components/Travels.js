import { useEffect, useState } from 'react';
import logo from '../img/logo.png'
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Travels() {
    const token = sessionStorage.getItem('token');
    const userId = sessionStorage.getItem('userId');
    const [travels, setTravels] = useState([]);

    useEffect(() => {
        async function getTravels() {
            try {
                const response = await axios.get(`${process.env.BASE_URL}/api/v1/travel`, {
                    headers: { 
                        'Content-Type': 'application/json',
                        'Authorization': token
                    }
                });

                setTravels(response.data.travels);
            } catch (err) {
                alert('Algo deu errado!');
            }
        }
        
        getTravels();
    });

    return (
        <div>
            <div className="login-form-wrap"> 
                <form method="GET" className='login-form'>
                    <ul id="navbar-list">
                    <li>
                        <Link className="link" to={{
                            pathname: '/register/travel',
                            state: { token, userId }
                        }}>Cadastrar Viagem</Link>
                    </li>
                    <li>
                        <Link className="link" to={{
                            pathname: '/search/travel',
                            state: { token, userId }
                        }}>Pesquisar Viagem</Link>
                    </li>
                    </ul>
                    <img src={logo} alt='viajei-logo'/>
                    <h2>Resultado</h2>
                    <div className="resultado-roteiro">
                        <div className="text">
                            <ul>
                                {travels.map((travel) => {
                                    return (
                                        <li>
                                            <div className='travel-container'>
                                                <h4>Destino:</h4>
                                                <p className="destination">{travel.destination}</p>
                                                <h4>Preço:</h4>
                                                <p className="price">{travel.price}</p>
                                                <h4>Tipo:</h4>
                                                <p className="type">{travel.type}</p>
                                            </div>
                                        </li>
                                    )
                                }
                                )}
                            </ul>
                        </div>        
                    </div>
                </form>
            </div>
        </div>
    )
}