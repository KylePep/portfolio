type SectionProps = {
  children: React.ReactNode;
  background?: string;
  id?: string;
};

export default function Section({ children, background = "bg-primary-1050", id }: SectionProps) {
  return (
    <section id={id} className={`py-24 px-6 ${background}`} tabIndex={-1}>
      <div className="mx-auto px-4 max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        {children}
      </div>
    </section>
  );
}


