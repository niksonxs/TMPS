class BookRepository {
  constructor(database) {
    this.database = database;
  }

  addBook(book) {
    this.database.addBook(book);
  }

  updateBook(book) {
    this.database.updateBook(book);
  }

  deleteBook(book) {
    this.database.deleteBook(book);
  }
}
