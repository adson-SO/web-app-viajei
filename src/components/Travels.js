import { useEffect, useState } from 'react';
import logo from '../img/logo.png';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { Card, TableRow } from '@material-ui/core';

export default function Travels() {
    const navigate = useNavigate();
    const token = sessionStorage.getItem('token');
    const userId = sessionStorage.getItem('userId');
    const [travels, setTravels] = useState([]);

    useEffect(() => {
        async function getTravels() {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/travel`, {
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

    const handleEvent = (e, travel) => {
        e.preventDefault();

        navigate('/travel/details', {
            state: travel
        });
    }

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
                                        <TableRow>
                                            <div onClick={(e) => handleEvent(e, travel)}>
                                                <Card className='travels-card' style={{
                                                    backGroundColor: 'red'
                                                }}> 
                                                    <h4 className="destination">Destino: {travel.destination}</h4>
                                                    <h4 className="price">Preço: R$ {travel.price},00</h4>
                                                    <h4 className="type">Tipo: {travel.type}</h4>
                                                </Card>
                                            </div>
                                        </TableRow>
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