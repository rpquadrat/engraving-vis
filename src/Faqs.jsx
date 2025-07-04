import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
function Faqs(props) {
  return (
    <Accordion className="accordion -color-inverted">
      {props.items.map((item, index) => (
        <AccordionItem key={index}>
          <AccordionItemHeading>
            <AccordionItemButton>
              {item.question}
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>{item.answer}</p>
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default Faqs;
