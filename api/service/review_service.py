import json
from api.data import review_dao



def get_reviews() -> str:
    return json.dumps(
        [result.as_dict() for result in review_dao.select_all_reviews()]
    )


def get_review(id) -> str:
    return json.dumps(review_dao.select_review(id).as_dict())
