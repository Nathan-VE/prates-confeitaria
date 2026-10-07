import type { ReactNode } from "react";

type ItensDestaqueProps = {
  /** Os mini cards (CardCategoria) exibidos dentro da div. Cada um precisa de uma `key`. */
  card: ReactNode[];
};

export default function ItensDestaque({ card }: ItensDestaqueProps) {
  return (
    /*
      mt-14 / tablet:mt-20 / desktop:mt-24 reservam o espaço da metade da imagem que "sai" da div
      (precisa ser igual à margem negativa usada no CardCategoria).
    */
    <div className="mt-14 w-full max-w-4xl rounded-2xl bg-rosa-principal px-[15px] pb-[10px] tablet:mt-20 tablet:px-10 tablet:pb-12 desktop:mt-24 desktop:max-w-5xl desktop:px-14 desktop:pb-16">
      <div className="flex items-start justify-between gap-3 tablet:gap-6 desktop:gap-10">
        {card}
      </div>
    </div>
  );
}
