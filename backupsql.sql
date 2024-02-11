CREATE TABLE users(
	userid SERIAL PRIMARY KEY,
	username TEXT,
	email TEXT,
	password TEXT
);

CREATE TABLE documents(
	documentid SERIAL PRIMARY KEY,
	documenttitle TEXT,
	documentowner INT REFERENCES users(userid) ON DELETE CASCADE
);

CREATE TABLE chapters(
	chapterid SERIAL PRIMARY KEY,
	chapternumber INT,
	chapterdocument INT REFERENCES documents(documentid) ON DELETE CASCADE
);

CREATE TABLE pages(
	pagenumber SERIAL PRIMARY KEY,
	pagetext TEXT,
	publishedpagetext TEXT,
	pagechapter INT REFERENCES chapters(chapterid) ON DELETE CASCADE, 
	pagedocument INT REFERENCES documents(documentid) ON DELETE CASCADE
);

CREATE TABLE user_session (
    id TEXT PRIMARY KEY,
    expires_at TIMESTAMPTZ NOT NULL,
    user_id INT REFERENCES users(userid)
);