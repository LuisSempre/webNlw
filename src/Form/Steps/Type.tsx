import { FeedbackType, feedbackTypes } from "..";
import { Button } from "../../Button";

interface FeedbackTypeProps {
    onFeedbackType: (type: FeedbackType) => void;
}

export function Type({ onFeedbackType }: FeedbackTypeProps) {
    return (
        <>
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>
                <Button />
            </header>
            <div className="flex w-full gap-2 py-8">
                {Object.entries(feedbackTypes).map(([key, value]) => {
                    console.log(key, value);
                    return (
                        <button
                            onClick={() => onFeedbackType(key as FeedbackType)}
                            key={key}
                            className="flex flex-col items-center justify-center flex-1 w-24 gap-2 py-5 bg-gray-700 border-2 border-transparent rounded-lg hover:border-purple-500 hover:text-white focus:outline-none"
                        >
                            <span>{value.icon}</span>
                            <span>{value.title}</span>
                        </button>
                    )
                })}
            </div>
        </>
    )
}