resource "aws_vpc" "ef-pf-mod-vpc" {
  cidr_block           = "10.0.0.0/16"
  instance_tenancy     = "default"
  enable_dns_hostnames = true
  tags = {
    "Name" : "ef-pf-mod-vpc"
    "Component" = "ef-pf-mod"
  }
}

resource "aws_subnet" "ef-pf-mod-sn1" {
  cidr_block              = "10.0.1.0/24"
  vpc_id                  = aws_vpc.ef-pf-mod-vpc.id
  availability_zone       = "us-east-1a"
  map_public_ip_on_launch = true
  tags = {
    "Name" : "ef-pf-mod-sn1"
  }
}

resource "aws_subnet" "ef-pf-mod-sn2" {
  cidr_block              = "10.0.2.0/24"
  vpc_id                  = aws_vpc.ef-pf-mod-vpc.id
  availability_zone       = "us-east-1b"
  map_public_ip_on_launch = true
  tags = {
    "Name" : "ef-pf-mod-sn2"
  }
}

resource "aws_subnet" "ef-pf-mod-sn3" {
  cidr_block              = "10.0.3.0/24"
  vpc_id                  = aws_vpc.ef-pf-mod-vpc.id
  availability_zone       = "us-east-1c"
  map_public_ip_on_launch = true
  tags = {
    "Name" : "ef-pf-mod-sn3"
  }
}

resource "aws_security_group" "ef-pf-mod-sg" {
  name   = "ef-pf-mod-sg"
  vpc_id = aws_vpc.ef-pf-mod-vpc.id

  ingress {
    description = "https"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "http"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_internet_gateway" "ef-pf-mod-igw" {
  vpc_id = aws_vpc.ef-pf-mod-vpc.id
}

resource "aws_route_table" "ef-pf-mod-rtbl" {
  vpc_id = aws_vpc.ef-pf-mod-vpc.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.ef-pf-mod-igw.id
  }

  route {
    ipv6_cidr_block = "::/0"
    gateway_id      = aws_internet_gateway.ef-pf-mod-igw.id
  }
}

resource "aws_route_table_association" "ef-pf-mod-rtblasst1" {
  route_table_id = aws_route_table.ef-pf-mod-rtbl.id
  subnet_id      = aws_subnet.ef-pf-mod-sn1.id
}

resource "aws_route_table_association" "ef-pf-mod-rtblasst2" {
  route_table_id = aws_route_table.ef-pf-mod-rtbl.id
  subnet_id      = aws_subnet.ef-pf-mod-sn2.id
}

resource "aws_route_table_association" "ef-pf-mod-rtblasst3" {
  route_table_id = aws_route_table.ef-pf-mod-rtbl.id
  subnet_id      = aws_subnet.ef-pf-mod-sn3.id
}
