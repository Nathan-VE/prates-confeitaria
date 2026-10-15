import { IconBrandWhatsapp, IconMail } from "@tabler/icons-react";

/* ------------------------------------------------------------------ */
/* DADOS: troque pelos valores reais                                  */
/* ------------------------------------------------------------------ */
const ENDERECO = "Rua Exemplo, 123 - Centro, Cidade - UF, 00000-000";

const WHATSAPP_NUMERO = "5514991721976"; // formato: 55 + DDD + número
const WHATSAPP_EXIBIDO = "(14) 99172-1976";

/* ------------------------------------------------------------------ */
/* ESTILOS COMPARTILHADOS (calendário e legenda usam as mesmas cores) */
/* ------------------------------------------------------------------ */
type Tipo = "semana" | "sabado" | "fechado";

const COR: Record<Tipo, string> = {
    semana: "bg-marrom",
    sabado: "bg-marrom/70",
    fechado: "border border-marrom",
};

/* ------------------------------------------------------------------ */
/* CALENDÁRIO ESTÁTICO (semana de atendimento)                        */
/* ------------------------------------------------------------------ */
const SEMANA: { sigla: string; nome: string; tipo: Tipo }[] = [
    { sigla: "S", nome: "Segunda", tipo: "fechado" },
    { sigla: "T", nome: "Terça", tipo: "semana" },
    { sigla: "Q", nome: "Quarta", tipo: "semana" },
    { sigla: "Q", nome: "Quinta", tipo: "semana" },
    { sigla: "S", nome: "Sexta", tipo: "semana" },
    { sigla: "S", nome: "Sábado", tipo: "fechado" },
    { sigla: "D", nome: "Domingo", tipo: "fechado" },
];

function Calendario() {
    return (
        <div
            role="list"
            aria-label="Dias de atendimento"
            className="flex flex-row items-center justify-between w-full gap-[6px] rounded-[12px] bg-rosa-secundario p-[8px_20px] tablet:gap-[10px] tablet:p-[12px_32px] desktop:gap-[14px] desktop:p-[16px_48px]"
        >
            {SEMANA.map((dia) => (
                <span
                    key={dia.nome}
                    role="listitem"
                    aria-label={`${dia.nome}${dia.tipo === "fechado" ? ", fechado" : ""}`}
                    title={dia.nome}
                    className={`flex items-center justify-center rounded-full text-[8px] w-[20px] h-[20px] tablet:text-[12px] tablet:w-[32px] tablet:h-[32px] desktop:text-[14px] desktop:w-[40px] desktop:h-[40px] font-bold ${COR[dia.tipo]} ${
                        dia.tipo === "fechado" ? "text-marrom/50" : "text-white"
                    }`}
                >
                    {dia.sigla}
                </span>
            ))}
        </div>
    );
}

const LEGENDA: { tipo: Tipo; texto: string }[] = [
    { tipo: "semana", texto: "13h00 às 17h00" },
    { tipo: "fechado", texto: "Fechado" },
];

function Legenda() {
    return (
        <ul className="flex flex-row items-center justify-center gap-[8px] text-[10px] text-marrom px-[30px] tablet:gap-[16px] tablet:text-[14px] desktop:gap-[24px] desktop:text-[16px]">
            {LEGENDA.map((item) => (
                <li key={item.tipo} className="flex items-center gap-[6px]">
                    <span
                        className={`h-[10px] w-[10px] tablet:h-[14px] tablet:w-[14px] desktop:h-[16px] desktop:w-[16px] shrink-0 rounded-full ${COR[item.tipo]}`}
                    />
                    <span className="whitespace-nowrap">{item.texto}</span>
                </li>
            ))}
        </ul>
    );
}

function Mapa() {
    const chave = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;
    const q = encodeURIComponent(ENDERECO);

    // Com chave: Embed API oficial. Sem chave: embed simples, também funciona.
    const src = chave
        ? `https://www.google.com/maps/embed/v1/place?key=${chave}&q=${q}`
        : `https://www.google.com/maps?q=${q}&output=embed`;

    return (
        <iframe
            title="Localização no Google Maps"
            src={src}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="h-[200px] w-full rounded-[16px] border-0 tablet:h-[320px] desktop:h-[420px]"
        />
    );
}

export default function Contato() {
    return (
        <section className="flex flex-col gap-[24px] p-[20px] pt-[50px] tablet:gap-[32px] tablet:p-[40px] tablet:pt-[70px] desktop:mx-auto desktop:w-full desktop:max-w-[1100px] desktop:gap-[40px] desktop:p-[60px] desktop:pt-[90px]">
            {/* Título: sem font-sans, mantém a fonte do projeto */}
            <h2 className="pointer-events-none origin-left scale-y-[1.25] text-[40px] desktop:text-[100px] font-bold leading-[0.9] tracking-tight text-marrom mb-[20px] tablet:text-[56px] desktop:text-[72px]">
                Onde nos encontrar
            </h2>

            {/* Todo o resto da section usa font-sans */}
            <div className="flex flex-col gap-[24px] font-sans tablet:gap-[32px] desktop:gap-[40px]">
                {/* Calendário + legenda */}
                <div className="flex flex-col gap-[12px] tablet:gap-[16px] desktop:gap-[20px]">
                    <Calendario />
                    <Legenda />
                </div>

                {/* Texto informativo + contatos */}
                <div className="flex flex-col gap-[12px] text-[15px] leading-snug text-marrom tablet:gap-[16px] tablet:text-[18px] desktop:gap-[20px] desktop:text-[20px]">
                    <p>
                        Atendemos normalmente de segunda a sábado. Fale com a
                        gente por um dos canais abaixo, estaremos prontos para lhe atender de forma humanizado e cheia de amor!
                    </p>

                    <div className="flex flex-row gap-[10px] text-[10px] tablet:text-[14px] desktop:text-[16px]">
                        <a
                            href={`https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent("Olá! Venho pelo site e gostaria de conhecer melhor os produtos da Prates Confeitaria.")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-[8px] rounded-[10px] px-[12px] py-[7px] tablet:px-[16px] tablet:py-[10px] desktop:px-[20px] desktop:py-[12px] bg-rosa-secundario"
                        >
                            <IconBrandWhatsapp size={22} stroke={1.75} className="shrink-0" aria-hidden="true" />
                            <span>{WHATSAPP_EXIBIDO}</span>
                        </a>
                    </div>
                </div>

                {/* Mapa + endereço */}
                <div className="flex flex-col gap-[10px] tablet:gap-[14px] desktop:mt-[100px]">
                    <Mapa />
                    <address className="text-[12px] not-italic leading-snug text-marrom tablet:text-[14px] desktop:text-[16px]">
                        {ENDERECO}
                    </address>
                </div>
            </div>
        </section>
    );
}
