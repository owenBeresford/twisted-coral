
variable "appname" {
  type        = string
  description = "A useful label so humans know what is happening"
  default     = "Arqiva Devop demo"
  nullable    = false
  # maybe "test-oab1" the vercel username
  validation {
    condition     = length(var.appname) <= 28
    error_message = "Must be <= 28 characters."
  }
}

variable "environment" {
  type        = string
  description = "Environment name, e.g. 'dev' or 'prod'"
  default     = "dev"
  nullable    = false
}

variable "location" {
  type        = string
  description = "What Vercel region to target."
  default     = "North Europe"
  nullable    = false
}

variable "vercel_api_token" {
  type        = string
  description = "relevant auth token."
  default     = "heh."
  nullable    = false
}

variable "vercel_project_name" {
  type        = string
  description = "relevant name."
  default     = "heh."
  nullable    = false
}


variable "repo_name" {
  type        = string
  description = "Name of git repo storing code."
  nullable    = false
}

variable "branch" {
  type        = string
  description = "The branch name for the deployment"
  default     = "main"
  nullable    = false
}

variable "environment_variables" {
  type        = map(string)
  description = "A map that defines environment variables for the Vercel project."
  default     = {}
  nullable    = false
}

variable "domain_url" {
  type        = string
  description = "Custom domain URL for the application."
  default     = null
}

variable "hosted_zone" {
  type = object({
    name = string,
    id   = string
  })
  default = {
    name = "eu-west-1",
    id   = "dub1"
  }
  nullable    = false
  description = "Hosted Zone object to redirect to app's running code. A and AAAA records created in this hosted zone."
}

/*
variable "role_permissions_boundary_arn" {
  type        = string
  description = "IAM Role Permissions Boundary ARN."
  default     = null
}
*/

variable "vercel_team" {
  type        = string
  nullable    = false
  description = "Team id for organizing Vercel projects in teams."
}


variable "vercel_project_framework" {
  type        = string
  description = "Framework that Vercel project's code is written in."
  default     = null
}

variable "vercel_production_branch" {
  type        = string
  description = "Production branch for vercel project for future project deployments."
  default     = "main"
}

variable "install_command" {
  type        = string
  description = "Install command run by vercel for all deployments."
  default     = null
}

variable "build_command" {
  type        = string
  description = "Build command for building projects to deploy on Vercel."
  default     = null
}

variable "output_directory" {
  type        = string
  description = "Output directory for statically built app."
  default     = null
}

variable "dev_command" {
  type        = string
  description = "Command for dev environment builds for vercel deployments."
  default     = null
}

variable "root_directory" {
  type        = string
  description = "The root directory that holds the package.json and other dependencies."
  default     = null
}

