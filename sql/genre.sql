DROP TABLE IF EXISTS genre;

CREATE TABLE genre(
    id INT AUTO_INCREMENT PRIMARY KEY,
    genre VARCHAR(255),
    author VARCHAR(255),
    -- foreign key (author) references author(id)
);