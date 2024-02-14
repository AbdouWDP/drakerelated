export default function MobileNav({ title, color }) {
  return (
    <header
      className="mobile-navigation-bar hidden max-md:block"
      style={{ height: "72px" }}
    >
      <nav
        className={`flex justify-center items-center  w-full h-full ${
          color ? "text-black" : "text-white"
        } `}
      >
        <h1 className="font-bold text-lg">{title}</h1>
      </nav>
    </header>
  );
}
