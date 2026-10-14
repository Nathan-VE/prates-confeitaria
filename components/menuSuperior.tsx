"use client";

import { IconXFilled, IconMenu2Filled } from "@tabler/icons-react";
import { useState } from "react";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import FaixaAviso from "./faixaAviso";
import { type MenuMobileType } from "../types/menuMobile";
import { obterAnoAtual } from "@/util/data";

/* Ordem dos links: usada no menu mobile e no desktop. Troque o href quando criar as âncoras. */
const LINKS = [
    { texto: "Cardápio & Pedidos", href: "/" },
    { texto: "Feedbacks", href: "/" },
    { texto: "Sobre nós", href: "/" },
    { texto: "Contato", href: "/" },
];

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

                <div className="flex h-[30px] w-[50px] items-center justify-center tablet:h-[45px] tablet:w-[75px]">
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
            <div className="relative flex h-dvh w-full flex-col items-center justify-start overflow-hidden p-[20px] text-rosa-principal tablet:p-[40px]">

                {/* FUNDO DESFOCADO */}
                <div className="absolute inset-0 -z-10 scale-110 bg-rosa-secundario blur-[1px]" />

                {/* HEADER DO MENU */}
                <div className="mb-[60px] flex w-full flex-row items-start justify-between tablet:mb-[80px]">

                    {/* BOTÃO FECHAR */}
                    <div
                        onClick={onClick}
                        className="mt-[10px] cursor-pointer"
                    >
                        <IconXFilled size={32} />
                    </div>

                    {/* LOGO */}
                    <div className="flex h-[40px] w-[90px] items-center justify-center pt-[40px] tablet:h-[60px] tablet:w-[130px] tablet:pt-[50px]">
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
                <div className="mb-[15px] flex w-full flex-1 flex-col gap-[20px] rounded-[25px] border-marrom bg-rosa-principal p-[25px_35px] font-sans text-[15px] font-semibold text-azul-secundario shadow-[0_0_15px_var(--cor-marrom)] tablet:gap-[28px] tablet:p-[40px_60px] tablet:text-[22px]">

                    {LINKS.map((link) => (
                        <a key={link.texto} href={link.href}>
                            <div className="flex w-full border-b hover:text-rosa-secundario">
                                <h3>
                                    . {link.texto}
                                </h3>
                            </div>
                        </a>
                    ))}

                </div>

                {/* RODAPÉ */}
                <div className="flex w-full items-center justify-center border-t border-marrom p-[15px] text-[10px] font-semibold text-marrom tablet:p-[20px] tablet:text-[14px]">
                    <p>
                        Prates Confeitaria - @{obterAnoAtual()} todos os direitos reservados
                    </p>
                </div>
            </div>
        );
    }

    if (mobile && !aberto) {
        return (
            <div className="fixed left-0 top-0 z-[9999] w-full bg-rosa-secundario">

                <FaixaAviso
                    texto="Conheça nossas sobremesas, salgados, bolos e muitas outras delícias. TODAS feitas com muito amor e qualidade!"
                />

                <header className="flex w-full items-center justify-center border-b border-rosa-secundario/5 bg-transparent p-[15px] shadow-[0_0_7px_var(--cor-marrom)] tablet:p-[20px] tablet:px-[40px]">
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


    // DESKTOP: sempre aberto. Logo centralizada, dois links de cada lado.
    const esquerda = LINKS.slice(0, 2);
    const direita = LINKS.slice(2);

    const classeLink =
        "whitespace-nowrap font-sans text-[20px] font-semibold text-rosa-principal transition-opacity hover:opacity-60";

    return (
        <div className="fixed left-0 top-0 z-[9999] w-full bg-rosa-secundario">

            <FaixaAviso
                texto="Conheça nossas sobremesas, salgados, bolos e muitas outras delícias. TODAS feitas com muito amor e qualidade!"
            />

            <header className="flex w-full items-center justify-center border-b border-rosa-secundario/5 bg-transparent p-[20px] px-[60px] shadow-[0_0_7px_var(--cor-marrom)]">
                <div className="grid w-full max-w-[1100px] grid-cols-[1fr_auto_1fr] items-center">

                    {/* LINKS DA ESQUERDA */}
                    <nav aria-label="Menu principal, esquerda" className="flex items-center justify-evenly">
                        {esquerda.map((link) => (
                            <a key={link.texto} href={link.href} className={classeLink}>
                                {link.texto}
                            </a>
                        ))}
                    </nav>

                    {/* LOGO CENTRALIZADA */}
                    <div className="flex h-[50px] w-[90px] items-center justify-center mx-[40px]">
                        <img
                            src="/logo/logo-sem-fundo.png"
                            alt="Logo escrita"
                        />
                    </div>

                    {/* LINKS DA DIREITA */}
                    <nav aria-label="Menu principal, direita" className="flex items-center justify-evenly">
                        {direita.map((link) => (
                            <a key={link.texto} href={link.href} className={classeLink}>
                                {link.texto}
                            </a>
                        ))}
                    </nav>

                </div>
            </header>

        </div>
    );
}
