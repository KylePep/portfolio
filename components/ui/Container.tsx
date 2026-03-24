type SectionProps = {
  children: React.ReactNode;
  background?: string;
  id?: string;
};

export default function Container({ children, background = "bg-primary-1050", id }: SectionProps) {
  return (
    <div id={id} className={`flex border-2 border-sky-950/50 p-4 rounded-xl bg-[radial-gradient(circle_at_15%_25%,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_75%_20%,rgba(126,61,255,0.08),transparent_45%),radial-gradient(circle_at_60%_80%,rgba(0,200,255,0.06),transparent_50%),radial-gradient(circle_at_30%_70%,rgba(255,0,150,0.05),transparent_45%)] ${background}`}>
      {children}
    </div>
  );
}