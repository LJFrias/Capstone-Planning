DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    title VARCHAR(255),
    -- foreign key (title) references title(id),
    bookshelf VARCHAR(255),
    -- foreign key (bookshelf) references bookshelf(id)

);

INSERT INTO users VALUES(
    null,
    "test",
    "test@test.com",
    "test123"
);