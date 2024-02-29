import { Accordion, AccordionItem } from '@nextui-org/react';

export const DarsPanel: React.FC = () => {
  return (
    <div className="w-[16rem] h-full flex flex-col relative">
      <div className="inline-flex flex-col mx-5 my-3 gap-2">
        <div>MAJOR REQUIREMENTS</div>
        <div>MINOR REQUIREMENTS</div>
        <div>ENFORCED CO-REQ/SERIES</div>
        <div>RECCOMENDED SERIES</div>
      </div>
      <hr className="h-[1.5px] border-t-0 bg-neutral-300 opacity-100 dark:opacity-50" />
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
