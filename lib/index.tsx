import * as contentful from "contentful";

export const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});
export const getAllPosts = async () => {
  const entries = await client.getEntries({
    content_type: "post",
  });

  if (entries.items) {
    return entries.items;
  }
  console.log(`Error getting .`);
};
