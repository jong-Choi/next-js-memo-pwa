import {
  Preahvihear,
  Noto_Serif,
  Share_Tech_Mono,
  Chakra_Petch,
} from "next/font/google";

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

const chakraPetch = Chakra_Petch({
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
      style = "";
      break;
    }
    case "indexMonth":
      style = `text-sm ${preahvihear.className}`;
      break;

    case "index":
      style = `text-xl ${notoSerif.className}`;
      break;

    case "bottom":
      style = `text-xl -tracking-widest ${shareTechMono.className}`;
      break;

    default:
      style = "";
      break;
  }

  return <div className={style + className}>{children}</div>;
};

export default Typography;
