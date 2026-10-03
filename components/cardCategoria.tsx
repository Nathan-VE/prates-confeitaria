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
        h-28 (7rem) -> -mt-14 | sm:h-40 (10rem) -> sm:-mt-20
        Assim o centro da foto fica exatamente na borda superior da div.
      */}
            <div className="relative -mt-14 h-[90px] w-[90px] sm:-mt-20 sm:h-40 sm:w-40">
                <div className="relative h-full w-full overflow-hidden rounded-full ring-[6px] ring-white sm:ring-8">
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
                    className="absolute bottom-1 right-0 flex items-center rounded-full bg-white px-2 py-1 shadow-sm sm:bottom-2"
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

            <h3 className="mt-5 font-serif text-[15px] font-bold capitalize tracking-wide text-white sm:text-2xl">
                {categoria}
            </h3>

            <p
                className={`mt-2 rounded-full px-3 py-1 text-xs sm:text-sm ${personalizavel
                        ? "bg-white/15 text-white"
                        : "border border-white/30 text-white/70"
                    }`}
            >
                {personalizavel ? "Montável" : "Não montável"}
            </p>
        </article>
    );
}
