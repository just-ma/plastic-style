Install PostgreSQL
https://www.postgresql.org/

Create a database/reviews table.
Set up your connection string using user, password, and database name in config.py

CREATE TABLE review (
    serialId      SERIAL PRIMARY KEY,
    id            varchar(80),
    artist        varchar(80),
    title         varchar(80),
    author        varchar(80),
    src           varchar(80),
    content       varchar(80),
    recordLabel   varchar(80)
    createdat     date,
    modifiedat    date
);

Create and activate your python virtual environment from inside api directory.

python3 -m venv venv

source venv/bin/activate

Install dependencies.

pip install -r requirements.txt

Configure and run app.

export FLASK_APP=review_resource && flask run
