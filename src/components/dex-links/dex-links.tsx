import "./dex-links.css";

import CoinGeckoIcon from "../../icons/coingecko-icon";
import DexScreenerIcon from "../../icons/dexscreener-icon";
import DexToolsIcon from "../../icons/dextools-icon";
import DiscordIcon from "../../icons/discord-icon";
import TelegramIcon from "../../icons/telegram-icon";
import XIcon from "../../icons/x-icon";

const size = 50;

const links: {
  name: string;
  url: string;
  icon?: React.ComponentType;
}[] = [
  {
    name: "X",
    url: "https://x.com/_mindviscosity",
    icon: () => <XIcon width={size} height={size} />,
  },
  {
    name: "Telegram",
    url: "https://t.me/mindviscosity_furie",
    icon: () => <TelegramIcon width={size} height={size} />,
  },
  {
    name: "Discord",
    url: "https://discord.gg/k4p4TvuGNp",
    icon: () => <DiscordIcon width={size} height={size} />,
  },
  {
    name: "DexTools",
    url: "https://www.dextools.io/app/en/hot-pairs",
    icon: () => <DexToolsIcon width={size} height={size} />,
  },
  {
    name: "DexScreener",
    url: "https://dexscreener.com/",
    icon: () => <DexScreenerIcon width={size} height={size} />,
  },
  {
    name: "CoinGecko",
    url: "https://www.coingecko.com/",
    icon: () => <CoinGeckoIcon width={size} height={size} />,
  },
];

export const DexLinks = () => {
  const buttons = links.map((link) => {
    return (
      <div className="link-button">
        <a
          href={link.url}
          key={link.url}
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {link.icon ? <link.icon /> : link.name}
        </a>
      </div>
    );
  });
  return <div className="dex-links desktop">{buttons}</div>;
};
