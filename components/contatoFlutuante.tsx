"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
    IconX,
    IconBrandWhatsapp,
    IconBrandInstagram,
    IconBrandLinkedin,
} from "@tabler/icons-react";

/* ------------------------------------------------------------------ */
/* DADOS: troque pelos valores reais                                  */
/* ------------------------------------------------------------------ */
const NOME = "Nathan V. Esposito";
const CARGO = "Desenvolvedor Full-Stack";

const WHATSAPP_NUMERO = "5514991275802"; // formato: 55 + DDD + número
const WHATSAPP_MENSAGEM = "Olá, venho por um dos sites desenvolvidos por você. Poderíamos agendar uma consultoria?";

const INSTAGRAM_URL = "https://www.instagram.com/n.espositx/";
const LINKEDIN_URL = "https://www.linkedin.com/in/nathan-victor-esposito-316498266/?isSelfProfile=true";

/** Caminhos dentro de /public */
const FOTO = "/imagens/perfil_Nathan.jpg";
const FOTO_ALT = `Foto de ${NOME}`;
const BANNER = "/imagens/bg-hero-pequeno-perfil.png";

/* ------------------------------------------------------------------ */
/* BOTÕES (cada um com a cor da marca)                                */
/* ------------------------------------------------------------------ */
const BOTOES = [
    {
        nome: "WhatsApp",
        href: `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(WHATSAPP_MENSAGEM)}`,
        Icone: IconBrandWhatsapp,
        cor: "bg-[#25D366]",
    },
    {
        nome: "Instagram",
        href: INSTAGRAM_URL,
        Icone: IconBrandInstagram,
        cor: "bg-[linear-gradient(45deg,#f09433_0%,#e6683c_25%,#dc2743_50%,#cc2366_75%,#bc1888_100%)]",
    },
    {
        nome: "LinkedIn",
        href: LINKEDIN_URL,
        Icone: IconBrandLinkedin,
        cor: "bg-[#0A66C2]",
    },
];

export default function ContatoFlutuante() {
    const [aberto, setAberto] = useState(false);

    // Fecha com a tecla Esc
    useEffect(() => {
        if (!aberto) return;
        const aoTeclar = (e: KeyboardEvent) => {
            if (e.key === "Escape") setAberto(false);
        };
        window.addEventListener("keydown", aoTeclar);
        return () => window.removeEventListener("keydown", aoTeclar);
    }, [aberto]);

    return (
        <div className="fixed bottom-[20px] right-[20px] z-[99999] font-sans">
            {/* ---------------------------------------------------------- */}
            {/* ESTADO FECHADO: bolinha clicável com a foto                 */}
            {/* ---------------------------------------------------------- */}
            <button
                type="button"
                onClick={() => setAberto(true)}
                aria-label="Abrir contato do desenvolvedor"
                aria-expanded={aberto}
                tabIndex={aberto ? -1 : 0}
                className={`
                    relative
                    block
                    h-[60px]
                    w-[60px]
                    overflow-hidden
                    rounded-full
                    shadow-[0_6px_24px_rgba(0,0,0,0.35)]
                    ring-[3px]
                    ring-white
                    tablet:h-[68px]
                    tablet:w-[68px]
                    desktop:h-[72px]
                    desktop:w-[72px]

                    transition-[opacity,transform,visibility]
                    duration-300
                    ease-out
                    motion-reduce:transition-none

                    ${aberto
                        ? "pointer-events-none invisible scale-75 opacity-0"
                        : "visible scale-100 opacity-100 hover:scale-105 cursor-pointer"
                    }
                `}
            >
                <Image
                    src={FOTO}
                    alt={FOTO_ALT}
                    fill
                    sizes="72px"
                    className="object-cover"
                />
            </button>

            {/* ---------------------------------------------------------- */}
            {/* ESTADO ABERTO: card                                         */}
            {/* O card mantém sempre o tamanho final e só anima com         */}
            {/* transform (scale) + opacity, a partir do canto da bolinha.  */}
            {/* ---------------------------------------------------------- */}
            <div
                aria-hidden={!aberto}
                className={`
                    absolute
                    bottom-0
                    right-0
                    flex
                    h-[360px]
                    w-[300px]
                    origin-bottom-right
                    flex-col
                    overflow-hidden
                    rounded-[24px]
                    bg-white
                    shadow-[0_6px_24px_rgba(0,0,0,0.35)]
                    tablet:h-[400px]
                    tablet:w-[340px]
                    desktop:h-[440px]
                    desktop:w-[380px]

                    transition-[opacity,transform,visibility]
                    duration-500
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    motion-reduce:transition-none

                    ${aberto
                        ? "visible scale-100 opacity-100"
                        : "pointer-events-none invisible scale-[0.15] opacity-0"
                    }
                `}
            >
                {/* Parte de cima: ~60% da altura, com imagem de fundo */}
                <div
                    className="relative h-[60%] w-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${BANNER}')` }}
                >
                    {/* Película escura para dar leitura ao texto */}
                    <div className="absolute inset-0 bg-black/40" />

                    {/* Botão fechar (canto superior esquerdo) */}
                    <button
                        type="button"
                        onClick={() => setAberto(false)}
                        aria-label="Fechar contato"
                        tabIndex={aberto ? 0 : -1}
                        className="absolute left-[12px] top-[12px] z-10 flex h-[28px] w-[28px] items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/60 focus-visible:outline-2 focus-visible:outline-white cursor-pointer"
                    >
                        <IconX size={16} aria-hidden="true" />
                    </button>

                    {/* Nome e cargo */}
                    <div className="relative flex h-full flex-col items-end justify-center px-[20px] text-right text-white">
                        <h2 className="text-[22px] font-bold uppercase leading-tight tablet:text-[26px] desktop:text-[30px]">
                            {NOME}
                        </h2>
                        <div className="my-[6px] h-px w-[70%] bg-white/60" />
                        <p className="text-[12px] font-semibold uppercase tablet:text-[13px] desktop:text-[14px]">
                            {CARGO}
                        </p>
                    </div>
                </div>

                {/* Foto redonda entre as duas divisões, à esquerda */}
                <div className="absolute left-[20px] top-[60%] z-10 h-[120px] w-[120px] -translate-y-1/2 overflow-hidden rounded-full ring-[4px] ring-white tablet:h-[130px] tablet:w-[130px] desktop:h-[140px] desktop:w-[140px]">
                    <Image
                        src={FOTO}
                        alt={FOTO_ALT}
                        fill
                        sizes="140px"
                        className="object-cover"
                    />
                </div>

                {/* Parte de baixo: ~40% da altura, com os botões.
                    O pt reserva a metade da foto (60px / 65px / 70px) que invade essa área. */}
                <div className="flex flex-1 items-center justify-between gap-[8px] px-[50px] pb-[12px] pt-[60px] tablet:gap-[10px] tablet:pt-[65px] desktop:pt-[70px] mt-[20px]">
                    {BOTOES.map(({ nome, href, Icone, cor }) => (
                        <a
                            key={nome}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Abrir ${nome}`}
                            tabIndex={aberto ? 0 : -1}
                            className={`flex h-full max-h-[72px] flex-col items-center justify-center p-[11px] gap-[2px] rounded-[14px] text-[11px] font-bold text-white shadow-md transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-marrom ${cor}`}
                        >
                            <Icone size={50} stroke={1.75} aria-hidden="true" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
