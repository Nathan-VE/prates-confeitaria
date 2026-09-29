{/*Esse componente é o header semânticamente dito, será por ele que iremos apresentar as opções de navegação. /*Variáveis css com a palheta do projeto. A.: Nathan V. Esposito*/ }

export default function MenuSuperior() {
    return (
        <header className="flex flex-row items-center justify-center w-full">
            <div className="flex flex-row items-center justify-center max-w-[25px]">
                <img 
                    src="/logo/logo-sem-fundo.png" 
                    alt="Logo 'Prates confeitaria'."
                    className="w-full h-full" 
                />
            </div>
            <div>
                <a href="/">Início</a>
                <a href="/sobre">Sobre</a>
                <a href="/contato">Delícias</a>
                <a href="/contato">Localização</a>
            </div>
        </header>
    )
}