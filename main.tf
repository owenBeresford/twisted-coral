# this is a private repo, so company name has been exposed for clarity

terraform {
  required_version = ">= 1.8.4"
}

resource "vercel_project" "config" {

  team_id   = var.vercel_team
  name      = var.vercel_project_name
  framework = var.vercel_project_framework
  git_repository = {
    type              = "github"
    repo              = "owenberesford/${var.repo_name}"
    production_branch = var.vercel_production_branch
  }

  install_command  = var.install_command
  build_command    = var.build_command
  output_directory = var.output_directory
  dev_command      = var.dev_command
  root_directory   = var.root_directory
}

data "vercel_project_directory" "root" {
  path = "../${var.repo_name}"
  /* path = "./src/"  */
}

/* add domain */
/*
locals {
	repo_name		=var.repo_name
	domain_url		=""                
}
*/

