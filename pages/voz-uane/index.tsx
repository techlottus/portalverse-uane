import Head from "next/head"
import { useRouter } from "next/router"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import ContentFullLayout from "@/layouts/ContentFull.layout"
import NextPageWithLayout from "@/types/Layout.types"
import { getDataPageFromJSON } from "@/utils/getDataPage"
import ContentLayout from "@/layouts/Content.layout"
import Button from "@/old-components/Button/Button"
import Spotify from "@/old-components/Spotify"
import BannerWrapper from "@/old-components/BannerWrapper"
import BannerPortalverse from "@/old-components/BannerPortalverse"
import BlogPostCardWrapper from "@/components/BlogPostCardWrapper"
import getBlogPosts from "@/utils/getBlogPosts"
import type { BlogPostsData } from "@/utils/getBlogPosts"

const ThankYouPage: NextPageWithLayout = ({ sections, meta, strapi }: any) => {
  const router = useRouter()
  const blogPostsData = strapi?.blogPostsData as BlogPostsData;
  const linkIcon = {
    "text": "Ver más",
    "iconSecond": "",
    "isBold": true,
    "size": "large",
    "isUnderline": false,
    "disabled": false,
    "icon": ""
  }

  return <>
    <Head>
      <title>{ meta.title }</title>
    </Head>
    <HeaderFooterLayout breadcrumbs={true}>
      <ContentFullLayout classNames="w-d:hidden mb-12 w-t:mb-6 w-p:mb-6">
        <div className="col-span-12 w-t:col-span-8">
          <BannerPortalverse data={ sections.head.banner } onClick={() => router.push(sections.head.banner.redirect)}/>
        </div>
      </ContentFullLayout>
      <ContentLayout>
        <div className="col-span-12 w-p:col-span-4 w-t:hidden w-p:hidden">
          <BannerPortalverse data={ sections.head.banner } onClick={() => router.push(sections.head.banner.redirect)}/>
        </div>
        <div className="col-span-8 w-t:col-span-8 w-p:col-span-4">
          <div className="mb-6">
            <p className="font-Poppins font-bold text-10 w-t:text-7.5 w-p:text-7.5 leading-[125%]">{sections.articles.title}</p>
          </div>
          <section className="col-span-8 w-t:col-span-8 w-p:col-span-4 grid w-d:grid-cols-2 gap-6 w-t:grid-cols-2 w-p:grid-cols-1 mb-6">
            {
            blogPostsData?.blogPosts?.data.map((item:any, i:number) => <section key={`section-blog-${i}`}>
              <BlogPostCardWrapper onClick={() => router.push(`${router.pathname}/blog/${item.attributes.slug}`)} data={{...item, linkIcon, linkText:linkIcon, type: "vertical", wrapper:true}}/>
            </section>)
            }
          </section>
          <div className="col-span-8 w-t:col-span-8 w-p:col-span-4 flex justify-center">
            <Button dark data={sections.articles.button} onClick={() => router.push(sections.articles.button.redirect)}/>
          </div>
        </div>
        <div className="col-span-4 w-t:col-span-8 w-p:col-span-4">
          <p className="font-Poppins font-bold text-10 w-t:text-7.5 w-p:text-7.5 leading-[125%] mb-6">{sections.podcast.title}</p>
          {
            sections.podcast.items.map((item:any, i:number) => <section className="mb-6" key={`section-articles-${i}`}>
             <Spotify data={item}/>
            </section>)
          }
          {
            sections.banners.banners.map((item:any, i:number) => <section className="mb-12 w-t:mb-6 w-p:mb-6 w-t:hidden" key={`section-podcast-${i}`}>
              <BannerWrapper data={item} banner={item} typeBanner={item.type} font={item.font} onBtn={() => item.extern ? window.open(item.redirect, "_blank") : router.push(item.redirect)}/>
            </section>)
          }
          {
            sections.banners.banners.map((item:any, i:number) => <section className="mb-12 w-t:mb-6 w-p:mb-6 w-d:hidden w-p:hidden" key={`section-podcast-${i}`}>
              <BannerWrapper data={item} banner={item} typeBanner={""} font={item.font} onBtn={() => item.extern ? window.open(item.redirect, "_blank") : router.push(item.redirect)}/>
            </section>)
          }
        </div>
      </ContentLayout>
    </HeaderFooterLayout>
  </>
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {
  const { sections, meta } = await getDataPageFromJSON('voz-UANE.json');

  // redirect not avaliable page
  if (!!meta.hidden) {
    return {
      notFound: true,
    }
  }

  const blogPostsData = await getBlogPosts({
    pageSize: 100,
    sort: "publication_date:desc"
  });

  return {
    props: { sections, meta, strapi: { blogPostsData } },
    revalidate: 60
  }
}

export default ThankYouPage