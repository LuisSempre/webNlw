import { ArrowArcLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { Button } from "../../Button";
import ScreenShot from "./ScreenShot";

interface FeedbackTypeProps {
    feedbackType: FeedbackType;
    onFeedbackRes: () => void;
    onFeedbackSent: () => void;
}

export function Content({ onFeedbackSent, feedbackType, onFeedbackRes }: FeedbackTypeProps) {
    const [screenShot, setScreenShot] = useState<string | null>(null);
    const feedbackTypeInfo = feedbackTypes[feedbackType];
    const[comment, setComment] = useState("");

    function handleSubmitFeedback(event: FormEvent) {
        event.preventDefault();
        console.log({
            screenShot,
            comment
        })
        onFeedbackSent();
    }
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
            <form 
            onSubmit={handleSubmitFeedback}
            className="w-full my-4">
                <textarea 
                onChange={event => setComment(event.target.value)}
                className="w-full text-sm text-gray-100 placeholder-gray-600 bg-transparent border-gray-500 rounded-md scrollbar scrollbar-thin scrollbar-thumb-purple-500 min-w-80 min-h-48 focus:border-purple-500"
                    placeholder="Conte-nos..." />

                <footer className="flex gap-2 mt-2">
                    <ScreenShot 
                        screenShot={screenShot}
                        onScreenShot={setScreenShot}
                    />
                    <button
                        disabled={comment.length === 0 }
                        type="submit"
                        className="flex items-center justify-center flex-1 p-2 text-sm bg-purple-500 border-transparent rounded-lg disabled:hover:bg-purple-500 disabled:opacity-50 transiton-colors focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 hover:bg-purple-300 focus:outline-none">

                        Enviar feedback
                    </button>
                </footer>
            </form>
        </>
    )
}