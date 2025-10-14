namespace csTester
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Configuration.AddJsonFile("values.json", optional: true, reloadOnChange: true);

            builder.Services.AddOpenApi();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            // options.ListenAnyIp(80);

            var app = builder.Build();

            app.MapOpenApi();
            app.UseSwagger();
            app.UseSwaggerUI();

            app.UseHttpsRedirection();

            app.MapGet("/", () => "Hello World!");

            app.MapGet("/string", (IConfiguration config) =>
                {
                    var CS = config.GetConnectionString("MyConnectionString");
                    return Results.Ok(CS);
                }
            );

            app.Run();
        }
    }
}