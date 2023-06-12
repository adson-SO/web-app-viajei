import logo from '../img/logo.png'
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function SearchTravelResult() {
    const location = useLocation();
    const navigate = useNavigate();
    const token = sessionStorage.getItem('token');
    const userId = sessionStorage.getItem('userId');

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
                                {location.state.travels.map((travel) => {
                                    return (
                                        <div className='travel-card'>
                                            <h4 className="destination">Destino: {travel.destination}</h4>
                                            <h4 className="price">Preço: R$ {travel.price},00</h4>
                                            <h4 className="type">Tipo: {travel.type}</h4>
                                            <button type="submit" 
                                                className='btn'
                                                onClick={(e) => handleEvent(e, travel)}>Ver mais</button>
                                        </div>
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