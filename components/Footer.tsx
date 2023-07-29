import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/constants";

type Props = {
  links: Array<string>;
  title: string;
};

const FooterColumn = ({ links, title }: Props) => (
  <div className="footer_column">
    <h4 className="font-semibold">{title}</h4>
    <ul className="flex flex-col gap-2 font-normal">
      {links.map((link) => (
        <Link
          href={"/"}
          key={link}
          className="hover:text-blue-500 duration-500"
        >
          {link}
        </Link>
      ))}
    </ul>
  </div>
);

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <footer className="mt-auto flexStart footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
          <Link href={"/"}>
            <Image
              src={"/footer.png"}
              width={115}
              height={43}
              alt="Logo"
              className="h-auto w-auto object-contain"
            />
          </Link>
          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            KipDev, your go-to web developer freelancer for top-notch website
            solutions. Boost your online presence with SEO-friendly designs and
            expertly crafted code. Let's elevate your brand together!
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          <FooterColumn
            title={footerLinks[0].title}
            links={footerLinks[0].links}
          />
          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn
              title={footerLinks[1].title}
              links={footerLinks[1].links}
            />
            <FooterColumn
              title={footerLinks[2].title}
              links={footerLinks[2].links}
            />
          </div>
          <FooterColumn
            title={footerLinks[3].title}
            links={footerLinks[3].links}
          />
          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn
              title={footerLinks[4].title}
              links={footerLinks[4].links}
            />
            <FooterColumn
              title={footerLinks[5].title}
              links={footerLinks[5].links}
            />
          </div>
          <FooterColumn
            title={footerLinks[6].title}
            links={footerLinks[6].links}
          />
        </div>
      </div>
      <div className="flexBetween footer_copyright border-t-[1px] pt-2 border-gray-50">
        <p>&copy; {year} KipDEV. All rights reserved.</p>
        <p className="text-gray">
            <span className="text-black font-semibold">200</span> Projects done.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
