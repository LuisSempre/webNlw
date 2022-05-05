import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function Button() {
    return (
        <Popover.Button title="Fechar" className="absolute text-gray-400 top-5 right-5 hover:text-gray-100">
            <X className="w-4 h-4 text-bold"/>
        </Popover.Button>
    )
}