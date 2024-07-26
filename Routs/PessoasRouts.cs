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
            handler: (string nome) => Pessoas.Find(x => x.Nome.StartsWith(nome)));

        app.MapPost("/pessoas",
            handler: (HttpContext request, Pessoa pessoa) =>
            {
                pessoa.Id = Guid.NewGuid();
                Pessoas.Add(pessoa);
                return Results.Ok(pessoa);
            });



       app.MapPut(pattern:"/pessoas/{id:guid}", handler: (Guid id, Pessoa pessoa) =>
       {
           var encontrado = Pessoas.Find(match: x => x.Id == id);
           
           if (encontrado == null)
               return Results.NotFound();

           encontrado.Nome = pessoa.Nome;
           return Results.Ok(encontrado);
       });

    }

}





// GRAVA NOME E RETORNO NO GET - POST -> GET

/*app.MapPost("pessoas",
             handler: (Pessoa pessoa) =>
             {

                
                 Pessoas.Add(pessoa);
                 return pessoa;
             }*/