using PrimeiraAPI.Models;

namespace PrimeiraAPI.Routs;

public static class PessoasRouts

{
        public static List<Pessoa> Pessoas = new()
        {
            new Pessoa(id:Guid.NewGuid(), nome:"Lucas"),
            new Pessoa(id:Guid.NewGuid(), nome:"Carlos"),
            new Pessoa(id:Guid.NewGuid(), nome:"Priscilla")
            
        };

        public static void MapPessoaRouts(this WebApplication app)
        {
            
         app.MapGet("/pessoas", handler: () => Pessoas);

         app.MapGet("/pessoas/{nome}", 
             handler: (string nome) => Pessoas.Find(x => x.Nome == nome));

         app.MapPost("pessoas",
             handler: (Pessoa pessoa) =>
             {
                 Pessoas.Add(pessoa);
                 return pessoa;
             });
        }
}