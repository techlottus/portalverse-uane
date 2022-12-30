import { FC } from "react" 
import cn from "classnames"
import LinkContactTarget from "./LinkContactTarget"
import CintilloData from "@/types/Cintillo.types"

const Cintillo: FC<CintilloData> = ({ image,title, subtitle, email, phone, classNames }: CintilloData) => {
  return <div style={{"backgroundImage":`url(${image})`}} className={cn("col-span-12 w-t:col-span-8 w-p:col-span-4 bg-cover p-10", classNames)}>
    <h1 className="font-Poppins font-bold w-d:leading-15 w-t:leading-7.5 w-p:leading-7.5 w-d:text-6.5 w-t:text-6 w-p:text-6">{ title }</h1>
    <h3 className="font-Nunito font-normal w-d:leading-5 w-t:leading-[17.5px] w-p:leading-[17.5px] w-d:text-base w-t:text-3.5 w-p:text-3.5">{ subtitle }</h3>
    <div>
      <LinkContactTarget type="email" info={email} />
    </div>
    <div>
      <LinkContactTarget type="phone" info={phone} />
    </div>
  </div>
  }

export default Cintillo