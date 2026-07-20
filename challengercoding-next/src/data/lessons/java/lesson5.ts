export const javaLesson5 = [
    {
        title: "Lesson Overview",
        content: `
            <h1 class="text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">Java Guided Tutorials - Methods</h1>
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
                <h2 class="text-2xl font-semibold mb-4 text-gray-800">What You'll Learn</h2>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">
                    Welcome to our Java Methods Tutorial! This lesson covers how to define and use methods in Java. Methods are reusable blocks of code that perform specific tasks, helping you organize your code and avoid repetition.
                </p>
                <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h3 class="text-xl font-semibold mb-2 text-gray-800">Lesson Overview:</h3>
                    <ul class="list-disc list-inside text-gray-700">
                        <li>Understanding Static Methods</li>
                        <li>Methods that Return Values</li>
                        <li>Understanding Parameters</li>
                        <li>Project: Create a Complex Function</li>
                    </ul>
                </div>
                <p class="text-lg leading-relaxed text-gray-700 mt-4">
                    By the end of this lesson, you'll be able to create your own methods with parameters and return values, making your Java programs more modular and reusable.
                </p>
            </div>
        `,
        showCompiler: false,
        showAutograder: false
    },
    {
        title: "Static Methods",
        content: `
            <h1 class="text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">1. Understanding Static Methods</h1>
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
                <h3 class="text-xl font-semibold mb-2 text-gray-800">What is a Static Method?</h3>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">
                    A <strong>static method</strong> belongs to the class rather than any instance of the class. This means you can call a static method without creating an object of the class. Static methods are often used for operations that don't depend on the state of an object, like utility or helper methods.
                </p>

                <p class="text-lg leading-relaxed text-gray-700 mb-4"><strong>Why use Static Methods?</strong></p>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">Static methods are useful when you want to perform an action that doesn't depend on any object data. For example, a method that converts temperature from Celsius to Fahrenheit can be static because it doesn't need any instance variables.</p>

                <p class="text-lg leading-relaxed text-gray-700 mb-4"><strong>Syntax:</strong></p>
                <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>public class ClassName {
    public static void methodName() {
        // code to be executed
    }
}</code></pre>

                <p class="text-lg leading-relaxed text-gray-700 mb-4"><strong>Calling a Static Method:</strong></p>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">To call a static method, use the class name followed by a dot and the method name.</p>
                <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>ClassName.methodName();</code></pre>

                <p class="text-lg leading-relaxed text-gray-700 mb-4"><strong>Example:</strong></p>
                <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>public class Converter {
    // Static method to convert Celsius to Fahrenheit
    public static double celsiusToFahrenheit(double celsius) {
        return (celsius * 9/5) + 32;
    }

    // Main method
    public static void main(String[] args) {
        double tempInF = Converter.celsiusToFahrenheit(25);
        System.out.println("25°C in Fahrenheit is: " + tempInF);
    }
}</code></pre>

                <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h4 class="text-lg font-semibold mb-2 text-gray-800">Practice Exercise</h4>
                    <p class="text-gray-700">Create a class <code class="bg-gray-100 p-1 rounded">MathUtils</code> with a static method <code class="bg-gray-100 p-1 rounded">square</code> to calculate the square of a number and a static method <code class="bg-gray-100 p-1 rounded">cube</code> to calculate the cube. Call these methods from the <code class="bg-gray-100 p-1 rounded">main</code> method and print the results.</p>
                </div>
            </div>
        `,
        showCompiler: true,
        showAutograder: false,
        initialCode: `public class MathUtils {
    // Step 1: Create a static method 'square' that returns the square of a number
    // Step 2: Create a static method 'cube' that returns the cube of a number

    public static void main(String[] args) {
        // Step 3: Call square and cube methods and print the results
    }
}`
    },
    {
        title: "Methods that Return Values",
        content: `
            <h1 class="text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">2. Methods that Return Values</h1>
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
                <h3 class="text-xl font-semibold mb-2 text-gray-800">What is a Return Method?</h3>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">
                    A method that returns a value provides a result that can be used elsewhere in the program. Unlike <code class="bg-gray-100 p-1 rounded">void</code> methods, which don't return anything, these methods return a specific data type (e.g., <code class="bg-gray-100 p-1 rounded">int</code>, <code class="bg-gray-100 p-1 rounded">double</code>, <code class="bg-gray-100 p-1 rounded">String</code>).
                </p>

                <p class="text-lg leading-relaxed text-gray-700 mb-4"><strong>Why use Return Methods?</strong></p>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">Returning values from methods is important when you need the result of a calculation or operation to be used elsewhere in your program.</p>

                <p class="text-lg leading-relaxed text-gray-700 mb-4"><strong>Syntax:</strong></p>
                <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>public class ClassName {
    public static returnType methodName() {
        // code to be executed
        return value;
    }
}</code></pre>

                <p class="text-lg leading-relaxed text-gray-700 mb-4"><strong>Example:</strong></p>
                <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>public class MathOperations {
    public static int add(int a, int b) {
        return a + b;
    }

    public static double multiply(double x, double y) {
        return x * y;
    }
}

public class Main {
    public static void main(String[] args) {
        int sum = MathOperations.add(5, 10);
        double product = MathOperations.multiply(4.5, 3.2);

        System.out.println("Sum: " + sum);
        System.out.println("Product: " + product);
    }
}</code></pre>

                <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h4 class="text-lg font-semibold mb-2 text-gray-800">Practice Exercise</h4>
                    <p class="text-gray-700">Create a class <code class="bg-gray-100 p-1 rounded">Calculator</code> with methods that return the difference, quotient, and remainder of two numbers. Call these methods from the <code class="bg-gray-100 p-1 rounded">Main</code> class and print the results.</p>
                </div>
            </div>
        `,
        showCompiler: true,
        showAutograder: false,
        initialCode: `public class Calculator {
    // Create a method that returns the difference of two numbers
    // Create a method that returns the quotient of two numbers
    // Create a method that returns the remainder of two numbers
}

public class Main {
    public static void main(String[] args) {
        // Call the Calculator methods and print the results
    }
}`
    },
    {
        title: "Parameters",
        content: `
            <h1 class="text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">3. Understanding Parameters</h1>
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
                <h3 class="text-xl font-semibold mb-2 text-gray-800">What are Parameters?</h3>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">
                    In Java, parameters allow you to pass values to methods. These values can be used inside the method to perform operations. Parameters make methods flexible and reusable.
                </p>

                <p class="text-lg leading-relaxed text-gray-700 mb-4"><strong>Why use Parameters?</strong></p>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">Parameters allow methods to accept input values, making them more adaptable and reusable for different scenarios.</p>

                <p class="text-lg leading-relaxed text-gray-700 mb-4"><strong>Syntax:</strong></p>
                <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>public class ClassName {
    public static void methodName(parameterType parameterName) {
        // code to be executed
    }
}</code></pre>

                <p class="text-lg leading-relaxed text-gray-700 mb-4"><strong>Example:</strong></p>
                <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>public class Greeter {
    public static void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }

    public static void personalizedGreet(String name, int age) {
        System.out.println("Hello, " + name + ". You are " + age + " years old.");
    }
}

public class Main {
    public static void main(String[] args) {
        Greeter.greet("Alice");
        Greeter.personalizedGreet("Bob", 25);
    }
}</code></pre>

                <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h4 class="text-lg font-semibold mb-2 text-gray-800">Practice Exercise</h4>
                    <p class="text-gray-700">Create a class <code class="bg-gray-100 p-1 rounded">Rectangle</code> with a method <code class="bg-gray-100 p-1 rounded">area</code> that takes two parameters: <code class="bg-gray-100 p-1 rounded">length</code> and <code class="bg-gray-100 p-1 rounded">width</code>, and returns the area. Call this method from the <code class="bg-gray-100 p-1 rounded">Main</code> class and print the result.</p>
                </div>
            </div>
        `,
        showCompiler: true,
        showAutograder: false,
        initialCode: `public class Rectangle {
    // Create a method 'area' that takes length and width as parameters
    // and returns the area
}

public class Main {
    public static void main(String[] args) {
        // Call the area method and print the result
    }
}`
    },
    {
        title: "Weekly Project",
        content: `
            <h1 class="text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">4. Project: Create a Complex Function</h1>
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
                <h3 class="text-xl font-semibold mb-2 text-gray-800">Project Description</h3>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">Use this space to create a more complex function that takes multiple parameters, performs some calculations or operations, and returns a result.</p>
                <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h4 class="text-lg font-semibold mb-2 text-gray-800">Example Project Idea:</h4>
                    <p class="text-gray-700">Create a function that takes the radius of a circle as a parameter and returns the area of the circle.</p>
                </div>
            </div>
        `,
        showCompiler: true,
        showAutograder: false,
        initialCode: `// Create a complex function that takes multiple parameters,
// performs calculations or operations, and returns a result.

// Example: Function that calculates the area of a circle given its radius
public class ComplexFunction {
    public static double circleArea(double radius) {
        return Math.PI * radius * radius;
    }

    public static void main(String[] args) {
        // Test your function here
        System.out.println(circleArea(5));
    }
}`
    }
];
