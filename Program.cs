using PrimeiraAPI.Routs;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.MapPessoaRouts();


app.MapGet("/pessoa", handler: () => Pessoas);

app.MapGet("/pessoa/{nome}", handler: (strin nome) => Pessoas.Find
        
        app.MapPost("/pessoa",


app.Run());


}
