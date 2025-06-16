let URLMysql = [
    {
        id: 0,
        name: "Intro",
        slugAwal: "Intro",
        tema: [
            { id: 1, name: "Perkenalan" }
        ]
    },
    {
        id: 1,
        name: "SQL Statements",
        slugAwal: "sql-statements",
        tema: [
            { id: 0, name: "Perkenalan" },
            { id: 1, name: "CREATE", tipe: "DDL" },
            { id: 2, name: "ALTER", tipe: "DDL" },
            { id: 3, name: "DROP", tipe: "DDL" },
            { id: 4, name: "TRUNCATE", tipe: "DDL" },
            { id: 5, name: "INSERT", tipe: "DML" },
            { id: 6, name: "REPLACE", tipe: "DML" },
            { id: 7, name: "MERGE", tipe: "DML" },
            { id: 8, name: "UPDATE", tipe: "DML" },
            { id: 9, name: "DELETE", tipe: "DML" },
            { id: 10, name: "SELECT", tipe: "DML" },
            { id: 11, name: "WHERE", tipe: "DML" },
            { id: 12, name: "ORDER BY", tipe: "DML" },
            { id: 13, name: "LIMIT AND OFFSET", tipe: "DML" },
            { id: 14, name: "DISTINCT", tipe: "DML" },
            { id: 15, name: "IN", tipe: "DML" },
            { id: 16, name: "BETWEEN", tipe: "DML" },
            { id: 17, name: "LIKE", tipe: "DML" },
            { id: 18, name: "IS NULL", tipe: "DML" },
            { id: 19, name: "GROUP BY", tipe: "DML" },
            { id: 20, name: "HAVING", tipe: "DML" },
            { id: 21, name: "ALIAS", tipe: "DML" },
            { id: 22, name: "GRANT", tipe: "DCL" },
            { id: 23, name: "REVOKE", tipe: "DCL" },
            { id: 24, name: "BEGIN", tipe: "TCL" },
            { id: 25, name: "COMMIT", tipe: "TCL" },
            { id: 26, name: "ROLLBACK", tipe: "TCL" },
            { id: 27, name: "SAVEPOINT", tipe: "TCL" },
            { id: 28, name: "DESCRIBE", tipe: "Utility" },
            { id: 29, name: "SHOW", tipe: "Utility" },
            { id: 30, name: "EXPLAIN", tipe: "Utility" },
        ]
    },
    {
        id: 2,
        name: "Relations & Joins",
        slugAwal: "relations-and-joins",
        tema: [
            { id: 0, name: "Perkenalan" },
            { id: 1, name: "INNER JOIN" },
            { id: 2, name: "LEFT JOIN" },
            { id: 3, name: "RIGHT JOIN" },
            { id: 4, name: "UNION" },
            { id: 5, name: "UNION ALL" },
            { id: 6, name: "CROSS JOIN" },
            { id: 7, name: "SELF JOIN" },

        ]
    },
    {
        id: 3,
        name: "Views",
        slugAwal: "views-in-database",
        tema: [
            { id: 0, name: "Perkenalan" },
            { id: 1, name: "CREATE VIEW" },
            { id: 2, name: "ALTER VIEW" },
            { id: 3, name: "DROP VIEW" },
            { id: 4, name: "SELECT FROM VIEW" },
            { id: 5, name: "UPDATE VIEW" }
        ]
    },
    {
        id: 4,
        name: "SQL Scalar Functions",
        slugAwal: "functions-scalar",
        tema: [
            { id: 0, name: "Perkenalan" },
            { id: 1, name: "UPPER()" },
            { id: 2, name: "LOWER()" },
            { id: 3, name: "CONCAT()" },
            { id: 4, name: "SUBSTRING()" },
            { id: 5, name: "LENGTH()" },
            { id: 6, name: "CHARLENGTH()" },
            { id: 7, name: "ROUND()" },
            { id: 8, name: "CEIL()" },
            { id: 9, name: "FLOOR()" },
            { id: 10, name: "MOD()" },
            { id: 11, name: "FORMAT()" },
            { id: 12, name: "NOW()" },
            { id: 13, name: "CURDATE()" },
            { id: 14, name: "DATEDIFF()" },
            { id: 15, name: "DATEFORMAT()" },
            { id: 16, name: "CAST()" },
            { id: 17, name: "CONVERT()" },
            { id: 18, name: "IFNULL()" },
            { id: 19, name: "COALESCE()" },
            { id: 20, name: "IF()" },
            { id: 21, name: "CASE WHEN" }
        ]
    },
    {
        id: 5,
        name: "SQL Aggregate Functions",
        slugAwal: "functions-aggregate",
        tema: [
            { id: 0, name: "Perkenalan" },
            { id: 1, name: "COUNT()" },
            { id: 2, name: "SUM()" },
            { id: 3, name: "AVG()" },
            { id: 4, name: "MIN()" },
            { id: 5, name: "MAX()" }
        ]
    },
    {
        id: 6,
        name: "Triggers",
        slugAwal: "triggers-in-sql",
        tema: [
            { id: 0, name: "Perkenalan" },
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
        name: "Indexes",
        slugAwal: "indexes-in-sql",
        tema: [
            { id: 0, name: "Perkenalan" },
            { id: 1, name: "CREATE INDEX" },
            { id: 2, name: "UNIQUE INDEX" },
            { id: 3, name: "DROP INDEX" },
            { id: 4, name: "SHOW INDEX" },
            { id: 5, name: "COMPOSITE INDEX" }
        ]
    }
];




let URLMongoDB = [
    {
        id : 0,
        name : "Intro",
        slugAwal : 'Intro',
        tema : [
            {
                id : 1, name : "Perkenalan"
            }
        ]
    },  
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
            { id: 3, name: "gt" },
            { id: 4, name: "lt" },
            { id: 5, name: "in" },
            { id: 6, name: "or" },
            { id: 7, name: "and" },
            { id: 8, name: "regex" },
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
