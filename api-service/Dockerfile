# ใช้ image สำหรับ build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# copy file และ restore
COPY . ./
RUN dotnet restore

# build
RUN dotnet publish -c Release -o out

# ใช้ image สำหรับ run
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app

COPY --from=build /app/out .

EXPOSE 80

ENTRYPOINT ["dotnet", "api-service.dll"]