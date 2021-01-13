CREATE TABLE messages ( 
    name VARCHAR(255),
    email VARCHAR(255),
    msg TEXT,
    created_at TIMESTAMP DEFAULT NOW()
    );
    
INSERT INTO messages (name, email, msg) VALUES ('Jordan', 'example@gmail.com', 'hi how are you');