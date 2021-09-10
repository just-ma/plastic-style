from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine
from api import config
from api.modal.review import Review

db = create_engine(config.SQLALCHEMY_DATABASE_URI)
Session = sessionmaker(db)
session = Session()

def select_all_reviews() -> list[Review]:
  return session.query(Review)

def select_review(id) -> Review:
  return session.query(Review).get(id)
