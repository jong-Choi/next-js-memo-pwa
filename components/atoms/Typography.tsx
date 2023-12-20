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
}: React.PropsWithChildren<{
  type?: "content" | "bottom" | "index" | "indexMonth";
}>) => {
  let style;

  switch (type) {
    case "content": {
      style = "";
      break;
    }
    case "indexMonth":
      style = `text-xs ${preahvihear.className}`;
      break;

    case "index":
      style = `text-lg ${notoSerif.className}`;
      break;

    case "bottom":
      style = `text-xl -tracking-widest ${shareTechMono.className}`;
      break;

    default:
      style = "";
      break;
  }

  return <div className={style}>{children}</div>;
};

export default Typography;
