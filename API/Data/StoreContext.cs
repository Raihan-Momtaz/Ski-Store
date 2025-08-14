using System;
using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.Build.Framework;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class StoreContext(DbContextOptions options) : IdentityDbContext<User>(options)
{
    public required DbSet<Product> Products { get; set; }

    public required DbSet<Basket> Baskets { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<IdentityRole>()
            .HasData(
                new IdentityRole{Id="db5a161d-43ab-49c9-8156-c863ef8a28bb",Name = "Member", NormalizedName = "MEMBER"},
                new IdentityRole{Id="0462ba47-f16a-4a5a-83ed-bf974d2520ed",Name = "Admin", NormalizedName = "ADMIN"}
            );

    }
}
