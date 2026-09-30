"use client";
{/*Esse componente é o header semânticamente dito, será por ele que iremos apresentar as opções de navegação. /*Variáveis css com a palheta do projeto. A.: Nathan V. Esposito*/ }
import { IconXFilled, IconMenu2Filled } from '@tabler/icons-react'
import { useState } from 'react'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import FaixaAviso from './faixaAviso';
import { type MenuMobileType } from "../types/menuMobile"

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
                <div className='flex flex-row items-start justify-between w-full'>
                    <div onClick={onClick}>
                        <IconXFilled size={32} />
                    </div>
                    <div className='flex items-center justify-center w-[80px] h-[30px] pt-[40px]'>
                        <img src="/logo/logo-sem-fundo.png" alt="Logo escrita" />
                    </div>
                    {/*Esse ícone só está sendo instanciado para podermos centralizar a logo corretamente no header*/}
                    <IconXFilled size={32} className='opacity-0' />
                </div>
            </div>
        )
    }
    return (
        <div
            className={`${(isMobile || isTablet) && !aberto ? "fixed top-0 left-0 z-50" : ""} flex w-full flex-col border-b border-white/5 backdrop-blur-[2px] shadow-[0_8px_30px_rgba(0,0,0,0.08)]`}
        >
            {!aberto && (<FaixaAviso texto={"Conheça nossas sobremesas, salgados, bolos e muitas outras delícias. TODAS feitas com muito amor e qualidade!"} />)}

            <header className={` ${(isMobile || isTablet) && !aberto ? "" : "fixed top-0 left-0 z-60 p-[20px_15px] h-screen bg-rosa-secundario"} flex flex-row items-center justify-center w-full p-[5px_15px] backdrop-blur-[3px]`}>
                {(isMobile || isTablet) && !aberto && (<MenuMobileFechado onClick={() => setAberto(true)} />)}
                {(isMobile || isTablet) && aberto && (<MenuMobileAberto onClick={() => setAberto(false)} />)}
            </header>
        </div>
    )
}