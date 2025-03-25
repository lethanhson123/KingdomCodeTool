namespace Data_eHospital_DongNai_A.Context
{
	public partial class Context : DbContext
	{
		public Context()
		{
		}
		public Context(DbContextOptions<Context>
    options)
    : base(options)
    {
    }

    public virtual DbSet<BenhAn> BenhAn { get; set; }
public virtual DbSet<BenhAnChiTiet> BenhAnChiTiet { get; set; }
public virtual DbSet<ChungTu> ChungTu { get; set; }
public virtual DbSet<ChungTuChiTiet> ChungTuChiTiet { get; set; }
public virtual DbSet<CLSKetQua> CLSKetQua { get; set; }
public virtual DbSet<CLSKetQua_DienCo> CLSKetQua_DienCo { get; set; }
public virtual DbSet<CLSKetQua_Images> CLSKetQua_Images { get; set; }
public virtual DbSet<CLSKetQua_SieuAmTim> CLSKetQua_SieuAmTim { get; set; }
public virtual DbSet<CLSKetQua_XQ> CLSKetQua_XQ { get; set; }
public virtual DbSet<CLSKetQuaChiTiet> CLSKetQuaChiTiet { get; set; }
public virtual DbSet<CLSKetQuaKhangSinhDo> CLSKetQuaKhangSinhDo { get; set; }
public virtual DbSet<CLSYeuCau> CLSYeuCau { get; set; }
public virtual DbSet<CLSYeuCau_PACS> CLSYeuCau_PACS { get; set; }
public virtual DbSet<CLSYeuCau_QMS> CLSYeuCau_QMS { get; set; }
public virtual DbSet<CLSYeuCau_ThayDoi> CLSYeuCau_ThayDoi { get; set; }
public virtual DbSet<CLSYeuCauChiTiet> CLSYeuCauChiTiet { get; set; }
public virtual DbSet<HoaDon> HoaDon { get; set; }
public virtual DbSet<HoaDonChiTiet> HoaDonChiTiet { get; set; }
public virtual DbSet<KhamBenh> KhamBenh { get; set; }
public virtual DbSet<KhamBenh_SinhHieu> KhamBenh_SinhHieu { get; set; }
public virtual DbSet<KhamBenh_ToaThuoc> KhamBenh_ToaThuoc { get; set; }
public virtual DbSet<KhamBenh_VaoVien> KhamBenh_VaoVien { get; set; }
public virtual DbSet<KhamBenh_VaoVien_SanKhoa> KhamBenh_VaoVien_SanKhoa { get; set; }
public virtual DbSet<NhapVien> NhapVien { get; set; }
public virtual DbSet<NoiTru_KhamBenh> NoiTru_KhamBenh { get; set; }
public virtual DbSet<NoiTru_LuuTru> NoiTru_LuuTru { get; set; }
public virtual DbSet<NoiTru_LuuTru_Trace> NoiTru_LuuTru_Trace { get; set; }
public virtual DbSet<NoiTru_LuuTruChiTiet> NoiTru_LuuTruChiTiet { get; set; }
public virtual DbSet<NoiTru_NhapVien> NoiTru_NhapVien { get; set; }
public virtual DbSet<NoiTru_ToaThuoc> NoiTru_ToaThuoc { get; set; }
public virtual DbSet<NoiTru_TraThuoc> NoiTru_TraThuoc { get; set; }
public virtual DbSet<NoiTru_TraThuocChiTiet> NoiTru_TraThuocChiTiet { get; set; }
public virtual DbSet<TiepNhan> TiepNhan { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
    if (!optionsBuilder.IsConfigured)
    {
    optionsBuilder.UseSqlServer(GlobalHelper.SQLServerConectionString);
    }
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
    OnModelCreatingPartial(modelBuilder);
    }
    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
    }

