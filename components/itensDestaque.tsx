import type { ReactNode } from "react";

type ItensDestaqueProps = {
  /** Os mini cards (CardCategoria) exibidos dentro da div. Cada um precisa de uma `key`. */
  card: ReactNode[];
};

export default function ItensDestaque({ card }: ItensDestaqueProps) {
  return (
    /*
      mt-14 / sm:mt-20 reservam o espaço da metade da imagem que "sai" da div
      (precisa ser igual à margem negativa usada no CardCategoria).
    */
    <div className="mt-14 w-full max-w-4xl rounded-2xl bg-rosa-principal px-[15px] pb-[10px] sm:mt-20 sm:px-10 sm:pb-12 ">
      <div className="flex items-start justify-between gap-3 sm:gap-6">
        {card}
      </div>
    </div>
  );
}
