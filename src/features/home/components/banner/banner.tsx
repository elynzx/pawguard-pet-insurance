import { BannerBlob } from "../../../../common/components/ui/banner-blob"
import { CurvedText } from "../../../../common/components/ui/curved-text"
import BannerImage from "../../../../assets/banner.svg"
import { BoneIcon } from "@phosphor-icons/react"

export const Banner = () => {
  return (
    <section className="w-full overflow-hidden relative">
      <div className="flex w-full md:max-w-432 px-4 md:px-30 gap-20 items-center">
        <div className="flex-1 flex flex-col items-center jusify-start relative z-10 gap-2">
          <BoneIcon size={80} className="absolute top-3 text-primary/80"/>
          <CurvedText />
          <h2 className="text-5xl font-black mt-8 mb-8 font-heading text-center">
            Mascotas felices, dueños tranquilos.
          </h2>
          <p className="text-lg opacity-90 leading-relaxed text-center max-w-xl font-semibold text-primary">
            Únete a los miles de dueños que confían en <span className="text-tertiary font-bold">PawGuard</span> para encargarse de las cuentas médicas mientras ellos se encargan de los mimos.
          </p>
        </div>

        <div className="flex-1 relative flex justify-center items-center h-170">
          <img
            className="relative z-10 h-150 object-contain"
            src={BannerImage}
            alt="Mascotas felices"
          />
          <BannerBlob />
        </div>
      </div>
    </section>
  )
}
