import Head from "next/head";
import Image from "@/components/Image";
import ContentInsideLayout from "@/layouts/ContentInside.layout";

const Images = () => {
  return <>
    <Head>
      <title>Images - aspect ratio</title>
    </Head>
    <section className="mx-auto mt-6 w-full">
      <ContentInsideLayout classNames="gap-6">
        <div className="col-span-6">
          <h1>aspect 1/1</h1>
          <Image
            alt="plotinyou"
            src="https://live.staticflickr.com/4638/27366012339_2a02fab73f_z.jpg"
            classNames="aspect-1/1"
          />
          <Image
            alt="plotinyou"
            src="https://noticiasnrt.com/wp-content/uploads/2022/05/UANE.png"
            classNames="aspect-1/1"
          />
        </div>
      </ContentInsideLayout>
      <ContentInsideLayout classNames="gap-6">
        <div className="col-span-4">
          <h1>aspect 2/1</h1>
          <Image
            alt="plotinyou"
            src="https://live.staticflickr.com/4638/27366012339_2a02fab73f_z.jpg"
            classNames="aspect-2/1"
          />
          <Image
            alt="plotinyou"
            src="https://noticiasnrt.com/wp-content/uploads/2022/05/UANE.png"
            classNames="aspect-2/1"
          />
        </div>
      </ContentInsideLayout>
      <ContentInsideLayout classNames="gap-6">
        <div className="col-span-11">
        <h1>aspect 4/3</h1>
          <Image
            alt="plotinyou"
            src="https://live.staticflickr.com/4638/27366012339_2a02fab73f_z.jpg"
            classNames="aspect-4/3"
          />
          <Image
            alt="plotinyou"
            src="https://noticiasnrt.com/wp-content/uploads/2022/05/UANE.png"
            classNames="aspect-4/3"
          />
        </div>
      </ContentInsideLayout>
      <ContentInsideLayout classNames="gap-6">
        <div className="col-span-12">
          <h1>aspect 7/2</h1>
          <Image
            alt="plotinyou"
            src="https://live.staticflickr.com/4638/27366012339_2a02fab73f_z.jpg"
            classNames="aspect-7/2"
          />
          <Image
            alt="plotinyou"
            src="https://noticiasnrt.com/wp-content/uploads/2022/05/UANE.png"
            classNames="aspect-7/2"
          />
        </div>
      </ContentInsideLayout>
      <ContentInsideLayout classNames="gap-6">
        <div className="col-span-3 justify-items-center col-start-3">
          <h1>aspect 3/4</h1>
          <Image
            alt="plotinyou"
            src="https://live.staticflickr.com/4638/27366012339_2a02fab73f_z.jpg"
            classNames="aspect-3/4"
          />
          <Image
            alt="plotinyou"
            src="https://noticiasnrt.com/wp-content/uploads/2022/05/UANE.png"
            classNames="aspect-3/$"
          />
        </div>
      </ContentInsideLayout>
      <ContentInsideLayout>
        <div className="col-span-4 gap-6">
          <h1>aspect 1/2</h1>
          <Image
            alt="plotinyou"
            src="https://live.staticflickr.com/4638/27366012339_2a02fab73f_z.jpg"
            classNames="aspect-1/2"
          />
          <Image
            alt="plotinyou"
            src="https://noticiasnrt.com/wp-content/uploads/2022/05/UANE.png"
            classNames="aspect-1/2"
          />
        </div>
      </ContentInsideLayout>
    </section>
  </>
}
export default Images;