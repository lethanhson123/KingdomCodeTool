namespace Service_eHospital_DongNai_A_Config
{
    public static class ConfigureService
    {
        public static IServiceCollection AddJWT(this IServiceCollection services)
        {

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
            {
                options.RequireHttpsMetadata = false;
                options.SaveToken = true;
                options.TokenValidationParameters = new TokenValidationParameters()
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidAudience = GlobalHelper.Audience,
                    ValidIssuer = GlobalHelper.Issuer,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(GlobalHelper.Key))
                };
            });
            return services;
        }
        public static IServiceCollection AddContext(this IServiceCollection services)
        {
            services.AddDbContext<Context>
    (opts =>
    {
    });
    return services;
    }
    public static IServiceCollection AddService(this IServiceCollection services)
    {
    services.AddTransient<ISys_AppPrivateSettingsService, Sys_AppPrivateSettingsService>();
services.AddTransient<ISys_AppSettingsService, Sys_AppSettingsService>();

    services.AddSingleton(HtmlEncoder.Create(allowedRanges: new[] { UnicodeRanges.All }));
    return services;
    }

    public static IServiceCollection AddRepository(this IServiceCollection services)
    {
    services.AddTransient<ISys_AppPrivateSettingsRepository, Sys_AppPrivateSettingsRepository>();
services.AddTransient<ISys_AppSettingsRepository, Sys_AppSettingsRepository>();

    return services;
    }
    }
    }

