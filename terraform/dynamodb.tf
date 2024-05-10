resource "aws_dynamodb_table" "ef-pf-mod-cash-out" {
  name         = "ef-pf-mod-cash-out"
  hash_key     = "id"
  billing_mode = "PAY_PER_REQUEST"
  tags = {
    component : "ef-pf-mod"
  }
  attribute {
    name = "id"
    type = "S"
  }
}
