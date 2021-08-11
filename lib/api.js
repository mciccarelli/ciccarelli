import client, { previewClient } from './sanity';

const getUniquePosts = (posts) => {
  const slugs = new Set();
  return posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false;
    } else {
      slugs.add(post.slug);
      return true;
    }
  });
};

const projectFields = `
  _id,
  body,
  'coverImage': mainImage,
  'date': publishedAt,
  'slug': slug.current,
  title,
  url
`;

const getClient = (preview) => (preview ? previewClient : client);

export async function getPreviewPostBySlug(slug) {
  const data = await getClient(true).fetch(
    `*[_type == "post" && slug.current == $slug] | order(publishedAt desc){
      ${postFields}
    }`,
    { slug }
  );
  return data[0];
}

export async function getAllProjects(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "project"] | order(publishedAt desc){
      ${projectFields}
    }[0...12]`);
  return getUniquePosts(results);
}
