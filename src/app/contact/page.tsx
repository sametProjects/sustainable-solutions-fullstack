const Contact: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-[80vh]">
      <form className="p-8 rounded border border-content shadow-md w-full max-w-md space-y-6">
        <h1 className="text-2xl font-bold text-center mb-4">İletişim</h1>
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            İsim
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-transparent border border-content rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            E-posta
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-transparent border border-content rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-surface py-2 rounded transition"
        >
          Gönder
        </button>
      </form>
    </div>
  );
};

export default Contact;