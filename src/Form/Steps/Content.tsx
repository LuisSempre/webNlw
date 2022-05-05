import { ArrowArcLeft, Camera } from "phosphor-react";
import { useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { Button } from "../../Button";
import ScreenShot from "./ScreenShot";

interface FeedbackTypeProps {
    feedbackType: FeedbackType;
    onFeedbackRes: () => void;
}

export function Content({ feedbackType, onFeedbackRes }: FeedbackTypeProps) {
    const [screenShot, setScreenShot] = useState<string | null>(null);
    const feedbackTypeInfo = feedbackTypes[feedbackType];
    return (
        <>
            <header>
                <button className="absolute top-5 left-5"
                    onClick={onFeedbackRes}>
                    <ArrowArcLeft className="w-4 h-4 text-gray-400" />
                </button>
                <span className="flex items-center gap-2">
                    <a>{feedbackTypeInfo.icon}</a>
                    {feedbackTypeInfo.title}
                </span>

                <Button />
            </header>
            <form className="w-full my-4">
                <textarea className="w-full text-sm text-gray-100 placeholder-gray-600 bg-transparent border-gray-500 rounded-md scrollbar scrollbar-thin scrollbar-thumb-purple-500 min-w-80 min-h-48 focus:border-purple-500"
                    placeholder="Conte-nos..." />

                <footer className="flex gap-2 mt-2">
                    <ScreenShot 
                        screenShot={screenShot}
                        onScreenShot={setScreenShot}
                    />
                    <button
                        type="submit"
                        className="flex items-center justify-center flex-1 p-2 text-sm bg-purple-500 border-transparent rounded-lg transiton-colors focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 hover:bg-purple-300 focus:outline-none">

                        Enviar feedback
                    </button>
                </footer>
            </form>
        </>
    )
}