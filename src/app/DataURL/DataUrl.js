let URLMysql = [
    {
        id: 1,
        name: "SQL Commands",
        slugAwal : "sql-commands",
        tema: [
            { id: 1, name: "CREATE", tipe: "Data Definition Language (DDL)" },
            { id: 2, name: "ALTER", tipe: "Data Definition Language (DDL)" },
            { id: 3, name: "DROP", tipe: "Data Definition Language (DDL)" },
            { id: 4, name: "TRUNCATE", tipe: "Data Definition Language (DDL)" },
            { id: 5, name: "INSERT", tipe: "Data Manipulation Language (DML)" },
            { id: 6, name: "UPDATE", tipe: "Data Manipulation Language (DML)" },
            { id: 7, name: "DELETE", tipe: "Data Manipulation Language (DML)" },
            { id: 8, name: "SELECT", tipe: "Data Manipulation Language (DML)" },
            { id: 9, name: "WHERE", tipe: "Data Manipulation Language (DML)" },
            { id: 10, name: "ORDER BY", tipe: "Data Manipulation Language (DML)" },
            { id: 11, name: "LIMIT AND OFFSET", tipe: "Data Manipulation Language (DML)" },
            { id: 12, name: "DISTINCT", tipe: "Data Manipulation Language (DML)" },
            { id: 13, name: "IN", tipe: "Data Manipulation Language (DML)" },
            { id: 14, name: "BETWEEN", tipe: "Data Manipulation Language (DML)" },
            { id: 15, name: "LIKE", tipe: "Data Manipulation Language (DML)" },
            { id: 16, name: "IS NULL", tipe: "Data Manipulation Language (DML)" },
            { id: 17, name: "GROUP BY", tipe: "Data Manipulation Language (DML)" },
            { id: 18, name: "HAVING", tipe: "Data Manipulation Language (DML)" },
            { id: 19, name: "ALIAS", tipe: "Data Manipulation Language (DML)" },
            { id: 20, name: "GRANT", tipe: "Data Control Language (DCL)" },
            { id: 21, name: "REVOKE", tipe: "Data Control Language (DCL)" },
            { id: 22, name: "BEGIN", tipe: "Transaction Control Language (TCL)" },
            { id: 23, name: "COMMIT", tipe: "Transaction Control Language (TCL)" },
            { id: 24, name: "ROLLBACK", tipe: "Transaction Control Language (TCL)" },
            { id: 25, name: "SAVEPOINT", tipe: "Transaction Control Language (TCL)" }
        ]
    },
    {
        id: 2,
        name: "Joins in Database",
        slugAwal: "joins-in-database",
        tema: [
            { id: 1, name: "INNER JOIN" },
            { id: 2, name: "LEFT JOIN" },
            { id: 3, name: "RIGHT JOIN" },
            { id: 4, name: "UNION" },
            { id: 5, name: "CROSS JOIN" },
            { id: 6, name: "SELF JOIN" }
        ]
    },
    {
        id: 3,
        name: "Views in Database",
        slugAwal: "views-in-database",
        tema: [
            { id: 1, name: "CREATE VIEW" },
            { id: 2, name: "ALTER VIEW" },
            { id: 3, name: "DROP VIEW" },
            { id: 4, name: "SELECT FROM VIEW" },
            { id: 5, name: "UPDATE VIEW" }
        ]
    },
    {
        id: 4,
        name: "Functions in SQL-Single Row Functions",
        slugAwal: "functions-single-row-functions",
        tema: [
            { id: 1, name: "UPPER()", tipe: "String Function" },
            { id: 2, name: "LOWER()", tipe: "String Function" },
            { id: 3, name: "CONCAT()", tipe: "String Function" },
            { id: 4, name: "SUBSTRING()", tipe: "String Function" },
            { id: 5, name: "ROUND()", tipe: "Numeric Function" },
            { id: 6, name: "CEIL()", tipe: "Numeric Function" },
            { id: 7, name: "FLOOR()", tipe: "Numeric Function" },
            { id: 8, name: "MOD()", tipe: "Numeric Function" },
            { id: 9, name: "NOW()", tipe: "Date Function" },
            { id: 10, name: "CURDATE()", tipe: "Date Function" },
            { id: 11, name: "DATEDIFF()", tipe: "Date Function" },
            { id: 12, name: "DATE_FORMAT()", tipe: "Date Function" },
            { id: 13, name: "CAST()", tipe: "Conversion Function" },
            { id: 14, name: "CONVERT()", tipe: "Conversion Function" }
        ]
    },
    {
        id: 5,
        name: "Functions in SQL-Aggregate (Multi Row Functions)",
        slugAwal: "functions-multi-row-functions",
        tema: [
            { id: 1, name: "COUNT()" },
            { id: 2, name: "SUM()" },
            { id: 3, name: "AVG()" },
            { id: 4, name: "MIN()" },
            { id: 5, name: "MAX()" }
        ]
    },
    {
        id: 6,
        name: "Triggers in SQL",
        slugAwal: "triggers-in-sql",
        tema: [
            { id: 1, name: "CREATE TRIGGER" },
            { id: 2, name: "BEFORE INSERT" },
            { id: 3, name: "AFTER INSERT" },
            { id: 4, name: "BEFORE UPDATE" },
            { id: 5, name: "AFTER UPDATE" },
            { id: 6, name: "BEFORE DELETE" },
            { id: 7, name: "AFTER DELETE" }
        ]
    },
    {
        id: 7,
        name: "Indexes in SQL",
        slugAwal: "indexes-in-sql",
        tema: [
            { id: 1, name: "CREATE INDEX" },
            { id: 2, name: "UNIQUE INDEX" },
            { id: 3, name: "DROP INDEX" },
            { id: 4, name: "SHOW INDEX" },
            { id: 5, name: "COMPOSITE INDEX" }
        ]
    }
];



let URLMongoDB = [
    { id: 1, slugAwal:"dbms-mongodb" , name: "DBMS MongoDB" },
    { id: 2, name: "Database", slugAwal: "database" },
    { id: 3, name: "Collection", slugAwal: "collection" },
    {
        id: 4,
        name: "Insert Document",
        slugAwal: "insert-document",
        tema: [
            { id: 1, name: "insertOne()" },
            { id: 2, name: "insertMany()" }
        ]
    },
    {
        id: 5,
        name: "Query Document",
        slugAwal: "query-document",
        tema: [
            { id: 1, name: "find()" },
            { id: 2, name: "find with filter" },
            { id: 3, name: "$gt" },
            { id: 4, name: "$lt" },
            { id: 5, name: "$in" },
            { id: 6, name: "$or" },
            { id: 7, name: "$and" },
            { id: 8, name: "$regex" },
            { id: 9, name: "sort()" },
            { id: 10, name: "limit()" },
            { id: 11, name: "skip()" },
            { id: 12, name: "projection" }
        ]
    },
    {
        id: 6,
        name: "Update Document",
        slugAwal: "update-document",
        tema: [
            { id: 1, name: "updateOne()" },
            { id: 2, name: "updateMany()" },
            { id: 3, name: "set" },
            { id: 4, name: "unset" },
            { id: 5, name: "inc" },
            { id: 6, name: "push" },
            { id: 7, name: "pull" },
            { id: 8, name: "addToSet" },
        ]
    },
    {
        id: 7,
        name: "Delete Document",
        slugAwal: "delete-document",
        tema: [
            { id: 1, name: "deleteOne()" },
            { id: 2, name: "deleteMany()" }
        ]
    },
    {
        id: 8,
        name: "Index",
        slugAwal: "index",
        tema: [
            { id: 1, name: "createIndex()" },
            { id: 2, name: "text index" },
            { id: 3, name: "compound index" },
            { id: 4, name: "dropIndex()" },
            { id: 5, name: "explain() for analysis" }
        ]
    }
];

export {
    URLMysql,
    URLMongoDB
};
