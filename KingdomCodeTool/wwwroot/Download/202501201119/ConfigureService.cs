namespace Service_eHospital_DongNai_A_System
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
    services.AddTransient<IidxService, idxService>();
services.AddTransient<ILog_UpdateInformationService, Log_UpdateInformationService>();
services.AddTransient<ISys_AutoTextGroupsService, Sys_AutoTextGroupsService>();
services.AddTransient<ISys_AutoTextsService, Sys_AutoTextsService>();
services.AddTransient<ISys_AutoTextSettingsService, Sys_AutoTextSettingsService>();
services.AddTransient<ISys_AutoTextUsersService, Sys_AutoTextUsersService>();
services.AddTransient<ISys_CommandApplyPermissionsService, Sys_CommandApplyPermissionsService>();
services.AddTransient<ISys_CommandsService, Sys_CommandsService>();
services.AddTransient<ISys_ComputersService, Sys_ComputersService>();
services.AddTransient<ISys_ConfigurationsService, Sys_ConfigurationsService>();
services.AddTransient<Isys_Control_DefaufValueService, sys_Control_DefaufValueService>();
services.AddTransient<ISys_Control_DetailsService, Sys_Control_DetailsService>();
services.AddTransient<ISys_Control_HeaderColumnsService, Sys_Control_HeaderColumnsService>();
services.AddTransient<ISys_ControlsService, Sys_ControlsService>();
services.AddTransient<ISys_ControlTypesService, Sys_ControlTypesService>();
services.AddTransient<ISys_DataTypesService, Sys_DataTypesService>();
services.AddTransient<ISys_DomainsService, Sys_DomainsService>();
services.AddTransient<ISys_FunctionsService, Sys_FunctionsService>();
services.AddTransient<ISys_GroupCommandsService, Sys_GroupCommandsService>();
services.AddTransient<ISys_GroupMenusService, Sys_GroupMenusService>();
services.AddTransient<ISys_GroupsService, Sys_GroupsService>();
services.AddTransient<ISys_ImagesService, Sys_ImagesService>();
services.AddTransient<ISys_LanguagesService, Sys_LanguagesService>();
services.AddTransient<ISys_LoginSessionsService, Sys_LoginSessionsService>();
services.AddTransient<ISys_MenusService, Sys_MenusService>();
services.AddTransient<ISys_ModulesService, Sys_ModulesService>();
services.AddTransient<ISys_ParametersService, Sys_ParametersService>();
services.AddTransient<ISys_ReportDetailsService, Sys_ReportDetailsService>();
services.AddTransient<ISys_ReportParametersService, Sys_ReportParametersService>();
services.AddTransient<ISys_ReportsService, Sys_ReportsService>();
services.AddTransient<ISys_SiteDatabaseConnectionsService, Sys_SiteDatabaseConnectionsService>();
services.AddTransient<ISys_UserCommandsService, Sys_UserCommandsService>();
services.AddTransient<ISys_UserGroupsService, Sys_UserGroupsService>();
services.AddTransient<ISys_UserMenusService, Sys_UserMenusService>();
services.AddTransient<ISys_UserPasswordHistoryService, Sys_UserPasswordHistoryService>();
services.AddTransient<ISys_UsersService, Sys_UsersService>();
services.AddTransient<ISys_Value_LanguagesService, Sys_Value_LanguagesService>();
services.AddTransient<IT_FK_XrefService, T_FK_XrefService>();

    services.AddSingleton(HtmlEncoder.Create(allowedRanges: new[] { UnicodeRanges.All }));
    return services;
    }

    public static IServiceCollection AddRepository(this IServiceCollection services)
    {
    services.AddTransient<IidxRepository, idxRepository>();
services.AddTransient<ILog_UpdateInformationRepository, Log_UpdateInformationRepository>();
services.AddTransient<ISys_AutoTextGroupsRepository, Sys_AutoTextGroupsRepository>();
services.AddTransient<ISys_AutoTextsRepository, Sys_AutoTextsRepository>();
services.AddTransient<ISys_AutoTextSettingsRepository, Sys_AutoTextSettingsRepository>();
services.AddTransient<ISys_AutoTextUsersRepository, Sys_AutoTextUsersRepository>();
services.AddTransient<ISys_CommandApplyPermissionsRepository, Sys_CommandApplyPermissionsRepository>();
services.AddTransient<ISys_CommandsRepository, Sys_CommandsRepository>();
services.AddTransient<ISys_ComputersRepository, Sys_ComputersRepository>();
services.AddTransient<ISys_ConfigurationsRepository, Sys_ConfigurationsRepository>();
services.AddTransient<Isys_Control_DefaufValueRepository, sys_Control_DefaufValueRepository>();
services.AddTransient<ISys_Control_DetailsRepository, Sys_Control_DetailsRepository>();
services.AddTransient<ISys_Control_HeaderColumnsRepository, Sys_Control_HeaderColumnsRepository>();
services.AddTransient<ISys_ControlsRepository, Sys_ControlsRepository>();
services.AddTransient<ISys_ControlTypesRepository, Sys_ControlTypesRepository>();
services.AddTransient<ISys_DataTypesRepository, Sys_DataTypesRepository>();
services.AddTransient<ISys_DomainsRepository, Sys_DomainsRepository>();
services.AddTransient<ISys_FunctionsRepository, Sys_FunctionsRepository>();
services.AddTransient<ISys_GroupCommandsRepository, Sys_GroupCommandsRepository>();
services.AddTransient<ISys_GroupMenusRepository, Sys_GroupMenusRepository>();
services.AddTransient<ISys_GroupsRepository, Sys_GroupsRepository>();
services.AddTransient<ISys_ImagesRepository, Sys_ImagesRepository>();
services.AddTransient<ISys_LanguagesRepository, Sys_LanguagesRepository>();
services.AddTransient<ISys_LoginSessionsRepository, Sys_LoginSessionsRepository>();
services.AddTransient<ISys_MenusRepository, Sys_MenusRepository>();
services.AddTransient<ISys_ModulesRepository, Sys_ModulesRepository>();
services.AddTransient<ISys_ParametersRepository, Sys_ParametersRepository>();
services.AddTransient<ISys_ReportDetailsRepository, Sys_ReportDetailsRepository>();
services.AddTransient<ISys_ReportParametersRepository, Sys_ReportParametersRepository>();
services.AddTransient<ISys_ReportsRepository, Sys_ReportsRepository>();
services.AddTransient<ISys_SiteDatabaseConnectionsRepository, Sys_SiteDatabaseConnectionsRepository>();
services.AddTransient<ISys_UserCommandsRepository, Sys_UserCommandsRepository>();
services.AddTransient<ISys_UserGroupsRepository, Sys_UserGroupsRepository>();
services.AddTransient<ISys_UserMenusRepository, Sys_UserMenusRepository>();
services.AddTransient<ISys_UserPasswordHistoryRepository, Sys_UserPasswordHistoryRepository>();
services.AddTransient<ISys_UsersRepository, Sys_UsersRepository>();
services.AddTransient<ISys_Value_LanguagesRepository, Sys_Value_LanguagesRepository>();
services.AddTransient<IT_FK_XrefRepository, T_FK_XrefRepository>();

    return services;
    }
    }
    }

