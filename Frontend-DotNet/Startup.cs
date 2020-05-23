using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using MySql.Data.MySqlClient;

namespace Frontend
{
    public class Startup
    {
        private string _dbUrl = null;
        private string _dbPassword = null;
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            _dbUrl = Configuration["DbUrl"];
            _dbPassword = Configuration["DbPassword"];
            services.AddTransient<AppDb>(_ => new AppDb(Configuration["ConnectionUrl"]));
            services.AddTransient<MySqlConnection>(_ => new MySqlConnection(Configuration["ConnectionStrings:Default"]));
            services.AddRazorPages();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
              endpoints.MapGet("/", async context =>
              {
                  var result = string.IsNullOrEmpty(_dbUrl) ? "Null" : "Not Null";
                  await context.Response.WriteAsync($"Secret is {result}");
                  //await context.Response.WriteAsync("Hello World!");
              });

              endpoints.MapGet("/hello/{name:alpha}", async context =>
              {
                  using AppDb Db = new AppDb(Configuration["ConnectionUrl"]);
                  await Db.Connection.OpenAsync();
                  string name = (string) context.Request.RouteValues["name"];
                  string query = "Insert into test2 values('"+name+ "');";
                  //console.log(query);
                  using var cmd = new MySqlCommand(query, Db.Connection);
                  //BindParams(cmd);
                  await cmd.ExecuteNonQueryAsync();
                  //Id = (int) cmd.LastInsertedId;
                  await context.Response.WriteAsync($"Hello {name}!");
              });
                //endpoints.MapRazorPages();
            });
        }
    }
}
// Db Url = Server=localhost,3334;Database=sign;User Id=root;Password=;
