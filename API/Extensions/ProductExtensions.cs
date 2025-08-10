using API.Entities;

namespace API.Extensions;

public static class ProductExtensions
{
    public static IQueryable<Product> Sort(this IQueryable<Product> query, string? orderBy)
    {
        query = orderBy switch
        {
            "price" => query.OrderBy(x => x.Price),
            "priceDesc" => query.OrderByDescending(x => x.Price),
            _ => query.OrderBy(x => x.Name)
        };
        return query;
    }

    public static IQueryable<Product> Search(this IQueryable<Product> query, string? seachTerm)
    {
        if (string.IsNullOrEmpty(seachTerm)) return query;

        var lowerCaseSearchTerm = seachTerm.Trim().ToLower();

        return query.Where(x => x.Name.ToLower().Contains(lowerCaseSearchTerm));
        
    }
}