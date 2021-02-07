//contentfulの設定

export const client = require("contentful").createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});
//全ての記事の獲得
export const getAllPosts = async () => {
  const entries = await client.getEntries({
    content_type: "post",
  });

  if (entries.items) {
    return entries.items;
  }
  console.log(`Error getting .`);
};
//idの獲得
export async function getPostByIds(ids: string) {
  const entries = await client.getEntries({
    content_type: "post",
    limit: 1,
    "fields.ids[in]": ids,
  });

  if (entries.items) {
    return entries.items[0];
  }
}
function parsePostIds({ fields }) {
  return {
    ids: fields.ids,
  };
}

function parsePostIdsEntries(entries, cb = parsePostIds) {
  return entries?.items?.map(cb);
}

export async function getAllPostsWithIds() {
  const entries = await client.getEntries({
    content_type: "post",
    select: "fields.ids",
  });

  return parsePostIdsEntries(entries, (post) => post.fields);
}
