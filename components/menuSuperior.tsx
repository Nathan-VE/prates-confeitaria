"use client";
{/*Esse componente é o header semânticamente dito, será por ele que iremos apresentar as opções de navegação. /*Variáveis css com a palheta do projeto. A.: Nathan V. Esposito*/ }
import { IconXFilled, IconMenu2Filled } from '@tabler/icons-react'
import { useState } from 'react'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import FaixaAviso from './faixaAviso';
import { type MenuMobileType } from "../types/menuMobile"
import { obterAnoAtual } from '@/util/data';

export default function MenuSuperior() {

    const [aberto, setAberto] = useState(false)
    const { isMobile, isTablet, isDesktop } = useBreakpoint();

    function MenuMobileFechado({ onClick }: MenuMobileType) {

        return (
            <div
                className={`flex w-full items-center justify-between text-rosa-principal`}
                onClick={onClick}>
                <IconMenu2Filled size={32} />
                <div className='flex items-center justify-center w-[80px] h-[30px]'>
                    <img src="/logo/logo-escrita-sem-fundo.png" alt="Logo escrita" />
                </div>
                {/*Esse ícone só está sendo instanciado para podermos centralizar a logo corretamente no header*/}
                <IconMenu2Filled size={32} className='opacity-0' />

            </div>
        );
    }

    function MenuMobileAberto({ onClick }: MenuMobileType) {

        return (
            <div className='flex flex-col items-center justify-start w-full h-full bg-rosa-secundario text-rosa-principal'>
                <div className='flex flex-row items-start justify-between w-full mb-[60px]'>
                    <div onClick={onClick} className='mt-[10px]'>
                        <IconXFilled size={32} />
                    </div>
                    <div className='flex items-center justify-center w-[90px] h-[40px] pt-[40px]'>
                        <img src="/logo/logo-sem-fundo.png" alt="Logo escrita" />
                    </div>
                    {/*Esse ícone só está sendo instanciado para podermos centralizar a logo corretamente no header*/}
                    <IconXFilled size={32} className='opacity-0' />
                </div>
                <div className='bg-rosa-principal flex flex-1 flex-col w-full p-[25px_35px] gap-[20px] text-[15px] font-semibold font-sans text-azul-secundario mb-[15px] rounded-[25px] border-marrom shadow-[0_0_15px_var(--cor-marrom)]'>
                    <a href="">
                        <div className='flex w-full hover:text-rosa-secundario border-b'>
                            <h3 className=''>. Quem somos</h3>
                        </div>
                    </a>

                    <a href="">
                        <div className='flex w-full hover:text-rosa-secundario border-b'>
                            <h3 className=''>. Cardápio & Pedidos</h3>
                        </div>
                    </a>

                    <a href="">
                        <div className='flex w-full hover:text-rosa-secundario border-b'>
                            <h3 className=''>. Gosto popular</h3>
                        </div>
                    </a>

                    <a href="">
                        <div className='flex w-full hover:text-rosa-secundario border-b'>
                            <h3 className=''>. Localização</h3>
                        </div>
                    </a>                    
                </div>

                <div className='flex items-center justify-center w-full border-t border-marrom p-[15px] text-[11px] text-marrom font-semibold'>
                    <p>Prates Confeitaria - @{obterAnoAtual()} todos os direitos reservados</p>
                </div>
            </div>
        )
    }
    return (
        <div
            className={`${(isMobile || isTablet) && !aberto ? "fixed top-0 left-0 z-50" : ""} flex w-full flex-col border-b border-rosa-secundario/5 backdrop-blur-[2px] shadow-[0_0_7px_var(--cor-marrom)]`}
        >
            {!aberto && (<FaixaAviso texto={"Conheça nossas sobremesas, salgados, bolos e muitas outras delícias. TODAS feitas com muito amor e qualidade!"} />)}

            <header className={` ${(isMobile || isTablet) && !aberto ? "" : "fixed top-0 left-0 z-60 p-[20px_15px_0] h-screen !bg-rosa-secundario"} flex flex-row items-center justify-center w-full p-[15px] backdrop-blur-[3px] bg-white/20`}>
                {(isMobile || isTablet) && !aberto && (<MenuMobileFechado onClick={() => setAberto(true)} />)}
                {(isMobile || isTablet) && aberto && (<MenuMobileAberto onClick={() => setAberto(false)} />)}
            </header>
        </div>
    )
}