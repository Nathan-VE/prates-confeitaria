import Image from "next/image";
import { IconStarFilled } from "@tabler/icons-react";

export type CardCategoriaProps = {
    categoria: string;
    /** Caminho da imagem dentro de /public. Ex.: "/itens/bolo.jpeg" */
    imagem: string;
    textoAlternativo: string;
    personalizavel?: boolean;
};

export default function CardCategoria({
    categoria,
    imagem,
    textoAlternativo,
    personalizavel = false,
}: CardCategoriaProps) {
    return (
        <article className="flex flex-1 flex-col items-center text-center">
            {/*
        Metade da altura da imagem como margem negativa:
        h-28 (7rem) -> -mt-14 | tablet:h-40 (10rem) -> tablet:-mt-20 | desktop:h-48 (12rem) -> desktop:-mt-24
        Assim o centro da foto fica exatamente na borda superior da div.
      */}
            <div className="relative -mt-14 h-[90px] w-[90px] tablet:-mt-20 tablet:h-40 tablet:w-40 desktop:-mt-24 desktop:h-48 desktop:w-48">
                <div className="relative h-full w-full overflow-hidden rounded-full ring-[6px] ring-white tablet:ring-8">
                    <Image
                        src={imagem}
                        alt={textoAlternativo}
                        fill
                        sizes="(min-width: 640px) 160px, 112px"
                        className="object-cover"
                    />
                </div>

                {/* Selo com UMA estrela amarela (sem valor, apenas o ícone) */}
                <span
                    className="absolute bottom-1 right-0 flex items-center rounded-full bg-white px-2 py-1 shadow-sm tablet:bottom-2 desktop:px-3 desktop:py-1.5"
                    aria-label="Categoria bem avaliada"
                >
                    <IconStarFilled
                        size={5}
                        aria-hidden="true"
                        className="text-yellow-400"
                    />
                    <IconStarFilled
                        size={5}
                        aria-hidden="true"
                        className="text-yellow-400"
                    />
                    <IconStarFilled
                        size={5}
                        aria-hidden="true"
                        className="text-yellow-400"
                    />
                    <IconStarFilled
                        size={5}
                        aria-hidden="true"
                        className="text-yellow-400"
                    />
                    <IconStarFilled
                        size={5}
                        aria-hidden="true"
                        className="text-yellow-400"
                    />
                </span>
            </div>

            <h3 className="mt-5 font-serif text-[15px] font-bold capitalize tracking-wide text-white tablet:text-2xl desktop:text-3xl">
                {categoria}
            </h3>

            <p
                className={`mt-2 rounded-full px-3 py-1 text-xs tablet:text-sm desktop:px-4 desktop:text-base ${personalizavel
                        ? "bg-white/15 text-white"
                        : "border border-white/30 text-white/70"
                    }`}
            >
                {personalizavel ? "Montável" : "Não montável"}
            </p>
        </article>
    );
}
