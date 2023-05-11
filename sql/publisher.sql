DROP TABLE IF EXISTS publisher;

CREATE TABLE publisher(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    author VARCHAR(255),
    -- foreign key (author) references author(id),
    title VARCHAR(255),
    -- foreign key (title) references title(id)
);