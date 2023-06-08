export default function RegisterTravel() {
    return (
        <div className="login-form-wrap">
            <div> 
                <form method="POST" className='login-form'>
                    <ul id="navbar-list">
                        <li><a href="pesquisa_viagem.html">Pesquisar Viagem</a></li>
                        <li><a href="cadastro_viagem.html">Cadastrar Viagem</a></li>
                    </ul>
                    <p>Digite os dados do roteiro nos campos abaixo.</p>
                    <label htmlFor="description">Descrição</label>
                    <input type="description" placeholder="Descreva sua viagem" autoFocus={true} />
                    <label htmlFor="preco">Preço</label>
                    <input type="preco" placeholder="Digite o valor gasto na viagem" />
                    <label htmlFor="date">Data</label>
                    <input type="date" placeholder="Digite a data da viagem" />
                    <label htmlFor="type">Tipo</label>
                    <input type="type" placeholder="Tipo de vaigem ex: Praia" />
                    <input type="submit" value="Cadastrar" className="btn" />
                </form>
            </div>
        </div>
    )
}