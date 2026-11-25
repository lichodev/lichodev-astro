import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE } from "@/consts";
import { es } from "@/i18n/es";

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: SITE_TITLE,
    description: es.meta.description,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.id}/`,
    })),
  });
}
