import Image from "next/image";
import Link from "next/link";
import { IconBrandInstagram, IconBrandWhatsapp } from "@tabler/icons-react";

const WHATSAPP_NUMERO = "5511999999999";
const WHATSAPP_EXIBIDO = "(11) 99999-9999";
const INSTAGRAM_URL = "https://www.instagram.com/";
const ANO_ATUAL = new Date().getFullYear();

export default function Footer() {
    return (
        <aside className="flex flex-col items-center justify-center font-sans w-full gap-[20px] bg-rosa-principal px-5 py-8 text-white tablet:gap-[30px] tablet:px-10 tablet:py-12 desktop:gap-[40px] desktop:px-20 desktop:py-16">

            <div className="grid grid-cols-2 grid-rows-2 gap-[20px] tablet:gap-[40px] desktop:grid-cols-4 desktop:grid-rows-1 desktop:gap-[60px]">
                {/* Logo */}
                <div className="flex items-center justify-center">
                    <Link href="/" aria-label="Página inicial da Prates Confeitaria">
                        <Image
                            src="/logo/logo-sem-fundo.png"
                            alt="Prates Confeitaria"
                            width={170}
                            height={110}
                            className="h-auto w-[110px] object-contain tablet:w-[130px] desktop:w-[150px]"
                        />
                    </Link>
                </div>

                {/* Navegação */}
                <nav className="flex flex-col gap-[15px] text-sm tablet:text-base desktop:text-lg">
                    <h2 className="mb-1 font-bold">Navegação</h2>

                    <div className="flex flex-col gap-[5px]">
                        <Link href="/" className="transition-opacity hover:opacity-70">
                        Início
                    </Link>

                    <Link href="/#especialidades" className="transition-opacity hover:opacity-70">
                        Nossas especialidades
                    </Link>

                    <Link href="/#contato" className="transition-opacity hover:opacity-70">
                        Contato
                    </Link>
                    </div>
                </nav>

                {/* Contato */}
                <div className="flex flex-col gap-[15px] text-sm tablet:text-base desktop:text-lg">
                    <h2 className="font-bold">Fale conosco</h2>

                    <div className="flex flex-col gap-[5px]">
                        <a
                        href={`https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent("Olá! Gostaria de conhecer os produtos da Prates Confeitaria.")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 transition-opacity hover:opacity-70"
                    >
                        <IconBrandWhatsapp size={20} stroke={1.75} />
                        <span>{WHATSAPP_EXIBIDO}</span>
                    </a>

                    <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 transition-opacity hover:opacity-70"
                    >
                        <IconBrandInstagram size={20} stroke={1.75} />
                        <span>Instagram</span>
                    </a>
                    </div>
                </div>

                {/* Mensagem da marca */}
                <div className="flex flex-col gap-[15px] text-sm tablet:text-base desktop:text-lg">
                    <h2 className="font-bold">Feito com carinho</h2>

                    <p className="max-w-[260px] leading-relaxed tablet:max-w-[320px]">
                        Doces preparados para transformar momentos especiais em
                        lembranças deliciosas.
                    </p>
                </div>
            </div>

            {/* Direitos reservados */}
            <div className="col-span-5 row-span-1 flex items-center justify-center border-t border-white/30 pt-4 text-center text-xs tablet:text-sm desktop:col-span-10 desktop:text-base">
                <p>
                    © {ANO_ATUAL} Prates Confeitaria. Todos os direitos reservados.
                </p>
            </div>

        </aside>
    );
}
