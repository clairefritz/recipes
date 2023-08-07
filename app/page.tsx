import List from "./list";
import { getRecipes } from "./api/contentful";

export default async function Home() {
  const data = await getRecipes();
  return (
    <main className="min-h-screen p-2">
      <List recipes={data.items} />
    </main>
  );
}
