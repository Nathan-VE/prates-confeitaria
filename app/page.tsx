import MenuSuperior from "@/components/menuSuperior";
import Hero from "@/components/hero";
import ItensDestaque from "@/components/itensDestaque";
import CardCategoria from "@/components/cardCategoria";

const categorias = [
  <CardCategoria
    key="salgado"
    categoria="salgado"
    imagem="/itens/coxinha.jpeg"
    textoAlternativo="Salgados artesanais"
    personalizavel={false}
  />,
  <CardCategoria
    key="bolo"
    categoria="bolo"
    imagem="/itens/bolo-personalizado.jpeg"
    textoAlternativo="Bolo decorado"
    personalizavel
  />,
  <CardCategoria
    key="doce"
    categoria="doce"
    imagem="/itens/copo-felicidade.jpeg"
    textoAlternativo="Doces finos"
    personalizavel
  />,
];

export default function Home() {
  return (
    <>
      <MenuSuperior />
      <Hero />

      <main className="flex w-full flex-col">
          <section className="m-[10px] flex flex-col items-center justify-center gap-[40px] rounded-2xl p-[10px] pt-[50px]">
            
            <h1 className="text-marrom text-[50px] font-bold tracking-tight scale-y-[1.25] origin-bottom leading-[0.7]">
              Nossas especialidades
            </h1>

            <ItensDestaque card={categorias} />

          </section>
      </main>
    </>
  );
}