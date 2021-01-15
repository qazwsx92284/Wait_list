# DROP TABLE messages;
# CREATE TABLE messages (
#     id INT AUTO_INCREMENT PRIMARY KEY,
#     name VARCHAR(255),
#     email VARCHAR(255),
#     msg TEXT,
#     created_at TIMESTAMP DEFAULT NOW()
#     );
    
# INSERT INTO messages (name, email, msg) VALUES ('Jordan', 'example@gmail.com', 'hi how are you');

DELIMITER $$

CREATE TRIGGER block_duplicated_msg

     BEFORE INSERT ON messages FOR EACH ROW

     BEGIN

          IF (NEW.email = OLD.email) AND (NEW.msg = OLD.msg)

          THEN

               SIGNAL SQLSTATE '45000'

                    SET MESSAGE_TEXT = 'There is the same message you sent';

          END IF;

     END;

$$
DELIMITER ;