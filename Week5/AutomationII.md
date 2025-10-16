------- triggers
- main merge
    - when changes detected
- on demand

------- blank device (environment)

.NET SDK
git
Docker
Azure CLI

-- Source Code (.NET)
clone the source repo
build/compile
unit test

-- Containerize (Docker)
Containerize/Dockerize the app - build an image
Push to Image Repo/Container Repo/Registry

-- Deploy (Azure)
Create the Azure App Service instance
Whitelist the right addresses (IP)
Deploy image to AAS
