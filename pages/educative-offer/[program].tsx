import { ReactElement, useEffect } from "react"
import Routes from "@/routes/Routes"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import ContentLayout from "@/layouts/Content.layout"
import NextPageWithLayout from "@/types/Layout.types"
import Breadcum from "@/components/Breadcrumb"
import Image from "@/components/Image"
import Tabs from "@/components/Tabs"
import RichtText from "@/components/Richtext"
import Youtube from "@/components/Youtube"
import ContentInsideLayout from "@/layouts/ContentInside.layout"


const EducativeOfferProgram: NextPageWithLayout<any> = ({ data }: any) => {

  useEffect(() => {
    console.log("post", data)
  }, [])// eslint-disable-line react-hooks/exhaustive-deps

  return <>
    <ContentInsideLayout classNames="gap-6">
    <div className="col-span-12 mt-6">
      <Breadcum data={{
          textItems: [],
          icon: "home",
          tagOnItem: undefined,
          tagOnBack: undefined,
          textColor: undefined
        }} />
    </div>
    <div className="col-span-6 mb-12 w-t:mb-0 w-t:col-span-12 w-p:col-span-12 w-p:mb-0">
      <h1 className="text-13 font-bold font-Nunito leading-13 w-t:text-8.5 w-p:text-7.5">Estudia Bachillerato</h1>
      <p className="text-base font-Nunito leading-5 w-t:text-sm w-p:text-sm ">lore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend finibus ante. Donec elementum euismod facilisis. Praesent sagittis lacus eget tincidunt maximus. Morbi laoreet tristique justo, quis tristique mauris elementum vitae. Sed lobortis tortor vitae felis mollis dapibus. Mauris sit amet nisl dapibus, convallis tortor eget, rhoncus quam. Proin euismod tincidunt magna, vel bibendum mauris mattis e</p>
    </div>
    <div className="col-span-6 mb-12 w-t:col-span-12 w-t:mb-0 w-p:col-span-12 w-p:mb-0">
      <Image
        alt="plotinyou"
        src="https://live.staticflickr.com/4638/27366012339_2a02fab73f_z.jpg"
        classNames="aspect-2/1 w-t:aspect-2/1 w-p:aspect-4/3"
      />
    </div>
    <div className="col-span-12">
      <p className="text-6.5 font-Nunito font-semibold leading-[125%] w-t:text-6 w-p:text-6">Elige una de las tres modalidades disponibles para bachillerato:</p>
    </div>
    <div className="col-span-12 flex justify-center mb-2 w-t:mb-0 w-p:mb-0">
      <Tabs data={{items: [{label: 'Item Tab 1', icons: { primary: 'star', duplicate: false,}, disabled: false,},{label: 'Item Tab 1', icons: { primary: 'star', duplicate: false,}, disabled: false,}, {label: 'Item Tab 1', icons: {primary: 'star', duplicate: false, }, disabled: false, }], size: 'medium', }} />
    </div>
    <div className="grid gap-6 mb-14 w-t:mb-0 w-p:mb-0 w-d:col-span-7 py-[40px] px-[94px] text-white bg-black w-t:col-span-12 w-p:col-span-12 w-t:py-[94px] w-p:p-6">
      <h1 className="text-6 font-bold font-Nunito leading-[125%] w-t:text-6 w-p:text-6">Características del Bachillerato en modalidad presencial</h1>
      <p className="text-base font-Nunito leading-[125%] w-t:text-sm w-p:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend finibus ante. Donec elementum euismod facilisis. Praesent sagittis lacus eget tincidunt maximus. Morbi laoreet tristique justo, quis tristique mauris elementum vitae. Sed lobortis tortor vitae felis mollis dapibus. Mauris sit amet nisl dapibus, convallis tortor eget, rhoncus quam. Proin euismod tincidunt magna, vel bibendum mauris mattis e</p>
    </div>
    <div className="mb-14 w-t:mb-0 w-p:mb-0 w-d:col-span-5 w-t:col-span-12 w-t:col-start-2 w-t:col-end-9 w-p:col-span-12">
      <Image
        alt="plotinyou"
        src="https://live.staticflickr.com/4638/27366012339_2a02fab73f_z.jpg"
        classNames="aspect-4/3 w-t:aspect-4/3 mt-6 w-p:aspect-4/3"
      />
    </div>
    <div className="col-span-6 mb-12 w-t:mb-0 w-p:mb-0 order-1 w-t:col-span-12 w-t:order-2 w-p:col-span-12">
      <Youtube data={{ options: { id: 'Ae84Xfec1HM', type: 'single', controls: true}, dimensions: { height: '330px', width: '100%'} }} />
    </div>
    <div className="col-span-6 leading-[125%] w-t:col-span-12 order-1 w-p:col-span-12">
      <RichtText data={{content: `
          # El mejor ambiente escolar
        
          El 80% del alumnado tiene algún tipo de beca
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend finibus ante. Donec elementum euismod facilisis. ctetur adipiscing elit. Nulla eleifend finibus ante. Donec elementum euismod facilisisctetur adipiscing elit. Nulla eleifend finibus ante. Donec elementum euismod facilisis ctetur adipiscing elit. Nulla eleifend finibus ante.          
        
          ## Requisitos
          - Acta de nacimiento reciente
          - Certificado de secundaria legalizado
          - Certificado de preparatoria legalizado
          - CURP copia
          `} 
        } />
    </div>
    <div className="border-solid border-2 col-span-12 order-3 col-start-3 col-end-10 w-t:col-start-1 w-t:col-end-12 w-p:col-start-1 w-p:col-end-12">
      <p>aqui va el formulario</p>
    </div>
</ContentInsideLayout> 
    
  </>
}

export async function getStaticPaths() {
  return {
    paths: Routes["educative-offer"],
    fallback: false,
  }
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {
  const path = "program";
  const programs = [
    { [path]: "design", description: "soy algo", title: "Diseño" },
    { [path]: "code", description: "soy algo nuevo", title: "Código" }
  ];
  const { params: { program } } = context;
  const preFilter = programs.filter((item: any) => item.program === program)
  let dataProgram: {};
  if (!preFilter.length) {
    dataProgram = { error: true, message: "Info no avaliable" }
  } else {
    dataProgram = { ...preFilter[0] }
  }

  return {
    props: { data: {...dataProgram} },
  }
}

EducativeOfferProgram.getLayout = function getLayout(page: ReactElement) {
  return <HeaderFooterLayout>
    <ContentLayout>
      { page }
    </ContentLayout>
  </HeaderFooterLayout>
}

export default EducativeOfferProgram;