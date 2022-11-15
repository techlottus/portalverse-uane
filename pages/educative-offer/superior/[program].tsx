import { ReactElement, useEffect } from "react"
import Head from "next/head"
import Routes from "@/routes/Routes"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import ContentLayout from "@/layouts/Content.layout"
import NextPageWithLayout from "@/types/Layout.types"
import Breadcum from "@/components/Breadcrumb"
import Image from "@/components/Image"
import Tabs from "@/components/Tabs"
import Youtube from "@/components/Youtube"
import ContentInsideLayout from "@/layouts/ContentInside.layout"

const EducativeOfferProgram: NextPageWithLayout<any> = ({ data }: any) => {

  useEffect(() => {
    console.log("post", data)
  }, [])// eslint-disable-line react-hooks/exhaustive-deps

  return <>
            <p>superior</p>
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