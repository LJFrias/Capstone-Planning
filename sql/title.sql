DROP TABLE IF EXISTS title;

CREATE TABLE title(
    id INT AUTO_INCREMENT PRIMARY KEY,
    booktitle VARCHAR(255) NOT NULL,
    author_id VARCHAR(255),
    -- foreign key (author) references author(id),
    publisher_id VARCHAR(255),
    -- foreign key (publisher) references publisher(id),
    genre_id VARCHAR(255),
    -- foreign key (genre) references genre(id),
    bookshelf_id VARCHAR(255),
    -- foreign key (bookshelf) references bookshelf(id)
);