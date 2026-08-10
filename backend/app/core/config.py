from functools import lru_cache
from typing import List
import os


class Settings:
    app_name: str = "Web Application API"
    version: str = "1.0.0"

    @property
    def frontend_url(self) -> str:
        return os.getenv(
            "FRONTEND_URL",
            "https://<your-github-username>.github.io",
        )

    @property
    def allowed_origins(self) -> List[str]:
        return [
            "http://localhost:3000",
            self.frontend_url,
        ]


@lru_cache
def get_settings() -> Settings:
    return Settings()
