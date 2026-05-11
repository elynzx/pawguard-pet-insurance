import { CheckCircleIcon, XCircleIcon } from "@phosphor-icons/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  type: "success" | "error";
  title: string;
  message: string;
}

export const AlertModal = ({ isOpen, onClose, type, title, message }: Props) => {
  if (!isOpen) return null;

  const isSuccess = type === 'success';

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-fade-in">
      <div className="bg-white rounded-3xl p-10 max-w-sm w-full text-center space-y-6 shadow-2xl animate-in zoom-in-95 duration-200">

        <div className="flex justify-center">
          {isSuccess ? (
            <CheckCircleIcon size={80} weight="fill" className="text-secondary" />
          ) : (
            <XCircleIcon size={80} weight="fill" className="text-primary" />
          )}
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-black text-primary font-heading leading-tight">
            {title}
          </h3>
          <p className="text-primary/50 font-medium leading-relaxed">
            {message}
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full py-4 bg-secondary text-white rounded-full font-bold hover:brightness-110 transition-all shadow-lg shadow-secondary/20 active:scale-95"
        >
          Ok
        </button>
      </div>
    </div>
  );
};
