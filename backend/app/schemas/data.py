from pydantic import BaseModel, Field


class DataCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    message: str = Field(..., min_length=1, max_length=1000)


class DataResponse(BaseModel):
    received: bool
    preview: str
    payload: DataCreate

