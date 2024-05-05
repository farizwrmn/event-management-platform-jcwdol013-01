import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t bg-memphis-mini">
      <div className="flex-center wrapper flex-between flex-col gap-1 text-center sm:flex-row">
        <Link href="/">
          <Image
            src={`/assets/images/footer.png`}
            alt="logoFooter"
            width={119}
            height={38}
            className="border-b border-cyan-400"
          ></Image>
        </Link>
        <p className="text-slate-800">2024 askEvent. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
