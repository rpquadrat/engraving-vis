import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
function Ideas(props) {
  return (
    <Accordion className="accordion -color-inverted" allowZeroExpanded={true}>
      {props.items.map((item, index) => (
        <AccordionItem key={index}>
          <AccordionItemHeading>
            <AccordionItemButton>
              {item.sectionName}
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            {item.sectionData.map((data, index) => (
              <div className="ideas-boxes-item" key={index}>
                <p>{data.firstLine}</p>
                <p>{data.secondLine}</p>
                <p>{data.thirdLine}</p>
              </div>
            ))}
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default Ideas;
