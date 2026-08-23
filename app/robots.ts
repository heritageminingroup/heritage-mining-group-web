import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://heritage-mining-group.lucianofugazzotto.chatgpt.site/sitemap.xml",
  };
}
