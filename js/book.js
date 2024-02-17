function Book(data) {
    if (!data.title || !data.pages || !data.author) {
        throw new Error('All properties of book are required');
    }
    this.title = data.title;
    this.pages = data.pages;
    this.author = data.author;
    this.isRead = false;
    if (data.read_status && data.read_status == "on") {
        this.isRead = true;
    }
}

export { Book };