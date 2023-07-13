import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

// Create a book table
const booksTable = new aws.dynamodb.Table("booksTable", {
    name: "Book",
    attributes: [{
        name: "id",
        type: "S",
    }],
    hashKey: "id",
    billingMode: "PAY_PER_REQUEST",
});

// Create a book entries table
const bookEntriesTable = new aws.dynamodb.Table("bookEntriesTable", {
    name: "BookEntry",
    attributes: [{
        name: "entryId",
        type: "S",
    }],
    hashKey: "entryId",
    billingMode: "PAY_PER_REQUEST",
});

// Create an S3 bucket
const bookFilesBucket = new aws.s3.Bucket("bookFiles");

// Export the names of the resources
export const booksTableName = booksTable.name;
export const bookEntriesTableName = bookEntriesTable.name;
export const bookFilesBucketName = bookFilesBucket.id;
