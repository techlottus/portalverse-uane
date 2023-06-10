import { useEffect } from "react"

import "@/styles/globals.scss"
import { AppPropsWithLayout } from "@/types/Layout.types"
import { useRouter } from "next/router"
import Script from "next/script"

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
      <Component {...pageProps} />
    </>)
}

export default MyApp
