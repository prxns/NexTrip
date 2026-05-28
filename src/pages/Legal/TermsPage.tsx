function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-6xl font-black text-slate-900">
          Terms of Service
        </h1>

        <div className="mt-10 rounded-[32px] bg-white p-10 shadow-xl">
          <p className="text-lg leading-9 text-slate-600">
            By using NexTrip, users agree to our platform
            policies, booking conditions, cancellation rules,
            and payment terms.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TermsPage;