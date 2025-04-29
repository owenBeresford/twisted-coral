output "vercel_project_id" {
  value = vercel_project.app.id
  precondition {
    condition     = length(vercel_project.app.id) > 1
    error_message = "There must be data found for vercel project id"
  }
}

output "vercel_project_url" {
  value = var.domain_url
  # add validation that this is an URL
  # maybe add protocol etc if needed
}


