namespace Service
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
    services.AddTransient<IDanhMucChamCongService, DanhMucChamCongService>();
services.AddTransient<IDanhMucGiamTruService, DanhMucGiamTruService>();
services.AddTransient<IDanhMucHopDongService, DanhMucHopDongService>();
services.AddTransient<IDanhMucLuongCoBanService, DanhMucLuongCoBanService>();
services.AddTransient<IDanhMucNganHangService, DanhMucNganHangService>();
services.AddTransient<IDanhMucThueService, DanhMucThueService>();
services.AddTransient<IHRBangLuongService, HRBangLuongService>();
services.AddTransient<IHRBangLuongChiTietService, HRBangLuongChiTietService>();
services.AddTransient<IHRChamCongService, HRChamCongService>();
services.AddTransient<IHRChamCongChiTietService, HRChamCongChiTietService>();
services.AddTransient<IHRLichCongTacService, HRLichCongTacService>();
services.AddTransient<IHRLichCongTacChiTietService, HRLichCongTacChiTietService>();
services.AddTransient<IHRNhanVienService, HRNhanVienService>();
services.AddTransient<IHRNhanVienBangCapService, HRNhanVienBangCapService>();
services.AddTransient<IHRNhanVienHopDongService, HRNhanVienHopDongService>();
services.AddTransient<IHRNhanVienNganHangService, HRNhanVienNganHangService>();
services.AddTransient<IHRNhanVienPhuCapService, HRNhanVienPhuCapService>();
services.AddTransient<IHRNhanVienTapTinDinhKemService, HRNhanVienTapTinDinhKemService>();
services.AddTransient<IHRNhanVienThanhVienService, HRNhanVienThanhVienService>();

    services.AddSingleton(HtmlEncoder.Create(allowedRanges: new[] { UnicodeRanges.All }));
    return services;
    }

    public static IServiceCollection AddRepository(this IServiceCollection services)
    {
    services.AddTransient<IDanhMucChamCongRepository, DanhMucChamCongRepository>();
services.AddTransient<IDanhMucGiamTruRepository, DanhMucGiamTruRepository>();
services.AddTransient<IDanhMucHopDongRepository, DanhMucHopDongRepository>();
services.AddTransient<IDanhMucLuongCoBanRepository, DanhMucLuongCoBanRepository>();
services.AddTransient<IDanhMucNganHangRepository, DanhMucNganHangRepository>();
services.AddTransient<IDanhMucThueRepository, DanhMucThueRepository>();
services.AddTransient<IHRBangLuongRepository, HRBangLuongRepository>();
services.AddTransient<IHRBangLuongChiTietRepository, HRBangLuongChiTietRepository>();
services.AddTransient<IHRChamCongRepository, HRChamCongRepository>();
services.AddTransient<IHRChamCongChiTietRepository, HRChamCongChiTietRepository>();
services.AddTransient<IHRLichCongTacRepository, HRLichCongTacRepository>();
services.AddTransient<IHRLichCongTacChiTietRepository, HRLichCongTacChiTietRepository>();
services.AddTransient<IHRNhanVienRepository, HRNhanVienRepository>();
services.AddTransient<IHRNhanVienBangCapRepository, HRNhanVienBangCapRepository>();
services.AddTransient<IHRNhanVienHopDongRepository, HRNhanVienHopDongRepository>();
services.AddTransient<IHRNhanVienNganHangRepository, HRNhanVienNganHangRepository>();
services.AddTransient<IHRNhanVienPhuCapRepository, HRNhanVienPhuCapRepository>();
services.AddTransient<IHRNhanVienTapTinDinhKemRepository, HRNhanVienTapTinDinhKemRepository>();
services.AddTransient<IHRNhanVienThanhVienRepository, HRNhanVienThanhVienRepository>();

    return services;
    }
    }
    }

