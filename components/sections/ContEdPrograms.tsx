import { useRouter } from "next/router";
import Container from "@/layouts/Container.layout";
import CardProgram from "@/old-components/CardProgram/CardProgram";
import cn from "classnames";
import type { ContEdProgramsSection } from "@/utils/strapi/sections/ContEdPrograms";

const ContEdPrograms = (props: ContEdProgramsSection) => {
  const categories = props?.categories?.data;

  const router = useRouter();

  if (categories?.length < 1) return null;

  return (
    <section>
      <Container>
        <div className="flex flex-col space-y-12 w-d:space-y-18">
          {
            categories?.map((category, i) => {
              const categoryName = category?.attributes?.name;
              const categoryPrograms = category?.attributes?.programs?.data;
              return categoryPrograms?.length > 0
                ? <div key={i} className="flex flex-col space-y-6">
                    {
                      categoryName ? <h3 className="font-Poppins text-10 font-bold leading-[125%] w-t:text-8.5 w-p:text-6">{categoryName}</h3> : null
                    }
                    <div className="grid w-p:grid-cols-1 w-t:grid-cols-2 w-d:grid-cols-4 gap-6 items-stretch">
                      {
                        categoryPrograms?.map((program, i) => {
                          return (
                            <CardProgram
                              key={i}
                              classNames="hover:shadow-15"
                              image={{
                                src: program?.attributes?.image?.data?.attributes?.url,
                                alt: program?.attributes?.image?.data?.attributes?.alternativeText || "",
                              }}
                              title={program?.attributes?.name}
                              link={{
                                text: "Ver más",
                                size: "large",
                                isUnderline: false,
                                isBold: false,
                                disabled: false,
                                icon: "arrow_forward"
                              } as any}
                              onClick={() => router.push(`/extension-universitaria/${program?.attributes?.slug}`)}
                            />
                          );
                        })
                      }
                    </div>
                  </div>
                : null;
            })
          }
        </div>
      </Container>
    </section>
  );
};

export default ContEdPrograms;