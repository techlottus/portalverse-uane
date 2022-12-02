import { FC, SyntheticEvent, useEffect, useState } from "react"
import cn from "classnames"
import Image from "@/components/Image"
import SliderPortalverseComponentData, { ItemSliderPortalverse } from "@/types/SliderPortalverse.types";

const Slider: FC<SliderPortalverseComponentData> = ({ data: { items }, classNames, classNameSlide }: SliderPortalverseComponentData) => {

  const [ active, setActive ] = useState<number>(0);
  const [ countItems, setCountItems ] = useState<number>(0);

  const stylesBaseControls = "material-icons select-none absolute top-[45%] p-1 bg-white rounded-lg cursor-pointer text-[12px]";

  useEffect(() => {
    setCountItems((items.length - 1));
  }, [items]);

  const handlerClickControl = ({ target }: SyntheticEvent) => {
    const { ariaLabel } = (target as HTMLElement)
    if ( ariaLabel === "next" ) {
      if ( active === countItems ) {
        setActive(0);
        return
      }
      if ( active < countItems ) {
        setActive((prevState: number) => prevState+1);
        return
      }
    }

    if ( ariaLabel === "prev" ) {
      if ( active === 0 ) {
        setActive(countItems);
        return
      }
      if ( active > 0 ) {
        setActive((prevState: number) => prevState-1);
        return
      }
    }
  }

  return <section className={cn("flex h-full relative", classNames)}>
    <span aria-label="next" onClick={handlerClickControl} className={cn("z-10 left-0", stylesBaseControls)}>arrow_back_ios</span>
    {
      items.map(({ src, alt }: ItemSliderPortalverse, i: number) => <Image classNames={cn("w-full h-full", classNameSlide, { "hidden": i !== active })} key={`slide-image-${i}`} src={src} alt={alt} />)
    }
    <span aria-label="prev" onClick={handlerClickControl} className={cn("right-0", stylesBaseControls)}>arrow_forward_ios</span>
  </section>
}

export default Slider