export const javaTest = [
    {
        title: "Multiple Choice Questions",
        content: `
            <h1 class="text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">Java 1 Final Test - Multiple Choice</h1>
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
                <p class="text-lg leading-relaxed text-gray-700 mb-4">Answer the following multiple choice questions to test your knowledge of Java 1 concepts including data types, conditionals, loops, methods, and arrays.</p>
            </div>
        `,
        quiz: [
            {
                question: '1. What will the following code print?\n\nSystem.out.println("Hello, World!");',
                options: [
                    { label: 'Hello World', value: 'a' },
                    { label: 'Hello, World!', value: 'b' },
                    { label: "'Hello, World!'", value: 'c' },
                    { label: 'None of the above', value: 'd' }
                ],
                correctAnswer: 'b'
            },
            {
                question: '2. Which of the following is a correct way to declare a variable in Java?',
                options: [
                    { label: 'var x = 10;', value: 'a' },
                    { label: 'int x = 10;', value: 'b' },
                    { label: 'x = 10;', value: 'c' },
                    { label: 'declare x = 10;', value: 'd' }
                ],
                correctAnswer: 'b'
            },
            {
                question: '3. What is the correct way to create an object in Java?',
                options: [
                    { label: 'MyClass obj = new MyClass();', value: 'a' },
                    { label: 'MyClass obj = MyClass();', value: 'b' },
                    { label: 'new MyClass obj = MyClass();', value: 'c' },
                    { label: 'obj = new MyClass();', value: 'd' }
                ],
                correctAnswer: 'a'
            },
            {
                question: '4. What is the output of the following code?\n\nint x = 5;\nint y = 10;\nif (x > y) {\n    System.out.println("x is greater than y");\n} else {\n    System.out.println("x is less than or equal to y");\n}',
                options: [
                    { label: 'x is greater than y', value: 'a' },
                    { label: 'x is less than or equal to y', value: 'b' },
                    { label: 'Error', value: 'c' },
                    { label: 'No output', value: 'd' }
                ],
                correctAnswer: 'b'
            },
            {
                question: '5. Which of the following is an example of an array in Java?',
                options: [
                    { label: 'int[] numbers = {1, 2, 3, 4};', value: 'a' },
                    { label: 'int numbers = {1, 2, 3, 4};', value: 'b' },
                    { label: 'int numbers[] = (1, 2, 3, 4);', value: 'c' },
                    { label: 'int numbers = [1, 2, 3, 4];', value: 'd' }
                ],
                correctAnswer: 'a'
            },
            {
                question: '6. What will the following code snippet do?\n\nArrayList<Integer> numbers = new ArrayList<>();\nnumbers.add(1);\nnumbers.add(2);\nnumbers.add(3);\nnumbers.add(4);\nSystem.out.println(numbers);',
                options: [
                    { label: '[1, 2, 3]', value: 'a' },
                    { label: '[1, 2, 3, 4]', value: 'b' },
                    { label: '{1, 2, 3, 4}', value: 'c' },
                    { label: 'Error', value: 'd' }
                ],
                correctAnswer: 'b'
            },
            {
                question: '7. Which statement correctly uses a loop to print numbers 0 to 9?',
                options: [
                    { label: 'for (int i = 0; i < 10; i++) { System.out.println(i); }', value: 'a' },
                    { label: 'for (int i = 1; i <= 10; i++) { System.out.println(i); }', value: 'b' },
                    { label: 'while (i < 10) { System.out.println(i); i++; }', value: 'c' },
                    { label: 'do { System.out.println(i); i++; } while (i < 10);', value: 'd' }
                ],
                correctAnswer: 'a'
            },
            {
                question: '8. What does the following code do?\n\nfor (int i = 0; i < 3; i++) {\n    System.out.println(i);\n}',
                options: [
                    { label: 'Prints 1, 2, 3', value: 'a' },
                    { label: 'Prints 0, 1, 2', value: 'b' },
                    { label: 'Prints 0, 1, 2, 3', value: 'c' },
                    { label: 'Error', value: 'd' }
                ],
                correctAnswer: 'b'
            },
            {
                question: '9. How do you define a method in Java?',
                options: [
                    { label: 'function myMethod() { }', value: 'a' },
                    { label: 'void myMethod() { }', value: 'b' },
                    { label: 'def myMethod() { }', value: 'c' },
                    { label: 'method myMethod() { }', value: 'd' }
                ],
                correctAnswer: 'b'
            },
            {
                question: '10. What will the following code output?\n\npublic static String greet(String name) {\n    return "Hello, " + name;\n}\n\npublic static void main(String[] args) {\n    System.out.println(greet("Alice"));\n}',
                options: [
                    { label: 'Hello, name', value: 'a' },
                    { label: 'Hello, Alice', value: 'b' },
                    { label: 'Alice', value: 'c' },
                    { label: 'Error', value: 'd' }
                ],
                correctAnswer: 'b'
            },
            {
                question: '11. Which of the following is NOT a valid way to create a String in Java?',
                options: [
                    { label: 'String s = "Hello";', value: 'a' },
                    { label: 'String s = new String("Hello");', value: 'b' },
                    { label: "String s = 'Hello';", value: 'c' },
                    { label: "char[] arr = {'H', 'e', 'l', 'l', 'o'}; String s = new String(arr);", value: 'd' }
                ],
                correctAnswer: 'c'
            },
            {
                question: '12. What is the result of 3 + "abc" in Java?',
                options: [
                    { label: '3abc', value: 'a' },
                    { label: 'abc3', value: 'b' },
                    { label: 'Error', value: 'c' },
                    { label: 'abcabcabc', value: 'd' }
                ],
                correctAnswer: 'a'
            },
            {
                question: '13. Which of the following is used to comment out multiple lines in Java?',
                options: [
                    { label: '// Comment', value: 'a' },
                    { label: '# Comment', value: 'b' },
                    { label: '/* Comment */', value: 'c' },
                    { label: "''' Comment '''", value: 'd' }
                ],
                correctAnswer: 'c'
            },
            {
                question: '14. What is the output of the following code?\n\nint x = 5;\nSystem.out.println(x > 3 && x < 10);',
                options: [
                    { label: 'true', value: 'a' },
                    { label: 'false', value: 'b' },
                    { label: '5', value: 'c' },
                    { label: 'Error', value: 'd' }
                ],
                correctAnswer: 'a'
            },
            {
                question: '15. Which of the following is used to remove an item from an ArrayList by its index?',
                options: [
                    { label: 'list.remove(index);', value: 'a' },
                    { label: 'list.pop(index);', value: 'b' },
                    { label: 'list.delete(index);', value: 'c' },
                    { label: 'list.removeAt(index);', value: 'd' }
                ],
                correctAnswer: 'a'
            },
            {
                question: '16. What is the output of the following code?\n\nSystem.out.println(Math.pow(2, 3));',
                options: [
                    { label: '6', value: 'a' },
                    { label: '8.0', value: 'b' },
                    { label: '8', value: 'c' },
                    { label: '9', value: 'd' }
                ],
                correctAnswer: 'b'
            },
            {
                question: '17. Which of the following is used to format strings in Java?',
                options: [
                    { label: 'String.format("Hello, %s", name);', value: 'a' },
                    { label: '"Hello, " + name;', value: 'b' },
                    { label: 'String.format("Hello, {0}", name);', value: 'c' },
                    { label: 'All of the above', value: 'd' }
                ],
                correctAnswer: 'd'
            },
            {
                question: '18. What is the result of 10 / 3 in Java?',
                options: [
                    { label: '3', value: 'a' },
                    { label: '3.0', value: 'b' },
                    { label: '3.33', value: 'c' },
                    { label: '3.3333333333333335', value: 'd' }
                ],
                correctAnswer: 'a'
            },
            {
                question: '19. Which of the following is used to get the length of an array in Java?',
                options: [
                    { label: 'array.length();', value: 'a' },
                    { label: 'array.size();', value: 'b' },
                    { label: 'array.length;', value: 'c' },
                    { label: 'sizeof(array);', value: 'd' }
                ],
                correctAnswer: 'c'
            },
            {
                question: '20. What is the output of the following code?\n\nSystem.out.println(Boolean.valueOf(false) + " " + Boolean.valueOf(true) + " " + Boolean.valueOf(""));',
                options: [
                    { label: 'false true false', value: 'a' },
                    { label: 'false true true', value: 'b' },
                    { label: 'false true Error', value: 'c' },
                    { label: 'Error', value: 'd' }
                ],
                correctAnswer: 'c'
            }
        ]
    },
    {
        title: "Free Response Questions",
        content: `
            <h1 class="text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">Java 1 Final Test - Free Response</h1>
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
                <p class="text-lg leading-relaxed text-gray-700 mb-4">Complete the following programming problems to demonstrate your understanding of Java 1 concepts.</p>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
                <h3 class="text-xl font-semibold mb-2 text-gray-800">Free Response Question 1: Sum of Even Numbers</h3>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">Write a method that takes an array of integers and returns the sum of all even numbers in the array.</p>
                <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h4 class="text-lg font-semibold mb-2 text-gray-800">Template:</h4>
                    <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>public class SumEvenNumbers {
    public static int sumEvenNumbers(int[] numbers) {
        // Your code here
        return 0;
    }

    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4, 5, 6};
        System.out.println(sumEvenNumbers(numbers));  // Should output 12
    }
}</code></pre>
                </div>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
                <h3 class="text-xl font-semibold mb-2 text-gray-800">Free Response Question 2: Fibonacci Sequence</h3>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">Write a program that prints the Fibonacci sequence up to a given number of terms.</p>
                <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h4 class="text-lg font-semibold mb-2 text-gray-800">Template:</h4>
                    <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>public class Fibonacci {
    public static void printFibonacci(int n) {
        // Your code here
    }

    public static void main(String[] args) {
        printFibonacci(10);  // Should print the first 10 Fibonacci numbers
    }
}</code></pre>
                </div>
            </div>
        `,
        showCompiler: true,
        showAutograder: true,
        expectedOutput: "12\n0 1 1 2 3 5 8 13 21 34"
    }
];
