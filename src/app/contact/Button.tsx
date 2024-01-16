import { useFormStatus } from "react-dom";
import { ClipLoader } from "react-spinners";

const Button = () => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="w-full px-4 py-2 bg-slate-900 rounded text-white hover:scale-[1.01] uppercase flex items-center justify-center space-x-5"
    >
      <span>{pending ? "Please wait..." : "Send message"}</span>

      {pending && <ClipLoader color="#fff" size={20} loading={pending} />}
    </button>
  );
};

export default Button;
