from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_health_check() -> None:
    response = client.get("/health")

    assert response.status_code == 200
    assert response.json() == {
        "status": "healthy",
        "service": "FastAPI Backend",
    }


def test_create_data() -> None:
    response = client.post(
        "/api/v1/data",
        json={"name": "Chen", "message": "Hello from the test suite"},
    )

    assert response.status_code == 200
    assert response.json() == {
        "received": True,
        "preview": "Hello from the test suite",
        "payload": {
            "name": "Chen",
            "message": "Hello from the test suite",
        },
    }
