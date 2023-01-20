import { FC, useEffect, useState } from "react"
import Link from "next/link"
import cn from "classnames"
import Image from "@/components/Image"
import Button from "@/components/Button/Button"
import { ButtonInit } from "@/components/fixture"
import Icon from "@/components/Icon"
import HeaderPortalverseComponentData from "@/types/HeaderPortalverse.types"

const Header: FC<HeaderPortalverseComponentData> = ({ classNames, onClickLogo, logotype, onClickCTA, menus, menusMobile }: HeaderPortalverseComponentData) => { 

  const [ menuInvisible, setMenuInvisible ] = useState<boolean>(true);
  const [ activeMenu, setActiveMenu ] = useState<boolean>(false);
  const [ activeOptionMenu, setActiveOptionMenu ] = useState<any[]>([]);
  const [ levelActive, setLevelActive ] = useState<number>(1)
  const [ menusMobileConf, setMenuMobilesConf ] = useState<Array<any>>([])
  const [ activeMenuList, setActiveMenuList ] = useState<Array<any>>([])

  const handleMenuMobile = () => setMenuInvisible(!menuInvisible)

  const handleNavigateWrapper = (active: boolean, label: string) => {
    if (!!active) {
      const newItems = menusMobileConf.filter((item: any) => item.label === label)[0]
      let confItems = [ { ...newItems, children: undefined, back: true }, ...newItems.children ]
      setActiveMenuList([ ...confItems ])
    }
  }
  
  const handleNavigateArrow = (active: boolean, label: string) => {
    if (active) {
      const newItems = menusMobileConf.filter((item: any) => item.label === label)[0]
      let confItems = [ { ...newItems, children: undefined, back: true }, ...newItems.children ]
      setActiveMenuList([ ...confItems ])
    }
  }

  const handleEventNavigate = (active: boolean, label: string, from: string, back = false) => {
    if (back) {
      setActiveMenuList([ ...menusMobileConf ])
      setLevelActive(1)
      return
    }

    if (from === "single") {
      handleNavigateWrapper(active, label)
      setLevelActive(2)
      return
    }
    
    if (from === "arrow") {
      handleNavigateArrow(active, label)
      setLevelActive(2)
      return
    }
  } 

  const handleHoverOption = (option: string) => {
    const { items } = menus.filter((menu: any) => menu.label === option)[0];
    setActiveOptionMenu(items);
    setActiveMenu(!!items.length);
  }
  
  const handleHoverOutOption = () => {
    setActiveOptionMenu([]);
    setActiveMenu(false);
  }

  useEffect(() => {
    if (!menuInvisible) {
      document.body.classList.add("overflow-y-hidden");
      return
    }
    document.body.classList.remove("overflow-y-hidden");
  }, [menuInvisible]);

  useEffect(() => {
    setMenuMobilesConf([ ...menusMobile ]);
    setActiveMenuList([ ...menusMobile ])
  }, [menusMobile]);

  return <>
    {/* desktop menu */}
    <section className={cn("w-t:hidden w-p:hidden w-full flex p-1", { "shadow-15": !activeMenu }, classNames)}>
      <div className={cn("p-6 cursor-pointer border-solid border-SC/Actions/AC-300 border-r-2")} onClick={onClickLogo}>
        <Image src={logotype.src} alt={logotype.alt} classNames="w-[143px] h-10" classNamesImg="w-[143px] h-[38px]" />
      </div>
      <div className={cn("flex flex-col flex-grow p-1")}>
        <div className="flex justify-end pr-6 gap-6 font-Nunito text-gray-500 text-sm">
          <span className="font-normal">Accesos para:</span>
          <Link href="/alumnos" passHref>
            <a>
              <p className="font-bold">Alumnos</p>
            </a>
          </Link>
          <Link href="/egresados" passHref>
            <a>
              <p className="font-bold">Egresados</p>
            </a>
          </Link>
        </div>
        <div className="flex flex-grow p-1 border-solid border-SC/Actions/AC-300 border-t-2">
          <div className="flex flex-grow gap-6">
            {
              menus.map((item: any, i: number) => <div key={`menu-${i}`} className="cursor-pointer p-1 z-20 flex items-center">
                {
                  !!item.route
                    ? <Link passHref href={item.route}>
                        <a className="flex">
                          <p className="font-Nunito-Sans font-normal text-sm">{item.label}</p>
                        </a>
                      </Link>
                    : <p className="font-Nunito-Sans font-normal text-sm">{item.label}</p>
                }
                <p className={cn("flex items-center justify-center", { "hidden": !item.items.length })} onClick={() => !activeMenu ? handleHoverOption(item.label): handleHoverOutOption()}>
                  <span className={cn("material-icons ml-2")}>expand_more</span>
                </p>
                </div>)
            }
          </div>
          <div className="py-3 px-7 cursor-pointer border-solid border-SC/Actions/AC-300 border-x-2">
            <Icon name="search" className="w-6 h-6" />
          </div>
          <div className="px-6">
            <Button dark data={{ ...ButtonInit, title: "Pedir informes" }} onClick={onClickCTA} />
          </div>
        </div>
      </div>
    </section>
    {/* menu suboptions */}
    <div onMouseLeave={handleHoverOutOption} className={cn("w-full p-2 flex gap-6 justify-center w-t:hidden w-p:hidden absolute bg-white z-10", { "hidden": !activeMenu, "block shadow-15": activeMenu })}>
      {
        activeOptionMenu.map((item: any, i: number) => <div key={`submenu-${i}`} className={cn("py-1 px-6 z-20 border-solid border-SC/Actions/AC-300", { "border-r-2": activeOptionMenu.length > 1 })}>
            <Link href={item.route} passHref className="w-full">
              <a>
                <p className="font-Nunito-Sans font-normal text-sm">{item.label}</p>
              </a>
            </Link>
          </div>)
      }
    </div>
    {/* menu suboptions */}
    {/* desktop menu */}

    {/* desktop tablet */}
    <section className={cn("w-d:hidden w-full flex p-1 relative shadow-md", classNames)}>
      <div className="p-3 border-solid border-SC/Actions/AC-300 border-r-2" onClick={handleMenuMobile}>
        <Icon name="sort" className="w-6 h-6" />
      </div>
      <div className="flex justify-center items-center flex-grow" onClick={onClickLogo}>
        <Image src={logotype.src} alt={logotype.alt} classNames="w-[90px] h-6" classNamesImg="w-[90px] h-6" />
      </div>
      <div className="p-3 border-solid border-SC/Actions/AC-300 border-l-2">
        <Icon name="search" className="w-6 h-6" />
      </div>
    </section>
    <div className={cn("w-d:hidden w-full static left-0 top-0 bottom-0 h-screen bg-white flex flex-col p-2", { "hidden z-10": menuInvisible })}>
      <div className="h-screen overflow-auto">
        <div className="overflow-y-auto h-[90%]">
          {
            activeMenuList.map((item: any, i: number) => <div key={`submenu-mobile-${i}`} className="w-full flex flex-col justify-between p-1 z-20">
              <div className={cn("flex justify-between items-center p-1 border-b", { "cursor-pointer": !item.route, "flex-row-reverse": item.back })}>
                {
                  !!item.route
                    ? <Link href={item.route} passHref className="w-full">
                        <a className={cn("p-1 grow", { "border-r": levelActive === 1 })} target={item.external ? "_blank" : "_self"} onClick={handleMenuMobile}>
                          <p className="font-Nunito font-normal text-sm">{item.label}</p>
                        </a>
                      </Link>
                    : <div onClick={() => handleEventNavigate(!item.route, item.label, "single", !!item.back)} className="p-1 grow">
                        <p className="font-Nunito font-normal text-sm">{ item.label }</p>
                      </div>
                }
                <div className={cn("p-3", { "cursor-pointer": !!item.route })} onClick={() => handleEventNavigate(!!item.route, item.label, "arrow", !!item.back)}>
                  <span className="material-icons icon">{ !item.back ? "arrow_forward_ios" : "arrow_back_ios" }</span>
                </div>
              </div>
          </div>)
          }
        </div>
      </div>
    </div>
    {/* desktop tablet */}
  </> 
}

export default Header