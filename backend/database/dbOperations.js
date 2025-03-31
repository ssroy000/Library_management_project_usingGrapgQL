import fs from "fs";
import path from "path";

const dbPath = path.resolve("./database/db.json");

const readDB = () => {
    if (!fs.existsSync(dbPath)) {
        fs.writeFileSync(dbPath, JSON.stringify({ books: [], authors: [] }, null, 2));
    }
    return JSON.parse(fs.readFileSync(dbPath, "utf-8"));
};

const writeDB = (data) => {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), "utf-8");
};

export const getBooks = () => readDB().books;

export const getAuthors = () => readDB().authors;

export const addBook = (book) => {
    const db = readDB();
    db.books.push(book);
    writeDB(db);
    return book;
};

export const addAuthor = (author) => {
    const db = readDB();
    db.authors.push(author);
    writeDB(db);
    return author;
};
