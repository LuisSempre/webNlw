import { useState } from "react";
import { Button } from "../Button";
import { Type } from "./Steps/Type";
import { Content } from "./Steps/Content";
import { Success } from "./Steps/Success";

export const feedbackTypes = {
  Problem: {
    title: "Problem",
    icon: "🐛",
  },
  Feature: {
    title: "Feature",
    icon: "📦",
  },
  Improvement: {
    title: "Improvement",
    icon: "🔨",
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function Form() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleResFeedback() {
    setFeedbackSent(false); 
    setFeedbackType(null);
  }

  return (
    <div className="relative flex flex-col items-center w-[calc(100vw-2rem)] p-4 mb-4 bg-gray-800 rounded-lg shadow-lg md:w-auto">
      {feedbackSent ? (
        <Success onFeedbackResResquest={handleResFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <Type onFeedbackType={setFeedbackType} />
          ) : (
            <Content
              feedbackType={feedbackType}
              onFeedbackRes={handleResFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}
      <footer>
        Feito com 💜 por{" "}
        <a className="underline uniderline-offset-2">Luis Lucas</a>
      </footer>
    </div>
  );
}
