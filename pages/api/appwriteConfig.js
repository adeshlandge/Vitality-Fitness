import { Client, Account, Databases } from "appwrite";

const client = new Client();

console.log(
  "REACT_APP_APPWRITE_API_KEY___Adeshhs==>"+
  process.env.REACT_APP_APPWRITE_API_KEY 
);
// Set the endpoint URL and project ID for the client
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6548624c9ad91f04df35");

// Create a new account instance using the client
export const account = new Account(client);

// Create a new databases instance using the client and database ID
export const databases = new Databases(client, "6548675b3257d27fc14e");
