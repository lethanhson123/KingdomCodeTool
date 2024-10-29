namespace KingdomCodeTool.ViewModels
{
    public class CodeGeneration
    {
        CodeGenerationDB codeGenerationDB = new CodeGenerationDB();

        //************************BEGIN**************************
        //Function Construtor: CodeGeneration read ConnectionString from CodeGenerationDB 
        public CodeGeneration(string connectionString)
        {
            codeGenerationDB.ConnectionString = connectionString;
        }

        //************************BEGIN**************************
        //Function Construtor: Null
        public CodeGeneration()
        {
        }

        //************************BEGIN**************************
        //Get Table Name from DataBase
        public static DataTable GetTableNames(string connectionString)
        {
            return CodeGenerationDB.GetTableNames(connectionString);
        }

        //************************BEGIN**************************
        //Get Table Column Name from Table by Table Name
        public static DataTable GetTableItems(string connectionString, string tableName)
        {
            return CodeGenerationDB.GetTableItems(connectionString, tableName);
        }

        //************************BEGIN**************************
        //Get Data Type of Table Column and Convert Data Type from SQL Server to C# by Key and Table Name
        private string KeyType(string connectionString, string tableName,string key)
        {
            string keyType = "";
            DataTable dataTable = CodeGenerationDB.GetTableItems(connectionString, tableName);
            foreach (DataRow row in dataTable.Rows)
            {
                if (row["COLUMN_NAME"].ToString() == key)
                {
                    keyType = row["DATA_TYPE"].ToString();
                }
            }

            return Convert(keyType);
        }

        //************************BEGIN**************************
        //Convert DataType from SQL Server to C#
        public static string Convert(string sqlDataType)
        {
            switch (sqlDataType)
            {
                case "char":
                case "nchar":
                case "ntext":
                case "text":
                case "varchar":
                case "nvarchar":
                    return "string";
                case "bit":
                    return "bool";
                case "int":
                case "smallint":
                case "tinyint":                
                    return "int";
                case "bigint":
                    return "long";
                case "datetime":
                case "smalldatetime":
                case "timestamp":
                    return "DateTime";
                case "real":
                    return "double";
                case "money":
                case "smallmoney":
                case "decimal":
                    return "decimal";
                case "float":
                    return "float";
                case "uniqueidentifier":
                    return "Guid";
                default: return "string";
            }
        }
        public static string ConvertAngular(string sqlDataType)
        {
            switch (sqlDataType)
            {
                case "char":
                case "nchar":
                case "ntext":
                case "text":
                case "varchar":
                case "nvarchar":
                    return "string";
                case "bit":
                    return "boolean";
                case "int":
                case "smallint":
                case "tinyint":
                    return "number";
                case "bigint":
                    return "number";
                case "datetime":
                case "smalldatetime":
                case "timestamp":
                    return "Date";
                case "real":
                    return "number";
                case "money":
                case "smallmoney":
                case "decimal":
                    return "number";
                case "float":
                    return "number";
                case "uniqueidentifier":
                    return "string";
                default: return "string";
            }
        }

        private string ConvertType(string sqlDataType)
        {
            switch (sqlDataType)
            {
                case "char":
                case "nchar":
                case "ntext":
                case "text":
                case "varchar":
                case "nvarchar":
                    return "InitializationString";
                case "bit":
                    return "InitializationBoolean";
                case "int":
                case "smallint":
                case "tinyint":
                case "bigint":
                    return "InitializationInt";
                case "datetime":
                case "smalldatetime":
                case "timestamp":
                    return "InitializationDateTime";
                case "real":
                    return "InitializationInt";
                case "money":
                case "smallmoney":
                case "decimal":
                    return "InitializationInt";
                case "float":
                    return "InitializationInt";
                case "uniqueidentifier":
                    return "Guid";
                default: return "InitializationString";
            }

        }

        //************************BEGIN**************************
        //Correct charrater first of Data Type SQL Server
        private string ConvertToSqlDBType(string sqlDataType)
        {
            switch (sqlDataType)
            {
                case "nchar":
                    return "NChar";
                case "nvarchar":
                    return "NVarChar";
                case "varchar":
                    return "VarChar";
                case "ntext":
                    return "NText";
                case "text":
                    return "Text";
                case "money":
                    return "Money";
                case "bit":
                    return "Bit";
                case "int":
                    return "Int";
                case "real":
                    return "Real";
                case "float":
                    return "Float";
                case "datetime":
                    return "DateTime";
                case "uniqueidentifier":
                    return "UniqueIdentifier";
                case "decimal":
                    return "Decimal";
                default: return "NChar";
            }
        }

        private string ConvertGenerateBusinessConstrutors(string dataType)
        {
            switch (dataType)
            {
                case "string":
                    return @"""""";
                case "DateTime":
                    return "DateTime.Now";
                case "bool":
                    return "true";
                default: return "0";
            }
        }

        public StringBuilder GenerateModelFile(string nameClass, string nameSpace, string tableName,
            DataTable dataTable, string key)
        {
            StringBuilder modelString = new StringBuilder();
            modelString.AppendLine("using System;");
            modelString.AppendLine("using System.Collections.Generic;");
            modelString.AppendLine("using System.ComponentModel.DataAnnotations;");
            modelString.AppendLine("using System.Data;");
            modelString.AppendLine("using System.Data.SqlClient;");
            modelString.AppendLine("using System.Linq;");
            modelString.AppendLine("using System.Threading.Tasks;");

            modelString.AppendLine("namespace " + nameSpace);
            modelString.AppendLine("{");
            modelString.AppendLine("public class " + nameClass);
            modelString.AppendLine("{");

            modelString.AppendLine(" #region Attributes - Properties");

            foreach (DataRow row in dataTable.Rows)
            {
                string type = Convert(row["DATA_TYPE"].ToString());
                modelString.AppendLine("    private " + type + " _" +
                                       row["COLUMN_NAME"].ToString().Substring(0, 1).ToLower() +
                                       row["COLUMN_NAME"].ToString()
                                           .Substring(1, row["COLUMN_NAME"].ToString().Length - 1) + ";");
                switch (type)
                {
                    case "DateTime":
                        modelString.AppendLine(@"[DataType(DataType.Date)]");
                        modelString.AppendLine(@"[DisplayFormat(DataFormatString = ""{0:dd/MM/yyyy}"", ApplyFormatInEditMode = true)]");
                        break;
                    case "decimal":
                    case "int":
                        modelString.AppendLine(@"[DisplayFormat(DataFormatString = ""{0:N0}"", ApplyFormatInEditMode = true)]");
                        break;
                    default:
                        break;
                }
                modelString.AppendLine("    public " + type + " " +
                                       row["COLUMN_NAME"].ToString().Substring(0, 1).ToUpper() +
                                       row["COLUMN_NAME"].ToString()
                                           .Substring(1, row["COLUMN_NAME"].ToString().Length - 1));
                modelString.AppendLine("    {");
                modelString.AppendLine("        get{ return " + " _" +
                                       row["COLUMN_NAME"].ToString().Substring(0, 1).ToLower() +
                                       row["COLUMN_NAME"].ToString()
                                           .Substring(1, row["COLUMN_NAME"].ToString().Length - 1) + ";}");
                modelString.AppendLine("        set{ " + " _" +
                                       row["COLUMN_NAME"].ToString().Substring(0, 1).ToLower() +
                                       row["COLUMN_NAME"].ToString()
                                           .Substring(1, row["COLUMN_NAME"].ToString().Length - 1) + " = value ;}");
                modelString.AppendLine("}");
            }

            modelString.AppendLine("#endregion");

            modelString.AppendLine("#region Construtors");
            modelString.AppendLine("public " + nameClass + "()");
            modelString.AppendLine("{");
            foreach (DataRow row in dataTable.Rows)
            {

                string columType = ConvertType(row["DATA_TYPE"].ToString());

                modelString.AppendLine(" _" + row["COLUMN_NAME"].ToString().Substring(0, 1).ToLower() +
                                       row["COLUMN_NAME"].ToString()
                                           .Substring(1, row["COLUMN_NAME"].ToString().Length - 1) +
                                       " = " + nameSpace + ".CGlobal." + columType + ";");
            }

            modelString.AppendLine("}");
            modelString.AppendLine("#endregion");

            modelString.AppendLine("#region Functions");

            modelString.AppendLine("public static DataTable GetAll()");
            modelString.AppendLine("{");
            modelString.AppendLine(@" DataTable dt= " + nameSpace + @".SqlHelper.Fill(SqlHelper.SDLLCConnectionString, ""sp_" + nameClass + @"SelectAll"");");
            modelString.AppendLine("return dt;");
            modelString.AppendLine("}");

            modelString.AppendLine("public static async Task<DataTable> AsyncGetAll()");
            modelString.AppendLine("{");
            modelString.AppendLine(@" DataTable dt= await " + nameSpace + @".SqlHelper.FillAsync(SqlHelper.SDLLCConnectionString, ""sp_" + nameClass + @"SelectAll"");");
            modelString.AppendLine("return dt;");
            modelString.AppendLine("}");

            modelString.AppendLine("public static List<" + nameClass + "> GetAllToList()");
            modelString.AppendLine("{");
            modelString.AppendLine(@" DataTable dt= GetAll();");
            modelString.AppendLine("List<" + nameClass + "> result = " + nameSpace + ".SqlHelper.ToList<" + nameClass + ">(dt);");
            modelString.AppendLine("return result;");
            modelString.AppendLine("}");

            modelString.AppendLine("public static async Task<List<" + nameClass + ">> AsyncGetAllToList()");
            modelString.AppendLine("{");
            modelString.AppendLine(@"DataTable dt = await AsyncGetAll();");
            modelString.AppendLine("List < " + nameClass + " > result = " + nameSpace + ".SqlHelper.ToList<" + nameClass + ">(dt);");
            modelString.AppendLine("return result;");
            modelString.AppendLine("}");

            modelString.AppendLine("public static IEnumerable<" + nameClass + "> GetAllToIEnumerable()");
            modelString.AppendLine("{");
            modelString.AppendLine(@" DataTable dt= GetAll();");
            modelString.AppendLine("IEnumerable<" + nameClass + "> result = " + nameSpace + ".SqlHelper.ToEnumerable<" + nameClass + ">(dt);");
            modelString.AppendLine("return result;");
            modelString.AppendLine("}");

            modelString.AppendLine("public static async Task<IEnumerable<" + nameClass + ">> AsyncGetAllToIEnumerable()");
            modelString.AppendLine("{");
            modelString.AppendLine(@"DataTable dt = await AsyncGetAll();");
            modelString.AppendLine("IEnumerable < " + nameClass + " > result = " + nameSpace + ".SqlHelper.ToEnumerable<" + nameClass + ">(dt);");
            modelString.AppendLine("return result;");
            modelString.AppendLine("}");

            //Delete
            string typeKey = "string";
            foreach (DataRow row in dataTable.Rows)
            {

                string columType = Convert(row["DATA_TYPE"].ToString());

                string columName = row["COLUMN_NAME"].ToString().Substring(0, 1).ToUpper() +
                                                      row["COLUMN_NAME"].ToString().Substring(1, row["COLUMN_NAME"].ToString().Length - 1);
                if (key.Equals(columName))
                    typeKey = columType;
            }

            modelString.AppendLine("public static " + nameClass + " GetById(" + typeKey + " " + key + " = 0)");
            modelString.AppendLine("{");
            modelString.AppendLine("SqlParameter[] parameters =");
            modelString.AppendLine("{");
            modelString.AppendLine(@"new SqlParameter(""@" + key + @"""," + key + "),");
            modelString.AppendLine("};");
            modelString.AppendLine(@" DataTable dt= " + nameSpace + @".SqlHelper.Fill(SqlHelper.SDLLCConnectionString, ""sp_" +
                                   nameClass + @"SelectById"", parameters);");
            modelString.AppendLine(@"List<" + nameClass + "> result = " + nameSpace + ".SqlHelper.ToList<" + nameClass + ">(dt);");
            modelString.AppendLine(@"" + nameClass + " " + nameClass + " = new " + nameClass + "();");
            modelString.AppendLine(@"if(result.Count>0)");
            modelString.AppendLine(@"{");
            modelString.AppendLine(@"" + nameClass + " = result[0];");
            modelString.AppendLine(@"}");
            modelString.AppendLine("return " + nameClass + ";");
            modelString.AppendLine("}");

            modelString.AppendLine("public static async Task<" + nameClass + "> AsyncGetById(" + typeKey + " " + key + " = 0)");
            modelString.AppendLine("{");
            modelString.AppendLine("SqlParameter[] parameters =");
            modelString.AppendLine("{");
            modelString.AppendLine(@"new SqlParameter(""@" + key + @"""," + key + "),");
            modelString.AppendLine("};");
            modelString.AppendLine(@" DataTable dt= await " + nameSpace + @".SqlHelper.FillAsync(SqlHelper.SDLLCConnectionString, ""sp_" +
                                   nameClass + @"SelectById"", parameters);");
            modelString.AppendLine(@"List<" + nameClass + "> result = " + nameSpace + ".SqlHelper.ToList<" + nameClass + ">(dt);");
            modelString.AppendLine(@"" + nameClass + " " + nameClass + " = new " + nameClass + "();");
            modelString.AppendLine(@"if(result.Count>0)");
            modelString.AppendLine(@"{");
            modelString.AppendLine(@"" + nameClass + " = result[0];");
            modelString.AppendLine(@"}");
            modelString.AppendLine("return " + nameClass + ";");
            modelString.AppendLine("}");

            modelString.AppendLine("public static string Delete(" + typeKey + " " + key + " = 0)");
            modelString.AppendLine("{");
            modelString.AppendLine("SqlParameter[] parameters =");
            modelString.AppendLine("{");
            modelString.AppendLine(@"new SqlParameter(""@" + key + @"""," + key + "),");
            modelString.AppendLine("};");
            modelString.AppendLine(@"string result =  " + nameSpace + @".SqlHelper.ExecuteNonQuery(SqlHelper.SDLLCConnectionString,""sp_" +
                                   tableName + @"Delete"", parameters);");
            modelString.AppendLine(@"return result;");
            modelString.AppendLine("}");

            modelString.AppendLine("public static async Task<string> AsyncDelete(" + typeKey + " " + key + " = 0)");
            modelString.AppendLine("{");
            modelString.AppendLine("SqlParameter[] parameters =");
            modelString.AppendLine("{");
            modelString.AppendLine(@"new SqlParameter(""@" + key + @"""," + key + "),");
            modelString.AppendLine("};");
            modelString.AppendLine(@"string result = await " + nameSpace + @".SqlHelper.ExecuteNonQueryAsync(SqlHelper.SDLLCConnectionString,""sp_" +
                                   tableName + @"Delete"", parameters);");
            modelString.AppendLine(@"return result;");
            modelString.AppendLine("}");

            string objectModel = nameClass.ToString().Substring(0, 1).ToLower() +
                                 nameClass.ToString().Substring(1, nameClass.ToString().Length - 1);

            //Insert
            modelString.AppendLine("public static string Insert(" + nameClass + " " + objectModel + " )");
            modelString.AppendLine("{");
            modelString.AppendLine(@"Initialization(" + objectModel + ");");
            modelString.AppendLine("SqlParameter[] parameters =");
            modelString.AppendLine("{");
            foreach (DataRow row in dataTable.Rows)
            {
                string columName = row["COLUMN_NAME"].ToString().Substring(0, 1).ToUpper() +
                                   row["COLUMN_NAME"].ToString().Substring(1, row["COLUMN_NAME"].ToString().Length - 1);
                modelString.AppendLine(@"new SqlParameter(""@" + columName + @"""," + objectModel + "." + columName + "),");
            }
            modelString.AppendLine("};");
            modelString.AppendLine(@"string result = " + nameSpace + @".SqlHelper.ExecuteNonQuery(SqlHelper.SDLLCConnectionString,""sp_" +
                                   tableName + @"Insert"", parameters);");
            modelString.AppendLine(@"return result;");
            modelString.AppendLine("}");

            modelString.AppendLine("public  static async Task<string> AsyncInsert(" + nameClass + " " + objectModel +
                                   " )");
            modelString.AppendLine("{");
            modelString.AppendLine(@"Initialization(" + objectModel + ");");
            modelString.AppendLine("SqlParameter[] parameters =");
            modelString.AppendLine("{");
            foreach (DataRow row in dataTable.Rows)
            {
                string columName = row["COLUMN_NAME"].ToString().Substring(0, 1).ToUpper() +
                                   row["COLUMN_NAME"].ToString().Substring(1, row["COLUMN_NAME"].ToString().Length - 1);
                modelString.AppendLine(@"new SqlParameter(""@" + columName + @"""," + objectModel + "." + columName + "),");

            }

            modelString.AppendLine("};");
            modelString.AppendLine(@"string result = await " + nameSpace + @".SqlHelper.ExecuteNonQueryAsync(SqlHelper.SDLLCConnectionString,""sp_" +
                                   tableName + @"Insert"", parameters);");
            modelString.AppendLine(@"return result;");
            modelString.AppendLine("}");

            // Update
            modelString.AppendLine("public static string Update(" + nameClass + " " + objectModel + " )");
            modelString.AppendLine("{");
            modelString.AppendLine(@"Initialization(" + objectModel + ");");
            modelString.AppendLine("SqlParameter[] parameters =");
            modelString.AppendLine("{");
            foreach (DataRow row in dataTable.Rows)
            {
                string columName = row["COLUMN_NAME"].ToString().Substring(0, 1).ToUpper() +
                                   row["COLUMN_NAME"].ToString().Substring(1, row["COLUMN_NAME"].ToString().Length - 1);
                modelString.AppendLine(@"new SqlParameter(""@" + columName + @"""," + objectModel + "." + columName + "),");
            }
            modelString.AppendLine("};");
            modelString.AppendLine(@"string result = " + nameSpace + @".SqlHelper.ExecuteNonQuery(SqlHelper.SDLLCConnectionString,""sp_" +
                                   tableName + @"Update"", parameters);");
            modelString.AppendLine(@"return result;");
            modelString.AppendLine("}");

            modelString.AppendLine("public static async Task<string> AsyncUpdate(" + nameClass + " " + objectModel +
                                   " )");
            modelString.AppendLine("{");
            modelString.AppendLine(@"Initialization(" + objectModel + ");");
            modelString.AppendLine("SqlParameter[] parameters =");
            modelString.AppendLine("{");
            foreach (DataRow row in dataTable.Rows)
            {
                string columName = row["COLUMN_NAME"].ToString().Substring(0, 1).ToUpper() +
                                   row["COLUMN_NAME"].ToString().Substring(1, row["COLUMN_NAME"].ToString().Length - 1);
                modelString.AppendLine(@"new SqlParameter(""@" + columName + @"""," + objectModel + "." + columName + "),");
            }
            modelString.AppendLine("};");
            modelString.AppendLine(@"string result = await " + nameSpace + @".SqlHelper.ExecuteNonQueryAsync(SqlHelper.SDLLCConnectionString,""sp_" +
                                   tableName + @"Update"", parameters);");
            modelString.AppendLine(@"return result;");
            modelString.AppendLine("}");
            modelString.AppendLine(@"private static " + nameClass + " Initialization(" + nameClass + " " + objectModel + ")");
            modelString.AppendLine(@"{");
            modelString.AppendLine(objectModel + @".NguoiSuaCuoi = " + objectModel + ".NguoiTao;");
            modelString.AppendLine(objectModel + @".KichHoat = true;");
            modelString.AppendLine(@"try");
            modelString.AppendLine(@"{");

            modelString.AppendLine(@"}");
            modelString.AppendLine(@"catch");
            modelString.AppendLine(@"{");
            modelString.AppendLine(@"}");
            modelString.AppendLine(@"return " + objectModel + ";");
            modelString.AppendLine(@"}");
            modelString.AppendLine("#endregion");
            modelString.AppendLine("}");
            modelString.AppendLine("}");


            return modelString;
        }
        public StringBuilder GenerateModel01File(string nameClass, string nameSpace, string tableName,
           DataTable dataTable, string key)
        {
            StringBuilder modelString = new StringBuilder();
            modelString.AppendLine("using System;");
            modelString.AppendLine("using System.Collections.Generic;");
            modelString.AppendLine("using System.ComponentModel.DataAnnotations;");
            modelString.AppendLine("using System.Data;");
            modelString.AppendLine("using System.Data.SqlClient;");
            modelString.AppendLine("using System.Linq;");
            modelString.AppendLine("using System.Threading.Tasks;");

            modelString.AppendLine("namespace " + nameSpace);
            modelString.AppendLine("{");
            modelString.AppendLine("public class " + nameClass);
            modelString.AppendLine("{");

            modelString.AppendLine(" #region Attributes - Properties");

            foreach (DataRow row in dataTable.Rows)
            {
                string type = Convert(row["DATA_TYPE"].ToString());
                switch (type)
                {
                    case "DateTime":
                        modelString.AppendLine(@"[DataType(DataType.Date)]");
                        modelString.AppendLine(@"[DisplayFormat(DataFormatString = ""{0:dd/MM/yyyy}"", ApplyFormatInEditMode = true)]");
                        break;
                    case "decimal":
                    case "int":
                        modelString.AppendLine(@"[DisplayFormat(DataFormatString = ""{0:N0}"", ApplyFormatInEditMode = true)]");
                        break;
                    default:
                        break;
                }
                modelString.AppendLine("    public " + type + " " +
                                       row["COLUMN_NAME"].ToString().Substring(0, 1).ToUpper() +
                                       row["COLUMN_NAME"].ToString()
                                           .Substring(1, row["COLUMN_NAME"].ToString().Length - 1));
                modelString.AppendLine("    {");
                modelString.AppendLine("        get;");
                modelString.AppendLine("        set;");
                modelString.AppendLine("}");
            }

            modelString.AppendLine("#endregion");

            modelString.AppendLine("#region Construtors");
            modelString.AppendLine("public " + nameClass + "()");
            modelString.AppendLine("{");
            modelString.AppendLine("}");
            modelString.AppendLine("#endregion");

            modelString.AppendLine("#region Functions");

            modelString.AppendLine("public static DataTable GetAll()");
            modelString.AppendLine("{");
            modelString.AppendLine(@" DataTable dt= " + nameSpace + @".SqlHelper.Fill(SqlHelper.SDLLCConnectionString, ""sp_" + nameClass + @"SelectAll"");");
            modelString.AppendLine("return dt;");
            modelString.AppendLine("}");

            modelString.AppendLine("public static async Task<DataTable> AsyncGetAll()");
            modelString.AppendLine("{");
            modelString.AppendLine(@" DataTable dt= await " + nameSpace + @".SqlHelper.FillAsync(SqlHelper.SDLLCConnectionString, ""sp_" + nameClass + @"SelectAll"");");
            modelString.AppendLine("return dt;");
            modelString.AppendLine("}");

            modelString.AppendLine("public static List<" + nameClass + "> GetAllToList()");
            modelString.AppendLine("{");
            modelString.AppendLine(@" DataTable dt= GetAll();");
            modelString.AppendLine("List<" + nameClass + "> result = " + nameSpace + ".SqlHelper.ToList<" + nameClass + ">(dt);");
            modelString.AppendLine("return result;");
            modelString.AppendLine("}");

            modelString.AppendLine("public static async Task<List<" + nameClass + ">> AsyncGetAllToList()");
            modelString.AppendLine("{");
            modelString.AppendLine(@"DataTable dt = await AsyncGetAll();");
            modelString.AppendLine("List < " + nameClass + " > result = " + nameSpace + ".SqlHelper.ToList<" + nameClass + ">(dt);");
            modelString.AppendLine("return result;");
            modelString.AppendLine("}");

            modelString.AppendLine("public static IEnumerable<" + nameClass + "> GetAllToIEnumerable()");
            modelString.AppendLine("{");
            modelString.AppendLine(@" DataTable dt= GetAll();");
            modelString.AppendLine("IEnumerable<" + nameClass + "> result = " + nameSpace + ".SqlHelper.ToEnumerable<" + nameClass + ">(dt);");
            modelString.AppendLine("return result;");
            modelString.AppendLine("}");

            modelString.AppendLine("public static async Task<IEnumerable<" + nameClass + ">> AsyncGetAllToIEnumerable()");
            modelString.AppendLine("{");
            modelString.AppendLine(@"DataTable dt = await AsyncGetAll();");
            modelString.AppendLine("IEnumerable < " + nameClass + " > result = " + nameSpace + ".SqlHelper.ToEnumerable<" + nameClass + ">(dt);");
            modelString.AppendLine("return result;");
            modelString.AppendLine("}");

            //Delete
            string typeKey = "string";
            foreach (DataRow row in dataTable.Rows)
            {

                string columType = Convert(row["DATA_TYPE"].ToString());

                string columName = row["COLUMN_NAME"].ToString().Substring(0, 1).ToUpper() +
                                                      row["COLUMN_NAME"].ToString().Substring(1, row["COLUMN_NAME"].ToString().Length - 1);
                if (key.Equals(columName))
                    typeKey = columType;
            }

            modelString.AppendLine("public static " + nameClass + " GetById(" + typeKey + " " + key + " = 0)");
            modelString.AppendLine("{");
            modelString.AppendLine("SqlParameter[] parameters =");
            modelString.AppendLine("{");
            modelString.AppendLine(@"new SqlParameter(""@" + key + @"""," + key + "),");
            modelString.AppendLine("};");
            modelString.AppendLine(@" DataTable dt= " + nameSpace + @".SqlHelper.Fill(SqlHelper.SDLLCConnectionString, ""sp_" +
                                   nameClass + @"SelectById"", parameters);");
            modelString.AppendLine(@"List<" + nameClass + "> result = " + nameSpace + ".SqlHelper.ToList<" + nameClass + ">(dt);");
            modelString.AppendLine(@"" + nameClass + " " + nameClass + " = new " + nameClass + "();");
            modelString.AppendLine(@"if(result.Count>0)");
            modelString.AppendLine(@"{");
            modelString.AppendLine(@"" + nameClass + " = result[0];");
            modelString.AppendLine(@"}");
            modelString.AppendLine("return " + nameClass + ";");
            modelString.AppendLine("}");

            modelString.AppendLine("public static async Task<" + nameClass + "> AsyncGetById(" + typeKey + " " + key + " = 0)");
            modelString.AppendLine("{");
            modelString.AppendLine("SqlParameter[] parameters =");
            modelString.AppendLine("{");
            modelString.AppendLine(@"new SqlParameter(""@" + key + @"""," + key + "),");
            modelString.AppendLine("};");
            modelString.AppendLine(@" DataTable dt= await " + nameSpace + @".SqlHelper.FillAsync(SqlHelper.SDLLCConnectionString, ""sp_" +
                                   nameClass + @"SelectById"", parameters);");
            modelString.AppendLine(@"List<" + nameClass + "> result = " + nameSpace + ".SqlHelper.ToList<" + nameClass + ">(dt);");
            modelString.AppendLine(@"" + nameClass + " " + nameClass + " = new " + nameClass + "();");
            modelString.AppendLine(@"if(result.Count>0)");
            modelString.AppendLine(@"{");
            modelString.AppendLine(@"" + nameClass + " = result[0];");
            modelString.AppendLine(@"}");
            modelString.AppendLine("return " + nameClass + ";");
            modelString.AppendLine("}");

            modelString.AppendLine("public static string Delete(" + typeKey + " " + key + " = 0)");
            modelString.AppendLine("{");
            modelString.AppendLine("SqlParameter[] parameters =");
            modelString.AppendLine("{");
            modelString.AppendLine(@"new SqlParameter(""@" + key + @"""," + key + "),");
            modelString.AppendLine("};");
            modelString.AppendLine(@"string result =  " + nameSpace + @".SqlHelper.ExecuteNonQuery(SqlHelper.SDLLCConnectionString,""sp_" +
                                   tableName + @"Delete"", parameters);");
            modelString.AppendLine(@"return result;");
            modelString.AppendLine("}");

            modelString.AppendLine("public static async Task<string> AsyncDelete(" + typeKey + " " + key + " = 0)");
            modelString.AppendLine("{");
            modelString.AppendLine("SqlParameter[] parameters =");
            modelString.AppendLine("{");
            modelString.AppendLine(@"new SqlParameter(""@" + key + @"""," + key + "),");
            modelString.AppendLine("};");
            modelString.AppendLine(@"string result = await " + nameSpace + @".SqlHelper.ExecuteNonQueryAsync(SqlHelper.SDLLCConnectionString,""sp_" +
                                   tableName + @"Delete"", parameters);");
            modelString.AppendLine(@"return result;");
            modelString.AppendLine("}");

            string objectModel = nameClass.ToString().Substring(0, 1).ToLower() +
                                 nameClass.ToString().Substring(1, nameClass.ToString().Length - 1);

            //Insert
            modelString.AppendLine("public static string Insert(" + nameClass + " " + objectModel + " )");
            modelString.AppendLine("{");
            modelString.AppendLine(@"Initialization(" + objectModel + ");");
            modelString.AppendLine("SqlParameter[] parameters =");
            modelString.AppendLine("{");
            foreach (DataRow row in dataTable.Rows)
            {
                string columName = row["COLUMN_NAME"].ToString().Substring(0, 1).ToUpper() +
                                   row["COLUMN_NAME"].ToString().Substring(1, row["COLUMN_NAME"].ToString().Length - 1);
                modelString.AppendLine(@"new SqlParameter(""@" + columName + @"""," + objectModel + "." + columName + "),");
            }
            modelString.AppendLine("};");
            modelString.AppendLine(@"string result = " + nameSpace + @".SqlHelper.ExecuteNonQuery(SqlHelper.SDLLCConnectionString,""sp_" +
                                   tableName + @"Insert"", parameters);");
            modelString.AppendLine(@"return result;");
            modelString.AppendLine("}");

            modelString.AppendLine("public  static async Task<string> AsyncInsert(" + nameClass + " " + objectModel +
                                   " )");
            modelString.AppendLine("{");
            modelString.AppendLine(@"Initialization(" + objectModel + ");");
            modelString.AppendLine("SqlParameter[] parameters =");
            modelString.AppendLine("{");
            foreach (DataRow row in dataTable.Rows)
            {
                string columName = row["COLUMN_NAME"].ToString().Substring(0, 1).ToUpper() +
                                   row["COLUMN_NAME"].ToString().Substring(1, row["COLUMN_NAME"].ToString().Length - 1);
                modelString.AppendLine(@"new SqlParameter(""@" + columName + @"""," + objectModel + "." + columName + "),");

            }

            modelString.AppendLine("};");
            modelString.AppendLine(@"string result = await " + nameSpace + @".SqlHelper.ExecuteNonQueryAsync(SqlHelper.SDLLCConnectionString,""sp_" +
                                   tableName + @"Insert"", parameters);");
            modelString.AppendLine(@"return result;");
            modelString.AppendLine("}");

            // Update
            modelString.AppendLine("public static string Update(" + nameClass + " " + objectModel + " )");
            modelString.AppendLine("{");
            modelString.AppendLine(@"Initialization(" + objectModel + ");");
            modelString.AppendLine("SqlParameter[] parameters =");
            modelString.AppendLine("{");
            foreach (DataRow row in dataTable.Rows)
            {
                string columName = row["COLUMN_NAME"].ToString().Substring(0, 1).ToUpper() +
                                   row["COLUMN_NAME"].ToString().Substring(1, row["COLUMN_NAME"].ToString().Length - 1);
                modelString.AppendLine(@"new SqlParameter(""@" + columName + @"""," + objectModel + "." + columName + "),");
            }
            modelString.AppendLine("};");
            modelString.AppendLine(@"string result = " + nameSpace + @".SqlHelper.ExecuteNonQuery(SqlHelper.SDLLCConnectionString,""sp_" +
                                   tableName + @"Update"", parameters);");
            modelString.AppendLine(@"return result;");
            modelString.AppendLine("}");

            modelString.AppendLine("public static async Task<string> AsyncUpdate(" + nameClass + " " + objectModel +
                                   " )");
            modelString.AppendLine("{");
            modelString.AppendLine(@"Initialization(" + objectModel + ");");
            modelString.AppendLine("SqlParameter[] parameters =");
            modelString.AppendLine("{");
            foreach (DataRow row in dataTable.Rows)
            {
                string columName = row["COLUMN_NAME"].ToString().Substring(0, 1).ToUpper() +
                                   row["COLUMN_NAME"].ToString().Substring(1, row["COLUMN_NAME"].ToString().Length - 1);
                modelString.AppendLine(@"new SqlParameter(""@" + columName + @"""," + objectModel + "." + columName + "),");
            }
            modelString.AppendLine("};");
            modelString.AppendLine(@"string result = await " + nameSpace + @".SqlHelper.ExecuteNonQueryAsync(SqlHelper.SDLLCConnectionString,""sp_" +
                                   tableName + @"Update"", parameters);");
            modelString.AppendLine(@"return result;");
            modelString.AppendLine("}");
            modelString.AppendLine(@"private static " + nameClass + " Initialization(" + nameClass + " " + objectModel + ")");
            modelString.AppendLine(@"{");
            modelString.AppendLine(objectModel + @".KichHoat = true;");
            modelString.AppendLine(@"try");
            modelString.AppendLine(@"{");

            modelString.AppendLine(@"}");
            modelString.AppendLine(@"catch");
            modelString.AppendLine(@"{");
            modelString.AppendLine(@"}");
            modelString.AppendLine(@"return " + objectModel + ";");
            modelString.AppendLine(@"}");
            modelString.AppendLine("#endregion");
            modelString.AppendLine("}");
            modelString.AppendLine("}");


            return modelString;
        }

        public StringBuilder GenerateControllerFile(string nameClass, string nameSpace, string key, DataTable dt)
        {

            string keyType = "string";
            foreach (DataRow row in dt.Rows)
            {

                string columType = Convert(row["DATA_TYPE"].ToString());

                string columName = row["COLUMN_NAME"].ToString().Substring(0, 1).ToUpper() +
                                                      row["COLUMN_NAME"].ToString().Substring(1, row["COLUMN_NAME"].ToString().Length - 1);
                if (key.Equals(columName))
                    keyType = columType;
            }

            string nameClass01 = nameClass.Substring(0, 1).ToLower() + nameClass.Substring(1, nameClass.Length - 1);
            StringBuilder controllerString = new StringBuilder();
            controllerString.AppendLine("using System;");
            controllerString.AppendLine("using System.Collections.Generic;");
            controllerString.AppendLine("using System.IO;");
            controllerString.AppendLine("using System.Linq;");
            controllerString.AppendLine("using System.Net.Http.Headers;");
            controllerString.AppendLine("using System.Threading.Tasks;");
            controllerString.AppendLine("using Kendo.Mvc.Extensions;");
            controllerString.AppendLine("using Kendo.Mvc.UI;");
            controllerString.AppendLine("using Microsoft.AspNetCore.Hosting;");
            controllerString.AppendLine("using Microsoft.AspNetCore.Http;");
            controllerString.AppendLine("using Microsoft.AspNetCore.Mvc;");


            controllerString.AppendLine("namespace " + nameSpace);
            controllerString.AppendLine("{");
            controllerString.AppendLine("public class " + nameClass + "Controller : BaseController");
            controllerString.AppendLine("{");

            controllerString.AppendLine("private readonly IHostingEnvironment HostingEnvironment;");
            controllerString.AppendLine("public " + nameClass + "Controller(IHostingEnvironment hostingEnvironment)");
            controllerString.AppendLine("{");
            controllerString.AppendLine("HostingEnvironment = hostingEnvironment;");
            controllerString.AppendLine("}");

            controllerString.AppendLine("public IActionResult Index()");
            controllerString.AppendLine("{");
            controllerString.AppendLine(" return View();");
            controllerString.AppendLine("}");

            controllerString.AppendLine("public IActionResult Detail()");
            controllerString.AppendLine("{");
            controllerString.AppendLine(@"" + nameSpace + "." + nameClass + " " + nameClass01 + " = new " + nameSpace + "." + nameClass + "();");
            controllerString.AppendLine(" return View(" + nameClass01 + ");");
            controllerString.AppendLine("}");

            controllerString.AppendLine(@"[AcceptVerbs(""Post"")]");

            string objectModel = nameClass.ToString().Substring(0, 1).ToLower() +
                                 nameClass.ToString().Substring(1, nameClass.ToString().Length - 1);

            //Create
            controllerString.AppendLine("public ActionResult Create(" + nameClass + " " + objectModel + ")");
            controllerString.AppendLine("{");
            controllerString.AppendLine("string result = " + nameSpace + ".CGlobal.InitializationString;");

            controllerString.AppendLine(" if ( " + objectModel + " != null )");
            controllerString.AppendLine("{");
            controllerString.AppendLine("BaseInitialization(" + objectModel + ");");
            controllerString.AppendLine("result = " + nameSpace + "." + nameClass + ".Insert(" + objectModel + ");");
            controllerString.AppendLine("}");
            controllerString.AppendLine(@"string note = " + nameSpace + @".CGlobal.MessageType.error + "" - "" + result;");
            controllerString.AppendLine("switch (result)");
            controllerString.AppendLine("{");
            controllerString.AppendLine(@"case ""0"":");
            controllerString.AppendLine(@"note = " + nameSpace + @".CGlobal.MessageType.error + "" - "" + " + nameSpace + @".CGlobal.SaveFalse;");
            controllerString.AppendLine("break;");
            controllerString.AppendLine(@"case ""-1"":");
            controllerString.AppendLine(@"note = " + nameSpace + @".CGlobal.MessageType.success + "" - "" + " + nameSpace + @".CGlobal.SaveSuccess;");
            controllerString.AppendLine("break;");
            controllerString.AppendLine("}");
            controllerString.AppendLine("return Json(note);");
            controllerString.AppendLine("}");
            controllerString.AppendLine(@"[AcceptVerbs(""Post"")]");
            controllerString.AppendLine("public async Task<ActionResult> AsyncCreate(" + nameClass + " " + objectModel +
                                        ")");
            controllerString.AppendLine("{");
            controllerString.AppendLine("string result = " + nameSpace + ".CGlobal.InitializationString;");
            controllerString.AppendLine("if(" + objectModel + " != null)");
            controllerString.AppendLine("{");
            controllerString.AppendLine("BaseInitialization(" + objectModel + ");");
            controllerString.AppendLine("result = await " + nameSpace + "." + nameClass + ".AsyncInsert(" + objectModel + ");");
            controllerString.AppendLine("}");
            controllerString.AppendLine(@"string note = " + nameSpace + @".CGlobal.MessageType.error + "" - "" + result;");
            controllerString.AppendLine("switch (result)");
            controllerString.AppendLine("{");
            controllerString.AppendLine(@"case ""0"":");
            controllerString.AppendLine(@"note = " + nameSpace + @".CGlobal.MessageType.error + "" - "" + " + nameSpace + @".CGlobal.SaveFalse;");
            controllerString.AppendLine("break;");
            controllerString.AppendLine(@"case ""-1"":");
            controllerString.AppendLine(@"note = " + nameSpace + @".CGlobal.MessageType.success + "" - "" + " + nameSpace + @".CGlobal.SaveSuccess;");
            controllerString.AppendLine("break;");
            controllerString.AppendLine("}");
            controllerString.AppendLine("return Json(note);");
            controllerString.AppendLine("}");

            //Update
            controllerString.AppendLine(@"[AcceptVerbs(""Post"")]");
            controllerString.AppendLine("public ActionResult Update(" + nameClass + " " + objectModel + ")");
            controllerString.AppendLine("{");
            controllerString.AppendLine("string result = " + nameSpace + ".CGlobal.InitializationString;");
            controllerString.AppendLine("if(" + objectModel + " != null)");
            controllerString.AppendLine("{");
            controllerString.AppendLine("BaseInitialization(" + objectModel + ");");
            controllerString.AppendLine("result = " + nameSpace + "." + nameClass + ".Update(" + objectModel + ");");
            controllerString.AppendLine("}");
            controllerString.AppendLine(@"string note = " + nameSpace + @".CGlobal.MessageType.error + "" - "" + result;");
            controllerString.AppendLine("switch (result)");
            controllerString.AppendLine("{");
            controllerString.AppendLine(@"case ""0"":");
            controllerString.AppendLine(@"note = " + nameSpace + @".CGlobal.MessageType.error + "" - "" + " + nameSpace + @".CGlobal.EditFalse;");
            controllerString.AppendLine("break;");
            controllerString.AppendLine(@"case ""-1"":");
            controllerString.AppendLine(@"note = " + nameSpace + @".CGlobal.MessageType.success + "" - "" + " + nameSpace + @".CGlobal.EditSuccess;");
            controllerString.AppendLine("break;");
            controllerString.AppendLine("}");
            controllerString.AppendLine("return Json(note);");
            controllerString.AppendLine("}");

            controllerString.AppendLine(@"[AcceptVerbs(""Post"")]");
            controllerString.AppendLine("public async Task<ActionResult> AsyncUpdate(" + nameClass + " " + objectModel + ")");
            controllerString.AppendLine("{");
            controllerString.AppendLine("BaseInitialization(" + objectModel + ");");
            controllerString.AppendLine("string result = " + nameSpace + ".CGlobal.InitializationString;");
            controllerString.AppendLine(" if ( " + objectModel + " != null )");
            controllerString.AppendLine("{");
            controllerString.AppendLine("result = await " + nameSpace + "." + nameClass + ".AsyncUpdate(" + objectModel + ");");
            controllerString.AppendLine("}");
            controllerString.AppendLine(@"string note = " + nameSpace + @".CGlobal.MessageType.error + "" - "" + result;");
            controllerString.AppendLine("switch (result)");
            controllerString.AppendLine("{");
            controllerString.AppendLine(@"case ""0"":");
            controllerString.AppendLine(@"note = " + nameSpace + @".CGlobal.MessageType.error + "" - "" + " + nameSpace + @".CGlobal.EditFalse;");
            controllerString.AppendLine("break;");
            controllerString.AppendLine(@"case ""-1"":");
            controllerString.AppendLine(@"note = " + nameSpace + @".CGlobal.MessageType.success + "" - "" + " + nameSpace + @".CGlobal.EditSuccess;");
            controllerString.AppendLine("break;");
            controllerString.AppendLine("}");
            controllerString.AppendLine("return Json(note);");
            controllerString.AppendLine("}");


            //Delete
            controllerString.AppendLine(@"[AcceptVerbs(""Post"")]");
            controllerString.AppendLine("public ActionResult Delete(" + nameClass + " " + objectModel + ")");
            controllerString.AppendLine("{");
            controllerString.AppendLine("string result = " + nameSpace + ".CGlobal.InitializationString;");

            controllerString.AppendLine(" if ( " + objectModel + " != null )");
            controllerString.AppendLine("{");
            controllerString.AppendLine("result = " + nameSpace + "." + nameClass + ".Delete(" + objectModel + "." + key + ");");
            controllerString.AppendLine("}");
            controllerString.AppendLine(@"string note = " + nameSpace + @".CGlobal.MessageType.error + "" - "" + result;");
            controllerString.AppendLine("switch (result)");
            controllerString.AppendLine("{");
            controllerString.AppendLine(@"case ""0"":");
            controllerString.AppendLine(@"note = " + nameSpace + @".CGlobal.MessageType.error + "" - "" + " + nameSpace + @".CGlobal.DeleteFalse;");
            controllerString.AppendLine("break;");
            controllerString.AppendLine(@"case ""-1"":");
            controllerString.AppendLine(@"note = " + nameSpace + @".CGlobal.MessageType.success + "" - "" + " + nameSpace + @".CGlobal.DeleteSuccess;");
            controllerString.AppendLine("break;");
            controllerString.AppendLine("}");
            controllerString.AppendLine("return Json(note);");
            controllerString.AppendLine("}");

            controllerString.AppendLine(@"[AcceptVerbs(""Post"")]");
            controllerString.AppendLine("public async Task<ActionResult> AsyncDelete(" + nameClass + " " + objectModel +
                                        ")");
            controllerString.AppendLine("{");
            controllerString.AppendLine("string result = " + nameSpace + ".CGlobal.InitializationString;");
            controllerString.AppendLine(" if ( " + objectModel + " != null )");
            controllerString.AppendLine("{");
            controllerString.AppendLine("result = await " + nameSpace + "." + nameClass + ".AsyncDelete(" + objectModel + "." + key + ");");
            controllerString.AppendLine("}");
            controllerString.AppendLine(@"string note = " + nameSpace + @".CGlobal.MessageType.error + "" - "" + result;");
            controllerString.AppendLine("switch (result)");
            controllerString.AppendLine("{");
            controllerString.AppendLine(@"case ""0"":");
            controllerString.AppendLine(@"note = " + nameSpace + @".CGlobal.MessageType.error + "" - "" + " + nameSpace + @".CGlobal.DeleteFalse;");
            controllerString.AppendLine("break;");
            controllerString.AppendLine(@"case ""-1"":");
            controllerString.AppendLine(@"note = " + nameSpace + @".CGlobal.MessageType.success + "" - "" + " + nameSpace + @".CGlobal.DeleteSuccess;");
            controllerString.AppendLine("break;");
            controllerString.AppendLine("}");
            controllerString.AppendLine("return Json(note);");
            controllerString.AppendLine("}");

            //getlist

            controllerString.AppendLine("public ActionResult GetById(" + keyType + " " + key + " = 0)");
            controllerString.AppendLine("{");
            controllerString.AppendLine("return Json(" + nameSpace + "." + nameClass + ".GetById(" + key + "));");
            controllerString.AppendLine("}");

            controllerString.AppendLine("public async Task<ActionResult> AsyncGetById(" + keyType + " " + key + " = 0)");
            controllerString.AppendLine("{");
            controllerString.AppendLine("var result = await " + nameSpace + "." + nameClass + ".AsyncGetById(" + key + ");");
            controllerString.AppendLine(" return Json(result);");
            controllerString.AppendLine("}");

            controllerString.AppendLine("public ActionResult GetAllToList([DataSourceRequest] DataSourceRequest request)");
            controllerString.AppendLine("{");
            controllerString.AppendLine("return Json(" + nameSpace + "." + nameClass + ".GetAllToList().ToDataSourceResult(request));");
            controllerString.AppendLine("}");

            controllerString.AppendLine("public async Task<ActionResult> AsyncGetAllToList([DataSourceRequest]DataSourceRequest request)");
            controllerString.AppendLine("{");
            controllerString.AppendLine("var result = await " + nameSpace + "." + nameClass + ".AsyncGetAllToList();");
            controllerString.AppendLine(" var dsResult = result.ToDataSourceResult(request);");
            controllerString.AppendLine(" return Json(dsResult);");
            controllerString.AppendLine("}");
            controllerString.AppendLine("}");
            controllerString.AppendLine("}");
            return controllerString;
        }

        public StringBuilder GenerateViewFile(string nameClass, string nameSpace, DataTable dt, string key)
        {
            StringBuilder viewsString = new StringBuilder();
            viewsString.AppendLine("@{");
            viewsString.AppendLine(@"ViewData[""Title""] = """ + nameClass + @""";");
            viewsString.AppendLine(@"}");
            viewsString.AppendLine(@"@using Kendo.Mvc.UI");
            viewsString.AppendLine(@"<div class='row'>");
            viewsString.AppendLine(@"<div class='col-xs-12'>");
            viewsString.AppendLine(@"<div class='box'>");
            viewsString.AppendLine(@"<div class='box-header'>");
            viewsString.AppendLine(@"<ul>");
            viewsString.AppendLine(@"<li>");
            viewsString.AppendLine(@"<i class=""fa fa-gear""></i>");
            viewsString.AppendLine(@"<a href='#'> Hệ thống</a>");
            viewsString.AppendLine(@"</li>");
            viewsString.AppendLine(@"<li class=""active"">");
            viewsString.AppendLine(@"<a href = ""@Url.Action(""Index"", """ + nameClass + @""", new {area = """"})"">" + nameClass + "</a>");
            viewsString.AppendLine(@"</li>");
            viewsString.AppendLine(@"</ul>");

            viewsString.AppendLine(@"</div>");
            viewsString.AppendLine(@"<div class='box-body'>");
            viewsString.AppendLine(@"@(Html.Kendo().Grid<" + nameSpace + "." + nameClass + ">()");
            viewsString.AppendLine(@".Name(""" + nameClass + @""")");
            viewsString.AppendLine(@".Columns(columns =>");
            viewsString.AppendLine(@"{");
            viewsString.AppendLine(@"columns.Command(command => { command.Edit().Text(""&nbsp;"").CancelText(""&nbsp;"").UpdateText(""&nbsp;"").IconClass(""fa fa-pencil-square-o"").HtmlAttributes(new { style = ""padding-left:14px; padding-top:10px; border-radius: 6px; font-weight:bold;"" }); command.Destroy().Text(""&nbsp;"").IconClass(""fa fa-trash-o"").HtmlAttributes(new { style=""color:#ffffff; background-color:#d73925; padding-top:10px; border-radius: 6px; width:50px;"", @class = ""btn btn-danger""});}).Width(120);");
            foreach (DataRow row in dt.Rows)
            {
                string columName = row["COLUMN_NAME"].ToString().Substring(0, 1).ToUpper() +
                                   row["COLUMN_NAME"].ToString().Substring(1, row["COLUMN_NAME"].ToString().Length - 1);
                viewsString.AppendLine("columns.Bound(t => t." + columName + @").Title(""" + columName + @""").Width(200);");
            }
            viewsString.AppendLine(@"columns.Command(command => { command.Edit().Text(""&nbsp;"").CancelText(""&nbsp;"").UpdateText(""&nbsp;"").IconClass(""fa fa-pencil-square-o"").HtmlAttributes(new { style = ""padding-left:14px; padding-top:10px; border-radius: 6px; font-weight:bold;"" }); command.Destroy().Text(""&nbsp;"").IconClass(""fa fa-trash-o"").HtmlAttributes(new { style=""color:#ffffff; background-color:#d73925; padding-top:10px; border-radius: 6px; width:50px;"", @class = ""btn btn-danger""});}).Width(120);");
            viewsString.AppendLine(@"})");
            viewsString.AppendLine(@".ToolBar(toolBar => toolBar.Create().Text(""&nbsp;"").IconClass(""fa fa-plus"").HtmlAttributes(new { style = ""border-radius: 6px; font-weight:bold; background-color:#009966; color:#ffffff; padding-left:10px;""}))");
            viewsString.AppendLine(@".ToolBar(toolBar => toolBar.Search())");
            viewsString.AppendLine(@".ToolBar(toolBar => toolBar.Excel().Text(""Xuất Excel""))");
            viewsString.AppendLine(@".ToolBar(toolBar => toolBar.Pdf().Text(""Xuất PDF""))");
            viewsString.AppendLine(@".Editable(editable => editable.Mode(GridEditMode.InLine))");
            viewsString.AppendLine(@".Sortable()");
            viewsString.AppendLine(@".Scrollable()");
            viewsString.AppendLine(@".Reorderable(r => r.Columns(true))");
            viewsString.AppendLine(@".Resizable(r => r.Columns(true))");
            viewsString.AppendLine(@".Pageable(pageable => pageable");
            viewsString.AppendLine(@".Refresh(true)");
            viewsString.AppendLine(@".PageSizes(true)");
            viewsString.AppendLine(@".ButtonCount(10))");
            viewsString.AppendLine(@".Excel(excel => excel");
            viewsString.AppendLine(@".FileName(""" + nameClass + @".xlsx"")");
            viewsString.AppendLine(@".Filterable(true)");
            viewsString.AppendLine(@".ProxyURL(Url.Action(""ExportExcel"", """ + nameClass + @"""))");
            viewsString.AppendLine(@")");
            viewsString.AppendLine(@".Pdf(pdf => pdf");
            viewsString.AppendLine(@".AllPages()");
            viewsString.AppendLine(@".AvoidLinks()");
            viewsString.AppendLine(@".PaperSize(""A4"")");
            viewsString.AppendLine(@".Margin(""2cm"", ""1cm"", ""1cm"", ""1cm"")");
            viewsString.AppendLine(@".Landscape()");
            viewsString.AppendLine(@".RepeatHeaders()");
            viewsString.AppendLine(@".FileName(""" + nameClass + @".pdf"")");
            viewsString.AppendLine(@")");
            //viewsString.AppendLine(@".HtmlAttributes(new { style = ""height: 700px;""})");
            viewsString.AppendLine(@".DataSource(dataSource => dataSource");
            viewsString.AppendLine(@".Ajax()");
            viewsString.AppendLine(@".PageSize(1000)");
            viewsString.AppendLine(@".Model(model =>");
            viewsString.AppendLine(@"{");


            viewsString.AppendLine("model.Id(t => t." + key + ");");
            foreach (DataRow row in dt.Rows)
            {
                string columName = row["COLUMN_NAME"].ToString().Substring(0, 1).ToUpper() +
                                   row["COLUMN_NAME"].ToString().Substring(1, row["COLUMN_NAME"].ToString().Length - 1);
                viewsString.AppendLine("model.Field(t => t." + columName + ");");
            }

            viewsString.AppendLine(@"})");
            viewsString.AppendLine(@".Events(t => { t.RequestEnd(""onGridRequestEnd""); })");
            viewsString.AppendLine(@".Read(t => t.Action(""GetAllToList"", """ + nameClass + @"""))");
            viewsString.AppendLine(@".Destroy(t => t.Action(""Delete"", """ + nameClass + @"""))");
            viewsString.AppendLine(@".Create(t => t.Action(""Create"", """ + nameClass + @"""))");
            viewsString.AppendLine(@".Update(t => t.Action(""Update"", """ + nameClass + @"""))");
            viewsString.AppendLine(@")");
            viewsString.AppendLine(@")");
            viewsString.AppendLine(@"</div>");
            viewsString.AppendLine(@"</div>");
            viewsString.AppendLine(@"</div>");
            viewsString.AppendLine(@"</div>");
            viewsString.AppendLine(@"@(Html.Kendo().Notification()");
            viewsString.AppendLine(@".Name(""Notification"")");
            viewsString.AppendLine(@".Position(p => p.Pinned(true).Top(30).Right(30))");

            viewsString.AppendLine(@")");
            viewsString.AppendLine(@"<script>");
            viewsString.AppendLine(@"function onGridRequestEnd(e)");
            viewsString.AppendLine(@"{");
            viewsString.AppendLine(@"if ((e.type == ""create"")||(e.type == ""update"")||(e.type == ""destroy""))");
            viewsString.AppendLine(@"{");
            viewsString.AppendLine(@"var response = e.response;");
            viewsString.AppendLine(@"var messageType = response.split('-')[0];");
            viewsString.AppendLine(@"var note = response.split('-')[1];");
            viewsString.AppendLine(@"var notification = $(""#Notification"").data(""kendoNotification"");");
            viewsString.AppendLine(@"notification.show(note, messageType);");
            viewsString.AppendLine(@"$(""#" + nameClass + @""").data(""kendoGrid"").dataSource.read();");
            viewsString.AppendLine(@"}");
            viewsString.AppendLine(@"}");
            viewsString.AppendLine(@"</script>");
            return viewsString;
        }
        public StringBuilder GenerateWebformFile(string nameClass, string nameSpace, DataTable dt, string key)
        {
            StringBuilder viewsString = new StringBuilder();
            viewsString.AppendLine(@"<%@ Page Language=""C#"" MasterPageFile=""~/Site.Master"" AutoEventWireup=""true"" CodeBehind=""" + nameClass + @".aspx.cs"" Inherits=""" + nameSpace + "." + nameClass + @""" %>");
            viewsString.AppendLine(@"<asp:Content ID=""Content1"" ContentPlaceHolderID=""MainContent"" runat=""server"">");

            viewsString.AppendLine(@"<div class='panel panel-default'>");
            viewsString.AppendLine(@"<div class='panel-heading'>" + nameClass + "</div>");
            viewsString.AppendLine(@"<div class='panel-body'>");
            viewsString.AppendLine(@"<asp:ObjectDataSource ID=""objDs" + nameClass + @""" runat=""server"" TypeName=""" + nameSpace + "." + nameClass + @""" SelectMethod=""GetAll"">");
            viewsString.AppendLine(@"</asp:ObjectDataSource>");
            viewsString.AppendLine(@"<asp:GridView ID=""grid" + nameClass + @""" runat=""server"" AutoGenerateColumns=""false"" ShowFooter=""true"" DataKeyNames=""" + key + @""" DataSourceID=""objDs" + nameClass + @"""");
            viewsString.AppendLine(@"ShowHeaderWhenEmpty=""false"" CssClass=""table table-bordered"" AllowSorting=""true"" AllowPaging=""true"" PageSize=""1000000""");
            viewsString.AppendLine(@"BackColor=""White"" BorderColor=""#CCCCCC"" BorderStyle=""None"" BorderWidth=""1px"" CellPadding=""6"" Font-Size=""14px"" Font-Bold=""true"" OnRowCommand=""grid" + nameClass + @"_RowCommand"">");
            viewsString.AppendLine(@"<FooterStyle BackColor=""White"" ForeColor=""#000066"" />");
            viewsString.AppendLine(@"<HeaderStyle BackColor=""#006699"" Font-Bold=""True"" ForeColor=""White"" />");
            viewsString.AppendLine(@"<PagerStyle BackColor=""White"" ForeColor=""#000066"" HorizontalAlign=""Right"" />");
            viewsString.AppendLine(@"<RowStyle ForeColor=""#000066"" />");
            viewsString.AppendLine(@"<SelectedRowStyle BackColor=""#669999"" Font-Bold=""True"" ForeColor=""White"" />");
            viewsString.AppendLine(@"<SortedAscendingCellStyle BackColor=""#F1F1F1"" />");
            viewsString.AppendLine(@"<SortedAscendingHeaderStyle BackColor=""#007DBB"" />");
            viewsString.AppendLine(@"<SortedDescendingCellStyle BackColor=""#CAC9C9"" />");
            viewsString.AppendLine(@"<SortedDescendingHeaderStyle BackColor=""#00547E"" />");
            viewsString.AppendLine(@"<Columns>");
            foreach (DataRow row in dt.Rows)
            {
                string columName = row["COLUMN_NAME"].ToString().Substring(0, 1).ToUpper() + row["COLUMN_NAME"].ToString().Substring(1, row["COLUMN_NAME"].ToString().Length - 1);
                viewsString.AppendLine(@"<asp:TemplateField HeaderText=""" + columName + @""" SortExpression=""" + columName + @""">");
                viewsString.AppendLine(@"<ItemTemplate>");
                viewsString.AppendLine(@"<div class='text-left'>");
                viewsString.AppendLine(@"<%# Eval(""" + columName + @""") %>");
                viewsString.AppendLine(@"<div>");
                viewsString.AppendLine(@"</ItemTemplate>");
                viewsString.AppendLine(@"<EditItemTemplate>");
                viewsString.AppendLine(@"<div class='text-left'>");
                viewsString.AppendLine(@"<asp:TextBox AutoCompleteType=""Disabled"" ID=""txt" + columName + @""" runat=""server"" class=""form-control"" Text='<%# Eval(""" + columName + @""") %>'></asp:TextBox>");
                viewsString.AppendLine(@"<div>");
                viewsString.AppendLine(@"</EditItemTemplate>");
                viewsString.AppendLine(@"<FooterTemplate>");
                viewsString.AppendLine(@"<div class='text-center'>");
                viewsString.AppendLine(@"<asp:TextBox AutoCompleteType=""Disabled"" ID=""txt" + columName + @""" runat=""server"" class=""form-control""></asp:TextBox>");
                viewsString.AppendLine(@"</div>");
                viewsString.AppendLine(@"</FooterTemplate>");
                viewsString.AppendLine(@"</asp:TemplateField>");
            }
            viewsString.AppendLine(@"<asp:TemplateField HeaderText=""Edit"" HeaderStyle-Width=""200px"">");
            viewsString.AppendLine(@"<ItemTemplate>");
            viewsString.AppendLine(@"<div class='text-center'>");
            viewsString.AppendLine(@"<asp:LinkButton ID=""btnEdit"" runat=""server"" CausesValidation=""False"" CommandName=""Edit"" class=""btn btn-primary"" ToolTip=""Sửa""><span class=""glyphicon glyphicon-edit"" style=""color:white;""></span></asp:LinkButton>");
            viewsString.AppendLine(@"<asp:LinkButton ID=""btnDelete"" runat=""server"" CommandArgument='<%# Bind(""" + key + @""")%>' CommandName=""DeleteData"" class=""btn btn-danger"" ToolTip=""Xóa"" OnClientClick=""return confirm('Bạn muốn xóa dữ liệu này?')""><span class=""glyphicon glyphicon-trash""></span></asp:LinkButton>");
            viewsString.AppendLine(@"<div>");
            viewsString.AppendLine(@"</ItemTemplate>");
            viewsString.AppendLine(@"<EditItemTemplate>");
            viewsString.AppendLine(@"<div class='text-center'>");
            viewsString.AppendLine(@"<asp:LinkButton ID=""btnUpdate"" runat=""server"" CausesValidation=""False"" CommandName=""UpdateData"" class=""btn btn-primary"" ToolTip=""Chấp nhận""><span class=""glyphicon glyphicon-ok"" style=""color:white;""></span></asp:LinkButton>");
            viewsString.AppendLine(@"<asp:LinkButton ID=""btnCancel"" runat=""server"" CausesValidation=""False"" CommandName=""Cancel"" class=""btn btn-warning"" ToolTip=""Hủy""><span class=""glyphicon glyphicon-remove"" style=""color:white;""></span></asp:LinkButton>");
            viewsString.AppendLine(@"<div>");
            viewsString.AppendLine(@"</EditItemTemplate>");
            viewsString.AppendLine(@"<FooterTemplate>");
            viewsString.AppendLine(@"<div class='text-center'>");
            viewsString.AppendLine(@"<asp:LinkButton ID=""btnAddData"" runat=""server"" class=""btn btn-primary"" CommandName=""AddData""><span class=""glyphicon glyphicon-plus"" style=""color: white;""></span></asp:LinkButton>");
            viewsString.AppendLine(@"</div>");
            viewsString.AppendLine(@"</FooterTemplate>");
            viewsString.AppendLine(@"</asp:TemplateField>");
            viewsString.AppendLine(@"</Columns>");
            viewsString.AppendLine(@"<EmptyDataTemplate>");
            viewsString.AppendLine(@"<h4>Chưa có dữ liệu</h4>");
            foreach (DataRow row in dt.Rows)
            {
                string columName = row["COLUMN_NAME"].ToString().Substring(0, 1).ToUpper() + row["COLUMN_NAME"].ToString().Substring(1, row["COLUMN_NAME"].ToString().Length - 1);
                viewsString.AppendLine(@"<div class=""row"">");
                viewsString.AppendLine(@"<label class=""label col-sm-3"">" + columName + "</label>");
                viewsString.AppendLine(@"<div class=""col-sm-9"">");
                viewsString.AppendLine(@"<asp:TextBox AutoCompleteType=""Disabled"" ID=""txt" + columName + @""" runat=""server"" class=""form-control""></asp:TextBox>");
                viewsString.AppendLine(@"</div>");
                viewsString.AppendLine(@"</div>");
            }
            viewsString.AppendLine(@"</EmptyDataTemplate>");
            viewsString.AppendLine(@"</asp:GridView>");
            viewsString.AppendLine(@"</div>");
            viewsString.AppendLine(@"</div>");

            viewsString.AppendLine(@"</asp:Content>");
            return viewsString;
        }
        public StringBuilder GenerateWebformCSFile(string nameClass, string nameSpace, DataTable dt, string key)
        {
            StringBuilder viewsString = new StringBuilder();
            viewsString.AppendLine(@"using System;");
            viewsString.AppendLine(@"using System.Web.UI.WebControls;");
            viewsString.AppendLine(@"using Helper = VietUc.SaleOrder.Helpers.HelperUIControl;");
            viewsString.AppendLine(@"using hstr = VietUc.SaleOrder.Helpers.Helper;");
            viewsString.AppendLine(@"using VietUc.SaleOrder.Helpers;");
            viewsString.AppendLine(@"using VietUc.SaleOrder.Libraries;");
            viewsString.AppendLine(@"using VietUc.SaleOrder.Services;");
            viewsString.AppendLine(@"namespace " + nameSpace + ".App_All");
            viewsString.AppendLine(@"{");
            viewsString.AppendLine(@"public partial class " + nameClass + " : BasePage");
            viewsString.AppendLine(@"{");
            viewsString.AppendLine(@"protected void Page_Load(object sender, EventArgs e)");
            viewsString.AppendLine(@"{");
            viewsString.AppendLine(@"}");
            viewsString.AppendLine(@"protected void grid" + nameClass + "_RowCommand(object sender, GridViewCommandEventArgs e)");
            viewsString.AppendLine(@"{");
            viewsString.AppendLine(@"" + nameSpace + "." + nameClass + " " + nameClass + " = new " + nameSpace + "." + nameClass + "()");
            viewsString.AppendLine(@"switch (e.CommandName)");
            viewsString.AppendLine(@"{");

            viewsString.AppendLine(@"case ""DeleteData"":");
            viewsString.AppendLine(@"" + nameClass + "." + key + " = int.Parse(e.CommandArgument.ToString());");
            viewsString.AppendLine(@"if(" + nameSpace + "." + nameClass + ".Delete(" + nameClass + "." + key + "))");
            viewsString.AppendLine(@"{");
            viewsString.AppendLine(@"Helper.ShowMessage(this, hstr.DeleteSuccessVietNam, Helper.MessageType.Success);");
            viewsString.AppendLine(@"grid" + nameClass + ".DataBind();");
            viewsString.AppendLine(@"}");
            viewsString.AppendLine(@"else");
            viewsString.AppendLine(@"{");
            viewsString.AppendLine(@"Helper.ShowMessage(this, hstr.DeleteFalseVietNam, Helper.MessageType.Error);");
            viewsString.AppendLine(@"}");
            viewsString.AppendLine(@"break;");

            viewsString.AppendLine(@"case ""AddData"":");
            viewsString.AppendLine(@"if(grid" + nameClass + ".Rows.Count == 0)");
            viewsString.AppendLine(@"{");
            foreach (DataRow row in dt.Rows)
            {
                string columName = row["COLUMN_NAME"].ToString().Substring(0, 1).ToUpper() + row["COLUMN_NAME"].ToString().Substring(1, row["COLUMN_NAME"].ToString().Length - 1);
                viewsString.AppendLine(@"" + nameClass + "." + columName + " = ((TextBox)grid" + nameClass + @".Controls[0].Controls[0].FindControl(""txt" + columName + @""")).Text.Trim();");
            }
            viewsString.AppendLine(@"}");
            viewsString.AppendLine(@"else");
            viewsString.AppendLine(@"{");
            foreach (DataRow row in dt.Rows)
            {
                string columName = row["COLUMN_NAME"].ToString().Substring(0, 1).ToUpper() + row["COLUMN_NAME"].ToString().Substring(1, row["COLUMN_NAME"].ToString().Length - 1);
                viewsString.AppendLine(@"" + nameClass + "." + columName + " = ((TextBox)grid" + nameClass + @".FooterRow.FindControl(""txt" + columName + @""")).Text.Trim();");
            }
            viewsString.AppendLine(@"}");

            viewsString.AppendLine(@"if(" + nameSpace + "." + nameClass + ".Insert(" + nameClass + "))");
            viewsString.AppendLine(@"{");
            viewsString.AppendLine(@"Helper.ShowMessage(this, hstr.SaveSuccessVietNam, Helper.MessageType.Success);");
            viewsString.AppendLine(@"grid" + nameClass + ".DataBind();");
            viewsString.AppendLine(@"}");
            viewsString.AppendLine(@"else");
            viewsString.AppendLine(@"{");
            viewsString.AppendLine(@"Helper.ShowMessage(this, hstr.SaveFalseVietNam, Helper.MessageType.Error);");
            viewsString.AppendLine(@"}");
            viewsString.AppendLine(@"break;");

            viewsString.AppendLine(@"case ""UpdateData"":");
            viewsString.AppendLine(@"" + nameClass + "." + key + " = int.Parse(e.CommandArgument.ToString());");
            viewsString.AppendLine(@"" + nameClass + " = " + nameSpace + "." + nameClass + ".GetById(" + nameClass + "." + key + ");");
            foreach (DataRow row in dt.Rows)
            {
                string columName = row["COLUMN_NAME"].ToString().Substring(0, 1).ToUpper() + row["COLUMN_NAME"].ToString().Substring(1, row["COLUMN_NAME"].ToString().Length - 1);
                viewsString.AppendLine(@"" + nameClass + "." + columName + " = ((TextBox)grid" + nameClass + @".Rows[grid" + nameClass + @".EditIndex].FindControl(""txt" + columName + @""")).Text.Trim();");
            }
            viewsString.AppendLine(@"if(" + nameSpace + "." + nameClass + ".Update(" + nameClass + "))");
            viewsString.AppendLine(@"{");
            viewsString.AppendLine(@"Helper.ShowMessage(this, hstr.EditSuccessVietNam, Helper.MessageType.Success);");
            viewsString.AppendLine(@"grid" + nameClass + ".DataBind();");
            viewsString.AppendLine(@"}");
            viewsString.AppendLine(@"else");
            viewsString.AppendLine(@"{");
            viewsString.AppendLine(@"Helper.ShowMessage(this, hstr.EditFalseVietNam, Helper.MessageType.Error);");
            viewsString.AppendLine(@"}");
            viewsString.AppendLine(@"break;");


            viewsString.AppendLine(@"}");
            viewsString.AppendLine(@"}");
            viewsString.AppendLine(@"}");
            viewsString.AppendLine(@"}");

            return viewsString;
        }
        public StringBuilder GenerateMaterialViewFile(string nameClass, string nameSpace, DataTable dt, string key)
        {
            StringBuilder viewsString = new StringBuilder();
            viewsString.AppendLine("@{");
            viewsString.AppendLine(@"ViewData[""Title""] = """ + nameClass + @""";");
            viewsString.AppendLine(@"}");
            viewsString.AppendLine(@"@using Kendo.Mvc.UI");
            viewsString.AppendLine(@"<div class='card card-auto'>");
            viewsString.AppendLine(@"<div class='card-content'>");
            viewsString.AppendLine(@"<div class='card-title'>");
            viewsString.AppendLine(@"<div class='row'>");
            viewsString.AppendLine(@"<a href='#' style='font-size: 18px;'><b><i class='material-icons'>settings</i>&nbsp;&nbsp;" + nameClass + "</b></a>");
            viewsString.AppendLine(@"</div>");
            viewsString.AppendLine(@"</div>");
            viewsString.AppendLine(@"<div class='section section-data-tables'>");
            viewsString.AppendLine(@"@(Html.Kendo().Grid<" + nameSpace + "." + nameClass + ">()");
            viewsString.AppendLine(@".Name(""" + nameClass + @""")");
            viewsString.AppendLine(@".Columns(columns =>");
            viewsString.AppendLine(@"{");

            foreach (DataRow row in dt.Rows)
            {
                string columName = row["COLUMN_NAME"].ToString().Substring(0, 1).ToUpper() +
                                   row["COLUMN_NAME"].ToString().Substring(1, row["COLUMN_NAME"].ToString().Length - 1);
                viewsString.AppendLine("columns.Bound(columns => columns." + columName + @").Title(""" + columName + @""");");
            }
            viewsString.AppendLine(@"columns.Command(command => { command.Edit().Text(""&nbsp;"").IconClass(""fa fa-pencil-square-o"").HtmlAttributes(new { style = ""padding-left:14px; padding-top:10px; border-radius: 6px; font-weight:bold;"" }); command.Destroy().Text(""&nbsp;"").IconClass(""fa fa-trash-o"").HtmlAttributes(new { style = ""color:#ffffff; background-color:#d73925; padding-top:10px; border-radius: 6px; width:50px;"", @class = ""btn btn-danger"" }); }).Width(210);");
            viewsString.AppendLine(@"})");
            viewsString.AppendLine(@".ToolBar(toolBar => toolBar.Create().Text(""Thêm""))");
            viewsString.AppendLine(@".ToolBar(toolBar => toolBar.Search())");
            viewsString.AppendLine(@".ToolBar(toolBar => toolBar.Excel().Text(""Xuất Excel""))");
            viewsString.AppendLine(@".ToolBar(toolBar => toolBar.Pdf().Text(""Xuất PDF""))");
            viewsString.AppendLine(@".Editable(editable => editable.Mode(GridEditMode.InLine))");
            viewsString.AppendLine(@".Sortable()");
            viewsString.AppendLine(@".Scrollable()");
            viewsString.AppendLine(@".Reorderable(r => r.Columns(true))");
            viewsString.AppendLine(@".Resizable(r => r.Columns(true))");
            viewsString.AppendLine(@".Pageable(pageable => pageable");
            viewsString.AppendLine(@".Refresh(true)");
            viewsString.AppendLine(@".PageSizes(true)");
            viewsString.AppendLine(@".ButtonCount(10))");
            viewsString.AppendLine(@".Excel(excel => excel");
            viewsString.AppendLine(@".FileName(""" + nameClass + @".xlsx"")");
            viewsString.AppendLine(@".Filterable(true)");
            viewsString.AppendLine(@".ProxyURL(Url.Action(""ExportExcel"", """ + nameClass + @"""))");
            viewsString.AppendLine(@")");
            viewsString.AppendLine(@".Pdf(pdf => pdf");
            viewsString.AppendLine(@".AllPages()");
            viewsString.AppendLine(@".AvoidLinks()");
            viewsString.AppendLine(@".PaperSize(""A4"")");
            viewsString.AppendLine(@".Margin(""2cm"", ""1cm"", ""1cm"", ""1cm"")");
            viewsString.AppendLine(@".Landscape()");
            viewsString.AppendLine(@".RepeatHeaders()");
            viewsString.AppendLine(@".FileName(""" + nameClass + @".pdf"")");
            viewsString.AppendLine(@")");
            viewsString.AppendLine(@".HtmlAttributes(new { style = ""height: 600px;""})");
            viewsString.AppendLine(@".DataSource(dataSource => dataSource");
            viewsString.AppendLine(@".Ajax()");
            viewsString.AppendLine(@".PageSize(1000)");
            viewsString.AppendLine(@".Model(model =>");
            viewsString.AppendLine(@"{");


            viewsString.AppendLine("model.Id(t => t." + key + ");");
            foreach (DataRow row in dt.Rows)
            {
                string columName = row["COLUMN_NAME"].ToString().Substring(0, 1).ToUpper() +
                                   row["COLUMN_NAME"].ToString().Substring(1, row["COLUMN_NAME"].ToString().Length - 1);
                viewsString.AppendLine("model.Field(t => t." + columName + ");");
            }

            viewsString.AppendLine(@"})");
            viewsString.AppendLine(@".Events(t => { t.RequestEnd(""onGridRequestEnd""); })");
            viewsString.AppendLine(@".Read(t => t.Action(""GetAllToList"", """ + nameClass + @"""))");
            viewsString.AppendLine(@".Destroy(t => t.Action(""Delete"", """ + nameClass + @"""))");
            viewsString.AppendLine(@".Create(t => t.Action(""Create"", """ + nameClass + @"""))");
            viewsString.AppendLine(@".Update(t => t.Action(""Update"", """ + nameClass + @"""))");
            viewsString.AppendLine(@")");
            viewsString.AppendLine(@")");
            viewsString.AppendLine(@"</div>");
            viewsString.AppendLine(@"</div>");
            viewsString.AppendLine(@"</div>");
            viewsString.AppendLine(@"@(Html.Kendo().Notification()");
            viewsString.AppendLine(@".Name(""Notification"")");
            viewsString.AppendLine(@".Position(p => p.Pinned(true).Top(30).Right(30))");
            viewsString.AppendLine(@".Width(500)");
            viewsString.AppendLine(@")");
            viewsString.AppendLine(@"<script>");
            viewsString.AppendLine(@"function onGridRequestEnd(e)");
            viewsString.AppendLine(@"{");
            viewsString.AppendLine(@"if ((e.type == ""create"")||(e.type == ""update"")||(e.type == ""destroy""))");
            viewsString.AppendLine(@"{");
            viewsString.AppendLine(@"var response = e.response;");
            viewsString.AppendLine(@"var messageType = response.split('-')[0];");
            viewsString.AppendLine(@"var note = response.split('-')[1];");
            viewsString.AppendLine(@"var notification = $(""#Notification"").data(""kendoNotification"");");
            viewsString.AppendLine(@"notification.show(note, messageType);");
            viewsString.AppendLine(@"}");

            viewsString.AppendLine(@"}");
            viewsString.AppendLine(@"</script>");
            return viewsString;
        }
        public StringBuilder GenerateViewDetailFile(string nameClass, string nameSpace, DataTable dt)
        {
            StringBuilder viewsDetailString = new StringBuilder();
            viewsDetailString.AppendLine(@"@{");
            viewsDetailString.AppendLine(@"ViewData[""Title""] = """ + nameClass + @""" ;");
            viewsDetailString.AppendLine("}");
            viewsDetailString.AppendLine(@"@using Kendo.Mvc.UI");
            viewsDetailString.AppendLine(@"@model " + nameSpace + ".Models." + nameClass);
            viewsDetailString.AppendLine(@"<div class='row'>");
            viewsDetailString.AppendLine(@"<div class='col-xs-12'>");
            viewsDetailString.AppendLine(@"<div class='box'>");
            viewsDetailString.AppendLine(@"<div class='box-header'>");
            viewsDetailString.AppendLine(@"<h3 class='box-title'>" + nameClass + "</h3>");
            viewsDetailString.AppendLine(@"</div>");
            viewsDetailString.AppendLine(@"<div class='box-body'>");
            viewsDetailString.AppendLine(@"<form id=""form" + nameClass + @""" > ");
            foreach (DataRow row in dt.Rows)
            {
                string columName = row["COLUMN_NAME"].ToString().Substring(0, 1).ToUpper() +
                                   row["COLUMN_NAME"].ToString().Substring(1, row["COLUMN_NAME"].ToString().Length - 1);

                viewsDetailString.AppendLine(@"<div class='form-group'>");
                viewsDetailString.AppendLine(@"<label for='" + columName + "'>" + columName + "</label>");
                viewsDetailString.AppendLine(@" @(Html.TextBoxFor(Model => Model." + columName + @", new { placeholder = """ + columName + @""", @class = ""form-control"" }))");
                viewsDetailString.AppendLine("</div>");
            }

            viewsDetailString.AppendLine("</form>");
            viewsDetailString.AppendLine(@"<div class='box-footer'>");
            viewsDetailString.AppendLine(@"@(Html.Kendo().Button()");
            viewsDetailString.AppendLine(@".Name(""SaveChanges"")");
            viewsDetailString.AppendLine(@".Icon(""save"")");
            viewsDetailString.AppendLine(@".HtmlAttributes(new { type = ""button"", @class = ""k-primary"" })");
            viewsDetailString.AppendLine(@".Content(""Save Changes"")");
            viewsDetailString.AppendLine(@".Events(t => t.Click(""saveChanges""))");
            viewsDetailString.AppendLine(")");
            viewsDetailString.AppendLine("</div>");
            viewsDetailString.AppendLine(@"</div>");
            viewsDetailString.AppendLine(@"</div>");
            viewsDetailString.AppendLine(@"</div>");
            viewsDetailString.AppendLine(@"</div>");
            viewsDetailString.AppendLine(@"@(Html.Kendo().Notification()");
            viewsDetailString.AppendLine(@".Name(""Notification"")");
            viewsDetailString.AppendLine(".Position(p => p.Pinned(true).Top(30).Right(30))");
            viewsDetailString.AppendLine(".Width(500)");
            viewsDetailString.AppendLine(")");
            viewsDetailString.AppendLine("<script>");
            viewsDetailString.AppendLine("function saveChanges() {");
            viewsDetailString.AppendLine("$.ajax(");
            viewsDetailString.AppendLine("{");
            viewsDetailString.AppendLine(@"type: ""POST"",");
            viewsDetailString.AppendLine(@"datatype: ""JSON"",");
            viewsDetailString.AppendLine(@"url: '@Url.Action(""Create"", """ + nameClass + @""")',");
            viewsDetailString.AppendLine(@"data: $('#form" + nameClass + "').serialize(),");
            viewsDetailString.AppendLine("success: function (result) {");
            viewsDetailString.AppendLine(@"var messageType = result.split(""-"")[0];");
            viewsDetailString.AppendLine(@"var note = result.split(""-"")[1];");
            viewsDetailString.AppendLine(@"var notification = $(""#Notification"").data(""kendoNotification"");");
            viewsDetailString.AppendLine(@"notification.show(note, messageType);");
            viewsDetailString.AppendLine(@"},");
            viewsDetailString.AppendLine("error: function (jqXHR, exception) {},");
            viewsDetailString.AppendLine("complete: function () { },");
            viewsDetailString.AppendLine("})");
            viewsDetailString.AppendLine("}");
            viewsDetailString.AppendLine("</script>");
            return viewsDetailString;

        }
        public StringBuilder GenerateMaterialViewDetailFile(string nameClass, DataTable dt)
        {
            StringBuilder viewsDetailString = new StringBuilder();
            viewsDetailString.AppendLine(@"@{");
            viewsDetailString.AppendLine(@"ViewData[""Title""] = """ + nameClass + @""" ;");
            viewsDetailString.AppendLine("}");
            viewsDetailString.AppendLine(@"@using Kendo.Mvc.UI");
            viewsDetailString.AppendLine(@"@model CRM.Models." + nameClass);

            viewsDetailString.AppendLine(@"<div class='card card-auto'>");
            viewsDetailString.AppendLine(@"<div class='card-content'>");
            viewsDetailString.AppendLine(@"<div class='card-title'>");
            viewsDetailString.AppendLine(@"<div class='row'>");
            viewsDetailString.AppendLine(@"<div class='col s12 m6 l6'>");
            viewsDetailString.AppendLine(@"<a href='#' style='font-size: 18px;'><b><i class='material-icons'>settings</i>&nbsp;&nbsp;" + nameClass + "</b></a>");
            viewsDetailString.AppendLine(@"</div>");
            viewsDetailString.AppendLine(@"<div class='col s12 m6 l6 right-align-md'>");
            viewsDetailString.AppendLine(@"@(Html.Kendo().Button()");
            viewsDetailString.AppendLine(@".Name(""SaveChanges"")");
            viewsDetailString.AppendLine(@".Icon(""save"")");
            viewsDetailString.AppendLine(@".HtmlAttributes(new { @class = ""btn waves-effect waves-light cyan"", style=""border-width:0px; color: #ffffff;"" })");
            viewsDetailString.AppendLine(@".Content(""Save Changes"")");
            viewsDetailString.AppendLine(@".Events(t => t.Click(""saveChanges""))");
            viewsDetailString.AppendLine(")");
            viewsDetailString.AppendLine(@"");
            viewsDetailString.AppendLine(@"</div>");
            viewsDetailString.AppendLine(@"<form id=""form" + nameClass + @""" class='row' > ");
            foreach (DataRow row in dt.Rows)
            {
                string columName = row["COLUMN_NAME"].ToString().Substring(0, 1).ToUpper() +
                                   row["COLUMN_NAME"].ToString().Substring(1, row["COLUMN_NAME"].ToString().Length - 1);

                viewsDetailString.AppendLine(@"<div class='input-field col s12 m12 l12'>");
                viewsDetailString.AppendLine(@"@(Html.Kendo().TextBoxFor(Model => Model." + columName + @"));");
                viewsDetailString.AppendLine("</div>");
            }

            viewsDetailString.AppendLine("</form>");
            viewsDetailString.AppendLine(@"</div>");
            viewsDetailString.AppendLine(@"</div>");
            viewsDetailString.AppendLine(@"</div>");
            viewsDetailString.AppendLine(@"</div>");

            viewsDetailString.AppendLine(@"@(Html.Kendo().Notification()");
            viewsDetailString.AppendLine(@".Name(""Notification"")");
            viewsDetailString.AppendLine(".Position(p => p.Pinned(true).Top(30).Right(30))");
            viewsDetailString.AppendLine(".Width(500)");
            viewsDetailString.AppendLine(")");
            viewsDetailString.AppendLine("<script>");
            viewsDetailString.AppendLine("function saveChanges() {");
            viewsDetailString.AppendLine("$.ajax(");
            viewsDetailString.AppendLine("{");
            viewsDetailString.AppendLine(@"type: ""POST"",");
            viewsDetailString.AppendLine(@"datatype: ""JSON"",");
            viewsDetailString.AppendLine(@"url: '@Url.Action(""Create"", """ + nameClass + @""")',");
            viewsDetailString.AppendLine(@"data: $('#form" + nameClass + "').serialize(),");
            viewsDetailString.AppendLine("success: function (result) {");
            viewsDetailString.AppendLine(@"var messageType = result.split(""-"")[0];");
            viewsDetailString.AppendLine(@"var note = result.split(""-"")[1];");
            viewsDetailString.AppendLine(@"var notification = $(""#Notification"").data(""kendoNotification"");");
            viewsDetailString.AppendLine(@"notification.show(note, messageType);");
            viewsDetailString.AppendLine(@"},");
            viewsDetailString.AppendLine("error: function (jqXHR, exception) {},");
            viewsDetailString.AppendLine("complete: function () { },");
            viewsDetailString.AppendLine("})");
            viewsDetailString.AppendLine("}");
            viewsDetailString.AppendLine("</script>");
            return viewsDetailString;

        }
        public StringBuilder GenerateSpInsertFile(string tableName, DataTable dt)
        {
            StringBuilder spInsertString = new StringBuilder();
            spInsertString.AppendLine("CREATE PROCEDURE [dbo].[sp_" + tableName + "Insert]");
            foreach (DataRow row in dt.Rows)
            {
                string columName = row["COLUMN_NAME"].ToString().Substring(0, 1).ToUpper() +
                                   row["COLUMN_NAME"].ToString().Substring(1, row["COLUMN_NAME"].ToString().Length - 1);
                string dataType = row["DATA_TYPE"].ToString();
                string lenghType = row["CHARACTER_MAXIMUM_LENGTH"].ToString();
                if (lenghType.Equals("-1"))
                {
                    lenghType = "MAX";
                }
                if (!string.IsNullOrEmpty(lenghType))
                    lenghType = "(" + lenghType + ")";
                else
                {
                    lenghType = "";
                }
                switch (dataType)
                {
                    case "nvarchar":
                    case "varchar":
                    case "char":
                    case "nchar":
                    case "ntext":
                        spInsertString.AppendLine("     " + @"@" + columName + " " + dataType + lenghType + @"='',");
                        break;
                    case "bigint":
                    case "int":
                    case "money":
                    case "float":
                    case "real":
                        spInsertString.AppendLine("     " + @"@" + columName + " " + dataType + lenghType + @"=0,");
                        break;
                    case "decimal":
                        spInsertString.AppendLine("     " + @"@" + columName + " " + dataType + lenghType + @"(19,4)=0,");
                        break;
                    case "bit":
                        spInsertString.AppendLine("     " + @"@" + columName + " " + dataType + lenghType + @"=1,");
                        break;
                    default:
                        spInsertString.AppendLine("     " + @"@" + columName + " " + dataType + lenghType + "=null,");
                        break;
                }

            }

            spInsertString.Remove(spInsertString.ToString().Trim().Length - 1, 1);
            spInsertString.AppendLine("AS");
            spInsertString.AppendLine("BEGIN");
            spInsertString.AppendLine("SET NOCOUNT ON;");
            foreach (DataRow row in dt.Rows)
            {
                string columName = row["COLUMN_NAME"].ToString().Substring(0, 1).ToUpper() +
                                   row["COLUMN_NAME"].ToString().Substring(1, row["COLUMN_NAME"].ToString().Length - 1);
                string dataType = row["DATA_TYPE"].ToString();
                switch (dataType)
                {
                    case "nvarchar":
                    case "varchar":
                    case "char":
                    case "nchar":
                    case "ntext":
                        spInsertString.AppendLine("set @" + columName + " = trim(@" + columName + ")");
                        break;
                    case "smalldatetime":
                    case "datetime":
                    case "date":
                        spInsertString.AppendLine("if((@" + columName + "=null)or(year(@" + columName + ")=1))");
                        spInsertString.AppendLine("begin");
                        spInsertString.AppendLine("set @" + columName + "=getdate()");
                        spInsertString.AppendLine("end");
                        break;
                }
            }
            spInsertString.AppendLine("     INSERT INTO " + tableName + "");
            spInsertString.AppendLine("         (");
            foreach (DataRow row in dt.Rows)
            {
                string columName = row["COLUMN_NAME"].ToString().Substring(0, 1).ToUpper() +
                                   row["COLUMN_NAME"].ToString().Substring(1, row["COLUMN_NAME"].ToString().Length - 1);
                spInsertString.AppendLine("         " + columName + ",");
            }

            spInsertString.Remove(spInsertString.ToString().Trim().Length - 1, 1);


            spInsertString.AppendLine("         )");
            spInsertString.AppendLine("     VALUES");
            spInsertString.AppendLine("         (");
            foreach (DataRow row in dt.Rows)
            {
                string columName = row["COLUMN_NAME"].ToString().Substring(0, 1).ToUpper() +
                                   row["COLUMN_NAME"].ToString().Substring(1, row["COLUMN_NAME"].ToString().Length - 1);

                spInsertString.AppendLine(@"         @" + columName + ",");
            }

            spInsertString.Remove(spInsertString.ToString().Trim().Length - 1, 1);
            spInsertString.AppendLine("         )");
            spInsertString.AppendLine("     END");
            return spInsertString;
        }

        public StringBuilder GenerateSpSelectAllFile(string tableName)
        {
            StringBuilder spSelectAllString = new StringBuilder();
            spSelectAllString.AppendLine("CREATE PROCEDURE [dbo].[sp_" + tableName + "SelectAll]");
            spSelectAllString.AppendLine("AS");
            spSelectAllString.AppendLine("BEGIN");
            spSelectAllString.AppendLine("SET NOCOUNT ON;");
            spSelectAllString.AppendLine("     SELECT * FROM " + tableName + " (nolock)");
            spSelectAllString.AppendLine("  END");
            return spSelectAllString;
        }

        public StringBuilder GenerateSpDeleteFile(string tableName, DataTable dataTable, string key)
        {
            StringBuilder spDeleteString = new StringBuilder();
            spDeleteString.AppendLine("CREATE PROCEDURE [dbo].[sp_" + tableName + "Delete]");
            foreach (DataRow row in dataTable.Rows)
            {
                string columName = row["COLUMN_NAME"].ToString().Substring(0, 1).ToUpper() +
                                   row["COLUMN_NAME"].ToString().Substring(1, row["COLUMN_NAME"].ToString().Length - 1);
                string dataType = row["DATA_TYPE"].ToString();
                string lenghType = row["CHARACTER_MAXIMUM_LENGTH"].ToString();
                if (lenghType.Equals("-1"))
                {
                    lenghType = "MAX";
                }
                if (!string.IsNullOrEmpty(lenghType))
                    lenghType = "(" + lenghType + ")";
                else
                {
                    lenghType = "";
                }
                if (key.Equals(columName))
                {
                    switch (dataType)
                    {
                        case "nvarchar":
                        case "varchar":
                        case "char":
                        case "nchar":
                        case "ntext":
                            spDeleteString.AppendLine("     " + @"@" + columName + " " + dataType + lenghType + @"=''");
                            break;
                        case "bigint":
                        case "int":
                        case "money":
                        case "decimal":
                        case "float":
                        case "real":
                            spDeleteString.AppendLine("     " + @"@" + columName + " " + dataType + lenghType + @"=0");
                            break;
                        case "bit":
                            spDeleteString.AppendLine("     " + @"@" + columName + " " + dataType + lenghType + @"=1");
                            break;
                        default:
                            spDeleteString.AppendLine("     " + @"@" + columName + " " + dataType + lenghType + "");
                            break;
                    }
                }
            }
            //spDeleteString.AppendLine(@"         @"+key);
            spDeleteString.AppendLine("AS");
            spDeleteString.AppendLine("BEGIN");
            spDeleteString.AppendLine("SET NOCOUNT ON;");
            spDeleteString.AppendLine("    DELETE FROM " + tableName + "");
            spDeleteString.AppendLine("              WHERE " + key + @" =  @" + key);
            spDeleteString.AppendLine("  END");
            return spDeleteString;
        }


        public StringBuilder GenerateSpUpdateFile(string tableName, DataTable dt, string key)
        {
            StringBuilder spInsertString = new StringBuilder();
            spInsertString.AppendLine("CREATE PROCEDURE [dbo].[sp_" + tableName + "Update]");
            foreach (DataRow row in dt.Rows)
            {
                string columName = row["COLUMN_NAME"].ToString().Substring(0, 1).ToUpper() +
                                   row["COLUMN_NAME"].ToString().Substring(1, row["COLUMN_NAME"].ToString().Length - 1);
                string dataType = row["DATA_TYPE"].ToString();
                string lenghType = row["CHARACTER_MAXIMUM_LENGTH"].ToString();
                if (lenghType.Equals("-1"))
                {
                    lenghType = "MAX";
                }
                if (!string.IsNullOrEmpty(lenghType))
                    lenghType = "(" + lenghType + ")";
                else
                {
                    lenghType = "";
                }

                switch (dataType)
                {
                    case "nvarchar":
                    case "varchar":
                    case "char":
                    case "nchar":
                    case "ntext":
                        spInsertString.AppendLine("     " + @"@" + columName + " " + dataType + lenghType + @"='',");
                        break;
                    case "bigint":
                    case "int":
                    case "money":
                    case "float":
                    case "real":
                        spInsertString.AppendLine("     " + @"@" + columName + " " + dataType + lenghType + @"=0,");
                        break;
                    case "decimal":
                        spInsertString.AppendLine("     " + @"@" + columName + " " + dataType + lenghType + @"(19,4)=0,");
                        break;
                    case "bit":
                        spInsertString.AppendLine("     " + @"@" + columName + " " + dataType + lenghType + @"=1,");
                        break;
                    default:
                        spInsertString.AppendLine("     " + @"@" + columName + " " + dataType + lenghType + "=null,");
                        break;
                }
            }

            spInsertString.Remove(spInsertString.ToString().Trim().Length - 1, 1);
            spInsertString.AppendLine("AS");
            spInsertString.AppendLine("BEGIN");
            spInsertString.AppendLine("SET NOCOUNT ON;");
            foreach (DataRow row in dt.Rows)
            {
                string columName = row["COLUMN_NAME"].ToString().Substring(0, 1).ToUpper() +
                                   row["COLUMN_NAME"].ToString().Substring(1, row["COLUMN_NAME"].ToString().Length - 1);
                string dataType = row["DATA_TYPE"].ToString();
                switch (dataType)
                {
                    case "nvarchar":
                    case "varchar":
                    case "char":
                    case "nchar":
                    case "ntext":
                        spInsertString.AppendLine("set @" + columName + " = trim(@" + columName + ")");
                        break;
                    case "smalldatetime":
                    case "datetime":
                    case "date":
                        spInsertString.AppendLine("if((@" + columName + "=null)or(year(@" + columName + ")=1))");
                        spInsertString.AppendLine("begin");
                        spInsertString.AppendLine("set @" + columName + "=getdate()");
                        spInsertString.AppendLine("end");
                        break;
                }
            }
            spInsertString.AppendLine("     UPDATE " + tableName + "");
            spInsertString.AppendLine("         SET");
            foreach (DataRow row in dt.Rows)
            {

                string columName = row["COLUMN_NAME"].ToString().Substring(0, 1).ToUpper() +
                                   row["COLUMN_NAME"].ToString().Substring(1, row["COLUMN_NAME"].ToString().Length - 1);
                if (!key.Equals(columName))
                    spInsertString.AppendLine("         " + columName + " = " + @"@" + columName + ",");
            }
            spInsertString.Remove(spInsertString.ToString().Trim().Length - 1, 1);
            spInsertString.AppendLine("              WHERE " + key + @" =  @" + key);
            spInsertString.AppendLine("     END");
            return spInsertString;
        }

        public StringBuilder GenerateSpSelectByIdFile(string tableName, DataTable dataTable, string key)
        {
            StringBuilder spSelectByIdString = new StringBuilder();
            spSelectByIdString.AppendLine("CREATE PROCEDURE [dbo].[sp_" + tableName + "SelectById]");
            foreach (DataRow row in dataTable.Rows)
            {
                string columName = row["COLUMN_NAME"].ToString().Substring(0, 1).ToUpper() +
                                   row["COLUMN_NAME"].ToString().Substring(1, row["COLUMN_NAME"].ToString().Length - 1);
                string dataType = row["DATA_TYPE"].ToString();
                string lenghType = row["CHARACTER_MAXIMUM_LENGTH"].ToString();
                if (!string.IsNullOrEmpty(lenghType))
                    lenghType = "(" + lenghType + ")";
                else
                {
                    lenghType = "";
                }
                if (key.Equals(columName))
                {
                    switch (dataType)
                    {
                        case "nvarchar":
                        case "varchar":
                        case "char":
                        case "nchar":
                        case "ntext":
                            spSelectByIdString.AppendLine("     " + @"@" + columName + " " + dataType + lenghType + @"=''");
                            break;
                        case "bigint":
                        case "int":
                        case "money":
                        case "decimal":
                        case "float":
                        case "real":
                            spSelectByIdString.AppendLine("     " + @"@" + columName + " " + dataType + lenghType + @"=0");
                            break;
                        case "bit":
                            spSelectByIdString.AppendLine("     " + @"@" + columName + " " + dataType + lenghType + @"=1");
                            break;
                        default:
                            spSelectByIdString.AppendLine("     " + @"@" + columName + " " + dataType + lenghType + "");
                            break;
                    }
                }
            }
            spSelectByIdString.AppendLine("AS");
            spSelectByIdString.AppendLine("BEGIN");
            spSelectByIdString.AppendLine("SET NOCOUNT ON;");
            spSelectByIdString.AppendLine("     SELECT * FROM " + tableName + " (nolock)");
            spSelectByIdString.AppendLine("              WHERE " + key + @" =  @" + key);
            spSelectByIdString.AppendLine("  END");
            return spSelectByIdString;
        }
        public void CreateCommand(string queryString,
            string connectionString)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(
                    connectionString))
                {
                    SqlCommand command = new SqlCommand(queryString, connection);
                    command.Connection.Open();
                    command.ExecuteNonQuery();
                }
            }
            catch
            {

            }
        }
    }
}
