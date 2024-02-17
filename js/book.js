function createBook(data) {
    if (!data.title || !data.pages || !data.author) {
        throw new Error('All properties of book are required');
    }
    const title = data.title;
    const pages = data.pages;
    const author = data.author;
    let isRead = false;
    if (data.read_status && data.read_status == "on") {
        isRead = true;
    }
    return { title, pages, author, isRead };
}

export { createBook };