from fastapi import APIRouter

from app.schemas.data import DataCreate, DataResponse

router = APIRouter(prefix="/api/v1", tags=["data"])


@router.post("/data", response_model=DataResponse)
def create_data(payload: DataCreate) -> DataResponse:
    preview = payload.message[:80]
    return DataResponse(received=True, preview=preview, payload=payload)

