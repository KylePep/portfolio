export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-6 py-2 rounded-full btn glass border border-white/20">
      {children}
    </button>
  );
}