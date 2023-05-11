DROP TABLE IF EXISTS author;

CREATE TABLE author(
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255),
    title VARCHAR(255),
    -- foreign key (title) references title(id)
);