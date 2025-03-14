import java.util.ArrayList;
import java.util.List;

public class EmployeeManagementSystem {
    
    public static void main(String[] args) {

        List<Employee> employees = new ArrayList<>();
        

        Employee emp1 = new Employee(101, "Person A", 50000.0);
        Employee emp2 = new Employee(102, "Person B", 65000.0);
        Employee emp3 = new Employee(103, "Person C", 55000.0);
        

        employees.add(emp1);
        employees.add(emp2);
        employees.add(emp3);
        
        
        System.out.println("EMPLOYEE DETAILS ");
        for (Employee emp : employees) {
            emp.displayDetails();
            System.out.println("---------");
        }
    }
}

class Employee {

    private int id;
    private String name;
    private double salary;
    

    public Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    

    public void displayDetails() {
        System.out.println("Employee ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Salary: $" + String.format("%.2f", salary));
    }
    

    public int getId() {
        return id;
    }
    
    public void setId(int id) {
        this.id = id;
    }
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public double getSalary() {
        return salary;
    }
    
    public void setSalary(double salary) {
        this.salary = salary;
    }
}