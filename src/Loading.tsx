import { CircleNotch } from "phosphor-react";

export default function Loading() {
    return(
        <div className="flex items-center justify-center w-6 h-6 overflow-hidden ">
            <CircleNotch className="w-4 h-4 animate-spin"/>
        </div>
    )
}