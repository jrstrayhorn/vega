#How to start the backend project
(using .NET Core CLI) run dotnet build - verify app builds correctly
(using .NET Core CLI) dotnet run
#How to start the frontend project
/ClientApp

#How to start full stack app
1. Update startup.cs, set this to correct port //spa.UseProxyToSpaDevelopmentServer("http://localhost:4201");
2. run => ng serve --port 4201; this will start up the front end app
3. Run backend, via Visual Studio (Crtl+F5 or start debugging be sure to change to vega from IIS Express)
4. Open localhost:60187, app should open

#Notes on Angular project template w/ ASP.NET Core
https://docs.microsoft.com/en-us/aspnet/core/client-side/spa/angular?view=aspnetcore-3.0&tabs=netcore-cli#run-ng-serve-independently

