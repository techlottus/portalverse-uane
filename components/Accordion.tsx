import { createRef, FC, memo, useEffect } from "react"
import AccordionComponentData from "@/types/Accordion.types"

const Accordion: FC<AccordionComponentData> = memo(({ data }: AccordionComponentData) => {
  const accordionRef = createRef();

  useEffect( () => {
    const items = data.items.map((item: any, id: number) => ({ title: item.title, content: item.answer, id: `item-${id}` }));
    (accordionRef.current as any).data = { items: [...items] };
  }, [data]);// eslint-disable-line react-hooks/exhaustive-deps

  return <lottus-accordion ref={accordionRef}></lottus-accordion>
});

export default Accordion