resource "aws_cloudwatch_log_group" "ef-pf-mod-awslog" {
  name              = "ef-pf-mod-awslog"
  retention_in_days = 30
}
