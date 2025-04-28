output "vercel_project_id" {
  value = vercel_project.config.id
  precondition {
    condition     = length(vercel_project.config.id) > 1
    error_message = "There must be data found for vercel project id"
  }
}

output "vercel_project_url" {
  value = domain_url
  # add validation that this is an URL
  # maybe add protocol etc if needed
}

output "vercel_deployment_id" {
  value = vercel_deployment.config.id

}
