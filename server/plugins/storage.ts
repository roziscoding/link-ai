import mongoDriver from "unstorage/drivers/mongodb";

export default defineNitroPlugin(() => {
  const storage = useStorage();

  // Dynamically pass in credentials from runtime configuration, or other sources
  const driver = mongoDriver({
    connectionString: useRuntimeConfig().dbUri,
    collectionName: useRuntimeConfig().dbCollection,
    databaseName: useRuntimeConfig().dbName,
  });

  // Mount driver
  storage.mount("links", driver);
});
