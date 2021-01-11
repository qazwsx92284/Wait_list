CREATE TABLE users ( 
    name VARCHAR(255),
    email VARCHAR(255) PRIMARY KEY, 
    created_at TIMESTAMP DEFAULT NOW()
    );
    
INSERT INTO users (name, email) VALUES ('David', 'What days are you open?');