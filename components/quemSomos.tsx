export default function QuemSomos() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full ">
            <div className="flex flex-col w-full items-end  justify-center bg-red-500 mt-[70px]">
                <img
                    src="/imagens/lucas-e-rayanne.png"
                    alt="Foto do Lucas abraçado com a Rayanne."
                    className="scale-x-[-1] absolute right-[-30px] z-10 h-[300px] -translate-x-1 object-cover animate-subir pointer-events-none"
                />
            </div>
        </div>
    )
}