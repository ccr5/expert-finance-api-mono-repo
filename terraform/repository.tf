resource "aws_ecr_repository" "ef-pf-mod-ecr" {
  name                 = "ef-pf-mod-repo"
  image_tag_mutability = "MUTABLE"
  image_scanning_configuration {
    scan_on_push = true
  }
}
