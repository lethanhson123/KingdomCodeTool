

using KingdomCodeTool.ViewModels;
using Microsoft.VisualBasic;
using System.ComponentModel;
using System.Xml.Linq;
using static System.Net.Mime.MediaTypeNames;

namespace KingdomCodeTool.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IWebHostEnvironment _WebHostEnvironment;

        public HomeController(ILogger<HomeController> logger, IWebHostEnvironment WebHostEnvironment)
        {
            _logger = logger;
            _WebHostEnvironment = WebHostEnvironment;
        }

        public IActionResult Index()
        {
            BaseViewModel model = new BaseViewModel();
            model.ConnectionString = "Server=10.84.3.124;Database=BenhVienDaKhoaDongNai2025;Persist Security Info=False;User ID=cntt; Password=dongnai@123;MultipleActiveResultSets=False;Encrypt=False;TrustServerCertificate=False;Connection Timeout=30;";
            //model.ConnectionString = "Server=10.84.2.148;Database=NewComet_NSTL_A;Persist Security Info=False;User ID=sa; Password=Cntt@123;MultipleActiveResultSets=False;Encrypt=False;TrustServerCertificate=False;Connection Timeout=30;";
            //model.ConnectionString = "Server=10.84.2.8\\SQLDB;Database=eHospital_DongNai_A;User Id=ToolEhos;Password=tooltehpt;";
            //model.ConnectionString = "Server=10.84.2.8\\SQLDB;Database=eHospital_DongNai_A_Config;User Id=ToolEhos;Password=tooltehpt;";
            //model.ConnectionString = "Server=10.84.2.8\\SQLDB;Database=eHospital_DongNai_A_Dictionary;User Id=ToolEhos;Password=tooltehpt;";
            //model.ConnectionString = "Server=10.84.2.8\\SQLDB;Database=eHospital_DongNai_A_NSTL;User Id=ToolEhos;Password=tooltehpt;";
            //model.ConnectionString = "Server=10.84.2.8\\SQLDB;Database=eHospital_DongNai_A_System;User Id=ToolEhos;Password=tooltehpt;";            
            //model.SpaceName = "_" + "eHospital_DongNai_A_Config";
            string SpaceName = model.ConnectionString;
            SpaceName = SpaceName.Replace(@"Database=", @"~");
            SpaceName = SpaceName.Split('~')[1];
            SpaceName = SpaceName.Split(';')[0];
            model.SpaceName = "_" + SpaceName;
            //var plainTextBytes = System.Text.Encoding.UTF8.GetBytes(model.ConnectionString);
            //model.Base64Encode = System.Convert.ToBase64String(plainTextBytes);
            //model.Base64Encode = "\u008b®»®ï\u009c º½¬ªòíþ0á÷ûáýáþû÷íô\u0086¡¦»¦®£ï\u008c®»®£ ¨òí\u0081ª¸\u008c ¢ª»\u0090\u0081\u009c\u009b\u0083\u0090\u008eíôº¦«ò¼®ô¿¸«ò\u008c¡»»\u008fþýü";
            //var base64EncodedBytes = System.Convert.FromBase64String(model.Base64Encode);
            //model.Base64Decode = Decrypt_XML(model.Base64Encode);            
            //model.Base64Decode = System.Text.Encoding.UTF8.GetString(base64EncodedBytes);
            return View(model);
        }
        private static string Decrypt_XML(string PasswordData)
        {

            if (Microsoft.VisualBasic.CompilerServices.Operators.CompareString(PasswordData, null, TextCompare: false) == 0 || Microsoft.VisualBasic.CompilerServices.Operators.CompareString(PasswordData, string.Empty, TextCompare: false) == 0)
            {
                return PasswordData;
            }
            string text = string.Empty;
            int num = PasswordData.Length;
            num ^= 0x80;
            checked
            {
                if (num < 32)
                {
                    num += 32;
                }
                else if (num > 254)
                {
                    num = unchecked(num % 254);
                    if (num < 32)
                    {
                        num += 32;
                    }
                }
                int arg_63_0 = 0;
                int num2 = PasswordData.Length - 1;
                for (int i = arg_63_0; i <= num2; i++)
                {
                    text = ((Microsoft.VisualBasic.Strings.AscW(PasswordData.Substring(i, 1)) != num) ? ((Microsoft.VisualBasic.CompilerServices.Operators.CompareString(Microsoft.VisualBasic.CompilerServices.Conversions.ToString(Microsoft.VisualBasic.Strings.ChrW(Microsoft.VisualBasic.Strings.AscW(PasswordData.Substring(i, 1)) ^ num)), "&", TextCompare: false) != 0) ? ((!(((Microsoft.VisualBasic.Strings.AscW(PasswordData.Substring(i, 1)) ^ num) >= 32) & ((Microsoft.VisualBasic.Strings.AscW(PasswordData.Substring(i, 1)) ^ num) <= 254))) ? (text + PasswordData.Substring(i, 1)) : (text + Microsoft.VisualBasic.CompilerServices.Conversions.ToString(Microsoft.VisualBasic.Strings.ChrW(Microsoft.VisualBasic.Strings.AscW(PasswordData.Substring(i, 1)) ^ num)))) : (text + PasswordData.Substring(i, 1))) : (text + PasswordData.Substring(i, 1)));
                }
                return text;
            }
        }
        public List<BaseViewModel> GetTables(string connectionString)
        {
            DataTable listTable = CodeGeneration.GetTableNames(connectionString);
            List<BaseViewModel> listResult = new List<BaseViewModel>();
            foreach (DataRow row in listTable.Rows)
            {
                BaseViewModel baseViewModel = new BaseViewModel();
                baseViewModel.Name = (string)row["Name"];
                listResult.Add(baseViewModel);
            }
            return listResult;
        }
        public List<string> CreateCode(string connectionString, string listIndex, string SpaceName)
        {
            string HTML = "HTML";
            string Now = DateTime.Now.ToString("yyyyMMddHHmm");
            string folderPathRoot = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", Now);
            Directory.CreateDirectory(folderPathRoot);
            bool isFolderExists = System.IO.Directory.Exists(folderPathRoot);
            if (!isFolderExists)
            {
                System.IO.Directory.CreateDirectory(folderPathRoot);
            }
            List<string> list = new List<string>();
            string domain = "http://localhost:5100/";
            DataTable listTable = CodeGeneration.GetTableNames(connectionString);

            StringBuilder ListModel = new StringBuilder();
            StringBuilder ListService = new StringBuilder();
            StringBuilder ListRepository = new StringBuilder();

            for (int i = 0; i < listTable.Rows.Count; i++)
            {
                foreach (string index in listIndex.Split(';'))
                {
                    if (!string.IsNullOrEmpty(index))
                    {
                        if (int.Parse(index) == i)
                        {
                            string className = (string)listTable.Rows[i]["Name"];

                            ListModel.AppendLine(@"public virtual DbSet<" + className + @"> " + className + " { get; set; }");
                            ListService.AppendLine(@"services.AddTransient<I" + className + @"Service, " + className + @"Service>();");
                            ListRepository.AppendLine(@"services.AddTransient<I" + className + @"Repository, " + className + "Repository>();");

                            //Model
                            string content = Path.Combine(_WebHostEnvironment.WebRootPath, HTML, "Model.html");
                            using (FileStream fs = new FileStream(content, FileMode.Open))
                            {
                                using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                                {
                                    content = r.ReadToEnd();
                                }
                            }


                            DataTable dtItems = CodeGeneration.GetTableItems(connectionString, className);
                            StringBuilder modelItems = new StringBuilder();
                            StringBuilder modelAngularItems = new StringBuilder();
                            StringBuilder AngularDisplayColumns001 = new StringBuilder();
                            StringBuilder AngularContainer = new StringBuilder();
                            StringBuilder AngularMobile = new StringBuilder();
                            StringBuilder AngularMobile001 = new StringBuilder();
                            StringBuilder AngularDetail001 = new StringBuilder();
                            StringBuilder AngularDetail002 = new StringBuilder();
                            StringBuilder AngularDetail003 = new StringBuilder();
                            StringBuilder AngularContainerInline = new StringBuilder();
                            StringBuilder AngularContainerInline001 = new StringBuilder();
                            StringBuilder AngularContainerInfo = new StringBuilder();

                            AngularDisplayColumns001.Append(@"DisplayColumns001: string[] = ['Save', 'STT'");

                            int count = dtItems.Rows.Count / 3;
                            int stt = 0;
                            string COLUMN_NAME_First = "";
                            foreach (DataRow row in dtItems.Rows)
                            {
                                string COLUMN_NAME = (string)row["COLUMN_NAME"];
                                string DATA_TYPE = (string)row["DATA_TYPE"];
                                if (stt == 0)
                                {
                                    COLUMN_NAME_First = COLUMN_NAME;
                                }


                                modelItems.AppendLine("public " + CodeGeneration.Convert(DATA_TYPE) + "? " + COLUMN_NAME + " { get; set; }");
                                modelAngularItems.AppendLine(COLUMN_NAME + "?: " + CodeGeneration.ConvertAngular(DATA_TYPE) + ";");

                                AngularDisplayColumns001.Append(@", '" + COLUMN_NAME + @"'");

                                AngularContainer.AppendLine(@"<ng-container matColumnDef=""" + COLUMN_NAME + @""">");
                                AngularContainer.AppendLine(@"<th mat-header-cell *matHeaderCellDef mat-sort-header>" + COLUMN_NAME + "</th>");
                                AngularContainer.AppendLine(@"<td mat-cell *matCellDef=""let element"">{{element." + COLUMN_NAME + @"}}</td>");
                                AngularContainer.AppendLine(@"</ng-container>");

                                AngularContainerInline.AppendLine(@"<ng-container matColumnDef=""" + COLUMN_NAME + @""">");
                                AngularContainerInline.AppendLine(@"<th mat-header-cell *matHeaderCellDef mat-sort-header>" + COLUMN_NAME + "</th>");
                                AngularContainerInline.AppendLine(@"<td mat-cell *matCellDef=""let element""><input class=""form-control"" type=""text"" placeholder=""" + COLUMN_NAME + @""" name=""" + COLUMN_NAME + @""" [(ngModel)]=""element." + COLUMN_NAME + @"""></td>");
                                AngularContainerInline.AppendLine(@"</ng-container>");

                                AngularContainerInline001.AppendLine(@"<ng-container matColumnDef=""" + COLUMN_NAME + @""">");
                                AngularContainerInline001.AppendLine(@"<th mat-header-cell *matHeaderCellDef mat-sort-header>" + COLUMN_NAME + "</th>");
                                AngularContainerInline001.AppendLine(@"<td mat-cell *matCellDef=""let element"">{{element." + COLUMN_NAME + @"}}</td>");
                                AngularContainerInline001.AppendLine(@"</ng-container>");

                                AngularContainerInfo.AppendLine(@"<div>");
                                AngularContainerInfo.AppendLine(@"<label>" + COLUMN_NAME + "</label>");
                                AngularContainerInfo.AppendLine(@"<input placeholder=""" + COLUMN_NAME + @""" [(ngModel)]=""" + className + @"Service.FormData." + COLUMN_NAME + @"""  name=""" + className + @"Service.FormData." + COLUMN_NAME + @""" type=""text"" class=""form-control"">");
                                AngularContainerInfo.AppendLine(@"</div>");

                                AngularMobile.AppendLine(@"<div class=""col-lg-12 col-sm-12 col-12"">");
                                AngularMobile.AppendLine(@"<label>" + COLUMN_NAME + @"</label>");
                                AngularMobile.AppendLine(@"<br />");
                                AngularMobile.AppendLine(@"<input class=""form-control"" type=""text"" placeholder=""" + COLUMN_NAME + @""" name=""" + COLUMN_NAME + @"{{element.ID}}"" [(ngModel)]=""element." + COLUMN_NAME + @""">");
                                AngularMobile.AppendLine(@"</div>");

                                AngularMobile001.AppendLine(@"<div class=""col-lg-12 col-sm-12 col-12"">");
                                AngularMobile001.AppendLine(@"<label>" + COLUMN_NAME + @"</label>");
                                AngularMobile001.AppendLine(@"<br />");
                                AngularMobile001.AppendLine(@"<label class=""form-label"">{{element." + COLUMN_NAME + @"}}</label>");
                                AngularMobile001.AppendLine(@"</div>");

                                if (stt <= count)
                                {
                                    AngularDetail001.AppendLine(@"<div class=""col-lg-12 col-sm-12 col-12"">");
                                    AngularDetail001.AppendLine(@"<label class=""form-label"">" + COLUMN_NAME + @"</label>");
                                    AngularDetail001.AppendLine(@"<input name=""" + COLUMN_NAME + @""" [(ngModel)]=""" + className + @"Service.FormData." + COLUMN_NAME + @""" placeholder=""" + COLUMN_NAME + @""" type=""text"" class=""form-control"">");
                                    AngularDetail001.AppendLine(@"</div>");
                                }

                                if ((stt > count) && (stt <= count * 2))
                                {
                                    AngularDetail002.AppendLine(@"<div class=""col-lg-12 col-sm-12 col-12"">");
                                    AngularDetail002.AppendLine(@"<label class=""form-label"">" + COLUMN_NAME + @"</label>");
                                    AngularDetail002.AppendLine(@"<input name=""" + COLUMN_NAME + @""" [(ngModel)]=""" + className + @"Service.FormData." + COLUMN_NAME + @""" placeholder=""" + COLUMN_NAME + @""" type=""text"" class=""form-control"">");
                                    AngularDetail002.AppendLine(@"</div>");
                                }

                                if ((stt > count * 2) && (stt < dtItems.Rows.Count))
                                {
                                    AngularDetail003.AppendLine(@"<div class=""col-lg-12 col-sm-12 col-12"">");
                                    AngularDetail003.AppendLine(@"<label class=""form-label"">" + COLUMN_NAME + @"</label>");
                                    AngularDetail003.AppendLine(@"<input name=""" + COLUMN_NAME + @""" [(ngModel)]=""" + className + @"Service.FormData." + COLUMN_NAME + @""" placeholder=""" + COLUMN_NAME + @""" type=""text"" class=""form-control"">");
                                    AngularDetail003.AppendLine(@"</div>");
                                }

                                stt = stt + 1;
                            }

                            AngularDisplayColumns001.Append(@"];");

                            content = content.Replace("[ClassName]", className);
                            content = content.Replace("[SpaceName]", SpaceName);
                            content = content.Replace("[Items]", modelItems.ToString());
                            string fileName = className + ".cs";

                            string folderPath = Path.Combine(folderPathRoot, "Model");
                            Directory.CreateDirectory(folderPath);
                            isFolderExists = System.IO.Directory.Exists(folderPath);
                            if (!isFolderExists)
                            {
                                System.IO.Directory.CreateDirectory(folderPath);
                            }
                            string path = Path.Combine(folderPath, fileName);
                            using (FileStream fs = new FileStream(path, FileMode.Create))
                            {
                                using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                                {
                                    w.WriteLine(content);
                                }
                            }

                            //Repository
                            content = Path.Combine(_WebHostEnvironment.WebRootPath, HTML, "Repository.html");
                            using (FileStream fs = new FileStream(content, FileMode.Open))
                            {
                                using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                                {
                                    content = r.ReadToEnd();
                                }
                            }
                            content = content.Replace("[ClassName]", className);
                            content = content.Replace("[SpaceName]", SpaceName);
                            fileName = className + "Repository.cs";

                            folderPath = Path.Combine(folderPathRoot, "Repository", "Implement");
                            Directory.CreateDirectory(folderPath);
                            isFolderExists = System.IO.Directory.Exists(folderPath);
                            if (!isFolderExists)
                            {
                                System.IO.Directory.CreateDirectory(folderPath);
                            }
                            path = Path.Combine(folderPath, fileName);
                            using (FileStream fs = new FileStream(path, FileMode.Create))
                            {
                                using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                                {
                                    w.WriteLine(content);
                                }
                            }

                            //IRepository
                            content = Path.Combine(_WebHostEnvironment.WebRootPath, HTML, "IRepository.html");
                            using (FileStream fs = new FileStream(content, FileMode.Open))
                            {
                                using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                                {
                                    content = r.ReadToEnd();
                                }
                            }
                            content = content.Replace("[ClassName]", className);
                            content = content.Replace("[SpaceName]", SpaceName);
                            fileName = "I" + className + "Repository.cs";

                            folderPath = Path.Combine(folderPathRoot, "Repository", "Interface");
                            Directory.CreateDirectory(folderPath);
                            isFolderExists = System.IO.Directory.Exists(folderPath);
                            if (!isFolderExists)
                            {
                                System.IO.Directory.CreateDirectory(folderPath);
                            }
                            path = Path.Combine(folderPath, fileName);
                            using (FileStream fs = new FileStream(path, FileMode.Create))
                            {
                                using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                                {
                                    w.WriteLine(content);
                                }
                            }

                            //Service
                            content = Path.Combine(_WebHostEnvironment.WebRootPath, HTML, "Service.html");
                            using (FileStream fs = new FileStream(content, FileMode.Open))
                            {
                                using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                                {
                                    content = r.ReadToEnd();
                                }
                            }
                            content = content.Replace("[ClassName]", className);
                            content = content.Replace("[SpaceName]", SpaceName);
                            fileName = className + "Service.cs";

                            folderPath = Path.Combine(folderPathRoot, "Service", "Implement");
                            Directory.CreateDirectory(folderPath);
                            isFolderExists = System.IO.Directory.Exists(folderPath);
                            if (!isFolderExists)
                            {
                                System.IO.Directory.CreateDirectory(folderPath);
                            }
                            path = Path.Combine(folderPath, fileName);
                            using (FileStream fs = new FileStream(path, FileMode.Create))
                            {
                                using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                                {
                                    w.WriteLine(content);
                                }
                            }

                            //IService
                            content = Path.Combine(_WebHostEnvironment.WebRootPath, HTML, "IService.html");
                            using (FileStream fs = new FileStream(content, FileMode.Open))
                            {
                                using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                                {
                                    content = r.ReadToEnd();
                                }
                            }
                            content = content.Replace("[ClassName]", className);
                            content = content.Replace("[SpaceName]", SpaceName);
                            fileName = "I" + className + "Service.cs";

                            folderPath = Path.Combine(folderPathRoot, "Service", "Interface");
                            Directory.CreateDirectory(folderPath);
                            isFolderExists = System.IO.Directory.Exists(folderPath);
                            if (!isFolderExists)
                            {
                                System.IO.Directory.CreateDirectory(folderPath);
                            }
                            path = Path.Combine(folderPath, fileName);
                            using (FileStream fs = new FileStream(path, FileMode.Create))
                            {
                                using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                                {
                                    w.WriteLine(content);
                                }
                            }

                            //Controller
                            content = Path.Combine(_WebHostEnvironment.WebRootPath, HTML, "Controller.html");
                            using (FileStream fs = new FileStream(content, FileMode.Open))
                            {
                                using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                                {
                                    content = r.ReadToEnd();
                                }
                            }
                            content = content.Replace("[ClassName]", className);
                            content = content.Replace("[SpaceName]", SpaceName);
                            fileName = className + "Controller.cs";

                            folderPath = Path.Combine(folderPathRoot, "Controller");
                            Directory.CreateDirectory(folderPath);
                            isFolderExists = System.IO.Directory.Exists(folderPath);
                            if (!isFolderExists)
                            {
                                System.IO.Directory.CreateDirectory(folderPath);
                            }
                            path = Path.Combine(folderPath, fileName);
                            using (FileStream fs = new FileStream(path, FileMode.Create))
                            {
                                using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                                {
                                    w.WriteLine(content);
                                }
                            }

                            //AngularModel
                            content = Path.Combine(_WebHostEnvironment.WebRootPath, HTML, "AngularModel.html");
                            using (FileStream fs = new FileStream(content, FileMode.Open))
                            {
                                using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                                {
                                    content = r.ReadToEnd();
                                }
                            }
                            content = content.Replace("[ClassName]", className);
                            content = content.Replace("[Items]", modelAngularItems.ToString());
                            fileName = className + ".model.ts";

                            folderPath = Path.Combine(folderPathRoot, "Angular", "shared");
                            Directory.CreateDirectory(folderPath);
                            isFolderExists = System.IO.Directory.Exists(folderPath);
                            if (!isFolderExists)
                            {
                                System.IO.Directory.CreateDirectory(folderPath);
                            }
                            path = Path.Combine(folderPath, fileName);
                            using (FileStream fs = new FileStream(path, FileMode.Create))
                            {
                                using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                                {
                                    w.WriteLine(content);
                                }
                            }

                            //AngularService
                            content = Path.Combine(_WebHostEnvironment.WebRootPath, HTML, "AngularService.html");
                            using (FileStream fs = new FileStream(content, FileMode.Open))
                            {
                                using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                                {
                                    content = r.ReadToEnd();
                                }
                            }
                            content = content.Replace("[ClassName]", className);
                            content = content.Replace("[AngularDisplayColumns001]", AngularDisplayColumns001.ToString());
                            fileName = className + ".service.ts";

                            folderPath = Path.Combine(folderPathRoot, "Angular", "shared");
                            Directory.CreateDirectory(folderPath);
                            isFolderExists = System.IO.Directory.Exists(folderPath);
                            if (!isFolderExists)
                            {
                                System.IO.Directory.CreateDirectory(folderPath);
                            }
                            path = Path.Combine(folderPath, fileName);
                            using (FileStream fs = new FileStream(path, FileMode.Create))
                            {
                                using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                                {
                                    w.WriteLine(content);
                                }
                            }

                            ////AngularComponentMaster
                            //content = Path.Combine(_WebHostEnvironment.WebRootPath, HTML, "AngularComponentMaster.html");
                            //using (FileStream fs = new FileStream(content, FileMode.Open))
                            //{
                            //    using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                            //    {
                            //        content = r.ReadToEnd();
                            //    }
                            //}
                            //content = content.Replace("[ClassName]", className);
                            //content = content.Replace("[AngularContainer]", AngularContainer.ToString());
                            //content = content.Replace("[AngularMobile]", AngularMobile.ToString());
                            //fileName = className + ".component.html";

                            //folderPath = Path.Combine(folderPathRoot, "Angular", className);
                            //Directory.CreateDirectory(folderPath);
                            //isFolderExists = System.IO.Directory.Exists(folderPath);
                            //if (!isFolderExists)
                            //{
                            //    System.IO.Directory.CreateDirectory(folderPath);
                            //}
                            //path = Path.Combine(folderPath, fileName);
                            //using (FileStream fs = new FileStream(path, FileMode.Create))
                            //{
                            //    using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                            //    {
                            //        w.WriteLine(content);
                            //    }
                            //}

                            ////AngularComponentMasterTypescript
                            //content = Path.Combine(_WebHostEnvironment.WebRootPath, HTML, "AngularComponentMasterTypescript.html");
                            //using (FileStream fs = new FileStream(content, FileMode.Open))
                            //{
                            //    using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                            //    {
                            //        content = r.ReadToEnd();
                            //    }
                            //}
                            //content = content.Replace("[ClassName]", className);
                            //fileName = className + ".component.ts";

                            //folderPath = Path.Combine(folderPathRoot, "Angular", className);
                            //Directory.CreateDirectory(folderPath);
                            //isFolderExists = System.IO.Directory.Exists(folderPath);
                            //if (!isFolderExists)
                            //{
                            //    System.IO.Directory.CreateDirectory(folderPath);
                            //}
                            //path = Path.Combine(folderPath, fileName);
                            //using (FileStream fs = new FileStream(path, FileMode.Create))
                            //{
                            //    using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                            //    {
                            //        w.WriteLine(content);
                            //    }
                            //}

                            ////AngularComponentDetail
                            //content = Path.Combine(_WebHostEnvironment.WebRootPath, HTML, "AngularComponentDetail.html");
                            //using (FileStream fs = new FileStream(content, FileMode.Open))
                            //{
                            //    using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                            //    {
                            //        content = r.ReadToEnd();
                            //    }
                            //}
                            //content = content.Replace("[ClassName]", className);
                            //content = content.Replace("[AngularDetail001]", AngularDetail001.ToString());
                            //content = content.Replace("[AngularDetail002]", AngularDetail002.ToString());
                            //content = content.Replace("[AngularDetail003]", AngularDetail003.ToString());
                            //fileName = className + "-detail.component.html";

                            //folderPath = Path.Combine(folderPathRoot, "Angular", className);
                            //Directory.CreateDirectory(folderPath);
                            //isFolderExists = System.IO.Directory.Exists(folderPath);
                            //if (!isFolderExists)
                            //{
                            //    System.IO.Directory.CreateDirectory(folderPath);
                            //}
                            //path = Path.Combine(folderPath, fileName);
                            //using (FileStream fs = new FileStream(path, FileMode.Create))
                            //{
                            //    using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                            //    {
                            //        w.WriteLine(content);
                            //    }
                            //}

                            ////AngularComponentDetailTypescript
                            //content = Path.Combine(_WebHostEnvironment.WebRootPath, HTML, "AngularComponentDetailTypescript.html");
                            //using (FileStream fs = new FileStream(content, FileMode.Open))
                            //{
                            //    using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                            //    {
                            //        content = r.ReadToEnd();
                            //    }
                            //}
                            //content = content.Replace("[ClassName]", className);
                            //fileName = className + "-detail.component.ts";

                            //folderPath = Path.Combine(folderPathRoot, "Angular", className);
                            //Directory.CreateDirectory(folderPath);
                            //isFolderExists = System.IO.Directory.Exists(folderPath);
                            //if (!isFolderExists)
                            //{
                            //    System.IO.Directory.CreateDirectory(folderPath);
                            //}
                            //path = Path.Combine(folderPath, fileName);
                            //using (FileStream fs = new FileStream(path, FileMode.Create))
                            //{
                            //    using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                            //    {
                            //        w.WriteLine(content);
                            //    }
                            //}

                            //AngularComponentInline
                            content = Path.Combine(_WebHostEnvironment.WebRootPath, HTML, "AngularComponentInline.html");
                            using (FileStream fs = new FileStream(content, FileMode.Open))
                            {
                                using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                                {
                                    content = r.ReadToEnd();
                                }
                            }
                            content = content.Replace("[ClassName]", className);
                            content = content.Replace("[AngularContainer]", AngularContainerInline.ToString());
                            content = content.Replace("[AngularMobile]", AngularMobile.ToString());
                            fileName = className + ".component.html";

                            folderPath = Path.Combine(folderPathRoot, "Angular", className);
                            Directory.CreateDirectory(folderPath);
                            isFolderExists = System.IO.Directory.Exists(folderPath);
                            if (!isFolderExists)
                            {
                                System.IO.Directory.CreateDirectory(folderPath);
                            }
                            path = Path.Combine(folderPath, fileName);
                            using (FileStream fs = new FileStream(path, FileMode.Create))
                            {
                                using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                                {
                                    w.WriteLine(content);
                                }
                            }

                            content = Path.Combine(_WebHostEnvironment.WebRootPath, HTML, "AngularComponentInline.html");
                            using (FileStream fs = new FileStream(content, FileMode.Open))
                            {
                                using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                                {
                                    content = r.ReadToEnd();
                                }
                            }
                            content = content.Replace("[ClassName]", className);
                            content = content.Replace("[AngularContainer]", AngularContainerInline001.ToString());
                            content = content.Replace("[AngularMobile]", AngularMobile001.ToString());
                            fileName = className + "001.component.html";

                            folderPath = Path.Combine(folderPathRoot, "Angular", className);
                            Directory.CreateDirectory(folderPath);
                            isFolderExists = System.IO.Directory.Exists(folderPath);
                            if (!isFolderExists)
                            {
                                System.IO.Directory.CreateDirectory(folderPath);
                            }
                            path = Path.Combine(folderPath, fileName);
                            using (FileStream fs = new FileStream(path, FileMode.Create))
                            {
                                using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                                {
                                    w.WriteLine(content);
                                }
                            }

                            //AngularComponentInlineTypescript
                            content = Path.Combine(_WebHostEnvironment.WebRootPath, HTML, "AngularComponentInlineTypescript.html");
                            using (FileStream fs = new FileStream(content, FileMode.Open))
                            {
                                using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                                {
                                    content = r.ReadToEnd();
                                }
                            }
                            content = content.Replace("[ClassName]", className);
                            string SpaceNameSub = SpaceName;
                            if (!string.IsNullOrEmpty(SpaceNameSub))
                            {
                                SpaceNameSub = SpaceNameSub + "/";
                                SpaceNameSub = SpaceNameSub.Substring(1);
                            }
                            content = content.Replace("[SpaceName]", SpaceNameSub);
                            fileName = className + ".component.ts";

                            folderPath = Path.Combine(folderPathRoot, "Angular", className);
                            Directory.CreateDirectory(folderPath);
                            isFolderExists = System.IO.Directory.Exists(folderPath);
                            if (!isFolderExists)
                            {
                                System.IO.Directory.CreateDirectory(folderPath);
                            }
                            path = Path.Combine(folderPath, fileName);
                            using (FileStream fs = new FileStream(path, FileMode.Create))
                            {
                                using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                                {
                                    w.WriteLine(content);
                                }
                            }

                            //AngularComponentInfo
                            content = Path.Combine(_WebHostEnvironment.WebRootPath, HTML, "AngularComponentInfo.html");
                            using (FileStream fs = new FileStream(content, FileMode.Open))
                            {
                                using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                                {
                                    content = r.ReadToEnd();
                                }
                            }
                            content = content.Replace("[ClassName]", className);
                            content = content.Replace("[SpaceName]", SpaceNameSub);
                            content = content.Replace("[ColumnName]", COLUMN_NAME_First);
                            content = content.Replace("[AngularContainer]", AngularContainerInfo.ToString());
                            fileName = className + "Info.component.html";

                            folderPath = Path.Combine(folderPathRoot, "Angular", className);
                            Directory.CreateDirectory(folderPath);
                            isFolderExists = System.IO.Directory.Exists(folderPath);
                            if (!isFolderExists)
                            {
                                System.IO.Directory.CreateDirectory(folderPath);
                            }
                            path = Path.Combine(folderPath, fileName);
                            using (FileStream fs = new FileStream(path, FileMode.Create))
                            {
                                using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                                {
                                    w.WriteLine(content);
                                }
                            }

                            //AngularComponentInfoTypescript
                            content = Path.Combine(_WebHostEnvironment.WebRootPath, HTML, "AngularComponentInfoTypescript.html");
                            using (FileStream fs = new FileStream(content, FileMode.Open))
                            {
                                using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                                {
                                    content = r.ReadToEnd();
                                }
                            }
                            content = content.Replace("[ClassName]", className);
                            content = content.Replace("[SpaceName]", SpaceNameSub);
                            content = content.Replace("[ColumnName]", COLUMN_NAME_First);
                            fileName = className + "Info.component.ts";

                            folderPath = Path.Combine(folderPathRoot, "Angular", className);
                            Directory.CreateDirectory(folderPath);
                            isFolderExists = System.IO.Directory.Exists(folderPath);
                            if (!isFolderExists)
                            {
                                System.IO.Directory.CreateDirectory(folderPath);
                            }
                            path = Path.Combine(folderPath, fileName);
                            using (FileStream fs = new FileStream(path, FileMode.Create))
                            {
                                using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                                {
                                    w.WriteLine(content);
                                }
                            }
                        }
                    }
                }
            }


            //Context
            string content001 = Path.Combine(_WebHostEnvironment.WebRootPath, HTML, "Context.html");
            using (FileStream fs = new FileStream(content001, FileMode.Open))
            {
                using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                {
                    content001 = r.ReadToEnd();
                }
            }
            content001 = content001.Replace("[ListModel]", ListModel.ToString());
            content001 = content001.Replace("[SpaceName]", SpaceName);
            string fileName001 = "Context.cs";

            string folderPath001 = Path.Combine(folderPathRoot);
            Directory.CreateDirectory(folderPath001);
            isFolderExists = System.IO.Directory.Exists(folderPath001);
            if (!isFolderExists)
            {
                System.IO.Directory.CreateDirectory(folderPath001);
            }
            string path001 = Path.Combine(folderPath001, fileName001);
            using (FileStream fs = new FileStream(path001, FileMode.Create))
            {
                using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                {
                    w.WriteLine(content001);
                }
            }

            //ConfigureService
            content001 = Path.Combine(_WebHostEnvironment.WebRootPath, HTML, "ConfigureService.html");
            using (FileStream fs = new FileStream(content001, FileMode.Open))
            {
                using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                {
                    content001 = r.ReadToEnd();
                }
            }
            content001 = content001.Replace("[ListService]", ListService.ToString());
            content001 = content001.Replace("[ListRepository]", ListRepository.ToString());
            content001 = content001.Replace("[SpaceName]", SpaceName);
            fileName001 = "ConfigureService.cs";

            folderPath001 = Path.Combine(folderPathRoot);
            Directory.CreateDirectory(folderPath001);
            isFolderExists = System.IO.Directory.Exists(folderPath001);
            if (!isFolderExists)
            {
                System.IO.Directory.CreateDirectory(folderPath001);
            }
            path001 = Path.Combine(folderPath001, fileName001);
            using (FileStream fs = new FileStream(path001, FileMode.Create))
            {
                using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                {
                    w.WriteLine(content001);
                }
            }


            string fileNameZIP = Now + ".zip";
            string inputPath = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", Now);
            string outPath = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", fileNameZIP);

            if (System.IO.File.Exists(outPath))
            {
                try
                {
                    System.IO.File.Delete(outPath);
                }
                catch (Exception ex)
                {
                    string mes = ex.Message;
                }
            }
            ZipFile.CreateFromDirectory(inputPath, outPath, CompressionLevel.Fastest, true);
            outPath = domain + "Download/" + fileNameZIP;
            list.Add(outPath);
            return list;
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}