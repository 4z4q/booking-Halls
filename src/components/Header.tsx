import Link from "next/link";

const Header = () => {
  return (
    <header className="my-10 flex justify-between gap-5">
      <Link href={"/"}>Book App</Link>

      <ul className="flex flex-row items-center gap-8">
        <li>
          <Link href={"/login"} className="mt-10 hover:text-primary">
            library
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
