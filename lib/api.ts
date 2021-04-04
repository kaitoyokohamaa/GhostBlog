const client = require("contentful").createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function fetchEntries() {
  const entries = await client.getEntries({ content_type: "post" });
  return entries.items;
}

export async function fetchBlogEntries(params: string) {
  const entries = await client.getEntries({ content_type: "post" });
  return entries.items
    .map((res) => res.fields)
    .filter((item) => item.ids === params);
}
