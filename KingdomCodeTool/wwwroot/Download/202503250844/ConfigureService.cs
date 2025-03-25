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
    services.AddTransient<IBenhAnService, BenhAnService>();
services.AddTransient<IBenhAnChiTietService, BenhAnChiTietService>();
services.AddTransient<IChungTuService, ChungTuService>();
services.AddTransient<IChungTuChiTietService, ChungTuChiTietService>();
services.AddTransient<ICLSKetQuaService, CLSKetQuaService>();
services.AddTransient<ICLSKetQua_DienCoService, CLSKetQua_DienCoService>();
services.AddTransient<ICLSKetQua_ImagesService, CLSKetQua_ImagesService>();
services.AddTransient<ICLSKetQua_SieuAmTimService, CLSKetQua_SieuAmTimService>();
services.AddTransient<ICLSKetQua_XQService, CLSKetQua_XQService>();
services.AddTransient<ICLSKetQuaChiTietService, CLSKetQuaChiTietService>();
services.AddTransient<ICLSKetQuaKhangSinhDoService, CLSKetQuaKhangSinhDoService>();
services.AddTransient<ICLSYeuCauService, CLSYeuCauService>();
services.AddTransient<ICLSYeuCau_PACSService, CLSYeuCau_PACSService>();
services.AddTransient<ICLSYeuCau_QMSService, CLSYeuCau_QMSService>();
services.AddTransient<ICLSYeuCau_ThayDoiService, CLSYeuCau_ThayDoiService>();
services.AddTransient<ICLSYeuCauChiTietService, CLSYeuCauChiTietService>();
services.AddTransient<IHoaDonService, HoaDonService>();
services.AddTransient<IHoaDonChiTietService, HoaDonChiTietService>();
services.AddTransient<IKhamBenhService, KhamBenhService>();
services.AddTransient<IKhamBenh_SinhHieuService, KhamBenh_SinhHieuService>();
services.AddTransient<IKhamBenh_ToaThuocService, KhamBenh_ToaThuocService>();
services.AddTransient<IKhamBenh_VaoVienService, KhamBenh_VaoVienService>();
services.AddTransient<IKhamBenh_VaoVien_SanKhoaService, KhamBenh_VaoVien_SanKhoaService>();
services.AddTransient<INhapVienService, NhapVienService>();
services.AddTransient<INoiTru_KhamBenhService, NoiTru_KhamBenhService>();
services.AddTransient<INoiTru_LuuTruService, NoiTru_LuuTruService>();
services.AddTransient<INoiTru_LuuTru_TraceService, NoiTru_LuuTru_TraceService>();
services.AddTransient<INoiTru_LuuTruChiTietService, NoiTru_LuuTruChiTietService>();
services.AddTransient<INoiTru_NhapVienService, NoiTru_NhapVienService>();
services.AddTransient<INoiTru_ToaThuocService, NoiTru_ToaThuocService>();
services.AddTransient<INoiTru_TraThuocService, NoiTru_TraThuocService>();
services.AddTransient<INoiTru_TraThuocChiTietService, NoiTru_TraThuocChiTietService>();
services.AddTransient<ITiepNhanService, TiepNhanService>();

    services.AddSingleton(HtmlEncoder.Create(allowedRanges: new[] { UnicodeRanges.All }));
    return services;
    }

    public static IServiceCollection AddRepository(this IServiceCollection services)
    {
    services.AddTransient<IBenhAnRepository, BenhAnRepository>();
services.AddTransient<IBenhAnChiTietRepository, BenhAnChiTietRepository>();
services.AddTransient<IChungTuRepository, ChungTuRepository>();
services.AddTransient<IChungTuChiTietRepository, ChungTuChiTietRepository>();
services.AddTransient<ICLSKetQuaRepository, CLSKetQuaRepository>();
services.AddTransient<ICLSKetQua_DienCoRepository, CLSKetQua_DienCoRepository>();
services.AddTransient<ICLSKetQua_ImagesRepository, CLSKetQua_ImagesRepository>();
services.AddTransient<ICLSKetQua_SieuAmTimRepository, CLSKetQua_SieuAmTimRepository>();
services.AddTransient<ICLSKetQua_XQRepository, CLSKetQua_XQRepository>();
services.AddTransient<ICLSKetQuaChiTietRepository, CLSKetQuaChiTietRepository>();
services.AddTransient<ICLSKetQuaKhangSinhDoRepository, CLSKetQuaKhangSinhDoRepository>();
services.AddTransient<ICLSYeuCauRepository, CLSYeuCauRepository>();
services.AddTransient<ICLSYeuCau_PACSRepository, CLSYeuCau_PACSRepository>();
services.AddTransient<ICLSYeuCau_QMSRepository, CLSYeuCau_QMSRepository>();
services.AddTransient<ICLSYeuCau_ThayDoiRepository, CLSYeuCau_ThayDoiRepository>();
services.AddTransient<ICLSYeuCauChiTietRepository, CLSYeuCauChiTietRepository>();
services.AddTransient<IHoaDonRepository, HoaDonRepository>();
services.AddTransient<IHoaDonChiTietRepository, HoaDonChiTietRepository>();
services.AddTransient<IKhamBenhRepository, KhamBenhRepository>();
services.AddTransient<IKhamBenh_SinhHieuRepository, KhamBenh_SinhHieuRepository>();
services.AddTransient<IKhamBenh_ToaThuocRepository, KhamBenh_ToaThuocRepository>();
services.AddTransient<IKhamBenh_VaoVienRepository, KhamBenh_VaoVienRepository>();
services.AddTransient<IKhamBenh_VaoVien_SanKhoaRepository, KhamBenh_VaoVien_SanKhoaRepository>();
services.AddTransient<INhapVienRepository, NhapVienRepository>();
services.AddTransient<INoiTru_KhamBenhRepository, NoiTru_KhamBenhRepository>();
services.AddTransient<INoiTru_LuuTruRepository, NoiTru_LuuTruRepository>();
services.AddTransient<INoiTru_LuuTru_TraceRepository, NoiTru_LuuTru_TraceRepository>();
services.AddTransient<INoiTru_LuuTruChiTietRepository, NoiTru_LuuTruChiTietRepository>();
services.AddTransient<INoiTru_NhapVienRepository, NoiTru_NhapVienRepository>();
services.AddTransient<INoiTru_ToaThuocRepository, NoiTru_ToaThuocRepository>();
services.AddTransient<INoiTru_TraThuocRepository, NoiTru_TraThuocRepository>();
services.AddTransient<INoiTru_TraThuocChiTietRepository, NoiTru_TraThuocChiTietRepository>();
services.AddTransient<ITiepNhanRepository, TiepNhanRepository>();

    return services;
    }
    }
    }

