namespace KingdomCodeTool.ViewModels
{
    public class CodeGenerationDB
    {
        private string _connectionString;
        //************************BEGIN**************************
        //Properties ConnectionString
        public string ConnectionString
        {
            get { return _connectionString; }
            set { _connectionString = value; }
        }
        //************************BEGIN**************************
        //Get Table Name from DataBases SQL Server
        public static DataTable GetTableNames(string connectionString)
        {
            using (SqlConnection cn = new SqlConnection(connectionString))
            {
                string sql = "select name from sys.tables order by name";
                SqlDataAdapter adapter = new SqlDataAdapter(sql, cn);
                DataTable dataTable = new DataTable();
                adapter.Fill(dataTable);
                return dataTable;
            }
        }
        //************************BEGIN**************************
        //Get Table Column Name from Table by Table Name SQL Server
        public static DataTable GetTableItems(string connectionString, string tableName)
        {
            using (SqlConnection cn = new SqlConnection(connectionString))
            {
                string sql = "select COLUMN_NAME, DATA_TYPE,CHARACTER_MAXIMUM_LENGTH from INFORMATION_SCHEMA.COLUMNS where TABLE_NAME = '" + tableName + "' ";
                SqlDataAdapter adapter = new SqlDataAdapter(sql, cn);
                DataTable dataTable = new DataTable();
                adapter.Fill(dataTable);
                return dataTable;
            }
        }
        public void StoredCreate(string query)
        {
            //using (SqlConnection cn = new SqlConnection(ConnectionString))
            //{
            //    SqlCommand cmd = new SqlCommand(query, cn);
            //    cn.Open();
            //    cmd.ExecuteNonQuery();
            //    cn.Close();
            //}
        }
    }
}
