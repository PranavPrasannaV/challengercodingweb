export const java2Test = [
    {
        title: "Multiple Choice Questions",
        content: `
            <h2 class="tutorial-title">Java 2 Final Test - Multiple Choice Questions</h2>
        `,
        quiz: [
            {
                question: '1. What is the correct way to declare a 2D array in Java?',
                options: [
                    { label: 'int[][] array = new int[][];', value: 'a' },
                    { label: 'int array[][] = new int[][];', value: 'b' },
                    { label: 'int[][] array = new int[3][3];', value: 'c' },
                    { label: 'int[3][3] array = new int[][];', value: 'd' }
                ],
                correctAnswer: 'c'
            },
            {
                question: '2. Which of the following is true about classes in Java?',
                options: [
                    { label: 'A class can have multiple constructors', value: 'a' },
                    { label: 'A class can only have one constructor', value: 'b' },
                    { label: 'A class must have at least one constructor', value: 'c' },
                    { label: 'A class cannot have a constructor with parameters', value: 'd' }
                ],
                correctAnswer: 'a'
            },
            {
                question: '3. What is encapsulation in Java?',
                options: [
                    { label: 'The process of inheriting properties from a parent class', value: 'a' },
                    { label: 'The bundling of data and methods that operate on that data within a single unit', value: 'b' },
                    { label: 'The ability of an object to take on many forms', value: 'c' },
                    { label: 'The process of creating a new instance of a class', value: 'd' }
                ],
                correctAnswer: 'b'
            },
            {
                question: '4. Which keyword is used to implement inheritance in Java?',
                options: [
                    { label: 'extends', value: 'a' },
                    { label: 'implements', value: 'b' },
                    { label: 'inherits', value: 'c' },
                    { label: 'super', value: 'd' }
                ],
                correctAnswer: 'a'
            },
            {
                question: '5. What is polymorphism in Java?',
                options: [
                    { label: 'The ability to create multiple objects', value: 'a' },
                    { label: 'The ability to have multiple methods with the same name', value: 'b' },
                    { label: 'The ability of an object to take on many forms', value: 'c' },
                    { label: 'The ability to restrict access to class members', value: 'd' }
                ],
                correctAnswer: 'c'
            },
            {
                question: '6. Which of the following is true about ArrayList in Java?',
                options: [
                    { label: 'ArrayList is a fixed-size data structure', value: 'a' },
                    { label: 'ArrayList can only store primitive data types', value: 'b' },
                    { label: 'ArrayList implements the List interface', value: 'c' },
                    { label: 'ArrayList elements can be accessed using square bracket notation', value: 'd' }
                ],
                correctAnswer: 'c'
            },
            {
                question: '7. What is recursion in Java?',
                options: [
                    { label: 'A method that calls itself', value: 'a' },
                    { label: 'A loop that runs indefinitely', value: 'b' },
                    { label: 'A way to create multiple instances of a class', value: 'c' },
                    { label: 'A method to sort elements in an array', value: 'd' }
                ],
                correctAnswer: 'a'
            },
            {
                question: '8. Which of the following is a correct way to initialize a 2D array in Java?',
                options: [
                    { label: 'int[][] array = {{1, 2}, {3, 4}, {5, 6}};', value: 'a' },
                    { label: 'int[][] array = [1, 2; 3, 4; 5, 6];', value: 'b' },
                    { label: 'int[][] array = new int[3]{1, 2, 3, 4, 5, 6};', value: 'c' },
                    { label: 'int[][] array = (1, 2), (3, 4), (5, 6);', value: 'd' }
                ],
                correctAnswer: 'a'
            },
            {
                question: '9. What is the purpose of the \'private\' access modifier in Java?',
                options: [
                    { label: 'To make the member accessible only within the same package', value: 'a' },
                    { label: 'To make the member accessible only within the same class', value: 'b' },
                    { label: 'To make the member accessible from any class', value: 'c' },
                    { label: 'To make the member accessible only to subclasses', value: 'd' }
                ],
                correctAnswer: 'b'
            },
            {
                question: '10. Which of the following is true about method overriding in Java?',
                options: [
                    { label: 'The overriding method must have the same return type as the overridden method', value: 'a' },
                    { label: 'The overriding method can have a different access modifier', value: 'b' },
                    { label: 'The overriding method can throw broader exceptions than the overridden method', value: 'c' },
                    { label: 'The overriding method must have the same method name and parameter list as the overridden method', value: 'd' }
                ],
                correctAnswer: 'd'
            },
            {
                question: '11. What is the output of the following code?\n\nArrayList<String> list = new ArrayList<>();\nlist.add("A");\nlist.add("B");\nlist.add("C");\nlist.add(1, "D");\nSystem.out.println(list);',
                options: [
                    { label: '[A, B, C, D]', value: 'a' },
                    { label: '[A, D, B, C]', value: 'b' },
                    { label: '[D, A, B, C]', value: 'c' },
                    { label: '[A, B, D, C]', value: 'd' }
                ],
                correctAnswer: 'b'
            },
            {
                question: '12. Which of the following is true about abstract classes in Java?',
                options: [
                    { label: 'Abstract classes can be instantiated', value: 'a' },
                    { label: 'Abstract classes can have both abstract and non-abstract methods', value: 'b' },
                    { label: 'All methods in an abstract class must be abstract', value: 'c' },
                    { label: 'Abstract classes cannot have constructors', value: 'd' }
                ],
                correctAnswer: 'b'
            },
            {
                question: '13. What is the purpose of the \'super\' keyword in Java?',
                options: [
                    { label: 'To call the superclass constructor', value: 'a' },
                    { label: 'To create a new instance of the superclass', value: 'b' },
                    { label: 'To access the superclass members', value: 'c' },
                    { label: 'Both a and c', value: 'd' }
                ],
                correctAnswer: 'd'
            },
            {
                question: '14. Which of the following is true about the \'final\' keyword in Java?',
                options: [
                    { label: 'A final class cannot be subclassed', value: 'a' },
                    { label: 'A final method cannot be overridden', value: 'b' },
                    { label: 'A final variable cannot be reassigned', value: 'c' },
                    { label: 'All of the above', value: 'd' }
                ],
                correctAnswer: 'd'
            },
            {
                question: '15. What is the correct way to declare a method that throws an exception in Java?',
                options: [
                    { label: 'public void myMethod() throws Exception { }', value: 'a' },
                    { label: 'public void myMethod() throw Exception { }', value: 'b' },
                    { label: 'public void myMethod() : Exception { }', value: 'c' },
                    { label: 'public void myMethod() exception { }', value: 'd' }
                ],
                correctAnswer: 'a'
            },
            {
                question: '16. Which of the following is NOT a valid way to iterate over an ArrayList in Java?',
                options: [
                    { label: 'for (int i = 0; i < list.size(); i++) { }', value: 'a' },
                    { label: 'for (String item : list) { }', value: 'b' },
                    { label: 'list.forEach(item -> { });', value: 'c' },
                    { label: 'while (list.hasNext()) { }', value: 'd' }
                ],
                correctAnswer: 'd'
            },
            {
                question: '17. What is the output of the following recursive method call?\n\npublic static int mystery(int n) {\n    if (n == 0) return 0;\n    return n + mystery(n - 1);\n}\n\nSystem.out.println(mystery(5));',
                options: [
                    { label: '5', value: 'a' },
                    { label: '10', value: 'b' },
                    { label: '15', value: 'c' },
                    { label: '20', value: 'd' }
                ],
                correctAnswer: 'c'
            },
            {
                question: '18. Which of the following is true about interfaces in Java?',
                options: [
                    { label: 'Interfaces can have instance variables', value: 'a' },
                    { label: 'A class can implement multiple interfaces', value: 'b' },
                    { label: 'Interfaces can have constructors', value: 'c' },
                    { label: 'All methods in an interface are concrete', value: 'd' }
                ],
                correctAnswer: 'b'
            },
            {
                question: '19. What is the purpose of the \'instanceof\' operator in Java?',
                options: [
                    { label: 'To create a new instance of a class', value: 'a' },
                    { label: 'To check if an object is an instance of a specific class or interface', value: 'b' },
                    { label: 'To compare two objects for equality', value: 'c' },
                    { label: 'To check if a class is a subclass of another class', value: 'd' }
                ],
                correctAnswer: 'b'
            },
            {
                question: '20. Which of the following is true about method overloading in Java?',
                options: [
                    { label: 'Overloaded methods must have different return types', value: 'a' },
                    { label: 'Overloaded methods must have different access modifiers', value: 'b' },
                    { label: 'Overloaded methods must have different parameter lists', value: 'c' },
                    { label: 'Overloaded methods must be in different classes', value: 'd' }
                ],
                correctAnswer: 'c'
            }
        ]
    },
    {
        title: "Free Response Question 1: Diagonal Sum",
        content: `
            <h2 class="tutorial-title">Free Response Question 1: Diagonal Sum</h2>
            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Problem Statement</h3>
                <p class="tutorial-text">Write a Java method that takes a 2D array of integers and returns the sum of all elements on the main diagonal (top-left to bottom-right).</p>
                <p class="tutorial-text">Here's the starter code:</p>
                <pre><code>public class DiagonalSum {
    public static int sumDiagonal(int[][] array) {
        // Your code here
        return 0;
    }

    public static void main(String[] args) {
        int[][] matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        System.out.println(sumDiagonal(matrix));  // Should output 15 (1 + 5 + 9)
    }
}</code></pre>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "15"
    },
    {
        title: "Free Response Question 2: Fibonacci",
        content: `
            <h2 class="tutorial-title">Free Response Question 2: Fibonacci Sequence</h2>
            <div class="content-box">
                <h3 class="text-xl font-semibold mb-2">Problem Statement</h3>
                <p class="tutorial-text">Implement a recursive method to calculate the nth Fibonacci number.</p>
                <p class="tutorial-text">Here's the starter code:</p>
                <pre><code>public class Fibonacci {
    public static int fibonacci(int n) {
        // Your code here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(fibonacci(10));  // Should print the 10th Fibonacci number
    }
}</code></pre>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "55"
    }
];
