import { Client, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint(process.env.REACT_APP_APPWRITE_ENDPOINT! as string)
  .setProject(process.env.REACT_APP_APPWRITE_PROJECT! as string);

export const databases = new Databases(client);
