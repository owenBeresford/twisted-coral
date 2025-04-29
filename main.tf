# this is a private repo, so company name has been exposed for clarity

terraform {
  required_version = ">= 1.8.4"
}

resource "vercel_project" "app" {
  team_id   = var.vercel_team
  name      = var.vercel_project_name
  framework = "vite"
  git_repository = {
    type = "github"
    repo = "owenberesford/${var.repo_name}"
    production_branch = var.vercel_production_branch
  }
}

data "vercel_project_directory" "path" {
  path = "./dist/" 
}

#/* add domain */
#/*
#locals {
#	repo_name		=var.repo_name
#	domain_url		=""                
#}
#*/

