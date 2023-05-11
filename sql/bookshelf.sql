DROP TABLE IF EXISTS bookshelf;

CREATE TABLE bookshelf(
    id INT AUTO_INCREMENT PRIMARY KEY,
    bookcase INT NOT NULL,
    shelf INT NOT NULL,
    title VARCHAR(255),
    -- foreign key (title) references title(id)
);