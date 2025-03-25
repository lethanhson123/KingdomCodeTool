namespace Data_eHospital_DongNai_A.Model
{
    public partial class CLSKetQua_SieuAmTim : BaseModel
    {
        [Key]
        public int? CLSKetQua_SieuAmTim_Id { get; set; }
public int? CLSKetQua_Id { get; set; }
public string? SoPhieu { get; set; }
public decimal? VanDMC_dA0 { get; set; }
public decimal? VanDMC_dA0Ngang { get; set; }
public decimal? VanDMC_deoA0 { get; set; }
public string? VanDMC_Van2La { get; set; }
public decimal? VanDMC_CDLaVanTruoc { get; set; }
public decimal? VanDMC_DKVongVan2La { get; set; }
public decimal? VanDMC_TiLe { get; set; }
public decimal? VanDMP_dVongVanDMP { get; set; }
public decimal? VanDMP_DMPPhai { get; set; }
public decimal? VanDMP_DMPTrai { get; set; }
public string? Van3La { get; set; }
public decimal? TM_IVSd { get; set; }
public decimal? TM_LVd { get; set; }
public decimal? TM_PWd { get; set; }
public decimal? TM_IVSs { get; set; }
public decimal? TM_LVs { get; set; }
public decimal? TM_PWs { get; set; }
public decimal? TM_FS { get; set; }
public decimal? TM_EF { get; set; }
public decimal? TM_RV { get; set; }
public decimal? TM_A0 { get; set; }
public decimal? TM_LA { get; set; }
public decimal? DQV2La_Vtd { get; set; }
public decimal? DQV2La_Gdnttt { get; set; }
public string? DQV2La_EA { get; set; }
public string? DQV2La_HepVan2La { get; set; }
public decimal? DQV2La_SMoVan1 { get; set; }
public decimal? DQV2La_SMoVan2 { get; set; }
public string? DQV2La_HoVan2La { get; set; }
public string? DQV2La_DoHo { get; set; }
public decimal? DQDMC_Vtd { get; set; }
public decimal? DQDMC_GdLVAO { get; set; }
public string? DQDMC_HepVanDMC { get; set; }
public decimal? DQDMC_SMoVan { get; set; }
public string? DQDMC_HoVanDMC { get; set; }
public decimal? DQDMC_DoHoPHT { get; set; }
public decimal? DQDMC_DoHoDFO { get; set; }
public decimal? DQDMC_EDTD { get; set; }
public decimal? DQV3La_Vtd { get; set; }
public decimal? DQV3La_GdRARV { get; set; }
public decimal? DQV3La_VDongHo { get; set; }
public decimal? DQV3La_PAPs { get; set; }
public decimal? DQVDMP_Vtd { get; set; }
public decimal? DQVDMP_GdRARV { get; set; }
public string? DQVDMP_HoVanDMP { get; set; }
public decimal? DQVDMP_VDongHo { get; set; }
public decimal? DQVDMP_PAPd { get; set; }
public decimal? DQVDMP_VLTVSST { get; set; }
public string? DQVDMP_DichMangTim { get; set; }

        public CLSKetQua_SieuAmTim()
        {
        }
    }
}

