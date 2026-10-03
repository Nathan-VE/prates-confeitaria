"use client";

import { IconXFilled, IconMenu2Filled } from "@tabler/icons-react";
import { useState } from "react";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import FaixaAviso from "./faixaAviso";
import { type MenuMobileType } from "../types/menuMobile";
import { obterAnoAtual } from "@/util/data";

export default function MenuSuperior() {
    const [aberto, setAberto] = useState(false);

    const { isMobile, isTablet } = useBreakpoint();

    const mobile = isMobile || isTablet;

    function MenuMobileFechado({ onClick }: MenuMobileType) {
        return (
            <div
                className="flex w-full items-center justify-between text-rosa-principal"
                onClick={onClick}
            >
                <IconMenu2Filled size={32} />

                <div className="flex h-[30px] w-[50px] items-center justify-center">
                    <img
                        src="/logo/logo-sem-fundo.png"
                        alt="Logo escrita"
                    />
                </div>

                {/* 
                    Ícone invisível usado para manter a logo
                    perfeitamente centralizada.
                */}
                <IconMenu2Filled
                    size={32}
                    className="opacity-0"
                />
            </div>
        );
    }

    function MenuMobileAberto({ onClick }: MenuMobileType) {
        return (
            <div className="flex h-dvh w-full flex-col items-center justify-start bg-rosa-secundario text-rosa-principal p-[20]">

                {/* HEADER DO MENU */}
                <div className="mb-[60px] flex w-full flex-row items-start justify-between">

                    {/* BOTÃO FECHAR */}
                    <div
                        onClick={onClick}
                        className="mt-[10px] cursor-pointer"
                    >
                        <IconXFilled size={32} />
                    </div>

                    {/* LOGO */}
                    <div className="flex h-[40px] w-[90px] items-center justify-center pt-[40px]">
                        <img
                            src="/logo/logo-sem-fundo.png"
                            alt="Logo escrita"
                        />
                    </div>

                    {/* 
                        Ícone invisível usado para centralizar a logo.
                    */}
                    <IconXFilled
                        size={32}
                        className="opacity-0"
                    />
                </div>

                {/* OPÇÕES DO MENU */}
                <div className="mb-[15px] flex w-full flex-1 flex-col gap-[20px] rounded-[25px] border-marrom bg-rosa-principal p-[25px_35px] font-sans text-[15px] font-semibold text-azul-secundario shadow-[0_0_15px_var(--cor-marrom)]">

                    <a href="">
                        <div className="flex w-full border-b hover:text-rosa-secundario">
                            <h3>
                                . Quem somos
                            </h3>
                        </div>
                    </a>

                    <a href="">
                        <div className="flex w-full border-b hover:text-rosa-secundario">
                            <h3>
                                . Cardápio & Pedidos
                            </h3>
                        </div>
                    </a>

                    <a href="">
                        <div className="flex w-full border-b hover:text-rosa-secundario">
                            <h3>
                                . Gosto popular
                            </h3>
                        </div>
                    </a>

                    <a href="">
                        <div className="flex w-full border-b hover:text-rosa-secundario">
                            <h3>
                                . Localização
                            </h3>
                        </div>
                    </a>

                </div>

                {/* RODAPÉ */}
                <div className="flex w-full items-center justify-center border-t border-marrom p-[15px] text-[11px] font-semibold text-marrom">
                    <p>
                        Prates Confeitaria - @{obterAnoAtual()} todos os direitos reservados
                    </p>
                </div>
            </div>
        );
    }

    if (mobile && !aberto) {
        return (
            <div className="fixed left-0 top-0 z-[9999] w-full">

                <FaixaAviso
                    texto="Conheça nossas sobremesas, salgados, bolos e muitas outras delícias. TODAS feitas com muito amor e qualidade!"
                />

                <header className="flex w-full items-center justify-center border-b border-rosa-secundario/5 bg-transparent p-[15px] backdrop-blur-[15px] shadow-[0_0_7px_var(--cor-marrom)]">
                    <MenuMobileFechado
                        onClick={() => setAberto(true)}
                    />
                </header>

            </div>
        );
    }

    if (mobile && aberto) {
        return (
            <div className="fixed inset-0 z-[9999] h-dvh w-screen overflow-hidden">
                <MenuMobileAberto
                    onClick={() => setAberto(false)}
                />
            </div>
        );
    }


    return (
        <header className="fixed left-0 top-0 z-[9999] flex w-full items-center justify-center p-[15px]">
            {/* 
                Seu menu desktop pode ser colocado aqui.
            */}
        </header>
    );
}