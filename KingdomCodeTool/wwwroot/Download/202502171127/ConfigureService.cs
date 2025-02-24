namespace Service_eHospital_DongNai_A
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
    services.AddTransient<IXML1_CV130Service, XML1_CV130Service>();
services.AddTransient<IXML10_CV130Service, XML10_CV130Service>();
services.AddTransient<IXML11_CV130Service, XML11_CV130Service>();
services.AddTransient<IXML12_CV130Service, XML12_CV130Service>();
services.AddTransient<IXML13_CV130Service, XML13_CV130Service>();
services.AddTransient<IXML14_CV130Service, XML14_CV130Service>();
services.AddTransient<IXML15_CV130Service, XML15_CV130Service>();
services.AddTransient<IXML2_CV130Service, XML2_CV130Service>();
services.AddTransient<IXML3_CV130Service, XML3_CV130Service>();
services.AddTransient<IXML4_CV130Service, XML4_CV130Service>();
services.AddTransient<IXML5_CV130Service, XML5_CV130Service>();
services.AddTransient<IXML6_CV130Service, XML6_CV130Service>();
services.AddTransient<IXML7_CV130Service, XML7_CV130Service>();
services.AddTransient<IXML8_CV130Service, XML8_CV130Service>();

    services.AddSingleton(HtmlEncoder.Create(allowedRanges: new[] { UnicodeRanges.All }));
    return services;
    }

    public static IServiceCollection AddRepository(this IServiceCollection services)
    {
    services.AddTransient<IXML1_CV130Repository, XML1_CV130Repository>();
services.AddTransient<IXML10_CV130Repository, XML10_CV130Repository>();
services.AddTransient<IXML11_CV130Repository, XML11_CV130Repository>();
services.AddTransient<IXML12_CV130Repository, XML12_CV130Repository>();
services.AddTransient<IXML13_CV130Repository, XML13_CV130Repository>();
services.AddTransient<IXML14_CV130Repository, XML14_CV130Repository>();
services.AddTransient<IXML15_CV130Repository, XML15_CV130Repository>();
services.AddTransient<IXML2_CV130Repository, XML2_CV130Repository>();
services.AddTransient<IXML3_CV130Repository, XML3_CV130Repository>();
services.AddTransient<IXML4_CV130Repository, XML4_CV130Repository>();
services.AddTransient<IXML5_CV130Repository, XML5_CV130Repository>();
services.AddTransient<IXML6_CV130Repository, XML6_CV130Repository>();
services.AddTransient<IXML7_CV130Repository, XML7_CV130Repository>();
services.AddTransient<IXML8_CV130Repository, XML8_CV130Repository>();

    return services;
    }
    }
    }

