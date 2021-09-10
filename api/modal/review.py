from sqlalchemy import Column, String, Date, Integer
from sqlalchemy.ext.declarative import declarative_base
base = declarative_base()

class Review(base):
  __tablename__ = 'reviews'

  id = Column(String)
  artist = Column(String)
  title = Column(String)
  author = Column(String)
  src = Column(String)
  content = Column(String)
  createdat = Column(Date)
  modifiedat = Column(Date)
  recordLabel = Column(String)
  serialid = Column(Integer, primary_key=True)

  def as_dict(self):
    return {c.name: str(getattr(self, c.name)) for c in self.__table__.columns}
