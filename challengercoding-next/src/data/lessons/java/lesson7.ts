export const javaLesson7 = [
    {
        title: "Lesson Overview",
        content: `
            <h2 class="text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">Java Guided Tutorials - Arrays</h2>
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
                <h2 class="text-2xl font-semibold mb-4 text-gray-800">What You'll Learn</h2>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">
                    Welcome to our Java Arrays Tutorial! This lesson covers the basics of arrays in Java, including how to create, initialize, and manipulate arrays. Arrays are fundamental data structures that allow you to store multiple values of the same type.
                </p>
                <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h3 class="text-xl font-semibold mb-2 text-gray-800">Lesson Overview:</h3>
                    <ul class="list-disc list-inside text-gray-700">
                        <li>Introduction to Arrays</li>
                        <li>Array Methods</li>
                        <li>Traversing Arrays with Loops</li>
                    </ul>
                </div>
                <p class="text-lg leading-relaxed text-gray-700 mt-4">
                    By the end of this lesson, you'll be able to create arrays, use common array methods, and traverse arrays using loops.
                </p>
            </div>
        `,
        showCompiler: false,
        showAutograder: false
    },
    {
        title: "Introduction to Arrays",
        content: `
            <h2 class="text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">1. Introduction to Arrays</h2>
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
                <h3 class="text-xl font-semibold mb-2 text-gray-800">What is an Array?</h3>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">
                    An array is a collection of variables that are stored in a contiguous block of memory and can be accessed using an index. Arrays are used to store multiple values of the same type in a single variable.
                </p>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">
                    Think of an array as a row of lockers in a hallway. Each locker is numbered (indexed), and you can store one item (a value) in each locker.
                </p>

                <p class="text-lg leading-relaxed text-gray-700 mb-4"><strong>Syntax:</strong></p>
                <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>// Declaring an array of integers
int[] numbers = new int[5];

// Initializing an array
int[] numbers = {1, 2, 3, 4, 5};</code></pre>

                <p class="text-lg leading-relaxed text-gray-700 mb-4"><strong>Accessing Array Elements:</strong></p>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">Array elements are accessed using their index, which starts at 0. For example, <code class="bg-gray-100 p-1 rounded">numbers[0]</code> gives the first element, and <code class="bg-gray-100 p-1 rounded">numbers[4]</code> gives the last element in the example above.</p>
                <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>int firstNumber = numbers[0];  // Accessing the first element
int lastNumber = numbers[4];   // Accessing the last element</code></pre>

                <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h4 class="text-lg font-semibold mb-2 text-gray-800">Practice Exercise</h4>
                    <p class="text-gray-700">Create an array of 5 double values that represent the grades of a student. Assign values to each element in the array and print the first and last grades.</p>
                </div>
            </div>
        `,
        showCompiler: true,
        showAutograder: false,
        initialCode: `public class StudentGrades {
    public static void main(String[] args) {
        // Create an array of 5 double values representing grades
        // Assign values to each element
        // Print the first and last grades
    }
}`
    },
    {
        title: "Array Methods",
        content: `
            <h2 class="text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">2. Array Methods</h2>
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
                <h3 class="text-xl font-semibold mb-2 text-gray-800">Array Class and Methods</h3>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">
                    Java provides an <code class="bg-gray-100 p-1 rounded">Arrays</code> class in the <code class="bg-gray-100 p-1 rounded">java.util</code> package, which contains various methods for manipulating arrays, such as sorting, searching, and comparing arrays.
                </p>

                <p class="text-lg leading-relaxed text-gray-700 mb-4"><strong>Commonly Used Array Methods:</strong></p>
                <ul class="list-disc list-inside mb-4 text-gray-700">
                    <li><code class="bg-gray-100 p-1 rounded">Arrays.sort(array)</code>: Sorts the array in ascending order.</li>
                    <li><code class="bg-gray-100 p-1 rounded">Arrays.toString(array)</code>: Converts the array to a String for easy printing.</li>
                    <li><code class="bg-gray-100 p-1 rounded">Arrays.fill(array, value)</code>: Fills the array with the specified value.</li>
                    <li><code class="bg-gray-100 p-1 rounded">Arrays.equals(array1, array2)</code>: Checks if two arrays are equal.</li>
                    <li><code class="bg-gray-100 p-1 rounded">Arrays.binarySearch(array, key)</code>: Searches for a specific value within a sorted array. Returns the index of the key if found, otherwise returns a negative value.</li>
                    <li><code class="bg-gray-100 p-1 rounded">Arrays.copyOf(array, newLength)</code>: Copies the original array into a new array with the specified length.</li>
                    <li><code class="bg-gray-100 p-1 rounded">array.length</code>: Returns the length (number of elements) of the array.</li>
                </ul>

                <p class="text-lg leading-relaxed text-gray-700 mb-4"><strong>Example:</strong></p>
                <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>import java.util.Arrays;

public class ArrayMethodsExample {
    public static void main(String[] args) {
        int[] numbers = {5, 3, 8, 1, 2};

        // Sorting the array
        Arrays.sort(numbers);
        System.out.println("Sorted array: " + Arrays.toString(numbers));

        // Filling the array with a single value
        Arrays.fill(numbers, 7);
        System.out.println("Array after fill: " + Arrays.toString(numbers));

        // Searching for a value in the sorted array
        int index = Arrays.binarySearch(numbers, 7);
        System.out.println("Index of 7 in the array: " + index);

        // Copying the array
        int[] newArray = Arrays.copyOf(numbers, 10);
        System.out.println("New array after copy: " + Arrays.toString(newArray));

        // Checking if two arrays are equal
        int[] otherArray = {7, 7, 7, 7, 7};
        boolean isEqual = Arrays.equals(numbers, otherArray);
        System.out.println("Are the two arrays equal? " + isEqual);

        // Getting the length of the array
        System.out.println("Length of the array: " + numbers.length);
    }
}</code></pre>

                <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h4 class="text-lg font-semibold mb-2 text-gray-800">Practice Exercise</h4>
                    <p class="text-gray-700">Create an array of 6 integers. Use the <code class="bg-gray-100 p-1 rounded">Arrays.fill()</code> method to initialize all elements with the value 10. Then, sort the array, perform a binary search for the number 10, and print the index. Check the length of the array using the <code class="bg-gray-100 p-1 rounded">length</code> property and print it. Finally, compare this array to another array with identical elements and print the result.</p>
                </div>
            </div>
        `,
        showCompiler: true,
        showAutograder: false,
        initialCode: `import java.util.Arrays;

public class ArrayMethodsPractice {
    public static void main(String[] args) {
        // Create an array of 6 integers
        // Use Arrays.fill() to initialize all elements with 10
        // Sort the array
        // Perform binary search for 10 and print the index
        // Print the length of the array
        // Compare this array to another identical array and print the result
    }
}`
    },
    {
        title: "Traversing Arrays with Loops",
        content: `
            <h2 class="text-3xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">3. Traversing Arrays with Loops</h2>
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
                <h3 class="text-xl font-semibold mb-2 text-gray-800">What is Array Traversing?</h3>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">
                    Array traversing refers to accessing each element of an array in sequence. This is often done using loops like <code class="bg-gray-100 p-1 rounded">for</code> or <code class="bg-gray-100 p-1 rounded">while</code>.
                </p>

                <p class="text-lg leading-relaxed text-gray-700 mb-4"><strong>Traversing with a For Loop:</strong></p>
                <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>public class ArrayTraversal {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30, 40, 50};

        // Using a for loop to traverse the array
        for (int i = 0; i < numbers.length; i++) {
            System.out.println("Element at index " + i + ": " + numbers[i]);
        }
    }
}</code></pre>

                <p class="text-lg leading-relaxed text-gray-700 mb-4"><strong>Traversing with an Enhanced For Loop:</strong></p>
                <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4 font-mono"><code>public class ArrayTraversal {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30, 40, 50};

        // Using an enhanced for loop to traverse the array
        for (int num : numbers) {
            System.out.println("Number: " + num);
        }
    }
}</code></pre>

                <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h4 class="text-lg font-semibold mb-2 text-gray-800">Practice Exercise</h4>
                    <p class="text-gray-700">Create an array of 10 integers. Use a loop to fill the array with even numbers. Then, traverse the array and print each element.</p>
                </div>
            </div>
        `,
        showCompiler: true,
        showAutograder: false,
        initialCode: `public class EvenNumbersArray {
    public static void main(String[] args) {
        // Create an array of 10 integers
        // Use a loop to fill the array with even numbers (2, 4, 6, ...)
        // Traverse the array and print each element
    }
}`
    }
];
