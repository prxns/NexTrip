import { Link } from "react-router-dom";

type ComingSoonPageProps = {
  title: string;
  description: string;
};

function ComingSoonPage({
  title,
  description,
}: ComingSoonPageProps) {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto flex min-h-[80vh] max-w-7xl items-center justify-center px-6">
        <div className="w-full max-w-3xl rounded-[40px] bg-white p-14 text-center shadow-xl">
          <div className="text-7xl">🚀</div>

          <p className="mt-8 text-sm font-bold uppercase tracking-[5px] text-[#14B8A6]">
            Launching Soon
          </p>

          <h1 className="mt-4 text-6xl font-black text-slate-900">
            {title}
          </h1>

          <p className="mt-6 text-xl leading-9 text-slate-500">
            {description}
          </p>

          <div className="mt-10 rounded-3xl bg-slate-100 p-6">
            <p className="font-semibold text-slate-600">
              This feature is currently under development and
              will be available in a future release.
            </p>
          </div>

          <Link to="/">
            <button
              className="
                mt-10
                h-16
                rounded-2xl
                bg-gradient-to-r
                from-[#2563EB]
                to-[#14B8A6]
                px-10
                text-lg
                font-bold
                text-white
                shadow-xl
                transition-all
                duration-300
                hover:scale-[1.03]
              "
            >
              Back To Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ComingSoonPage;