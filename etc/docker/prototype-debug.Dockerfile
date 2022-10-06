FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS dotnet-build-base
WORKDIR /src
RUN --mount=type=cache,target=/var/cache/apt apt update && apt install curl -y \
  && curl -sL https://deb.nodesource.com/setup_16.x | bash -\
  && apt install nodejs -y && rm -rf /var/lib/apt/lists/*
COPY prototype.sln .
COPY ./src/prototype ./src/prototype
RUN dotnet restore prototype.sln

FROM dotnet-build-base AS dotnet-build
RUN dotnet build -c Debug --no-restore prototype.sln

FROM dotnet-build AS dotnet-test
RUN dotnet test -c Debug --no-build --no-restore prototype.sln

FROM dotnet-build AS publish
RUN dotnet publish -c Debug --no-build --no-restore -o /app src/prototype/prototype.csproj

FROM base AS final
COPY --from=publish /app .

ENTRYPOINT ["dotnet", "prototype.dll"]
 