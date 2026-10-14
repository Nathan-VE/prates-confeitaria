type FaixaAvisioProps = {
  texto: string;
}

export default function FaixaAvisio({ texto }: FaixaAvisioProps) {
  return (
    <div className="w-full overflow-hidden whitespace-nowrap bg-marrom">
      <div className="flex w-max animate-letreiro font-bold text-rosa-secundario text-[11px] tablet:text-[13px] desktop:text-[15px]">
        <span className="px-4 tablet:px-6 desktop:px-8">{texto}</span>
        <span className="px-4 tablet:px-6 desktop:px-8">{texto}</span>
        <div className="hidden desktop:flex">
          <span className="px-4 tablet:px-6 desktop:px-8">{texto}</span>
          <span className="px-4 tablet:px-6 desktop:px-8">{texto}</span>
          <span className="px-4 tablet:px-6 desktop:px-8">{texto}</span>

        </div>
      </div>
    </div>
  );
}
