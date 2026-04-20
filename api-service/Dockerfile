# build stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# 👇 copy จาก root → เข้า api-service
COPY api-service/*.csproj ./api-service/
WORKDIR /app/api-service

RUN dotnet restore

COPY api-service/. ./
RUN dotnet publish -c Release -o /app/out

# runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app

COPY --from=build /app/out .

EXPOSE 8080

ENTRYPOINT ["dotnet", "api-service.dll"]