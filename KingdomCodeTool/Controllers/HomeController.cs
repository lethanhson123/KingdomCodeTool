

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
            model.ConnectionString = "Persist Security Info=True;User ID=sa;Password=Kingdom@123;database=thontrang;data source=DESKTOP-GSA5N0F";
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
            List<string> list=new List<string>();
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

                            string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", className);
                            Directory.CreateDirectory(folderPath);

                            //Model
                            string content = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", "Model.html");
                            using (FileStream fs = new FileStream(content, FileMode.Open))
                            {
                                using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                                {
                                    content = r.ReadToEnd();
                                }
                            }
                            content = content.Replace("[ClassName]", className);
                            string fileName = className + ".cs";
                            string path = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", className, fileName);
                            using (FileStream fs = new FileStream(path, FileMode.Create))
                            {
                                using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                                {
                                    w.WriteLine(content);
                                }
                            }

                            //Repository
                            content = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", "Repository.html");
                            using (FileStream fs = new FileStream(content, FileMode.Open))
                            {
                                using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                                {
                                    content = r.ReadToEnd();
                                }
                            }
                            content = content.Replace("[ClassName]", className);
                            fileName = className + "Repository.cs";
                            path = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", className, fileName);
                            using (FileStream fs = new FileStream(path, FileMode.Create))
                            {
                                using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                                {
                                    w.WriteLine(content);
                                }
                            }

                            //IRepository
                            content = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", "IRepository.html");
                            using (FileStream fs = new FileStream(content, FileMode.Open))
                            {
                                using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                                {
                                    content = r.ReadToEnd();
                                }
                            }
                            content = content.Replace("[ClassName]", className);
                            fileName = "I" + className + "Repository.cs";
                            path = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", className, fileName);
                            using (FileStream fs = new FileStream(path, FileMode.Create))
                            {
                                using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                                {
                                    w.WriteLine(content);
                                }
                            }

                            //Service
                            content = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", "Service.html");
                            using (FileStream fs = new FileStream(content, FileMode.Open))
                            {
                                using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                                {
                                    content = r.ReadToEnd();
                                }
                            }
                            content = content.Replace("[ClassName]", className);
                            fileName = className + "Service.cs";
                            path = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", className, fileName);
                            using (FileStream fs = new FileStream(path, FileMode.Create))
                            {
                                using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                                {
                                    w.WriteLine(content);
                                }
                            }

                            //IService
                            content = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", "IService.html");
                            using (FileStream fs = new FileStream(content, FileMode.Open))
                            {
                                using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                                {
                                    content = r.ReadToEnd();
                                }
                            }
                            content = content.Replace("[ClassName]", className);
                            fileName = "I" + className + "Service.cs";
                            path = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", className, fileName);
                            using (FileStream fs = new FileStream(path, FileMode.Create))
                            {
                                using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                                {
                                    w.WriteLine(content);
                                }
                            }

                            //Controller
                            content = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", "Controller.html");
                            using (FileStream fs = new FileStream(content, FileMode.Open))
                            {
                                using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                                {
                                    content = r.ReadToEnd();
                                }
                            }
                            content = content.Replace("[ClassName]", className);
                            fileName = className + "Controller.cs";
                            path = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", className, fileName);
                            using (FileStream fs = new FileStream(path, FileMode.Create))
                            {
                                using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                                {
                                    w.WriteLine(content);
                                }
                            }

                            string fileNameZIP = className + ".zip";
                            string inputPath = Path.Combine(_WebHostEnvironment.WebRootPath, "Download", className);
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
                        }
                    }
                }
            }
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