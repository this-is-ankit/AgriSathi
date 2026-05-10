def test_weather_summary(client):
    response = client.get("/api/v1/weather/current?lat=28.7&lon=77.1")
    assert response.status_code == 200
    data = response.json()
    assert data["success"] is True
    assert "data" in data
    assert "current" in data["data"]
    assert isinstance(data["data"]["current"]["condition"], str)

def test_community_posts_get(client):
    response = client.get("/api/v1/community/feed")
    assert response.status_code == 200
    data = response.json()
    assert data["success"] is True
    assert isinstance(data["data"]["posts"], list)

def test_chatbot_ask(client):
    response = client.post("/api/v1/chatbot/message", json={"message": "How do I water tomatoes?"})
    assert response.status_code == 200
    data = response.json()
    assert data["success"] is True
    assert "reply" in data["data"]
