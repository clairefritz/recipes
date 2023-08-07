const contentful = require("contentful");

const contentfulSpaceId = "kk2bw5ojx476";
const contentfulEnv = "master";
const contentfulAccessToken =
  "7ac531648a1b5e1dab6c18b0979f822a5aad0fe5f1109829b8a197eb2be4b84c";
const contentType = "recipe";

const client = contentful.createClient({
  space: contentfulSpaceId,
  accessToken: contentfulAccessToken,
  environment: contentfulEnv,
});

type Sys = any;
type Tags = [{ fields: { name: String } }];
type Metadata = { tags: Tags };

type Fields = {
  title: String;
  description: String;
  photo: Photo;
  tags: Tags;
  chef: any;
};

type Photo = {
  sys: Sys;
  fields: {
    title: String;
    file: {
      url: String;
      details: { image: { width: number; height: number } };
    };
  };
};

type Entry = {
  metadata: Metadata;
  fields: Fields;
  photo: Photo;
  chef: any;
  calories: number;
  sys: Sys;
};

type Entries = {
  total: number;
  skip: number;
  limit: number;
  items: [Entry];
};

export const getRecipes = async (): Promise<Entries> =>
  client
    .getEntries({ content_type: contentType })
    .then((entries: Entries) => entries)
    .catch((err) => console.log(err));

export const getRecipe = async (id: String): Promise<Entry> =>
  client
    .getEntry(id)
    .then((entry: Entry) => entry)
    .catch((err) => console.log(err));
