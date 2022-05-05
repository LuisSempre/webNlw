import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import Loading from "../../Loading";

interface ScreenShotProps {
    screenShot: string | null;
    onScreenShot: (screenShot: string) => void;
}

export default function ScreenShot({ screenShot, onScreenShot }: ScreenShotProps) {
    const [isTakingScreenShot, setIsTakingScreenShot] = useState(false);
    
    async function handleScreenShot() {
        const canvas = await html2canvas(document.querySelector('html')!);
        const base64image = canvas.toDataURL("image/png");

        onScreenShot(base64image);
        setIsTakingScreenShot(false)
    }
    if(screenShot) {
        return (
        <button
            type="button"
            className="flex items-end justify-end w-10 h-10 p-1 text-gray-400 transition-colors border-transparent rounded-md hover:text-gray-100"
        >
            <Trash />
        </button>
        )
    }
    return (
        <button
        onClick={handleScreenShot}
        type="button" 
        className="p-2 bg-gray-800 border-transparent rounded-lg transtion-colors transiton-colors focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 hover:bg-purple-300 focus:outline-none">
            { isTakingScreenShot ? <Loading /> :  <Camera className="w-4 h-4" /> }
        </button>
    )
}