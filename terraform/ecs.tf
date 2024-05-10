resource "aws_ecs_cluster" "ef-pf-mod-ecs-cluster" {
  name = "ef-pf-mod-ecs-cluster"
}

resource "aws_ecs_service" "ef-pf-mod-ecs_service" {
  name                   = "ef-pf-mod-ecs_service"
  cluster                = aws_ecs_cluster.ef-pf-mod-ecs-cluster.arn
  launch_type            = "FARGATE"
  enable_execute_command = true

  deployment_maximum_percent         = 200
  deployment_minimum_healthy_percent = 100
  desired_count                      = 1
  task_definition                    = aws_ecs_task_definition.ef-pf-mod-td.arn

  network_configuration {
    assign_public_ip = true
    security_groups  = [aws_security_group.ef-pf-mod-sg.id]
    subnets          = [aws_subnet.ef-pf-mod-sn1.id, aws_subnet.ef-pf-mod-sn2.id, aws_subnet.ef-pf-mod-sn3.id]
  }
}

resource "aws_ecs_task_definition" "ef-pf-mod-td" {
  container_definitions = jsonencode([
    {
      name : "expertfinance"
      image : "<AWS_ACCOUNT_ID>.dkr.ecr.us-east-1.amazonaws.com/ef-pf-mod-repo"
      cpu       = 256
      memory    = 512
      essential = true
      portMappings = [
        {
          containerPort = 80
          hostPort      = 80
        }
      ]
    }
  ])
  family                   = "expertfinance"
  requires_compatibilities = ["FARGATE"]

  cpu                = "256"
  memory             = "512"
  network_mode       = "awsvpc"
  task_role_arn      = "arn:aws:iam::<AWS_ACCOUNT_ID>:role/ecsTaskExecutionRole"
  execution_role_arn = "arn:aws:iam::<AWS_ACCOUNT_ID>:role/ecsTaskExecutionRole"
}
