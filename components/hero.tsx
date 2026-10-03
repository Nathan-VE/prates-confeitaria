import CardAcoesRapidas from "./cardAcoesRapidas";

export default function Hero() {
    return (
        <section className="flex h-[65vh] w-full flex-col items-start justify-end bg-[url('/hero/hero.png')] bg-cover bg-center bg-norepeat">
            <CardAcoesRapidas />
        </section>
    )
}