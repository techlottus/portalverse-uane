import { useEffect } from "react"

import "@/styles/globals.scss"
import { AppPropsWithLayout } from "@/types/Layout.types"
import { useRouter } from "next/router"
import Pixel from "@/components/Pixel"

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter()

  useEffect( () => {
    // we need import elements with commonJS
    if (typeof window !== 'undefined') {
      require("@lottus23/lottus-elements-uane/elements")
    }
  }, [])

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <>
      <Pixel 
        script={`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;
          n.push=n;
          n.loaded=!0;
          n.version='2.0';
          n.queue=[];
          t=b.createElement(e);
          t.async=!0;
          t.src=v;
          s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');`}
        pixel="https://www.facebook.com/tr?id=487461332128996&ev=PageView"
      />
      <Component {...pageProps} />
    </>)
}

export default MyApp
