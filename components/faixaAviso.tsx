type FaixaAvisioProps = {
  texto: string;
}

export default function FaixaAvisio({ texto }: FaixaAvisioProps) {
  return (
    <div className="w-full overflow-hidden whitespace-nowrap bg-marrom">
      <div className="flex w-max animate-letreiro font-bold text-rosa-secundario text-[11px]">
        <span className="px-4">{texto}</span>
        <span className="px-4">{texto}</span>
      </div>
    </div>
  );
}