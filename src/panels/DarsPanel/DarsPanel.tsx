import { Accordion, AccordionItem } from '@nextui-org/react';

export const DarsPanel: React.FC = () => {
  return (
    <div className="w-[16rem] h-full flex flex-col relative overflow-y-auto">
      <div className="border-b-1.5 border-gray-400">
        <div className="inline-flex flex-col mx-5 my-3 gap-2 ">
          <div>MAJOR REQUIREMENTS</div>
          <div>MINOR REQUIREMENTS</div>
          <div>ENFORCED CO-REQ/SERIES</div>
          <div>RECCOMENDED SERIES</div>
        </div>
      </div>
      <div className="mx-5 mt-5 mb-2">
        <p>College of Letters and Sciences</p>
        <Accordion isCompact selectionMode="multiple" fullWidth>
          <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
            1
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
            2
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default DarsPanel;
