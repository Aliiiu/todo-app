export default function Container({ children }) {
  return (
    <section
      className={`flex flex-col justify-between max-w-3xl mx-auto px-6 py-10 sm:py-16`}
    >
      {children}
    </section>
  );
}