

using KingdomCodeTool.ViewModels;
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
            model.ConnectionString = "Persist Security Info=True;User ID=sa;Password=Sonheo@123;database=BenhVienDaKhoaDongNai2025;data source=14.225.254.64,1433;Connection Timeout=30;";
            return View(model);
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
        public List<string> CreateCode(string connectionString, string listIndex)
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
            for (int i = 0; i < listTable.Rows.Count; i++)
            {
                foreach (string index in listIndex.Split(';'))
                {
                    if (!string.IsNullOrEmpty(index))
                    {
                        if (int.Parse(index) == i)
                        {
                            string className = (string)listTable.Rows[i]["Name"];

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
                            StringBuilder AngularDetail001 = new StringBuilder();
                            StringBuilder AngularDetail002 = new StringBuilder();
                            StringBuilder AngularDetail003 = new StringBuilder();

                            AngularDisplayColumns001.Append(@"DisplayColumns001: string[] = ['Save', 'STT'");

                            int count = dtItems.Rows.Count / 3;
                            int stt = 0;
                            foreach (DataRow row in dtItems.Rows)
                            {
                                string COLUMN_NAME = (string)row["COLUMN_NAME"];
                                string DATA_TYPE = (string)row["DATA_TYPE"];

                                modelItems.AppendLine("public " + CodeGeneration.Convert(DATA_TYPE) + "? " + COLUMN_NAME + " { get; set; }");
                                modelAngularItems.AppendLine(COLUMN_NAME + "?: " + CodeGeneration.ConvertAngular(DATA_TYPE) + ";");

                                AngularDisplayColumns001.Append(@", '" + COLUMN_NAME + @"'");

                                AngularContainer.AppendLine(@"<ng-container matColumnDef=""" + COLUMN_NAME + @""">");
                                AngularContainer.AppendLine(@"<th mat-header-cell *matHeaderCellDef mat-sort-header>" + COLUMN_NAME + "</th>");
                                AngularContainer.AppendLine(@"<td mat-cell *matCellDef=""let element"">{{element." + COLUMN_NAME + @"}}</td>");
                                AngularContainer.AppendLine(@"</ng-container>");

                                AngularMobile.AppendLine(@"<div class=""col-lg-12 col-sm-12 col-12"">");
                                AngularMobile.AppendLine(@"<label>" + COLUMN_NAME + @"</label>");
                                AngularMobile.AppendLine(@"<br />");
                                AngularMobile.AppendLine(@"<label class=""form-label"">{{element." + COLUMN_NAME + @"}}</label>");
                                AngularMobile.AppendLine(@"</div>");

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
                                    AngularDetail003.AppendLine(@"<input name=""" + COLUMN_NAME + @""" [(ngModel)]="""+ className + @"Service.FormData." + COLUMN_NAME + @""" placeholder=""" + COLUMN_NAME + @""" type=""text"" class=""form-control"">");
                                    AngularDetail003.AppendLine(@"</div>");
                                }

                                stt = stt + 1;
                            }

                            AngularDisplayColumns001.Append(@"];");

                            content = content.Replace("[ClassName]", className);
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

                            //AngularComponentMaster
                            content = Path.Combine(_WebHostEnvironment.WebRootPath, HTML, "AngularComponentMaster.html");
                            using (FileStream fs = new FileStream(content, FileMode.Open))
                            {
                                using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                                {
                                    content = r.ReadToEnd();
                                }
                            }
                            content = content.Replace("[ClassName]", className);
                            content = content.Replace("[AngularContainer]", AngularContainer.ToString());
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

                            //AngularComponentMasterTypescript
                            content = Path.Combine(_WebHostEnvironment.WebRootPath, HTML, "AngularComponentMasterTypescript.html");
                            using (FileStream fs = new FileStream(content, FileMode.Open))
                            {
                                using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                                {
                                    content = r.ReadToEnd();
                                }
                            }
                            content = content.Replace("[ClassName]", className);
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

                            //AngularComponentDetail
                            content = Path.Combine(_WebHostEnvironment.WebRootPath, HTML, "AngularComponentDetail.html");
                            using (FileStream fs = new FileStream(content, FileMode.Open))
                            {
                                using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                                {
                                    content = r.ReadToEnd();
                                }
                            }
                            content = content.Replace("[ClassName]", className);
                            content = content.Replace("[AngularDetail001]", AngularDetail001.ToString());
                            content = content.Replace("[AngularDetail002]", AngularDetail002.ToString());
                            content = content.Replace("[AngularDetail003]", AngularDetail003.ToString());
                            fileName = className + "-detail.component.html";

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

                            //AngularComponentDetailTypescript
                            content = Path.Combine(_WebHostEnvironment.WebRootPath, HTML, "AngularComponentDetailTypescript.html");
                            using (FileStream fs = new FileStream(content, FileMode.Open))
                            {
                                using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                                {
                                    content = r.ReadToEnd();
                                }
                            }
                            content = content.Replace("[ClassName]", className);
                            fileName = className + "-detail.component.ts";

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