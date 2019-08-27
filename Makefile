ECS?= -f docker-compose.ecs.yaml
HUB?= -f docker-compose.hub.yaml
TEST?= -f docker-compose.test.yaml

build:
	docker-compose $(HUB) $(ECS) $(TEST) build

up:
	docker-compose $(HUB) $(ECS) up -d

test:
	docker-compose $(HUB) $(ECS) $(TEST) run test

down:
	docker-compose $(HUB) $(ECS) down

env:
	docker-compose $(ECS) up -d
