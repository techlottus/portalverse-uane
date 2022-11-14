import { createRef, FC, memo, useEffect, useState } from "react"
import BannerComponentData from "@/types/Banner.types"
import Button from "@/components/Button/Button"

const Banner: FC<BannerComponentData> = memo(({ data, onBtn }: BannerComponentData) => {
  const bannerPortalverseRef = createRef();

  const [configButton, setConfigButton] = useState({});

  useEffect(() => {
    (bannerPortalverseRef.current as any).data = {
      title: data.title || '',
      subtitle: data.subtitle || '',
      state: data.state || '',
      size: data.size || '',
      middle: data.middle || false,
      center: data.center || false,
      bottom: data.bottom || false,
      left: data.left || false,
      urlImage: data.urlImage || {
        mobile: '',
        desktop: '',
      },
      overlay: data.overlay || '',
      height: data.height || '',
      action: data.action || {},
      wrapper: data.wrapper || false
    };

    setConfigButton((state) => {
      return {...state, ...data.action}
    })
  }, [data]);// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!!bannerPortalverseRef.current) {
      (bannerPortalverseRef.current as any).removeEventListener('onBtn', onBtn, false);
    }
    (bannerPortalverseRef.current as any).addEventListener('onBtn', onBtn, false);
  }, [onBtn]);// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    return () => {
      if (!!bannerPortalverseRef.current) {
        (bannerPortalverseRef.current as any).removeEventListener('onBtn', onBtn, false);
      }
    }
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  return <lottus-banner-portalverse ref={bannerPortalverseRef}>
    <div actionDesktop="">
        <Button data={configButton} />
        <p>hola desdde div</p>
    </div>
  </lottus-banner-portalverse>
});

export default Banner