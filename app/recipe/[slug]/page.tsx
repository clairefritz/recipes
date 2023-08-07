import Image from "next/image";
import { getRecipe, getRecipes } from "@/app/api/contentful";

export async function generateStaticParams() {
  const posts = await getRecipes();

  return posts.items.map((post) => ({
    slug: post.sys.id,
  }));
}

export default async function Page({ params }: { params: { slug: String } }) {
  const data = await getRecipe(params.slug);
  const { chef, description, photo, tags, title } = data.fields;

  return (
    <div className="p-3 m-auto max-w-2xl pb-8">
      <h1 className="text-3xl font-bold mb-5">{title}</h1>
      {chef?.fields?.name ? (
        <h4 className="italic mb-5">by {chef.fields.name}</h4>
      ) : (
        ""
      )}
      <Image
        className="mb-5"
        src={`https:${photo.fields.file.url}`}
        width={photo.fields.file.details.image.width}
        height={photo.fields.file.details.image.height}
        alt={`Photo of ${title}`}
      />
      <p className="mb-5">{description}</p>
      <ul className="flex flex-wrap">
        {(tags || []).map((item) => (
          <li
            key={`${item.fields.name}-${item.sys.id}`}
            className="rounded-lg py-1 px-2 mr-2 bg-white/[.1]"
          >
            {item.fields.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
