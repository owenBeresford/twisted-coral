terraform {
  required_version = ">= 1.8.4"
  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "~> 1.11.0"
    }
  }
}

provider "vercel" {
  api_token = var.vercel_api_token
  team      = var.vercel_team
}

data "vercel_project" "terraform_demo" {
  name        = "vc1_eu-west1"
  files       = data.vercel_project_directory.local_src.files
  path_prefix = "./"
  production  = false
  team_id     = var.vercel_team
}



