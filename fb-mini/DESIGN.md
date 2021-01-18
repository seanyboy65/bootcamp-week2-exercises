Users: user id (primary key)
    firstname (string)
    lastname(string)
    DOB (timestamp/date object)
    password(string for now but should probably hash)
    bio(string)
Post: user_id(foreign key referencing users table)
    text(string)
    date(timestamp)
    likes(number)
Friends: requestor_id (foreign key references users)
    requested_id("")
    status(string)
Possible things to add:
    Likes table referencing posts(add post id) and users delieating who has liked which post
    comments table referencing posts, users, and containing a string with the text