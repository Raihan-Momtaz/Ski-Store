using System;
using System.Text.Json;
using API.RequestHelpers;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.Net.Http.Headers;


namespace API.Extensions;

public static class HttpsExtensions
{
    public static void AddPaginationHeader(
        this HttpResponse response,
        PaginationMetadata metadata
    )
    {
        var options = new JsonSerializerOptions { PropertyNamingPolicy = JsonNamingPolicy.CamelCase };

        response.Headers.Append("Pagination", JsonSerializer.Serialize(metadata, options));
        response.Headers.Append(HeaderNames.AccessControlExposeHeaders, "Pagination");
    }
}