using Typesense;

namespace SearchService.Data;

public static class SearchInitializer
{
    public static async Task EnsureIndexExists(ITypesenseClient client)
    {
        const string schemaName = "questions";
        try
        {
            await client.RetrieveCollection(schemaName);
            Console.WriteLine($"Collection {schemaName} has been created already.");
            return;
        }
        catch (TypesenseApiNotFoundException)
        {
            Console.WriteLine($"Collection {schemaName} has not been created already.");
        }
        
        var schema = new Schema(schemaName, new List<Field>()
            {
                new Field("id", FieldType.String),
                new Field("title", FieldType.String),
                new Field("content", FieldType.String),
                new Field("tags", FieldType.StringArray),
                new Field("createdAt", FieldType.Int64),
                new Field("answerCount", FieldType.Int32),
                new Field("hasAcceptedAnswer", FieldType.Bool),
            }
        )
        {
            DefaultSortingField = "createdAt"
        };

        await client.CreateCollection(schema);
        Console.WriteLine($"Collection {schemaName} has been created.");

    }
}