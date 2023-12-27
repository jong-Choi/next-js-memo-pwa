import { Preahvihear, Noto_Serif, Share_Tech_Mono } from "next/font/google";

const preahvihear = Preahvihear({
  weight: "400",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  weight: "700",
  subsets: ["latin"],
});

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
});

const Typography = ({
  children,
  type = "content",
  className = "",
}: React.PropsWithChildren<{
  type?: "content" | "bottom" | "index" | "indexMonth";
  className?: string;
}>) => {
  let style;

  switch (type) {
    case "content": {
      style = "text-[14px] leading-5";
      break;
    }
    case "indexMonth":
      style = `text-[12px] ${preahvihear.className}`;
      break;

    case "index":
      style = `text-[20px] ${notoSerif.className}`;
      break;

    case "bottom":
      style = `text-[20px] -tracking-[.1em] ${shareTechMono.className}`;
      break;

    default:
      style = "";
      break;
  }

  return <div className={style + " " + className}>{children}</div>;
};

export default Typography;
