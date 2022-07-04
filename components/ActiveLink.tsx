import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties } from "react";

const style: CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
};

interface ActiveLinkProps {
  href: string;
  text: string
}

export const ActiveLink = ({ href, text }: ActiveLinkProps) => {
  const router = useRouter();

  return (
    <Link href={href}>
      <a style={router.route === href ? style : {}}>{text}</a>
    </Link>
  );
};
