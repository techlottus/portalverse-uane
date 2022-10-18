import { FC } from "react"
import Head from "next/head"
import Image from "next/image"
import DirectoryComponentData, { ContactData, SectionData } from "@/types/Directorio.types"

const Directory: FC<DirectoryComponentData> = ({ directory }: DirectoryComponentData) => {
  return <>
    <Head>
      <title>Directorio</title>
    </Head>
    <section className="mx-auto mt-6">
      <h1 className="font-Poppins font-bold text-13 leading-16.25 text-dark">Directorio Universitario</h1>
      <p className="font-Nunito font-normal text-base leading-5 mb-8.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
      {
        directory.map(({ title, contacts }: SectionData) => <section className="mb-18">
            <h2 className="font-Poppins font-bold text-10 leading-12.5">{title}</h2>
            <div className="mt-6 flex flex-wrap gap-6">
              {
                contacts.map(({ name, email, phone, image = '' }: ContactData) => <div className="bg-SC/Backgrounds/BG-GRAY flex">
                    {
                      !!image
                        ? <Image src={image} />
                        : <div className="bg-[gray] rounded w-22 h-22" />
                    }
                    <div className="flex flex-col justify-center p-3">
                      <p className="font-Nunito font-bold text-base leading-5.2">{name}</p>
                      <a className="font-Nunito font-normal text-base leading-5 text-SC/Blackandgrey/B-60" href={`mailto:${email}`}>{email}</a>
                      <a className="font-Nunito font-normal text-base leading-5 text-SC/Blackandgrey/B-60" href={`tel+${phone.replace(/ /g, '')}`}>{phone}</a>
                    </div>
                  </div>
                )
              }
            </div>
          </section>
        )
      }
    </section>
  </>
}

export function getStaticProps(context: any) {
  const directory: SectionData[] = [
    {
      title: "Contacto general",
      contacts: [
        {
          name: "Servicios escolares",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          name: "Dirección general",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          name: "Dirección general",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          name: "Biblioteca",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          name: "Línea segura",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          name: "Línea segura",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
      ]
    },
    {
      title: "Campus Hermosillo",
      contacts: [
        {
          name: "Servicios escolares",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          name: "Dirección general",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          name: "Dirección general",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          name: "Biblioteca",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          name: "Línea segura",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          name: "Línea segura",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
      ]
    },
    {
      title: "Campus Saltillo",
      contacts: [
        {
          name: "Servicios escolares",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          name: "Dirección general",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          name: "Dirección general",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          name: "Biblioteca",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          name: "Línea segura",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          name: "Línea segura",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
      ]
    },
    {
      title: "Campus Monterrey",
      contacts: [
        {
          name: "Servicios escolares",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          name: "Dirección general",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          name: "Dirección general",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          name: "Biblioteca",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          name: "Línea segura",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          name: "Línea segura",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
      ]
    },
    {
      title: "Campus Torreón",
      contacts: [
        {
          name: "Servicios escolares",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          name: "Dirección general",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          name: "Dirección general",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          name: "Biblioteca",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          name: "Línea segura",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          name: "Línea segura",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
      ]
    },
    {
      title: "Campus Monclova",
      contacts: [
        {
          name: "Servicios escolares",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          name: "Dirección general",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          name: "Dirección general",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          name: "Biblioteca",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          name: "Línea segura",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          name: "Línea segura",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
      ]
    },
    {
      title: "Campus Piedras Negras",
      contacts: [
        {
          name: "Servicios escolares",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          name: "Dirección general",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          name: "Dirección general",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          name: "Biblioteca",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          name: "Línea segura",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          name: "Línea segura",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
      ]
    },
    {
      title: "Campus Reynosa",
      contacts: [
        {
          name: "Servicios escolares",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          name: "Dirección general",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          name: "Dirección general",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          name: "Biblioteca",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          name: "Línea segura",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          name: "Línea segura",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
      ]
    },
    {
      title: "Campus Sabinos",
      contacts: [
        {
          name: "Servicios escolares",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          name: "Dirección general",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          name: "Dirección general",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          name: "Biblioteca",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          name: "Línea segura",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          name: "Línea segura",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
      ]
    },
  ]

  return {
    props: { directory }
  }
}

export default Directory