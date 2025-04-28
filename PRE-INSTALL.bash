# This is commented bash.
# I can't put this inside Terraform, it installs Terraform
# This is optional, if you have correct edition of Terraform already
# Notes for Ubuntu/ debian, as its the most common version that people type into.  
#		Observing remote servers do not get screens or keyboards
# Snap can be used on redhat / centos / RHEL as well

# STEPS as root
# install Golang
   # for me a null step here
# install Terraform
snap install terraform --classic
# install Task
snap install task --classic 
# install goreleaser
snap install --classic goreleaser

# STEPS as a plain user
#  **NOTE** if you start out with this source code, run `terraform init` 
#			and it will deploy the vercel plugin for you
#
# I found the Vercel integration created by Vercel, 
#    its repo says install it with git, so I did.
#    I thought terraform used a registry like Golang does,  will check if have time
cd ~
mkdir terraform-provider-vercel
# copy vercel integration
git clone https://github.com/vercel/terraform-provider-vercel terraform-provider-vercel
cd terraform-provider-vercel
# warn this may change your local copy of Golang, so do not run these steps as root
task build
# actually link the new plugin to the terraform core
task install

# result binary file is 
#    dist/terraform-provider-vercel_linux_amd64_v1/terraform-provider-vercel*
# this is a Go-flavour elf binary
# the install step links it

