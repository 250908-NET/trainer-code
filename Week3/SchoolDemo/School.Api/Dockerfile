## Environment definition
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
## working directory inside the container/image
WORKDIR /myApp

## Source Code
## COPY <source> <destination>
COPY ./ ./

## how to start the app/ build the app
## happening ONCE to build/prepare the image

RUN dotnet restore .
RUN dotnet publish -c Release -o out
## /myApp/out

## Build
## -------------------------------------------------------
## Run

FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS run

WORKDIR /myApp

COPY --from=build /myApp/out /myApp
## COPY ./connection_string.env /connection_string.env

## we need some definition of how to start the app
ENTRYPOINT ["dotnet", "School.Api.dll"]