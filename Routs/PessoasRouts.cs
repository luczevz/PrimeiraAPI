using PrimeiraAPI.Models;

namespace PrimeiraAPI.Routs;

public static class PessoasRouts

{
    public static List<Pessoa> Pessoas = new()
        {
            new Pessoa(id:Guid.NewGuid(), nome:"Lucas"),
            new Pessoa(id:Guid.NewGuid(), nome:"Carlos"),
            new Pessoa(id:Guid.NewGuid(), nome:"Priscilla"),
            new Pessoa(id:Guid.NewGuid(), nome:"Mãe"),
            new Pessoa(id:Guid.NewGuid(), nome:"Pai")
            
        };

public static void MapPessoaRouts(this WebApplication app)
{
    app.MapGet("/pessoas", handler: () => Pessoas);
}
}