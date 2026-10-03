'use client'
import { useState } from "react"
import { IconChevronUp, IconChevronDown } from '@tabler/icons-react';

export default function CardAcoesRapidas() {
    const [aberto, setAberto] = useState(false)

    return (
        <div className={`flex flex-col h-[270px] w-full text-white ${aberto ? `` : `items-center justify-between pt-[95px]`}`}>

            <div className="flex w-full">
                <div className="flex flex-col items-center justify-center w-[200px] h-[70px] rounded-r-full pl-[20px] text-[24px] py-[10px] leading-[0.9] border-[1_1_1_0] border-white/30 backdrop-blur-[13px]">
                    <h1>O <strong >SABOR</strong> QUE <strong>VOCÊ BUSCA</strong></h1>
                </div>
            </div>

            <div className={`flex flex-col items-center justify-center ${aberto ? `flex-1` : ``}`}>
                <div className="flex flex-row items-end justify-end w-[270px]">

                    <button className={`max-w-[70px] p-[3px_20px] rounded-[15px_15px_0_0] bg-rosa-secundario text-marrom`}
                        onClick={() => { setAberto(!aberto) }}>
                        {aberto ? <IconChevronDown /> : <IconChevronUp />}
                    </button>
                </div>

                <div className={`flex flex-1 flex-col items-center justify-end bg-[url('/imagens/fundo-estampado.png')] bg-cover text-center w-[270px] p-[10px_20px_20px] gap-[20px] flex-1 font-sans rounded-[15px_0_0] ${aberto ? `` : `hidden`}`}>

                    <div className="flex border-white/30 backdrop-blur-[13px] p-[5px] rounded-[7px]">
                        <h3 className="text-[13px] text-marrom"><strong>Delicie-se</strong> com nossos maravilhosos <strong>bolos, salgados, cookies </strong>e<strong> muito </strong>mias!</h3>
                    </div>

                    <div className="flex flex-row items-center justify-between w-full gap-[20px] font-bold text-[11px]">

                        <button className="bg-azul-secundario text-rosa-principal w-[100px] py-[12px] rounded-full shadow-[0_0_7px_var(--cor-marrom)]">
                            CONTATO
                        </button>

                        <button className=" bg-rosa-principal text-marrom w-[100px] py-[12px] rounded-full shadow-[0_0_7px_var(--cor-marrom)]">
                            CARDÁPIO
                        </button>

                    </div>
                </div>
            </div>
        </div>

    )
}