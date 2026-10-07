import CardAcoesRapidas from "./cardAcoesRapidas";

export default function Hero() {
    return (
        <section className="flex h-[50vh] w-full flex-col items-start justify-end bg-[url('/hero/hero-doces.jpeg')] bg-cover bg-center bg-[position:center_20%] bg-no-repeat tablet:h-[60vh] desktop:h-[75vh]">
            <CardAcoesRapidas />
        </section>
    );
}
