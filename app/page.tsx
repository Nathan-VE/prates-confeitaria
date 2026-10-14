import MenuSuperior from "@/components/menuSuperior";
import Hero from "@/components/hero";
import ItensDestaque from "@/components/itensDestaque";
import CardCategoria from "@/components/cardCategoria";
import CarrosselFeedbacks, { Feedback } from "@/components/carrosselFeedbacks";
import QuemSomos from "@/components/quemSomos";
import Contato from "@/components/contato";
import Footer from "@/components/footer";

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

const feedbacks: Feedback[] = [
  {
    id: "1",
    imagem: "/itens/bolo-namorados.png",
    textoAlternativo: "Bolo personalizado dia dos namorados.",
    titulo: "Me fez me sentir muito amada",
    comentario: "'Eu adorei que a personalização ficou exatamente como pedi!'",
    diasAtras: 3,
    nota: 5
  },
  {
    id: "2",
    imagem: "/itens/bolo-maes.png",
    textoAlternativo: "",
    titulo: "Melhor presente possível para esse dia tão especial",
    comentario: "'Muito gostoso! Estava doce na medida certa, frutas frescas e a entrega foi pontual!'",
    diasAtras: 1,
    nota: 5
  },
  {
    id: "3",
    imagem: "/itens/coxinha.jpeg",
    textoAlternativo: "Coxinha de frango.",
    titulo: "Com certeza, é o melhor salgado da cidade",
    comentario: "'Não me lembro de uma coxinha tão boa como essa, crocante e MUITO recheada!'",
    diasAtras: 10,
    nota: 5
  },
  {
    id: "4",
    imagem: "/itens/copo-felicidade.jpeg",
    textoAlternativo: "Copo da felicidade de uva.",
    titulo: "Feito para quem ama doce",
    comentario: "'Me senti nas nuvens, esse copo da felicidade valeu cada centavo!'",
    diasAtras: 1,
    nota: 5
  },
]

export default function Home() {
  return (
    <>
      <MenuSuperior />
      <Hero />

      <main className="flex w-full flex-col">
        <section className="flex flex-col items-center justify-center gap-[40px] p-[20px] pt-[50px] animate-subir motion-reduce:animate-none desktop:mx-auto desktop:w-full desktop:max-w-[1100px] desktop:px-[60px] desktop:my-[100px]">
          <h1 className="text-marrom text-[50px] desktop:text-[100px] font-bold tracking-tight scale-y-[1.25] origin-bottom leading-[0.7] animate-subir pointer-events-none desktop:mb-[70px]">
            Nossas especialidades
          </h1>
          <ItensDestaque card={categorias} />
        </section>

        <section className="flex flex-col items-center justify-center gap-[40px] p-[20px] pt-[30px] mb-[50px] desktop:mx-auto desktop:w-full desktop:max-w-[1100px] desktop:px-[60px]">
          <CarrosselFeedbacks feedbacks={feedbacks} />
        </section>

        <QuemSomos />
          <div className="p-[20px] bg-[url('/imagens/fundo-estampado.png')] bg-cover desktop:mx-auto desktop:w-[calc(100%-120px)] desktop:max-w-[980px]"></div>
        <Contato />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}