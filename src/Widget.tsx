import { ChatTeardropDots } from "phosphor-react";
import { Popover } from '@headlessui/react'
import { Form } from "./Form";

export function Widget() {

  return (
    <Popover className="absolute flex flex-col items-end bottom-4 right-4">
      <Popover.Panel>
        <Form />
      </Popover.Panel>
      <Popover.Button className="flex items-center h-12 px-3 bg-purple-500 rounded-full group">
        <ChatTeardropDots className="w-6 h-6 text-white" />
        <span className="overflow-hidden text-white transition-all duration-500 easy-linear group-hover:max-w-xs max-w-0">
          <span className="pl-2"></span>
          Feedback</span>
      </Popover.Button>
    </Popover>
  );
}
