// File: MySQLConnection.java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class sql {
    public static void main(String[] args) {

        // Step 1: Database credentials
        String url = "jdbc:mysql://localhost:3306/testdb"; // Replace 'testdb' with your database name
        String username = "root"; // Replace with your MySQL username
        String password = "root"; // Replace with your MySQL password

        Connection conn = null;

        try {
            // Step 2: Load MySQL JDBC Driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Step 3: Establish connection
            conn = DriverManager.getConnection(url, username, password);

            // Step 4: Display success message
            System.out.println("✅ Connection to MySQL database successful!");

        } catch (ClassNotFoundException e) {
            System.out.println("❌ MySQL JDBC Driver not found!");
            e.printStackTrace();
        } catch (SQLException e) {
            System.out.println("❌ Database connection failed!");
            e.printStackTrace();
        } finally {
            // Step 5: Close the connection
            try {
                if (conn != null) {
                    conn.close();
                    System.out.println("🔒 Connection closed.");
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}