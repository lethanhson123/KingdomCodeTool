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
    services.AddTransient<IBenhSuService, BenhSuService>();
services.AddTransient<IBenhSu_User_DichVu_PermissionsService, BenhSu_User_DichVu_PermissionsService>();
services.AddTransient<IBenhSuDefinitionsService, BenhSuDefinitionsService>();
services.AddTransient<ILog_UpdateInformationService, Log_UpdateInformationService>();
services.AddTransient<ISys_AppPrivateSettingItemsService, Sys_AppPrivateSettingItemsService>();
services.AddTransient<ISys_AppPrivateSettingPermissionsService, Sys_AppPrivateSettingPermissionsService>();
services.AddTransient<ISys_AppPrivateSettingsService, Sys_AppPrivateSettingsService>();
services.AddTransient<ISys_AppSettingsService, Sys_AppSettingsService>();
services.AddTransient<ISys_ComboDefinitionsService, Sys_ComboDefinitionsService>();
services.AddTransient<ISys_ConfigsService, Sys_ConfigsService>();
services.AddTransient<ISys_ConstantsService, Sys_ConstantsService>();
services.AddTransient<ISys_HistoryDefinesService, Sys_HistoryDefinesService>();
services.AddTransient<ISys_List_SourceFileService, Sys_List_SourceFileService>();
services.AddTransient<ISys_LovDefinitionsService, Sys_LovDefinitionsService>();
services.AddTransient<ISys_ModifySource_ClientService, Sys_ModifySource_ClientService>();
services.AddTransient<ISys_ModifySource_ComputerService, Sys_ModifySource_ComputerService>();
services.AddTransient<ISys_ModifySource_ServerService, Sys_ModifySource_ServerService>();
services.AddTransient<ISys_OperatorsService, Sys_OperatorsService>();
services.AddTransient<ISys_SearchDefinitionsService, Sys_SearchDefinitionsService>();
services.AddTransient<ItestService, testService>();

    services.AddSingleton(HtmlEncoder.Create(allowedRanges: new[] { UnicodeRanges.All }));
    return services;
    }

    public static IServiceCollection AddRepository(this IServiceCollection services)
    {
    services.AddTransient<IBenhSuRepository, BenhSuRepository>();
services.AddTransient<IBenhSu_User_DichVu_PermissionsRepository, BenhSu_User_DichVu_PermissionsRepository>();
services.AddTransient<IBenhSuDefinitionsRepository, BenhSuDefinitionsRepository>();
services.AddTransient<ILog_UpdateInformationRepository, Log_UpdateInformationRepository>();
services.AddTransient<ISys_AppPrivateSettingItemsRepository, Sys_AppPrivateSettingItemsRepository>();
services.AddTransient<ISys_AppPrivateSettingPermissionsRepository, Sys_AppPrivateSettingPermissionsRepository>();
services.AddTransient<ISys_AppPrivateSettingsRepository, Sys_AppPrivateSettingsRepository>();
services.AddTransient<ISys_AppSettingsRepository, Sys_AppSettingsRepository>();
services.AddTransient<ISys_ComboDefinitionsRepository, Sys_ComboDefinitionsRepository>();
services.AddTransient<ISys_ConfigsRepository, Sys_ConfigsRepository>();
services.AddTransient<ISys_ConstantsRepository, Sys_ConstantsRepository>();
services.AddTransient<ISys_HistoryDefinesRepository, Sys_HistoryDefinesRepository>();
services.AddTransient<ISys_List_SourceFileRepository, Sys_List_SourceFileRepository>();
services.AddTransient<ISys_LovDefinitionsRepository, Sys_LovDefinitionsRepository>();
services.AddTransient<ISys_ModifySource_ClientRepository, Sys_ModifySource_ClientRepository>();
services.AddTransient<ISys_ModifySource_ComputerRepository, Sys_ModifySource_ComputerRepository>();
services.AddTransient<ISys_ModifySource_ServerRepository, Sys_ModifySource_ServerRepository>();
services.AddTransient<ISys_OperatorsRepository, Sys_OperatorsRepository>();
services.AddTransient<ISys_SearchDefinitionsRepository, Sys_SearchDefinitionsRepository>();
services.AddTransient<ItestRepository, testRepository>();

    return services;
    }
    }
    }

