# This is commented bash.
# I can't put this inside Terraform, it installs Terraform
# This is optional, if you have correct edition of Terraform already
# Notes for Ubuntu/ debian, as its the most common version that people type into.  
#		Observing remote servers do not get screens or keyboards
# Snap can be used on redhat / centos / RHEL as well

# STEPS as root
# install Golang
   # for me a null step here
	# OR
snap install go --classic
# install Terraform
snap install terraform --classic
# install Task OPTIONAL used to build Go projects, other than Cmake
snap install task --classic 
# install goreleaser ~ code management tool
snap install --classic goreleaser

# copy my repo ~ where you got this file
mkdir ~/terraform-demo
git clone https://github.com/owenBeresford/twisted-coral terraform-demo
cd ~/terraform-demo

# set-up vercel provider
terraform install


