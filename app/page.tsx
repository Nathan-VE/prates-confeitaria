import MenuSuperior from "./../components/menuSuperior";
import Hero from "./../components/hero"
import QuemSomos from "@/components/quemSomos";

export default function Home() {
  return (
    <div>
      <MenuSuperior />
      <Hero />
      <main className="flex flex-col items-center justify-center">
        <QuemSomos />
      </main>
    </div>
  );
}
