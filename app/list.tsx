import Image from "next/image";
import Link from "next/link";

export default function List({ recipes }) {
  return (
    <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {recipes.map((item) => (
        <article key={item.sys.id} className="p-1">
          <Link
            href={`/recipe/${encodeURIComponent(item.sys.id)}`}
            className="hover:bg-white/[.1] p-3 rounded transition-all block"
          >
            <Image
              src={`https:${item.fields.photo.fields.file.url}`}
              width={item.fields.photo.fields.file.details.image.width}
              height={item.fields.photo.fields.file.details.image.height}
              alt={`Photo of ${item.fields.title}`}
            />
            <h2 className="font-bold mt-1">{item.fields.title}</h2>
          </Link>
        </article>
      ))}
    </div>
  );
}
