namespace Data.Context
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

    public virtual DbSet<DanhMucChamCong> DanhMucChamCong { get; set; }
public virtual DbSet<DanhMucGiamTru> DanhMucGiamTru { get; set; }
public virtual DbSet<DanhMucHopDong> DanhMucHopDong { get; set; }
public virtual DbSet<DanhMucLuongCoBan> DanhMucLuongCoBan { get; set; }
public virtual DbSet<DanhMucNganHang> DanhMucNganHang { get; set; }
public virtual DbSet<DanhMucThue> DanhMucThue { get; set; }
public virtual DbSet<HRBangLuong> HRBangLuong { get; set; }
public virtual DbSet<HRBangLuongChiTiet> HRBangLuongChiTiet { get; set; }
public virtual DbSet<HRChamCong> HRChamCong { get; set; }
public virtual DbSet<HRChamCongChiTiet> HRChamCongChiTiet { get; set; }
public virtual DbSet<HRLichCongTac> HRLichCongTac { get; set; }
public virtual DbSet<HRLichCongTacChiTiet> HRLichCongTacChiTiet { get; set; }
public virtual DbSet<HRNhanVien> HRNhanVien { get; set; }
public virtual DbSet<HRNhanVienBangCap> HRNhanVienBangCap { get; set; }
public virtual DbSet<HRNhanVienHopDong> HRNhanVienHopDong { get; set; }
public virtual DbSet<HRNhanVienNganHang> HRNhanVienNganHang { get; set; }
public virtual DbSet<HRNhanVienPhuCap> HRNhanVienPhuCap { get; set; }
public virtual DbSet<HRNhanVienTapTinDinhKem> HRNhanVienTapTinDinhKem { get; set; }
public virtual DbSet<HRNhanVienThanhVien> HRNhanVienThanhVien { get; set; }

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

