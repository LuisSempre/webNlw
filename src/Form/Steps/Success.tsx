import { Button } from "../../Button";

interface onFeedbackResResquestProps {
    onFeedbackResResquest: () => void;
}

export function Success({ onFeedbackResResquest }: onFeedbackResResquestProps) {
  return (
    <>
      <header>
        <Button />
      </header>
      <div className="flex flex-col items-center justify-center py-10 w-72">
        <div>✅</div>
        <span className="mt-2 text-xl">Agradecemos o feedback</span>
        <button 
        onClick={onFeedbackResResquest}
        className="px-3 py-2 mt-2 text-sm leading-6 transition-colors bg-gray-800 border-transparent rounded-md hover:bg-gray-600">
          Quero enviar outro
        </button>
      </div>
    </>
  );
}
