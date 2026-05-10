# Context Manager handles pulling external data (like MongoDB history or 3rd party APIs)
# Currently integrated directly in chatbot_service and prompt_builder.
# This file is reserved for future advanced agentic workflows (RAG, vector DBs).

def fetch_farm_context(user_id: str) -> dict:
    return {}
