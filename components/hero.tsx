import CardAcoesRapidas from "./cardAcoesRapidas";

export default function Hero() {
    return (
        <section className="flex h-[60vh] w-full flex-col items-start justify-end bg-[url('/hero/hero-doces.jpeg')] bg-cover bg-center bg-[position:center_20%] bg-no-repeat">
            <CardAcoesRapidas />
        </section>
    );
}