export default function Container({ children }) {
  return (
    <div className="max-w-[1320px] mx-auto px-6 md:px-10">
      {children}
    </div>
  );
}