import logo from '../img/logo.png'
import { Link, useLocation } from "react-router-dom";

export default function SearchTravelResult() {
    const location = useLocation();
    const token = sessionStorage.getItem('token');
    const userId = sessionStorage.getItem('userId');

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
                                {location.state.travels.map((travel) => {
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