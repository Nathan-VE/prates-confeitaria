import { IconBrandWhatsapp, IconMail } from "@tabler/icons-react";

/* ------------------------------------------------------------------ */
/* DADOS: troque pelos valores reais                                  */
/* ------------------------------------------------------------------ */
const ENDERECO = "Rua Exemplo, 123 - Centro, Cidade - UF, 00000-000";

const WHATSAPP_NUMERO = "5500900000000"; // formato: 55 + DDD + número
const WHATSAPP_EXIBIDO = "(00) 90000-0000";
const EMAIL = "contato@seudominio.com.br";

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
    { sigla: "S", nome: "Segunda", tipo: "semana" },
    { sigla: "T", nome: "Terça", tipo: "semana" },
    { sigla: "Q", nome: "Quarta", tipo: "semana" },
    { sigla: "Q", nome: "Quinta", tipo: "semana" },
    { sigla: "S", nome: "Sexta", tipo: "semana" },
    { sigla: "S", nome: "Sábado", tipo: "sabado" },
    { sigla: "D", nome: "Domingo", tipo: "fechado" },
];

function Calendario() {
    return (
        <div
            role="list"
            aria-label="Dias de atendimento"
            className="flex flex-row items-center justify-between w-full gap-[6px] rounded-[12px] bg-rosa-secundario p-[8px_20px]"
        >
            {SEMANA.map((dia) => (
                <span
                    key={dia.nome}
                    role="listitem"
                    aria-label={`${dia.nome}${dia.tipo === "fechado" ? ", fechado" : ""}`}
                    title={dia.nome}
                    className={`flex items-center justify-center rounded-full text-[8px] w-[20px] h-[20px] font-bold ${COR[dia.tipo]} ${
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
    { tipo: "semana", texto: "12h00 às 18h00" },
    { tipo: "sabado", texto: "10h00 às 14h00" },
    { tipo: "fechado", texto: "Fechado" },
];

function Legenda() {
    return (
        <ul className="flex flex-row items-center justify-between gap-[8px] text-[10px] text-marrom px-[30px]">
            {LEGENDA.map((item) => (
                <li key={item.tipo} className="flex items-center gap-[6px]">
                    <span
                        className={`h-[10px] w-[10px] shrink-0 rounded-full ${COR[item.tipo]}`}
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
            className="h-[200px] w-full rounded-[16px] border-0"
        />
    );
}

export default function Contato() {
    return (
        <section className="flex flex-col gap-[24px] p-[20px] pt-[50px]">
            {/* Título: sem font-sans, mantém a fonte do projeto */}
            <h2 className="pointer-events-none origin-left scale-y-[1.25] text-[40px] font-bold leading-[0.9] tracking-tight text-marrom mb-[20px]">
                Onde nos encontrar
            </h2>

            {/* Todo o resto da section usa font-sans */}
            <div className="flex flex-col gap-[24px] font-sans">
                {/* Calendário + legenda */}
                <div className="flex flex-col gap-[12px]">
                    <Calendario />
                    <Legenda />
                </div>

                {/* Texto informativo + contatos */}
                <div className="flex flex-col gap-[12px] text-[15px] leading-snug text-marrom">
                    <p>
                        Atendemos normalmente de segunda a sábado. Fale com a
                        gente por um dos canais abaixo, estaremos prontos para lhe atender de forma humanizado e cheia de amor!
                    </p>

                    <div className="flex flex-row gap-[10px] text-[10px]">
                        <a
                            href={`https://wa.me/${WHATSAPP_NUMERO}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-[8px]"
                        >
                            <IconBrandWhatsapp size={22} stroke={1.75} className="shrink-0" aria-hidden="true" />
                            <span>{WHATSAPP_EXIBIDO}</span>
                        </a>

                        <a
                            href={`mailto:${EMAIL}`}
                            className="flex items-center gap-[8px]"
                        >
                            <IconMail size={22} stroke={1.75} className="shrink-0" aria-hidden="true" />
                            <span className="min-w-0 break-all">{EMAIL}</span>
                        </a>
                    </div>
                </div>

                {/* Mapa + endereço */}
                <div className="flex flex-col gap-[10px]">
                    <Mapa />
                    <address className="text-[12px] not-italic leading-snug text-marrom">
                        {ENDERECO}
                    </address>
                </div>
            </div>
        </section>
    );
}
