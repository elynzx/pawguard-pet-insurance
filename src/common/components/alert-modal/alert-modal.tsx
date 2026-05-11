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
      <div className="bg-white rounded-2xl p-10 max-w-lg w-full text-center space-y-4 shadow-2xl animate-in zoom-in-95 duration-200">

        <div className="flex justify-center">
          {isSuccess ? (
            <CheckCircleIcon size={80} weight="fill" className="text-secondary" />
          ) : (
            <XCircleIcon size={80} weight="fill" className="text-primary" />
          )}
        </div>

        <div className="space-y-4">
          <h3 className="text-3xl font-black text-primary font-heading">
            {title}
          </h3>
          <p className="text-primary/80 font-medium text-lg leading-relaxed">
            {message}
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-xs py-5 text-lg bg-secondary text-white rounded-full font-bold hover:brightness-110 transition-all shadow-lg shadow-secondary/20 active:scale-95"
        >
          Ok
        </button>
      </div>
    </div>
  );
};
